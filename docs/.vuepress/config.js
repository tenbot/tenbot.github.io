module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Tenbot',
      description: '创建你的企业微信机器人',
    },
  },

  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    // <link rel="manifest" href="/manifest.json">
    ['link', { rel: 'manifest', href: `/manifest.json` }],
    // <meta name="theme-color" content="#0082ef">
    ['meta', { name: 'theme-color', content: '#0082ef' }],
    // <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png">
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/assets/icons/favicon-32x32.png',
      },
    ],
    // <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png">
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/assets/icons/favicon-16x16.png',
      },
    ],
    // <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png">
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/assets/icons/apple-touch-icon.png',
      },
    ],
    // <meta name="application-name" content="tenbot">
    ['meta', { name: 'application-name', content: 'tenbot' }],
    // <meta name="apple-mobile-web-app-title" content="tenbot">
    ['meta', { name: 'apple-mobile-web-app-title', content: 'tenbot' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    // <meta name="msapplication-TileColor" content="#0082ef">
    ['meta', { name: 'msapplication-TileColor', content: '#0082ef' }],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/assets/icons/mstile-150x150.png',
      },
    ],
    // <link rel="mask-icon" href="/assets/icons/safari-pinned-tab.svg" color="#0082ef">
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/assets/icons/safari-pinned-tab.svg',
        color: '#0082ef',
      },
    ],
  ],

  themeConfig: {
    repo: 'tenbot/tenbot.github.io',

    editLinks: true,

    docsDir: 'docs',

    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
          {
            text: '指南',
            link: '/guide/',
          },
          {
            text: '更新日志',
            link: 'https://github.com/tenbot/tenbot/blob/master/CHANGELOG.md',
          },
        ],
        sidebar: {
          '/guide/': sidebarGuide('指南', '插件'),
        },
      },
    },
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    [
      '@vuepress/plugin-pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-132770851-4',
      },
    ],
    'vuepress-plugin-medium-zoom',
  ],
};

function sidebarGuide(titleGuide, titlePlugin) {
  return [
    {
      title: titleGuide,
      collapsable: false,
      children: [
        '',
        'messages',
      ],
    },
    {
      title: titlePlugin,
      collapsable: false,
      children: [
        'plugins/cron',
      ],
    },
  ];
}
