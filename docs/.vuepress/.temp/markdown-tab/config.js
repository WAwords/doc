import { CodeTabs } from "D:/Coding/test/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.17_@vuepress+b_jj4leixncj45b35tisk3g2bpea/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/Coding/test/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.17_@vuepress+b_jj4leixncj45b35tisk3g2bpea/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/Coding/test/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.17_@vuepress+b_jj4leixncj45b35tisk3g2bpea/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
