/*
 * @Author: 唐王瑶
 * @Email：tangwangyao@hualala.com
 * @Date: 2022-04-28 00:08:42
 * @Description: 页面/组件/功能的描述
 * @FilePath: /vuex-typescript/.eslintrc.js
 */
/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2021-07-01 20:37:03
 * @LastEditTime: 2022-04-28 00:08:49
 * @LastEditors: Please set LastEditors
 * @Description: eslint校验配置
 * @FilePath: /git-hooks-tfz/.eslintrc.js
 */
module.exports = {
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
    },
    extends: [ 'eslint:recommended', 'plugin:react/recommended', 'plugin:import/recommended' ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
            modules: true,
        },
        sourceType: 'module',
    },
    plugins: [
        'react',
        'react-hooks',
        'import',
    ],
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    [ '@src', './src' ],
                    [ '@new-reports', './src/feature/newReports' ],
                ],
            },
        },
    },

    rules: {
        // "off" 或 0 - 关闭规则
        // "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
        // "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)

        // import配置
        // 'import/no-unresolved': 2,// import/recommended默认开启，确保导入指向可以解析的文件/模块
        // 'import/named': 2,// import/recommended默认开启，确保命名导入对应于远程文件中的命名导出
        // 'import/default': 2, // import/recommended默认开启，如果请求默认导入，则此规则将报告导入的模块中是否没有默认导出
        'import/no-self-import': 2, // 禁止模块导入自身
        'import/export': 2, // 名称或默认值的重复导出
        // react配置
        'react-hooks/rules-of-hooks': 2, // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 0, // Checks effect dependencies 经常会报依赖的问题，并且会有自动修复useEffect的第二个参数[]的问题，产生难以控制的后果，所以关闭
        'react/prop-types': 1, // 需要定义属性类型
        'react/no-deprecated': 0, // 不使用不推荐使用的方法：关闭，因大量使用componentWillReceiveProps等，但还是推荐用新方法代替或添加前缀：UNSAFE_
        'react/display-name': 0, // 在React组件定义中设置displayName：关闭
        // 'react/no-direct-mutation-state': 2,// react/recommended默认开启
        'react/jsx-max-props-per-line': [ 1, { 'maximum': 1 } ], // JSX标签每行最多1条属性
        'react/jsx-first-prop-new-line': [ 1, 'multiline-multiprop' ], // 如果JSX标签占用多行并且有多个属性，则第一个属性应始终放在新行
        // eslint配置
        'indent': [ 2, 4, { SwitchCase: 1 } ], // 缩进：4个空格,Switch语句按1倍缩进执行
        'quotes': [ 2, 'single' ],
        'semi': [ 2, 'never' ], // 行末尾分号：不要分号
        'semi-spacing': [ 2, { before: false, after: true } ], // 分号前后空格：前不要后要
        'no-trailing-spaces': 2, // 禁用行尾空白
        'no-whitespace-before-property': 2, // 禁止属性前有空白，错误示例：a. b
        'space-in-parens': [ 2, 'never' ], // 禁止圆括号内的空格
        'comma-dangle': [ 2, 'always-multiline' ], // 数组或对象最后一个值后是否有逗号：和结束符在同一行的时候没有,否则有。（only-multiline：和结束符在同一行的时候没有,否则可有可没有）
        'comma-spacing': 2, // 逗号前后是否有空格，默认前没有，后有
        'no-inner-declarations': 1, // 函数声明只能在程序或另一个函数体的顶层,不要在if等语句中生命
        // 'no-use-before-define': 2, // react:[2, { 'functions': true, 'classes': true, 'variables': false }],
        'no-class-assign': 0, // 不允许修改类声明的变量: 不采用。因为项目里大量这种写法：class Search extends Component { ……};Search = Form.create()(Search)
        'no-case-declarations': 1, // 该规则禁止词法声明（let，const，function和class在）case/ default条款。原因是词法声明在整个开关块中是可见的，但只有在分配时才会被初始化。即case 1里的x在case 2里也会生效，要确保词法声明仅适用于当前case子句，防止x提升到整个switch语句，请将子句包装在块中，所以要用{}包起来。然而实测并不会有这种问题
        'no-unused-vars': 1, // 禁止出现未使用过的变量，eslint:recommended默认开启
        'object-curly-spacing': [ 2, 'always' ], // { x:1 }前后有空格,{}除外但中间可以有一个空格
        'array-bracket-spacing': [ 2, 'always' ], // [ 1 ]前后有空格,[]除外但中间可以有一个空格
        'no-await-in-loop': 2, // 禁止在循环中 出现 await
        // 'for-direction': 2, //防止死循环，eslint:recommended默认开启
        'no-template-curly-in-string': 2, // 禁止在常规字符串中出现模板字面量占位符语法，如：'Hello ${name}!'
        'block-scoped-var': 2, // 把 var 语句看作是在块级作用域范围之内，超出作用域报错
        'no-extra-bind': 2, // 禁止不必要的函数绑定，方法内没有使用bind的入参
        // 'wrap-iife': [ 2, 'outside' ],//需要把立即执行的函数包裹起来，eslint:recommended默认开启
        'block-spacing': [ 2, 'always' ], // 代码块中大括号前和后有空格
        'brace-style': [ 2, '1tbs', { allowSingleLine: true } ], // 代码块中使用一致的大括号风格，大括号的缩进与换行，比如if/else，允许单行
        'func-call-spacing': [ 2, 'never' ], // 禁止在函数标识符和其调用之间有空格
        'jsx-quotes': [ 2, 'prefer-single' ], // 强制所有不包含单引号的 JSX 属性值使用单引号
        'key-spacing': 2, // 强制在对象字面量的键和值之间使用一致的空格,默认冒号前没有后有
        'generator-star-spacing': [ 2, { before: true, after: false } ], // 强制 generator 函数中 * 号周围使用一致的空格,前有后没有
        'eqeqeq': 2, // 要求使用===全等于
        'no-duplicate-imports': 2, // 禁止重复导入
        'spaced-comment': [ 2, 'always' ], // 注释风格:有空格
        'no-multi-spaces': 2, // 禁止出现多个空格，错误示例：a   === b
        'no-multiple-empty-lines': [ 2, { max: 1 } ], // 空行最多不能超过1行
        'space-before-function-paren': [ 2, 'always' ], // 函数定义时括号前面要不要有空格
        'arrow-spacing': 2, // =>的前/后空格
        'space-before-blocks': [ 2, 'always' ], // 不以新行开始的块{前面要不要有空格
        'no-const-assign': 2, // 禁止修改const声明的变量
        'space-infix-ops': 2, // 要求操作符周围有空格,如：a + b
        'template-curly-spacing': [ 2, 'always' ], // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
        // 'no-mixed-spaces-and-tabs': 'smart-tabs',
        // 补充的eslint校验规则
        'no-var': 2, // 用 `let` or `const` 代替 `var`
        'no-new-object': 2, // 使用字面语法创建对象,而不是创建新对象
        'object-shorthand': 2, // 使用对象属性值和方法的简写
        'no-useless-computed-key': 2, // 禁止在对象中使用不必要的计算属性
        'no-new-wrappers': 2, // 禁止使用new创建包装实例，如 new String、new Number，这样会变成初始化一个对象
        'no-array-constructor': 2, // 不允许Array构造函数
        'prefer-destructuring': [ 2, { VariableDeclarator: { object: true }, AssignmentExpression: { array: true } } ], // 强制执行对象解构和数组解构，这个规则要不要启用，需要讨论
        'prefer-template': 2, // 建议使用模板文字而不是字符串连接,此规则不应在 ES3/5 环境中使用,这个规则要不要启用，需要讨论
        'prefer-rest-params': 'warn', // 不要使用 arguments。可以选择 rest 语法 ... 替代
        'no-param-reassign': 2, // 使用默认的参数语法，不要改变函数参数
        'consistent-return': 2, // 所有的return 语句必须指定返回值
        'no-useless-return': 2, // 不允许多余的返回语句
        'array-callback-return': 2, // 数组方法的回调函数中要有 return 语句
        'new-parens': 2, // 调用不带参数的构造函数时需要括号
        'prefer-arrow-callback': 2, // 要求使用尖头函数作为回调
        'arrow-parens': [ 2, 'always' ], // 箭头函数只有一个参数时可以省略括号。在所有其他情况下，参数必须用括号括起来
        'arrow-body-style': 2, // 箭头函数在可以省略的地方不强制使用大括号
        'no-useless-constructor': 2, //不允许不必要的构造函数
        'no-useless-rename': 2,//禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
        'dot-notation': 2, //使用 . 来访问对象的属性
        'object-property-newline': 2, // 规定声明对象的属性时只能每行声明一个属性
        'no-proto': 2,//禁止使用__proto__属性,用getPrototypeOf方法替代
        'camelcase': 1, //建议小驼峰法则命名变量,对象、函数和实例
        'prefer-const': 2, //用const来命名不会变的变量，防止全局命名空间污染
        'one-var': [2, "never"],//强制变量在函数中一起或单独声明
        'no-plusplus': [2, { "allowForLoopAfterthoughts": true }],//避免使用不必要的递增和递减，除了for 循环中
        'no-shadow': 2,//禁止声明的变量与外层作用域的变量同名
        'no-use-before-define': 2, //禁止在变量定义之前使用它们
        'no-undef-init':2,//不允许初始化变量值为 undefined
        'no-multi-assign': 2, //禁止使用链式赋值的表达式
        'no-self-compare': "error", //禁止出现与本身作比较的语句
        'prefer-spread': "error", //建议使用扩展运算符而非.apply()
        'no-nested-ternary': "error", //不允许嵌套三元表达式
        'curly': "error", //使用大括号包裹所有的多行代码块
        'lines-around-comment': ["error", { "beforeBlockComment": true }], //在注释前插入空行
       'no-warning-comments': "error", //允许给注释增加 FIXME 或 TODO 的前缀
       'comma-spacing': ["error", { "before": false, "after": true }], //在逗号后面需要有一个空格，提高列表项的可读性
       'keyword-spacing': "error", //强制在关键字前后保持一致的间距
       'key-spacing':"error", //在对象的属性中，要求键名与冒号之间没有空格，冒号与值之间有一个空格
       'space-infix-ops': "error",
       "space-unary-ops": [2, { "words": true,"nonwords": false,}], //一元字母操作符前后需要加空格,一元运算符前后不用加空格,
       "spaced-comment": "error", //代码注释符号后面要加一个空格
       'rest-spread-spacing': "error", //禁止剩余和扩展运算符及其表达式之间有空格
        'computed-property-spacing': "error", //计算属性的[]内不允许使用空格
        'no-trailing-spaces': "error", //禁止行末尾有空格
        'no-tabs': ["error", { allowIndentationTabs: true }], //禁止使用tab键,除了用于缩进的
        'dot-location': ["error", "property"], //在使用长方法链时进行缩进,保持.号与属性在同一行
        'lines-between-class-members': ["error", "always"], //类成员之间需要有空行
        'eol-last': ["error", "always"], //在文件末尾插入一个换行符
        'comma-style': ["error", "last"], //禁止行首逗号
        "comma-dangle": ["error", "always"], //增加结尾的逗号: 需要
        'no-sequences': "error", //禁止使用逗号操作符
        'semi-style': ["error", "last"], //分号一定出现在句末
        'no-bitwise': "error", //禁止使用位运算符
        'radix':'error', //强制提供类型转换的基数
        // 'no-sparse-arrays': "error", //禁止稀疏数组
        // 'no-unexpected-multiline': "error", //不允许混淆多行表达式,也就是不许省略分号
        // 'no-extra-semi': "error", //不允许使用多余的分号
        // 禁止使用位运算符，是否有必要
        // 'no-dupe-keys': 2, // 禁止在使用对象字面量声明对象时，使用相同的键名
        // 'no-obj-calls': 2, // 禁止将全局对象（Math和JSON)作为函数调用
        // 'no-useless-escape': 2, // 不要在转义字符串中不必要的字符
        // 'no-shadow-restricted-names': 2, // 禁止标识符遮蔽受限名称,全局对象 ( NaN, Infinity, undefined) 的值属性以及严格模式受限标识符eval，arguments在 JavaScript 中被视为受限名称。
        // 'require-yield': 2, // Generator 函数一定要有yield
        // 'no-this-before-super':2, //构造函数中禁止在super()调用之前使用this或super
        // 'no-dupe-class-members':2, //构造函数类成员中不允许出现重复名称
        // 'no-undef': 2,//禁止未声明的变量
        // 'no-redeclare': 2, //禁止重新声明变量
        // 'no-unused-vars': 2, //不允许未使用的变量
        // 'no-class-assign': 2, //禁止修改类声明的变量
        // 'valid-typeof': "error", //强制将typeof表达式与有效的字符串文字进行比较
        // 'no-cond-assign': "error",//禁止条件表达式中出现赋值操作符
        // 'no-unsafe-negation': "error", //禁止对关系运算符的左操作数使用否定运算符
        // 'brace-style': "error",// 把 else 放在 if 代码块关闭括号的同一行
        // 'no-regex-spaces': "error", //避免在正则表达式中使用多个空格   
    },
}
