import { defineConfig } from 'vitepress';
import { localSearchOptions, themeConfig } from './zh-Hans';

export default defineConfig({
    lang: 'zh-CN',
    title: "编程生活录",
    description: "一个记录程序员成长与生活的随笔集，分享编程笔记、个人生活感悟以及对人生、社会的思考。",
    head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
    themeConfig: {
        ...themeConfig,
        logo: 'logo.svg',
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
            message: '代码改变世界很难，做点有趣的事儿刚刚好',
            copyright: '版权所有 © 2019-2025 DoubledConG'
        },
        nav: [
            { text: '首页', link: '/' },
            { text: '关于', link: '/about' },
            { text: '网址书签', link: '/bookmark/official' },
            { text: '个人站点', link: 'https://hecongcong.com/' }
        ],
        sidebar: {
            '/programming/': {
                base: '/programming/',
                items: [
                    { text: '前端已死', link: '前端已死' }
                ]
            },
            '/life/': {
                base: '/life/',
                items: [
                    { text: '关系未变，为何断了联系', link: '关系未变，为何断了联系' }
                ]
            },
            '/thinking/': {
                base: '/thinking/',
                items: [
                    { text: '100种写段子的方法', link: '100种写段子的方法' }
                ]
            },
            '/bookmark/': {
                text: '网址书签',
                base: '/bookmark/',
                items: [
                    { text: '技术栈官网', link: 'official' },
                    { text: '在线工具', link: 'tools' },
                    { text: '工具库', link: 'library' },
                    { text: '设计参考', link: 'design' },
                    { text: '其他', link: 'others' }
                ]
            }
        }
    }
});
