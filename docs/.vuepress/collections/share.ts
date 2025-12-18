import { defineCollection } from 'vuepress-theme-plume'

export default defineCollection({
  type: 'doc',
  dir: 'share',
  title: '分享',
//   sidebar: [
//     // 次级 items 自动读取 typescript/guide 目录
//     { text: 'recreation', prefix: 'recreation', items: 'auto' },
//     // 次级 items 自动读取 typescript/config 目录
//     { text: 'soft', prefix: 'soft', items: 'auto' },
//   ],
  sidebar: 'auto' // 自动生成侧边栏
})