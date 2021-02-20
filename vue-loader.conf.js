'use strict'

module.exports = {
  // You can set the vue-loader configuration by yourself.
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    // 等级分为三级： 0-不显示；1-显示警告warning; 2-显示错误error

    ////////////////////
    ///// vue.规范 /////
    ///////////////////
    "vue/max-attributes-per-line": [1, {              //多个特性的元素应该分多行撰写，每个特性一行
      "singleline": 10,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/singleline-html-element-content-newline": 0, // 在单行元素的内容前后需要换行符
    "vue/multiline-html-element-content-newline": 0,  // 在多行元素的内容之前和之后需要换行符
    "vue/name-property-casing": [1, "PascalCase"],    // JS/JSX中的组件名应该始终是帕斯卡命名法
    "vue/no-v-html": 0,                               // 忽略v-html
    "vue/prop-name-casing": [1, "camelCase"],         // 在声明prop的时候，其命名应该始终使用驼峰命名
    "vue/require-v-for-key": 1,                       // 给v-for设置键值，与key结合使用，可以高效的更新虚拟DOM
    "vue/no-use-v-if-with-v-for": [2, {
      "allowUsingIterationVar": false
    }],                                               // 不要把 v-if 和 v-for 用在同一个元素上——因为v-for 比 v-if 具有更高的优先级
    "vue/order-in-components": [0, {                  // 组件/实例的选项的顺序
      "order": [
        "el",
        "name",
        "parent",
        "functional",
        ["delimiters", "comments"],
        ["components", "directives", "filters"],
        "extends",
        "mixins",
        "inheritAttrs",
        "model",
        ["props", "propsData"],
        "data",
        "computed",
        "watch",
        "LIFECYCLE_HOOKS",
        "methods",
        ["template", "render"],
        "renderError"
      ]
    }],

    ////////////////////
    ///// js.规范 /////
    ///////////////////
    'accessor-pairs': 2,              // 在对象中强制使用getter/setter
    'arrow-spacing': [2, {            // 在箭头函数之前/之后需要空格
      'before': true,
      'after': true
    }],
    'block-spacing': [2, 'always'],   // 在打开块之后和关闭块之前，禁止或强制执行块内部的空格
    'brace-style': [1, '1tbs', {      // 需要大括号样式
      'allowSingleLine': true
    }],
    'camelcase': [0, {                // 需要驼峰命名
      'properties': 'always'
    }],
    'comma-dangle': [2, 'never'],     // 要求或禁止使用尾随逗号；最后一个属性是不需要逗号
    'comma-spacing': [2, {            // 强制逗号旁边的间距： 左右一个空格
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'],       // 逗号风格
    'constructor-super': 2,           // 构建方法中使用super方法
    'curly': [2, 'multi-line'],       // if(){} 中只有一行时允许忽略{}
    'dot-location': [1, 'property'],  // 在dot之前和之后强制换行
    'eol-last': 2,                    // 强制文件以换行符结束
    'eqeqeq': [0, "always", { "null": "ignore" }], // 强制使用全等
    'generator-star-spacing': [2, {   // 在生成器函数中强制执行*周围的间距
      'before': true,
      'after': true
    }],
    'handle-callback-err': [1, '^(err|error)$'], // 强制执行回调错误处理
    'indent': [2, 2, {                  // 强制执行一致的缩进
      'SwitchCase': 1
    }],
    'jsx-quotes': [2, 'prefer-single'], // 强制在JSX文件中一致使用单引号
    'key-spacing': [2, {                // 在对象属性中强制键和值之间的一致间距
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': [2, {            // 关键字前后强制执行一致的间距
      'before': true,
      'after': true
    }],
    'new-cap': [2, {                    // 要求构造函数名称以大写字母开头
      'newIsCap': true,
      'capIsNew': false
    }],
    'new-parens': 2,                    // 调用不带参数的函数时需要括号
    'no-array-constructor': 2,          // 禁止阵列构建器
    'no-caller': 2,                     // 禁止使用来电者/被叫者
    'no-console': 'off',                // 不允许使用控制台
    'no-class-assign': 2,               // 禁止修改类声明的变量
    'no-cond-assign': 2,                // 在条件语句中禁止赋值运算符
    'no-const-assign': 2,               // 禁止修改使用const声明的变量
    'no-control-regex': 0,              // 禁止正则表达式中的控制字符
    'no-delete-var': 2,                 // 禁止删除变量
    'no-dupe-args': 2,                  // 在函数定义中禁止重复参数
    'no-dupe-class-members': 2,         // 禁止在类成员中重复名称
    'no-dupe-keys': 2,                  // 禁止对象重复声明属性
    'no-duplicate-case': 2,             // 规则禁止重复案例标签
    'no-empty-character-class': 2,      // 禁止在正则表达式中使用空字符类
    'no-empty-pattern': 2,              // 不允许空的解构模式
    'no-eval': 2,                       // 禁止使用eval（）
    'no-ex-assign': 2,                  // 禁止在catch子句中重新分配异常
    'no-extend-native': 2,              // 禁止扩展原生对象
    'no-extra-bind': 2,                 // 禁止不必要的功能绑定
    'no-extra-boolean-cast': 2,         // 禁止不必要的布尔类型转换
    'no-extra-parens': [2, 'functions'], // 禁止不必要的括号
    'no-fallthrough': 2,                 // 禁止太多陈述描述
    'no-floating-decimal': 2,            // 禁止浮动小数
    'no-func-assign': 2,                 // 禁止重新分配函数声明
    'no-implied-eval': 2,                // 禁止使用隐式eval
    'no-inner-declarations': [2, 'functions'],  // 禁止嵌套块中的变量或函数声明
    'no-invalid-regexp': 2,              // 禁止在RegExp中使用无效的正则表达式字符串
    'no-irregular-whitespace': 2,        // 不允许不规则的空白
    'no-iterator': 2,                    // 禁止迭代器
    'no-label-var': 2,                   // 禁止变量名称的标签
    'no-labels': [2, {                   // 消除 JavaScript 中使用带标签的语句
      'allowLoop': false,
      'allowSwitch': false
    }],
    'no-lone-blocks': 2,                 // 禁止不必要的嵌套块
    'no-mixed-spaces-and-tabs': 2,       // 禁止使用混合空格和制表符进行缩进
    'no-multi-spaces': 2,                // 禁止多个空格
    'no-multi-str': 2,                   // 禁止多行字符串
    'no-multiple-empty-lines': [2, {     // 禁止多个空行
      'max': 1
    }],
    'no-native-reassign': 2,              // 不允许修改只读全局变量
    'no-negated-in-lhs': 2,               // in 操作符的左边不能有!
    'no-new-object': 2,                   // 不允许使用Object构造函数
    'no-new-require': 2,                  // 消除new require表达的使用
    'no-new-symbol': 2,                   // 防止Symbol与new 同时使用的意外错误
    'no-new-wrappers': 2,                 // 杜绝使用Strin，Number以及Boolean与new操作
    'no-obj-calls': 2,                    // 不允许调用Math，JSON和Reflect对象作为功能
    'no-octal': 2,                        // 不允许使用八进制文字
    'no-octal-escape': 2,                 // 不允许字符串文字中的八进制转义序列
    'no-path-concat': 2,                  // 防止 Node.js 中的目录路径字符串连接无效
    'no-proto': 2,                        // 禁用 __proto__ 属性
    'no-redeclare': 2,                    // 消除在同一范围内具有多个声明的变量
    'no-regex-spaces': 2,                 // 在正则表达式文字中不允许有多个空格
    'no-return-assign': [2, 'except-parens'], // 消除return陈述中的任务，除非用括号括起来
    'no-self-assign': 2,                  // 禁止自我赋值
    'no-self-compare': 2,                 // 禁止自身比较
    'no-sequences': 2,                    // 禁用逗号操作符
    'no-shadow-restricted-names': 2,      // 禁止将标识符定义为受限的名字
    'no-spaced-func': 2,                  // 函数调用时 函数名与()之间不能有空格
    'no-sparse-arrays': 2,                // 禁用稀疏数组， [1,,2]
    'no-this-before-super': 2,            // 在调用super()之前不能使用this或super
    'no-throw-literal': 2,                // 禁止抛出字面量错误 throw "error";
    'no-trailing-spaces': 2,              // 一行结束后面要不要有空格
    'no-undef': 0,                        // 不能有未定义的变量
    'no-undef-init': 2,                   // 变量初始化时不能直接给它赋值为undefined
    'no-unexpected-multiline': 2,         // 避免多行表达式
    'no-unmodified-loop-condition': 2,    // 禁止未修改的循环条件
    'no-unneeded-ternary': [2, {          // 当存在更简单的替代方案时，不允许三元运算符
      'defaultAssignment': false
    }],
    'no-unreachable': 2,                  // 返回，抛出，继续和中断语句后禁止无法访问的代码
    'no-unsafe-finally': 2,               // 禁止finally块中的控制流语句
    'no-unused-vars': [1, {               // 禁止使用未声明的变量
      'vars': 'all',
      'args': 'none'
    }],
    'no-useless-call': 2,                 // 禁止不必要的call()和apply()方法
    'no-useless-computed-key': 2,         // 禁止在对象上使用不必要的计算属性键
    'no-useless-constructor': 2,          // 禁止不必要的构造方法
    'no-useless-escape': 0,               // 禁止不必要的转义用法
    'no-whitespace-before-property': 2,   // 在属性之前禁止空格
    'no-with': 2,                         // 禁用with
    'one-var': [2, {
      'initialized': 'never'              // 要求每个作用域的初始化的变量有多个变量声明
    }],
    'operator-linebreak': [2, 'after', {  // 为维护强制执行一致的换行方式
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    'padded-blocks': [2, 'never'],         // 在块内要求或禁止填充
    'quotes': [2, 'single', {              // 引号类型 `` "" ''
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'semi': [2, 'never'],                  // 语句不需要分号结尾
    'semi-spacing': [2, {                  // 强制分号间隔
      'before': false,
      'after': true
    }],
    'space-before-blocks': [2, 'always'],   // 不要存在多余的块空间
    'space-before-function-paren': [2, 'never'], // 函数定义时括号前面不需要有空格
    'space-in-parens': [2, 'never'],        // 小括号里面要不要有空格
    'space-infix-ops': 2,                   // 强制二元运算符左右各有一个空格
    'space-unary-ops': [2, {
      'words': true,                        // 如：new, delete, typeof, void, yield 左右必须有空格
      'nonwords': false                     // 一元运算符，如：-，+，--，++，!，!!左右不能有空格
    }],
    'spaced-comment': [2, 'always', {       // 注释开始后，此规则将强制间距的一致性//或/*
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    'template-curly-spacing': [2, 'never'], // 不允许大括号内的空格
    'use-isnan': 2,                         // 禁止比较时使用NaN，只能用isNaN()
    'valid-typeof': 2,                      // 必须使用合法的typeof的值
    'wrap-iife': [2, 'any'],                // 立即执行函数表达式的小括号风格
    'yield-star-spacing': [2, 'both'],      // 强制执行*周围 yield*表达式的间距，两侧都必须有空格
    'yoda': [2, 'never'],                   // 禁止尤达条件
    'prefer-const': 1,                      // 首选const
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 正式环境禁止使用debugger
    'object-curly-spacing': [2, 'always', { // 不允许以对象元素开始和/或以对象元素结尾的对象的大括号内的间距
      objectsInObjects: false
    }],
    'array-bracket-spacing': [2, 'never']   // 不允许数组括号内的空格
  }
}
