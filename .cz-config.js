/*
 * @Author: 唐王瑶
 * @Email：tangwangyao@hualala.com
 * @Date: 2022-04-28 00:14:18
 * @Description: 页面/组件/功能的描述
 * @FilePath: /vuex-typescript/.cz-config.js
 */
/*
 * @Author: 唐王瑶
 * @Email：tangwangyao@hualala.com
 * @Date: 2022-04-21 13:37:26
 * @Description: 页面/组件/功能的描述
 * @FilePath: /mis-git-hooks/.cz-config.js
 */
'use strict';

module.exports = {
  types: [
    {
      value: 'feat',
      name: '✨  feat:     新功能feature',
    },
    {
      value: 'fix',
      name: '🐛  fix:      修复bug',
    },
    {
      value: 'docs',
      name: '📝  docs:     文档注释',
    },
    {
      value: 'style',
      name: '💄  style:    修改了样式文件',
    },
    {
      value: 'lint',
      name: '💄  lint:    格式相关',
    },
    {
      value: 'refactor',
      name: '♻️  refactor: 代码重构/优化',
    },
    {
      value: 'test',
      name: '✅  test:     更新了测试用例',
    },
    {
      value: 'perf',
      name: '⚡️  perf:     新能优化',
    },
    {
      value: 'chore',
      name: '🎫  chore:    修改流程配置，构建过程或者辅助工具变动',
    },
    {
      value: 'revert',
      name: '⏪  revert:   回退提交',
    },
    {
      value: 'build',
      name: '⏪  build:   打包',
    },
  ],
  scopes: [],
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix','lint'],
  subjectLimit: 50,
  messages: {
    type: '请选择你本次改动的修改类型',
    customScope: '\n请明确本次改动的范围（可填）:',
    subject: '简短描述本次改动:\n',
    body: '详细描述本次改动 (可填). 使用 "|" 换行:\n',
    breaking: '请列出任何 BREAKING CHANGES (可填):\n',
    footer: '请列出本次改动关闭的ISSUE (可填). 比如: #31, #34:\n',
    confirmCommit: '你确定提交本次改动吗?',
  },
  scopeOverrides: {
    ci: [
      {name: 'lint'},
    ]
  }
};
