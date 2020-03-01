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
          ['/Vuepress/vuepress-start', 'Vuepress 시작하기'],
          ['/Vuepress/netlify-start', 'Netlify'],
        ],
      },
      {
        title: 'JAVA',
        collapsable: true,
        children: [
          ['JAVA/java-basic', 'About Java'],
        ],
      },
      {
        title: 'Spring',
        collapsable: true,
        children: [
          ['Spring/s', 'test_spring'],
        ],
      },
      {
        title: 'WEB',
        collapsable: true,
        children: [
          ['WEB/web-basic', 'World Wide Web'],
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
          ['Network/dns-test', 'DNS'],
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
        title: 'Linux',
        collapsable: true,
        children: [
          ['Linux/LX', 'lx'],
        ],
      },
      {
        title: 'Alogrithms',
        collapsable: true,
        children: [
          ['/Alogrithms/Recursion-1', 'Recursion'],
          ['/Alogrithms/Recursion-2', 'Recursion pt2'],
          ['/Alogrithms/1924', '2007년'],
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
        title: 'Docker',
        collapsable: true,
        children: [
          ['Docker/SH', 'sh'],
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
        title: 'Error',
        collapsable: true,
        children: [
          ['Error/error-c2664', 'C2664'],
        ],
      },
    ],
  },

    markdown: {
    lineNumbers: true
  },

    plugins: ['@vuepress/back-to-top'],
    
   }
  

