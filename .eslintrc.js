```
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],

  // add your custom rules here
  // it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    // 等级分为三级
    // 0 || 'off' - 关闭规则
    // 1 || 'warn' - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
    // 2 || 'error' - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
    'vue/html-self-closing': 'off', // 不要求标签自闭合
    'vue/max-attributes-per-line': [2, { // 多个特性的元素应该分多行撰写，每个特性一行
      'singleline': 10,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'vue/attribute-hyphenation': 0, // 忽略属性必须连字符连接
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/order-in-components': ['error', { // 组件顺序
      'order': [
        'el',
        'name',
        'key',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        ['provide', 'inject'],
        'ROUTER_GUARDS',
        'layout',
        'middleware',
        'validate',
        'scrollToTop',
        'transition',
        'loading',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'emits',
        'setup',
        'asyncData',
        'data',
        'fetch',
        'head',
        'computed',
        'watch',
        'watchQuery',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ]
    }],
    'accessor-pairs': 2, // 强制 getter 和 setter 在对象中成对出现
    'arrow-spacing': [2, { // 强制箭头函数前后使用一致的空格
      'before': true,
      'after': true
    }],
    'block-spacing': [2, 'always'], // 在打开块之后和关闭块之前，禁止或强制执行块内部的空格{ return 11 }
    'brace-style': [2, '1tbs', { // 强制在代码块中使用一致的大括号风格
      'allowSingleLine': true
    }],
    'camelcase': [0, { // 强制使用驼峰拼写法命名规定
      'properties': 'always'
    }],
    'comma-dangle': [2, 'never'], // 对象字面量项尾不能有逗号
    'comma-spacing': [2, { // 逗号前后的空格
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'], // 逗号风格，换行时在行首还是行尾
    'constructor-super': 2, // 构建方法中使用super方法
    'curly': [2, 'multi-line'], // 必须使用 if(){} 中的{}
    'dot-location': [2, 'property'], // 强制在点号之前和之后一致的换行
    'eol-last': 0, // 忽略文件末尾缺少换行符的警告
    'eqeqeq': [2, 'allow-null'], // 是否使用全等
    'generator-star-spacing': [2, { // 在生成器函数中强制执行*周围的间距
      'before': true,
      'after': true
    }],
    'handle-callback-err': [2, '^(err|error)$'], // 强制执行回调错误处理
    'indent': [2, 2, { // 强制执行一致的缩进
      'SwitchCase': 1
    }],
    'jsx-quotes': [2, 'prefer-single'], // 强制在JSX文件中一致使用单引号
    'key-spacing': [2, { // 在对象属性中强制键和值之间的一致间距
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': [2, { // 关键字前后强制执行一致的间距
      'before': true,
      'after': true
    }],
    'new-cap': [2, { // 要求构造函数名称以大写字母开头
      'newIsCap': true,
      'capIsNew': false
    }],
    'new-parens': 2, // 调用不带参数的函数时需要括号
    'no-array-constructor': 2, // 禁止阵列构建器
    'no-caller': 2, // 禁用arguments.caller 或 arguments.callee
    'no-class-assign': 2, // 禁止修改类声明的变量
    'no-cond-assign': 2, // 在条件语句中禁止赋值运算符
    'no-const-assign': 2, // 禁止修改使用const声明的变量
    'no-control-regex': 2, // 禁止正则表达式中的控制字符
    'no-delete-var': 2, // 禁止删除变量
    'no-dupe-args': 2, // 在函数定义中禁止重复参数
    'no-dupe-class-members': 2, // 禁止在类成员中重复名称
    'no-dupe-keys': 2, // 禁止对象重复声明属性
    'no-duplicate-case': 2, // 规则禁止重复案例标签
    'no-empty': 2, // 块语句中的内容不能为空
    'no-empty-character-class': 2, // 正则表达式中的[]内容不能为空
    'no-empty-pattern': 2, // 不允许空的解构模式
    'no-eval': 0, // 允许eval()
    'no-ex-assign': 2, // 禁止在catch子句中重新分配异常
    'no-extend-native': 2, // 禁止扩展原生对象
    'no-extra-bind': 2, // 禁止不必要的功能绑定
    'no-extra-boolean-cast': 0, // 忽略双重否定语法警告
    'no-extra-parens': [2, 'functions'], // 禁止不必要的括号
    'no-fallthrough': 2, // 禁止太多陈述描述
    'no-floating-decimal': 2, // 禁止浮动小数
    'no-func-assign': 2, // 禁止重新分配函数声明
    'no-implied-eval': 2, // 禁止使用类似eval()的方法
    'no-inner-declarations': [2, 'functions'], // 禁止嵌套块中的变量或函数声明
    'no-invalid-regexp': 2, // 禁止在RegExp中使用无效的正则表达式字符串
    'no-irregular-whitespace': 2, // 不能有不规则的空格
    'no-iterator': 2, // 禁止迭代器
    'no-label-var': 2, // 禁止变量名称的标签
    'no-labels': [2, { // 禁用标签语句
      'allowLoop': false,
      'allowSwitch': false
    }],
    'no-lone-blocks': 2, // 禁止不必要的嵌套块
    'no-mixed-spaces-and-tabs': 2, // 禁止使用混合空格和制表符进行缩进
    'no-multi-spaces': 2, // 禁止多余的空格
    'no-multi-str': 2, // 禁止多行字符串
    'no-multiple-empty-lines': [2, { // 禁止多个空行
      // 最大连续空行数
      'max': 1
    }],
    'no-native-reassign': 2, //不能重写native对象
    'no-negated-in-lhs': 2, // in 操作符的左边不能有!
    'no-new-object': 2, // 禁止使用new Object()
    'no-new-require': 2, // 禁止调用 require 时使用new操作符
    'no-new-symbol': 2, // 禁止 Symbolnew 操作符和 new 一起使用
    'no-new-wrappers': 2, // 禁止对String，Number 和 Boolean 使用new操作符
    'no-obj-calls': 2, // 禁止把全局对象作为函数调用
    'no-octal': 2, // 禁用八进制字面量
    'no-octal-escape': 2, // 禁止在字符串中使用八进制转义序列
    'no-path-concat': 2, // 禁止对__dirname和__filename进行字符串连接
    'no-proto': 2, // 禁止使用__proto__属性
    'no-redeclare': 2, // 禁止重复声明变量
    'no-regex-spaces': 2, // 禁止正则表达式字面量中出现多个空格
    'no-return-assign': [2, 'except-parens'], // 禁止在return语句中使用赋值语句
    'no-self-assign': 2, // 禁止自我赋值
    'no-self-compare': 2, // 禁止自我比较
    'no-sequences': 2, // 禁用逗号操作符
    'no-shadow-restricted-names': 2, // 禁止将标识符定义为受限的名字
    'no-spaced-func': 2, // 函数调用时,函数名与()之间不能有空格
    'no-sparse-arrays': 2, // 禁用稀疏数组
    'no-this-before-super': 2, // 禁止在构造函数中，在调用super()之前使用 this 或 super
    'no-throw-literal': 2, // 禁止抛出异常字面量
    'no-trailing-spaces': 2, // 一行结束后面不要有空格
    'no-undef': 2, // 禁止存在未定义的变量
    'no-undef-init': 2, // 禁止变量初始化时直接赋值undefined
    'no-unexpected-multiline': 2, // 禁止多行表达式
    'no-unmodified-loop-condition': 2, // 禁止未修改的循环条件
    'no-unneeded-ternary': [2, { // 当存在更简单的替代方案时，不允许三元运算符
      'defaultAssignment': false
    }],
    'no-unreachable': 2, // 返回，抛出，继续和中断语句后禁止无法访问的代码
    'no-unsafe-finally': 2, // 禁止finally块中的控制流语句
    'no-unused-vars': [2, { // 禁止使用未声明的变量
      'vars': 'all',
      'args': 'none'
    }],
    'no-useless-call': 2, // 禁止不必要的call()和apply()方法
    'no-useless-computed-key': 2, // 禁止在对象上使用不必要的计算属性键
    'no-useless-constructor': 2, // 禁止不必要的构造方法
    'no-useless-escape': 0, // 禁止不必要的转义用法
    'no-whitespace-before-property': 2, // 在属性之前禁止空格
    'no-with': 2, // 禁用with语句
    'one-var': [2, { // 强制函数中的变量要么一起声明要么分开声明
      'initialized': 'never'
    }],
    'operator-linebreak': [2, 'after', { // 为维护强制执行一致的换行方式
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    'padded-blocks': [2, 'never'], // 在块内要求或禁止填充
    'quotes': [2, 'single', { // 强制使用一致的反勾号``、双引号""或单引号''
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'semi': [2, 'never'], // 禁止使用分号代替ASI(自动分号插入)
    'semi-spacing': [2, { // 强制分号之前和之后使用一致的空格
      'before': false,
      'after': true
    }],
    'space-before-blocks': [2, 'always'], // 不要存在多余的块空间
    'space-before-function-paren': [2, 'never'], // 强制在function的左括号之前使用一致的空格
    'space-in-parens': [2, 'never'], // 强制在圆括号内使用一致的空格
    'space-infix-ops': 2, // 要求操作符周围有空格
    'space-unary-ops': [2, { // 强制在一元操作符前后使用一致的空格
      'words': true,
      'nonwords': false
    }],
    'spaced-comment': [2, 'always', { // 强制在注释// 或/*使用一致的空格
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    'template-curly-spacing': [2, 'never'], // 禁止模板字符串中嵌入表达式周围空格的使用
    'use-isnan': 2, // 要求使用isNaN()检查NaN
    'valid-typeof': 2, // 强制typeof表达式与有效的字符串进行比较
    'wrap-iife': [2, 'any'], // 要求IIFE使用括号括起来
    'yield-star-spacing': [2, 'both'],
    // 要求或禁止Yoda条件。 if("red" === color) { //字面量在前，变量在后 }
    'yoda': [2, 'never'], //  比较绝不能是Yoda条件（需要变量在前，字面量在后）
    'prefer-const': 2, // 要求使用const声明那些声明后不再被修改的变量
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': 0, // build 压缩时会自动清除console 所以忽略此校验
    'object-curly-spacing': [2, 'always', { // 强制在大括号中使用一致的空格
      objectsInObjects: false
    }],
    'array-bracket-spacing': [2, 'never'] // 是否允许非空数组里面有多余的空格
  }
}

```
