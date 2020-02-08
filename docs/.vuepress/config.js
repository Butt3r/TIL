// docs/.vuepress/config.js

module.exports = {
  base: '/TIL/',
  title: 'BUTT3R',
  description: 'TIL Document',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'TIL', link: '/about/' },
      { text: 'Blog', link: 'https://butt3r.github.io/'}
   
    ],
    plugins: ['@vuepress/back-to-top'],
    sidebar: [
      '/about/',
      {
        title: 'Vuepress',
        collapsable: true,
        children: [
          ['/Vuepress/VU', 'vue']
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
      lineNumbers: true,
    },
   }
  
  }
