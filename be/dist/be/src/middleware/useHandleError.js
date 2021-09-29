"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createError = void 0;
const useHandleError = function () {
    return (ctx, next) => __awaiter(this, void 0, void 0, function* () {
        try {
            yield next();
        }
        catch (err) {
            try {
                const msg = JSON.parse(err.message);
                ctx.body = Object.assign(Object.assign({}, msg), { data: {} });
            }
            catch (_a) {
                ctx.body = {
                    status: 500,
                    msg: err.message,
                    data: {},
                };
            }
            finally {
                console.error(err);
            }
        }
        finally {
            if (ctx.status === 301 || ctx.status === 302)
                void 0;
            else
                ctx.status = 200;
        }
    });
};
exports.default = useHandleError;
function createError({ status, msg, }) {
    throw new Error(JSON.stringify({
        status,
        msg,
    }));
}
exports.createError = createError;
