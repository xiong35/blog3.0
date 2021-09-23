import { reactive, ref } from "@vue/runtime-dom";

type MaskState = "together" | "spreading" | "up" | "none";

type Position = {
  x: number;
  y: number;
};
type MaskBlockData = Position & {
  angle: number;
};

const maskBlockNum = 150;
const DEFAULT: MaskBlockData = {
  x: 0,
  y: 0,
  angle: 0,
};

export const masks = reactive<MaskBlockData[]>(
  new Array(maskBlockNum).fill(0).map(() => ({ ...DEFAULT }))
);

export const curMaskState = ref<MaskState>("none");

let isAnimating = false;
const AnimateDuration = 800;
export function triggerMaskAnim(pos: Position) {
  if (isAnimating) return;
  isAnimating = true;

  curMaskState.value = "together";
  for (let i = 0; i < masks.length; i++) {
    masks[i] = { ...pos, angle: (Math.random() - 0.5) * 360 * 2 };
  }

  const w_x = window.innerWidth;
  const w_y = window.innerHeight;

  const finishSpreading = new Promise<void>((resolve, reject) => {
    // 等下一帧
    setTimeout(() => {
      curMaskState.value = "spreading";
      const usedPos: Position[] = [];
      // 设置 mask 的 xy 坐标, 将 masks 随机散列开
      for (let i = 0; i < masks.length; i++) {
        const pos = getRandPos(usedPos, w_x, w_y);
        usedPos.push(pos);

        masks[i] = {
          x: pos.x,
          y: pos.y,
          angle: (Math.random() - 0.5) * 360 * 2,
        };
      }
    }, 50);

    console.log("# theMasks", { masks });

    // css 动画结束后可执行下一阶段
    window.setTimeout(() => {
      resolve();
    }, AnimateDuration + 50);
  });

  return function hide() {
    finishSpreading.then(() => {
      curMaskState.value = "up";
      // 设置他们的 y, 使 masks 往上飞
      for (let i = 0; i < masks.length; i++) {
        const { x, y, angle } = masks[i];
        masks[i] = { x, y: y - w_y - 200, angle };
      }
      setTimeout(() => {
        curMaskState.value = "none";
        isAnimating = false;
      }, AnimateDuration);
    });
  };
}

const THRESHOLD = 30;
function getRandPos(usedPos: Position[], x: number, y: number): Position {
  let tryTime = 10;

  const retPos: Position = {
    x: 0,
    y: 0,
  };

  while (tryTime--) {
    retPos.x = Math.random() * x;
    retPos.y = Math.random() * y;

    const hasSimilar = usedPos.find(
      (p) =>
        Math.abs(p.x - retPos.x) < THRESHOLD &&
        Math.abs(p.y - retPos.y) < THRESHOLD
    );

    if (!hasSimilar) {
      console.log("# theMasks", tryTime);
      return retPos;
    }
  }

  console.log("# theMasks", "nowhere");

  return retPos;
}
