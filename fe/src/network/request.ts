import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { ref } from "vue";

import { Ref } from "@vue/reactivity";

import { BE_URL } from "../constants/domain";
import { showToast } from "../reactivity/toast";
import router from "../router";
import { clearToken, getToken } from "../utils/token";

interface HttpRes<T = any> {
  success: boolean;
  data: T;
  message: string;
  hint?: string;
}
interface GQLRes<T = any> {
  data: T;
  errors: Array<any>;
}

/** 记录对哪些url的请求正在进行中, 若上一次请求未完成则不进行下一次请求 */
const requestSet = new Set<string>();

/**
 * ## 此文件内使用的网络请求函数
 * 函数使用 axios 发送请求, 具有以下功能:
 * - 自动携带 token
 * - 在请求出错时弹出提醒
 * - 在 token 失效时清除 token
 * @param config axios 的配置
 * @returns 一个对象, 能解构出以下属性
 * - fetching: `Ref<boolean>` 请求是否已经结束
 * - error: `Ref<string | undefined>` 如果出错了, 则为错误信息, 否则为 undefined
 * - data: `Ref<T | undefined>` 返回的数据
 * - whenFinish: `Promise<void>`
 * 这个 promise 在 fetching 被设为 false 的时候 resolve.
 * 即, 可以通过await它来等到请求真正结束
 */
function request<T>(config: AxiosRequestConfig) {
  // 判断两个请求是否完全相同的 key
  const key =
    JSON.stringify(config.data) + config.url! + JSON.stringify(config.params);

  const fetching = ref(true);
  const error = ref<string | undefined>();
  const data = ref(undefined) as Ref<T | undefined>;
  let whenFinish = Promise.resolve();

  if (requestSet.has(key)) {
    /* 已经有一个一样的请求在路上了, 啥都不做 */
  } else {
    requestSet.add(key);
    const instance = axios.create({
      baseURL: BE_URL,
      timeout: 60000,
      // withCredentials: true,
    });

    instance.interceptors.request.use(
      (config) => {
        const token = getToken();
        if (token) config.headers.Authorization = "Bearer " + token.value;
        return config;
      },
      (err) => {
        console.error(err);
        return err;
      }
    );

    whenFinish = new Promise<void>((resolve) => {
      instance(config)
        .then((res: AxiosResponse<HttpRes<T> & GQLRes<T>>) => {
          // http 出错 status 不是200, 会在 catch 中做处理
          const { data: _data, errors } = res.data;

          if (errors) {
            // GQL 出错了
            throw new Error(errors.map((e) => e.message).join("，"));
          }

          data.value = _data;
        })
        .catch((err: (string & Error & AxiosError) | null) => {
          // 归一化 err 为 string
          let errStr = "";
          if (!err) {
            console.error("# _request !err", { err });
            errStr = "出错了呢QwQ";
          } else if ((err as AxiosError).response) {
            // 是出错了的 http 请求
            // `err.response` 是 axios 自己做的处理, 当状态码不是200时会 throw 一个 AxiosError
            const res = err.response!;
            if (res.status >= 500) {
              errStr = "出错了呢QwQ";
            } else {
              if (res.status === 401) {
                // 如果权限不足还会清除 token
                clearToken();
                router.replace({ name: "login" });
              }
              const { message } = res.data as HttpRes<T>;
              errStr = message;
            }
          } else if ((err as Error) instanceof Error) {
            errStr = err.message;
          } else if (typeof err === "string") {
            if (
              err.length > 30 &&
              /^[a-z_A-Z0-9-\.!@#\$%\\\^&\*\)\(\+=\{\}\[\]\/",'<>~\·`\?:;|]+$/.test(
                err
              )
            ) {
              // 很多英文字符的情况一般是请求出错了
              errStr = "出错了呢QwQ";
              console.error("# gql err", errStr);
            } else {
              errStr = err;
            }
          } else {
            console.error("# _request unknown err", { err });
            errStr = "出错了呢QwQ";
          }
          error.value = errStr;
          data.value = undefined;
          showToast(errStr);
        })
        .finally(() => {
          fetching.value = false;
          resolve();
        });
    });
    /** 
      此 promise 在请求结束后 resolve 
      可如下调用:
      ```
      const {fetching, error, data, whenFinish} = useHttp(balabala)
      whenFinish.then(() => {
        if(data.value){
          setToken(data.value.token)
        }
      })
      ```
    */

    whenFinish.then(() => requestSet.delete(key));
  }

  return {
    fetching,
    error,
    data,
    whenFinish,
  };
}

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
/**
 * 对 REST 风格的 request 做的一层封装
 * @param url 请求的地址(去除 BASE 之后)
 * @param method 请求方法
 * @param data json格式数据, 若为 get 方法, 会被转化成 query, 其他方法 data 即为 body
 * @returns request 的结果
 */
export function useREST<T>(url: string, method: HttpMethod, data?: any) {
  //console.log("# request", url);
  const opt = {
    url: "/v1" + url,
    method,
  };
  if (method === "GET") {
    return request<T>({
      ...opt,
      params: data,
    });
  } else {
    return request<T>({ ...opt, data });
  }
}

/**
 * 对使用 GQL 发送的 request 做的一层封装
 * @param query gql 的查询语句, 分别定义在 ./gql 下的各个文件内
 * @param variables gql 语句中使用的变量
 * @returns request 的结果
 */
export function useQuery<T>(query: string, variables: Record<string, any>) {
  return request<T>({
    url: "/graphql",
    data: {
      query: query // 去除不必要的字符以节省带宽
        .replace(/\s+#.*$/gm, "") // 去除注释
        .replace(/ +/g, " ") // 去除空格
        .replace(/\n+/g, " "), // 去除换行符
      variables,
    },
    method: "POST",
  });
}

/**
 * 分页时每页最多有多少项
 */
export const PER_PAGE = 15;
