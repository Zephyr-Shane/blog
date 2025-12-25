import Swiper from 'vuepress-theme-plume/features/Swiper.vue'
import {defineClientConfig} from 'vuepress/client'
import {defineMermaidConfig} from "@vuepress/plugin-markdown-chart/client";
import RepoCard from "vuepress-theme-plume/features/RepoCard.vue";
import NotFound from './theme/layouts/NotFound.vue'
import "./theme/styles/custom.css";

export default defineClientConfig({
    enhance({app}) {
        app.component("RepoCard", RepoCard);
        app.component('Swiper', Swiper);
    },

    layouts: {
        NotFound,
    },

});
