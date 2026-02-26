import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  // 讓 Astro 載入 Tailwind 插件
  integrations: [tailwind()],
  markdown: {
    // 讓 Markdown 聽懂數學語法
    remarkPlugins: [remarkMath],
    // 讓網頁渲染出漂亮的 LaTeX 公式
    rehypePlugins: [rehypeKatex],
  },
});