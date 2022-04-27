/*
 * @Author: 唐王瑶
 * @Email：tangwangyao@hualala.com
 * @Date: 2022-04-28 00:08:51
 * @Description: 页面/组件/功能的描述
 * @FilePath: /vuex-typescript/.stylelintrc.js
 */
/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2021-08-04 21:19:09
 * @Description: stylelint配置
 * @FilePath: /mis-tfz-web-fe/.stylelintrc.js
 */
module.exports = {
  'extends': ['stylelint-config-standard', 'stylelint-config-recess-order'],
  'rules': {
    'at-rule-no-unknown': [true, { 'ignoreAtRules': [
      'mixin', 'extend', 'content', 'include'
    ] }],
    'indentation': 4,
    "no-descending-specificity": null, // 不执行:禁止特异性较低的选择器在特异性较高的选择器之后重写
    // "function-name-case":'', //windows系统需要声明该规则，但mac不需要，windows可放开该规则，但不要提交到git
  }
}
