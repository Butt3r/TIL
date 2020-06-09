// docs/.vuepress/config.js

module.exports = {
  base: '/TIL/',
  title: 'BUTT3R',
  description: 'TIL Document',

  theme: 'default-prefers-color-scheme',
  themeConfig: {

    defaultTheme: { light: [6, 18], dark: [18, 6] },

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
        title: 'Git',
        collapsable: true,
        children: [
          ['Git/git-basic', 'Git 기초'],
        ],
      },
      {
        title: 'WEB',
        collapsable: true,
        children: [
          ['WEB/web-basic', 'World Wide Web'],
          ['WEB/html', 'HTML'],
          ['WEB/css', 'CSS'],
          ['WEB/servlet', 'Servlet'],
        ],
      },
      {
        title: 'JAVA',
        collapsable: true,
        children: [
          ['JAVA/java-basic', 'About Java'],
          ['JAVA/java-file-structure', 'Java File Structure'],
          ['JAVA/java-package-access', 'Package and Access modifier'],
          ['JAVA/java-annotation', 'Annotation']
        ],
      },
      {
        title: 'Spring',
        collapsable: true,
        children: [
          ['Spring/about-spring', 'Spring 메모'],
        ],
      },
      {
        title: 'Spring boot',
        collapsable: true,
        children: [
          ['Spring boot/s', 'Spring boot 시작하기'],
        ],
      },
      {
        title: 'DataBase',
        collapsable: true,
        children: [
          ['Database/SQ', 'test'],
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
          ['Network/dns', 'DNS'],
          ['Network/http', 'HTTP'],
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
          ['/Alogrithms/recursion-1', 'Recursion'],
          ['/Alogrithms/recursion-2', 'Recursion(2)'],
          ['/Alogrithms/recursion-maze', 'Recursion 응용'],
          ['/Alogrithms/sort-basic', 'Basic Sorts'],
          ['/Alogrithms/merge-sort', 'Merge sort'],
        ],
      },
      {
        title: 'Design Pattern',
        collapsable: true,
        children: [
          ['/Design Pattern/strategy', 'Strategy Pattern'],
          ['/Design Pattern/mvc', 'MVC Pattern'],
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
        title: 'Error',
        collapsable: true,
        children: [
          ['Error/error-c2664', 'C2664'],
        ],
      },
    ],
  },

  plugins: ['@vuepress/back-to-top'],

  postcss: {
    plugins: [
      require('css-prefers-color-scheme/postcss'),
      require('autoprefixer')
    ]
  },

    markdown: {
    lineNumbers: true
  },

   }
  

