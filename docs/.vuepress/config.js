module.exports = {
  base: '/docs/',
  title: 'DOCs By DoubledConG',
  description: 'Here is mainly to store some articles.',
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: '首页', link: '/ABOUT' },
      { text: 'GitHub', link: 'https://github.com/cccoding365' }
    ],
    sidebar: [
      ['/ABOUT', '概述'],
      ['/fetech/', '前端技术'],
      ['/notes/', '学习笔记'],
      ['/journal/', '生活日志']
    ]
  }
}