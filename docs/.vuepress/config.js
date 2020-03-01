module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Tenbot',
      description: '创建你的企业微信机器人',
    },
  },

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
