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
        title: 'WEB',
        collapsable: true,
        children: [
          ['WEB/web-basic', 'World Wide Web'],
          ['WEB/html', 'HTML'],
          ['WEB/css', 'CSS'],
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
          ['/Alogrithms/recursion-2', 'Recursion2'],
          ['/Alogrithms/recursion-maze', 'Recursion 응용'],
          ['/Alogrithms/sort-basic', 'Sort'],

        ],
      },
      {
        title: 'Design Pattern',
        collapsable: true,
        children: [
          ['/Design Pattern/strategy', 'Strategy Pattern'],
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
        title: 'Computer Science',
        collapsable: true,
        children: [
          ['Computer Science/stored-programmed-computer', 'Stored programmed'],
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
  

