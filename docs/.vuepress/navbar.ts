import { defineNavbarConfig } from "vuepress-theme-plume";

export const navbar = defineNavbarConfig([
  {
    text: "博客",
    link: "/blog/",
    icon: "line-md:home-md",
    // icon: "material-symbols:article-outline",
  },
  {
    text: "简历",
    link: "/resume/",
    icon: "qlementine-icons:resume-16",
  },
  {
    text: "友链",
    link: "/friends/",
    icon: "carbon:friendship",
  },
  {
    text: "分享",
    icon: "streamline-ultimate:gift-box-1",
    items: [
      { text: "娱乐", link: "/share/recreation/",icon: "streamline-ultimate:movies-sit-drink" },
      { text: "软件", link: "/share/soft/",icon: "hugeicons:software-license" },
    ],
  },
  {
    text: "图库",
    link: "/gallery/",
    icon: "fa-regular:meh",
  },
  {
    text: "关于",
    link: "/about/",
    icon: "fa-regular:meh",
  },
]);
