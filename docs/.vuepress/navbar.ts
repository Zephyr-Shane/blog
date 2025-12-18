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
  // {
  //   text: "MySQL",
  //   link: "/test/mysql/",
  //   icon: "material-symbols:article-outline",
  // },
  //   {
  //     text: "标签",
  //     link: "/blog/tags/",
  //     icon: "material-symbols:bookmark-add-outline",
  //   },
  //   {
  //     text: "归档",
  //     link: "/blog/archives/",
  //     icon: "material-symbols:assignment-add-outline",
  //   },
  {
    text: "简历",
    link: "/resume/",
    icon: "material-symbols:resume-outline",
  },
  {
    text: "分享",
    icon: "material-symbols:note-outline",
    items: [
      { text: "娱乐", link: "/share/recreation/" },
      { text: "软件", link: "/share/soft/" },
    ],
  },
  {
    text: "关于",
    link: "/about/",
    icon: "material-symbols:airline-seat-flat",
  },
  // {
  //   text: '分享',
  //   icon: 'mdi:idea',
  //   items: [
  //     {
  //       text: '剧场',
  //       icon: 'icon-park-solid:theme',
  //       items: [
  //         {
  //           text: '观影',
  //           link: 'https://www.gying.net/',
  //           icon: 'mdi:paper-airplane',
  //           // badge: '徽章'
  //         },
  //         {
  //           text: '爱壹帆',
  //           link: 'https://www.iyf.tv/',
  //           icon: 'mdi:paper-airplane',

  //         },
  //       ],
  //     },
  //     {
  //       text: '乐吧',
  //       icon: 'mingcute:plugin-2-fill',
  //       badge: { text: '徽章', type: 'warning' },
  //       items: [
  //         {
  //           text: '笒鬼鬼',
  //           link: 'http://210.16.176.154/',
  //           icon: 'material-symbols:move-selection-down-rounded',
  //         },
  //         {
  //           text: '无损音乐',
  //           link: 'https://flac.music.hi.cn/',
  //           icon: 'pajamas:feature-flag',
  //         },
  //       ],
  //     },
  //     {
  //       text: 'BT',
  //       icon: 'mingcute:plugin-2-fill',
  //       link: 'https://www.1lou.pro/',
  //     },
  //   ],
  // },
]);
