import { defineThemeConfig } from "vuepress-theme-plume";
import { navbar } from "./navbar";
import { notes } from "./notes";

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
    // logo: "https://img.keaitupian.cn/newupload/10/1728632305951487.png",
    logo: "https://tse3-mm.cn.bing.net/th/id/OIP-C.fIuv1OoksFyYE3c_THBCAAAAAA?rs=1&pid=ImgDetMain",
  // your git repo url
  docsRepo: "",
  docsDir: "docs",
  home: "/", //首页的路径，默认是根目录
  appearance: "dark",

  profile: {
      avatar:
        //   "https://img.keaitupian.cn/newupload/10/1728632305951487.png",
      "https://tse3-mm.cn.bing.net/th/id/OIP-C.fIuv1OoksFyYE3c_THBCAAAAAA?rs=1&pid=ImgDetMain",
    name: "Zephyr-Shane",
    description: "我自为我",
    circle: true,
    location: "zhejiang,China",
    organization: "xxx科技有限公司",
  },

  navbar,
  notes,
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
