import { defineThemeConfig } from "vuepress-theme-plume";
import { navbar } from "./navbar";
import { notes } from "./notes";

export default defineThemeConfig({
  logo: "https://p.sda1.dev/29/dc1be6a93a5d0cf5d8d3549d47750901/Avatar.JPG",
  // docsRepo: "https://github.com/Zephyr-Shane/tubao-blog",
  // docsDir: "docs",
  home: "/", //首页的路径，默认是根目录
  appearance: "dark",

  profile: {
      avatar:
      "https://p.sda1.dev/29/dc1be6a93a5d0cf5d8d3549d47750901/Avatar.JPG",
    name: "Zephyr-Shane",
    description: "我自为我",
    circle: true,
    location: "zhejiang,China",
    organization: "xxx科技有限公司",
  },

  navbar,
  // notes,
  social: [
    { icon: "github", link: "https://github.com/Zephyr-Shane" },
    { icon: "qq", link: "https://im.qq.com/" },
  ],

  autoFrontmatter: {
    permalink: true,
    createTime: true,
    title: true,
  },
});
