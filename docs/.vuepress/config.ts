import {viteBundler} from "@vuepress/bundler-vite";
import {defineUserConfig} from "vuepress";
import {plumeTheme} from "vuepress-theme-plume";
import collections from './collections/index.ts';
const __dirname = getDirname(import.meta.url)
import { getDirname, path } from 'vuepress/utils'

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
        // 使用主题内置的默认配置
        llmstxt: true,
        // seo
        hostname: 'https://zephyr-shane.github.io/blog/',
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
            repo: 'Zephyr-Shane/blog',
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
            git: true,
        },

        autoFrontmatter: {
            permalink: true,
            createTime: true,
            title: true,
        },
        markdown: {
            icon: {provider: 'iconify', size: '2em'}, // 默认支持
            mermaid: true,
            chartjs: true,
            // ...
        },
        // 文章版权
        copyright: {
            author: "Zephyr-Shane",
            creation: "original",
            license: "MIT",
        },
        collections: collections,
        footer: {
            message: "这是页脚信息",
            copyright: "Powered by VuePress & vuepress-theme-plume",
        },
    }),

    // 自定义组件
    alias: {
        '@theme/layouts/NotFound.vue': path.resolve(
            __dirname,
            './theme/layouts/NotFound.vue',
        ),
    },
});
