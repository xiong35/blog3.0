import path from "path";
import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  envDir: "env",
});
