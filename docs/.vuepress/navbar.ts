import { defineNavbarConfig } from "vuepress-theme-plume";

export const navbar = defineNavbarConfig([
  // {
  //   text: "首页",
  //   link: "/",
  //   icon: "material-symbols:home-outline",
  // },
  {
    text: "博客",
    link: "/blog/",
    icon: "material-symbols:article-outline",
  },
  {
    text: "标签",
    link: "/blog/tags/",
    icon: "material-symbols:bookmark-add-outline",
  },
  {
    text: "归档",
    link: "/blog/archives/",
    icon: "material-symbols:assignment-add-outline",
  },
  {
    text: "简历",
    link: "/resume/",
    icon: "material-symbols:resume-outline",
  },
  {
    text: "关于",
    link: "/about/",
    icon: "material-symbols:airline-seat-flat",
  },
  {
    text: "笔记",
    icon: "material-symbols:note-outline",
    items: [
      { text: "Mysql", link: "/notes/demo/" },
      { text: "示例2", link: "/notes/test/" },
      { text: "示例3", link: "/notes/study/"},  //导航到这个路径
    ],
  },
]);
