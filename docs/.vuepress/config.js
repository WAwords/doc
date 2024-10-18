import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  base: "/doc/",

  lang: "en-US",

  title: "Green Lightning",
  description: "笔记！文档！GitHub云笔记！",

  theme: defaultTheme({
    logo: "/img/logo.svg",

    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "笔记",
        children: [
          {
            text: "vuepress",
            link: "/guide/vuepress",
          },
        ],
      },
    ],
  }),

  bundler: viteBundler(),
});
