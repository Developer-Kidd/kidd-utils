import { defineConfig } from "vite";

export default defineConfig({
  // 打包配置
  build: {
    lib: {
      entry: "index.ts", // 设置入口文件
      name: "KiddUtils", // 起个名字，安装、引入用
      fileName: format => `kidd-utils.${format}.js` // 打包后的文件名
    },
    sourcemap: false, // 输出.map文件
    rollupOptions: {}
  },
  plugins: []
});
