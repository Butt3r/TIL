// docs/.vuepress/config.js

module.exports = {
  base: '/TIL/',
  title: 'BUTT3R',
  description: 'TIL Document',

  themeConfig: {
    nav: [
      { text: 'Blog', link: 'https://butt3r.github.io/'}
    ],
    sidebar: [
      '/',
      {
        title: 'Vuepress',
        collapsable: true,
        children: [
          ['/Vuepress/VuepressStart', 'Vuepress 시작하기'],
          ['/Vuepress/NetlifyStart', 'Netlify'],
        ],
      },
      {
        title: 'Alogrithms',
        collapsable: true,
        children: [
          ['/Alogrithms/AL', 'al'],
        ],
      },
      {
        title: 'Design Pattern',
        collapsable: true,
        children: [
          ['/Design Pattern/DP', 'dp'],
        ],
      },
      {
        title: 'JAVA',
        collapsable: true,
        children: [
          ['JAVA/JA', 'ja'],
        ],
      },
      {
        title: 'WEB',
        collapsable: true,
        children: [
          ['WEB/WebBasic', 'World Wide Web'],
          ['WEB/html', 'HTML'],
        ],
      },
      {
        title: 'Network',
        collapsable: true,
        children: [
          ['Network/router', 'Router'],
          ['Network/router-nat', 'NAT'],
          ['Network/port-forwarding', 'Port forwarding'],
          ['Network/dhcp', 'DHCP'],
        ],
      },
      {
        title: 'Linux',
        collapsable: true,
        children: [
          ['Linux/LX', 'lx'],
        ],
      },
      {
        title: 'SQL',
        collapsable: true,
        children: [
          ['SQL/SQ', 'sq'],
        ],
      },
      {
        title: 'Shader',
        collapsable: true,
        children: [
          ['Shader/SH', 'sh'],
        ],
      },
      {
        title: 'C++',
        collapsable: true,
        children: [
          ['C++/CP', 'cp'],
        ],
      },
      {
        title: 'UE4',
        collapsable: true,
        children: [
          ['UE4/UE', 'ue'],
        ],
      },
      {
        title: 'Error',
        collapsable: true,
        children: [
          ['Error/error-c2664', 'C2664'],
        ],
      },
    ],
    markdown: {
    lineNumbers: true
  },
    plugins: ['@vuepress/back-to-top', true],
    
   }
  
  }
