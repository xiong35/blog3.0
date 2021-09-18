import { onMounted, onUnmounted, reactive, ref } from "@vue/runtime-dom";

const cursorPosition = reactive({ x: 0, y: 0 });

function setCursorPosition(e: MouseEvent) {
  cursorPosition.x = e.clientX;
  cursorPosition.y = e.clientY;
}
let timer: number | null = null;
function throttled(e: MouseEvent) {
  if (timer) return;
  timer = window.setTimeout(() => {
    setCursorPosition(e);
    timer = null;
  }, 30);
}

export function traceCursor() {
  onMounted(() => {
    document.addEventListener("mousemove", throttled);
  });
  onUnmounted(() => {
    document.removeEventListener("mousemove", throttled);
  });

  return cursorPosition;
}

export const isHovering = ref(false);
