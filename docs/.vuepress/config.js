import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  base: "/doc/",

  lang: "en-US",

  title: "VuePress",
  description: "My first VuePress Site",

  theme: defaultTheme({
    logo: "https://vuejs.press/images/hero.png",

    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "指南",
        children: [
          {
            text: "安装",
            link: "/get-started/",
          },
          {
            text: "配置",
            link: "/get-started1/",
          },
        ],
      },
      // "/get-started",
      // "/get-started1",
    ],
  }),

  bundler: viteBundler(),
});
