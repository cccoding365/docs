import { defineConfig } from 'vitepress';

export default defineConfig({
    lang: 'zh-CN',
    title: "编程生活录",
    description: "一个记录程序员成长与生活的随笔集，分享编程笔记、个人生活感悟以及对人生、社会的思考。",
    head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
    themeConfig: {
        logo: 'logo.svg',
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        outline: {
            label: '页面导航'
        },
        lastUpdated: {
            text: '最后更新于'
        },
        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索文档',
                        buttonAriaLabel: '搜索文档'
                    },
                    modal: {
                        displayDetails: '显示详细列表',
                        resetButtonTitle: '清除查询条件',
                        backButtonTitle: '关闭搜索',
                        noResultsText: '无法找到相关结果',
                        footer: {
                            selectText: '选择',
                            selectKeyAriaLabel: '进行选择',
                            navigateText: '切换',
                            navigateUpKeyAriaLabel: '向上',
                            navigateDownKeyAriaLabel: '向下',
                            closeText: '关闭',
                            closeKeyAriaLabel: 'esc'
                        }
                    }
                }
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
            { text: '语录', link: '/quote' },
            { text: '关于', link: '/about' },
            { text: '个人站点', link: 'https://hecongcong.com/' }
        ]
    }
});
