import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh',
  title: "编程生活录",
  description: "一个记录程序员成长与生活的随笔集，分享编程笔记、个人生活感悟以及对人生、社会的思考。",
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-Present DoubledConG'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' }
    ],
    logo: 'favicon.svg',
    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: '编程笔记',
        items: [
          { text: '前端已死', link: '/前端已死' }
        ]
      },
      {
        text: '生活随笔',
        items: [
          { text: '关系未变，为何断了联系', link: '/关系未变，为何断了联系' }
        ]
      },
      {
        text: '奇思妙想',
        items: [
          { text: '100种写段子的方法', link: '/100种写段子的方法' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cccoding365' }
    ]
  }
});
