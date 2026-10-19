import { defineConfig } from 'vitepress'

// 站点配置：由原 GitBook 项目 SUMMARY.md 转换而来
export default defineConfig({
  lang: 'zh-CN',
  base: '/work-summary-vitePress/', // GitHub Pages 子路径部署
  title: '工作总结',
  description: '日常工作记录',
  ignoreDeadLinks: true, // 历史文档存在失效链接，避免构建中断
  lastUpdated: true,
  markdown: {
    math: true // threeJS/Math 页面使用了 MathJax 公式
  },

  themeConfig: {
    outline: 'deep',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/TOMGOU/work-summary' }],
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © tomgou 2022'
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '数据结构与算法', link: '/pages/algorithm/' },
      { text: 'Interview', link: '/pages/interview/' },
      { text: 'Others', link: '/pages/others/' }
    ],

    sidebar: [
      { text: 'openClaw', link: '/pages/openClaw/', collapsed: true, items: [
        { text: 'copaw', link: '/pages/openClaw/copaw/' }
      ] },
      { text: 'KeyPoints', link: '/pages/experience/', collapsed: true, items: [
        { text: 'Web-View', link: '/pages/experience/webView/' },
        { text: 'Page-Meta', link: '/pages/experience/pageMeta/' },
        { text: 'PDF-Preview', link: '/pages/experience/PDFPreview/' },
        { text: '模板消息订阅', link: '/pages/experience/subscribeMessage/' },
        { text: '跳转视频号和直播', link: '/pages/experience/channelLive/' },
        { text: '国际化', link: '/pages/experience/internationalization/' },
        { text: 'BI-Echarts', link: '/pages/experience/biEcharts/' },
        { text: '低代码', link: '/pages/experience/lowCode/' },
        { text: 'wepy->taro', link: '/pages/experience/taroWepy/' },
        { text: 'miniprogram-ci', link: '/pages/experience/miniprogramCi/' },
        { text: 'full-screen', link: '/pages/experience/fullScreen/' },
        { text: '静默登录', link: '/pages/experience/silentLogin/' },
        { text: '时间差异', link: '/pages/experience/timeDiff/' },
        { text: 'issue模板', link: '/pages/experience/issue/' },
        { text: 'webp', link: '/pages/experience/webp/' },
        { text: 'markdown', link: '/pages/experience/markdown/' },
        { text: 'memoryAnalysis', link: '/pages/experience/memoryAnalysis/' }
      ] },
      { text: 'CSS', link: '/pages/css/', collapsed: true, items: [
        { text: '提升用户体验细节', link: '/pages/css/UE/' },
        { text: 'flex最后一行左对齐问题', link: '/pages/css/flex/' },
        { text: '神奇的固定定位', link: '/pages/css/fixed/' },
        { text: '布局与居中', link: '/pages/css/layout/' },
        { text: '样式污染', link: '/pages/css/pollution/' },
        { text: '图片尺寸', link: '/pages/css/img/' },
        { text: 'ipx适配', link: '/pages/css/ipxFit/' },
        { text: 'radio样式', link: '/pages/css/radio/' },
        { text: 'BFC', link: '/pages/css/BFC/' },
        { text: 'REM', link: '/pages/css/REM/' }
      ] },
      { text: 'JavaScript', link: '/pages/js/', collapsed: true, items: [
        { text: '性能优化细节', link: '/pages/js/performance/' },
        { text: 'JS内存管理机制', link: '/pages/js/jsStorage/' },
        { text: 'Promise', link: '/pages/js/promise/' },
        { text: '原型及原型链', link: '/pages/js/proto/' },
        { text: '模块化', link: '/pages/js/module/' },
        { text: 'ES6', link: '/pages/js/ES6/' },
        { text: '正则', link: '/pages/js/RegExp/' },
        { text: 'call/apply/bind', link: '/pages/js/callApplyBind/' },
        { text: 'babel', link: '/pages/js/babel/' },
        { text: 'TypeScript', link: '/pages/js/typescript/' },
        { text: 'Debounce & Throttle', link: '/pages/js/debounceThrottle/' },
        { text: 'Bit Operation', link: '/pages/js/bitOperation/' },
        { text: 'Ajax', link: '/pages/js/ajax/' },
        { text: '设计模式', link: '/pages/js/designPattern/' },
        { text: '测试', link: '/pages/js/test/' }
      ] },
      { text: 'Vue', link: '/pages/vue/', collapsed: true, items: [
        { text: 'vue-cli', link: '/pages/vue/vueCli/' },
        { text: 'vue-router', link: '/pages/vue/vueRouter/' },
        { text: 'vuex', link: '/pages/vue/vuex/' },
        { text: 'ssr', link: '/pages/vue/ssr/' },
        { text: 'diff', link: '/pages/vue/diff/' },
        { text: 'reactive', link: '/pages/vue/reactive/' },
        { text: 'eventBus', link: '/pages/vue/eventEmitter/' },
        { text: 'nextTick', link: '/pages/vue/nextTick/' },
        { text: 'decoration', link: '/pages/vue/decoration/' },
        { text: 'vue3新特性', link: '/pages/vue/vue3/' },
        { text: '虚拟dom', link: '/pages/vue/dom/' },
        { text: '组件传值', link: '/pages/vue/communication/' }
      ] },
      { text: 'React', link: '/pages/react/', collapsed: true, items: [
        { text: 'umi + proComponents', link: '/pages/react/umiProComponents/' },
        { text: 'react-router', link: '/pages/react/reactRouter/' },
        { text: 'react-redux', link: '/pages/react/reactRedux/' },
        { text: 'hooks', link: '/pages/react/hooks/' },
        { text: 'portal', link: '/pages/react/portal/' },
        { text: 'suspense', link: '/pages/react/suspense/' },
        { text: 'source-code', link: '/pages/react/sourceCode/' },
        { text: 'react-native', link: '/pages/react/reactNative/' }
      ] },
      { text: 'threeJS', link: '/pages/threeJS/', collapsed: true, items: [
        { text: 'Math', link: '/pages/threeJS/Math/' },
        { text: 'Webgl', link: '/pages/threeJS/Webgl/' },
        { text: 'Shader', link: '/pages/threeJS/Shader/' },
        { text: 'Draco', link: '/pages/threeJS/Draco/' },
        { text: 'glTF', link: '/pages/threeJS/glTF/' },
        { text: 'CSS3DRender', link: '/pages/threeJS/CSS3DRender/' },
        { text: 'Raycaster', link: '/pages/threeJS/Raycaster/' },
        { text: 'MaterialReset', link: '/pages/threeJS/MaterialReset/' },
        { text: 'Animation', link: '/pages/threeJS/Animation/' },
        { text: 'GuiControls', link: '/pages/threeJS/GuiControls/' },
        { text: 'Panorama', link: '/pages/threeJS/Panorama/' },
        { text: 'KeyboardControl', link: '/pages/threeJS/KeyboardControl/' },
        { text: 'Audio', link: '/pages/threeJS/Audio/' },
        { text: 'sRGBEncoding', link: '/pages/threeJS/Encoding/' }
      ] },
      { text: 'Node', link: '/pages/node/', collapsed: true, items: [
        { text: 'nvm', link: '/pages/node/nvm/' },
        { text: 'fs', link: '/pages/node/fs/' },
        { text: 'path', link: '/pages/node/path/' },
        { text: 'http', link: '/pages/node/http/' },
        { text: 'https', link: '/pages/node/https/' },
        { text: 'events', link: '/pages/node/events/' },
        { text: 'child_process', link: '/pages/node/childProcess/' },
        { text: 'stream', link: '/pages/node/stream/' },
        { text: 'buffer', link: '/pages/node/buffer/' },
        { text: '依赖管理', link: '/pages/node/dependency/' }
      ] },
      { text: 'Webpack', link: '/pages/webpack/', collapsed: true, items: [
        { text: '基础配置', link: '/pages/webpack/basic/' },
        { text: 'optimization', link: '/pages/webpack/optimize/' },
        { text: 'webpack-plugin', link: '/pages/webpack/plugin/' },
        { text: 'webpack-loader', link: '/pages/webpack/loader/' },
        { text: 'hotModuleReplace', link: '/pages/webpack/hmr/' },
        { text: 'webpack5新特性', link: '/pages/webpack/webpack5/' },
        { text: 'vite', link: '/pages/webpack/vite/' },
        { text: 'ndb', link: '/pages/webpack/ndb/' },
        { text: 'websocket', link: '/pages/webpack/websocket/' },
        { text: 'rollup与soucemap', link: '/pages/webpack/rollup/' },
        { text: 'gulp与yargs', link: '/pages/webpack/gulp/' }
      ] },
      { text: '数据结构与算法', link: '/pages/algorithm/' },
      { text: 'Selenium', link: '/pages/selenium/' },
      { text: 'Code Review', link: '/pages/codeReview/', collapsed: true, items: [
        { text: 'Cyclomatic Complexity', link: '/pages/codeReview/cyclomaticComplexity/' }
      ] },
      { text: 'Interview', link: '/pages/interview/', collapsed: true, items: [
        { text: '事件循环', link: '/pages/interview/eventLoop/' },
        { text: '深浅拷贝', link: '/pages/interview/deepClone/' },
        { text: 'CDN', link: '/pages/interview/CDN/' },
        { text: '网络安全', link: '/pages/interview/safety/' },
        { text: 'http问题', link: '/pages/interview/http/' },
        { text: 'mqtt', link: '/pages/interview/mqtt/' },
        { text: 'url输入到展示', link: '/pages/interview/Internet/' },
        { text: 'TypeScript', link: '/pages/interview/typescript/' },
        { text: 'BFC', link: '/pages/interview/BFC/' },
        { text: '按需引入', link: '/pages/interview/import/' },
        { text: '总结', link: '/pages/interview/projects/' }
      ] },
      { text: 'Others', link: '/pages/others/', collapsed: true, items: [
        { text: 'GitLab CI/CD', link: '/pages/others/gitlab/' },
        { text: '云服务器', link: '/pages/others/linux/' },
        { text: 'mysql', link: '/pages/others/mysql/' },
        { text: '微信小程序云开发', link: '/pages/others/cloud/' },
        { text: 'lerna', link: '/pages/others/lerna/' },
        { text: 'charles', link: '/pages/others/charles/' },
        { text: 'whistle', link: '/pages/others/whistle/' },
        { text: 'docker', link: '/pages/others/docker/' },
        { text: 'git', link: '/pages/others/git/' },
        { text: 'java', link: '/pages/others/java/' },
        { text: 'sli.dev', link: '/pages/others/slidev/' },
        { text: 'iTerm', link: '/pages/others/iTerm/' },
        { text: 'chrome', link: '/pages/others/chrome/' },
        { text: 'husky', link: '/pages/others/husky/' },
        { text: 'typora 破解', link: '/pages/others/typora/' }
      ] }
    ]
  }
})
