import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { plumeTheme } from "vuepress-theme-plume";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Zephyr's Blog",
  description: "This zephyr-blog is built with Vuepress-theme-plume!",
  bundler: viteBundler(),

  theme: plumeTheme({
    // blog: {},
    // 添加您的部署域名
    // hostname: 'https://your_site_url',
    autoFrontmatter: {
      permalink: true,
      createTime: true,
      title: true,
    },
    plugins: {
     
    },
    markdown: { 
      mermaid: true,
      chartjs: true,
      // ...
    },
    copyright: {
      author: 'Zephyr-Shane', 
      creation: 'original',
      license: 'MIT'
    },
    collections: [ 
      { type: 'post',
        dir: 'blog',
        title: '博客',
        postList: true, // 启用文章列表页
        // autoFrontmatter: {
        //   title: true, // 自动生成标题
        //   createTime: true, // 自动生成创建时间
        //   permalink: true, // 自动生成永久链接
        //   // transform: (data, context, locale) => { // 自定义转换
        //   //   data.foo ??= 'foo'
        //   //   return data
        //   // }
        // },
        // profile: {
        //   avatar: '/avatar.jpg', // 头像路径
        //   name: '张三', // 显示名称
        //   description: '个人简介', // 简介文本
        //   circle: true, // 圆形头像
        //   location: '广州', // 所在地
        //   organization: '组织名称', // 所属组织
        //   layout: 'right', // 布局位置 left|right
        // },
        link: '/blog/', // 列表页链接
        // linkPrefix: '/blog/', // 文章链接前缀
        // tags: true, // 启用标签页
        // tagsLink: '/blog/tags/', // 标签页链接
        // tagsTheme: 'colored', // 标签主题 colored|gray|brand
        // tagsText: '标签', // 标签页标题
        // archives: true, // 启用归档页
        // archivesLink: '/blog/archives/', // 归档页链接
        // archivesText: '归档', // 归档页标题
        // categories: true, // 启用分类页
        // categoriesLink: '/blog/categories/', // 分类页链接
        // categoriesText: '分类', // 分类页标题
        // categoriesExpand: 'deep', // 分类展开层级 number|'deep'
        // categoriesTransform: categories => categories, // 分类转换函数
      }
    ]
  }),
});
