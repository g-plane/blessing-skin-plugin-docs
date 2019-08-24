module.exports = {
  title: 'Blessing Skin 插件开发',
  description: '扩展您的 Blessing Skin',
  themeConfig: {
    nav: [
      { text: '教程', link: '/guide/' },
      {
        text: '相关资源',
        items: [
          { text: '官方示例插件', link: 'https://github.com/bs-community/blessing-skin-plugins/tree/master/example-plugin' },
          { text: '脚手架', link: 'https://github.com/bs-community/generator-bs-plugin' }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        'scaffold',
        'structure',
        'information',
        'bootstrap',
        'view',
        'route',
        'i18n',
        'option',
        'form',
        'helpers',
        'models',
        'auth',
        'lifecycle',
        'database',
        'frontend-global',
        'backend-event',
        'frontend-event',
        'fetch',
        'dependency',
        'conflicts',
        'composer',
        'providers',
        'migration',
      ]
    },
    repo: 'bs-community/blessing-skin-plugin-docs',
    repoLabel: 'GitHub',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们完善这个页面',
    evergreen: true,
  }
}
