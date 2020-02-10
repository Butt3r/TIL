// docs/.vuepress/config.js

module.exports = {
  base: '/TIL/',
  title: 'BUTT3R',
  description: 'TIL Document',
  themeConfig: {
    nav: [
      { text: 'Blog', link: 'https://butt3r.github.io/'}
   
    ],
    plugins: ['@vuepress/back-to-top'],
    sidebar: [
      '/',
      {
        title: 'Vuepress',
        collapsable: true,
        children: [
          ['/Vuepress/VuepressStart', 'Vuepress 시작하기'],
          ['/Vuepress/Neflify', 'Neflify로 배포하기'],
        ],
      },
      {
        title: 'Alogrithms',
        collapsable: true,
        children: [
          ['/Alogrithms/AL', 'al']
        ],
      },
      {
        title: 'Design Pattern',
        collapsable: true,
        children: [
          ['/Design Pattern/DP', 'dp']
        ],
      },
      {
        title: 'JAVA',
        collapsable: true,
        children: [
          ['JAVA/JA', 'ja']
        ],
      },
      {
        title: 'WEB',
        collapsable: true,
        children: [
          ['WEB/WE', 'we']
          ['WEB/HTML', 'HTML']
        ],
      },
      {
        title: 'Linux',
        collapsable: true,
        children: [
          ['Linux/LX', 'lx']
        ],
      },
      {
        title: 'SQL',
        collapsable: true,
        children: [
          ['SQL/SQ', 'sq']
        ],
      },
      {
        title: 'Shader',
        collapsable: true,
        children: [
          ['Shader/SH', 'sh']
        ],
      },
      {
        title: 'CPP',
        collapsable: true,
        children: [
          ['CPP/CP', 'cp']
        ],
      },
      {
        title: 'UE4',
        collapsable: true,
        children: [
          ['UE4/UE', 'ue']
        ],
      },
    ],
    base: '/TIL/',
    markdown: {
      lineNumbers: true
    }
   }
  
  }
