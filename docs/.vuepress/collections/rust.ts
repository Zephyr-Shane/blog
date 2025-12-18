import { defineCollection } from 'vuepress-theme-plume'

export default defineCollection({
  type: 'doc',
  dir: 'rust',
  title: 'rust 笔记',
  sidebar: 'auto' // 自动生成侧边栏
})