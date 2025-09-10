import { defineConfig } from 'vitepress';
import { localSearchOptions, themeConfig } from './zh-Hans';

export default defineConfig({
    lang: 'zh-CN',
    title: "编程生活录",
    description: "一个记录程序员成长与生活的随笔集，分享编程笔记、个人生活感悟以及对人生、社会的思考。",
    head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
    themeConfig: {
        ...themeConfig,
        // logo: 'logo.svg',
        search: {
            provider: 'local',
            options: {
                ...localSearchOptions
            }
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/cccoding365' }
        ],
        footer: {
            message: '改变世界很难，但是做点有趣的事儿刚刚好',
            copyright: '版权所有 © 2019-2025 DoubledConG'
        },
        nav: [
            { text: '首页', link: '/' },
            { text: '关于', link: '/about' },
            { text: '个人站点', link: 'https://hecongcong.com/' }
        ]
    }
});
