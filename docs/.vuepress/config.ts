import {viteBundler} from "@vuepress/bundler-vite";
import {defineUserConfig} from "vuepress";
import {plumeTheme} from "vuepress-theme-plume";
import collections from './collections/index.ts';

export const copyright =
    '© ' +
    new Date().getFullYear() +
    ' ' +
    '<a href=https://ifback.com/ target=_blank>ifback.com</a>' +
    ' ' +
    '豫公网安备 ' +
    '<a href=https://www.beian.gov.cn/ target=_blank>41152402000212号</a>' +
    ' ' +
    '豫ICP备 ' +
    '<a href=https://beian.miit.gov.cn/ target=_blank>2021014629号-2</a>'


export default defineUserConfig({
    base: "/blog/",
    lang: "zh-CN",
    // 网站图标
    head: [
        // ['link', { rel: 'icon', href: 'https://youke2.picui.cn/s1/2025/12/18/69436b735090b.ico'}],
        ['link', {rel: 'icon', href: 'favicon.ico'}],  // favicon.ico位置在public中
    ],
    title: "Zephyr's Blog",
    description: "This zephyr-blog is built with Vuepress-theme-plume!",
    bundler: viteBundler(),

    theme: plumeTheme({
        //代码块
        codeHighlighter: {
            themes: {light: 'vitesse-light', dark: 'vitesse-dark'},
        },
        // 加密
        encrypt: {
            rules: {
                // 可以是 md 文件的相对路径，对该文件加密
                // '前端/基础.md': '123456',
                // 可以是 文件夹的路径，对该目录下所有文章加密
                // '/notes/vuepress-theme-plume/': '123456',
                // 可以是 访问地址的请求路径，对该访问路径下所有文章加密
                '/resume/': 'zephyr',
                '/share/': 'zephyr',
                // 可以是 具体的某个页面的请求路径，对该页面加密
                // '/article/f8dnci3/': '123456',
                // 如果是 `^` 开头，则匹配该正则表达式的页面也会加密
                // '^/(a|b)/': '123456',
            }
        },
        // 评论
        comment: {
            // 服务提供商
            provider: 'Giscus', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
            // 是否默认启用评论
            comment: true,
            repo: 'Zephyr-Shane/tubao-blog',
            repoId: 'R_kgDONFwxlA',
            category: 'Announcements',
            categoryId: 'DIC_kwDONFwxlM4C0AIc',
        },
        // blog: {},
        // 添加您的部署域名
        // hostname: 'https://your_site_url',

        // 贡献者
        // 默认启用，仅当 plugins.git 为 true 时生效
        // 此配置在 plume.config.ts 中无效
        // contributors: true,
        contributors: {
            mode: 'block',
        },
        // 文章变更历史
        // 默认 不启用，仅当 plugins.git 为 true 时生效
        // 此配置在 plume.config.ts 中无效
        changelog: true,
        plugins: {
            // 如果您在此处直接声明为 true，则表示开发环境和生产环境都启用该功能
            // git: process.env.NODE_ENV === 'production'
            git: true
        },

        autoFrontmatter: {
            permalink: true,
            createTime: true,
            title: true,
        },
        markdown: {
            mermaid: true,
            chartjs: true,
            // ...
        },
        copyright: {
            author: "Zephyr-Shane",
            creation: "original",
            license: "MIT",
        },
        collections: collections,
        // footer: {
        //   message: '',
        //   copyright: copyright,
        // },
    }),
});
