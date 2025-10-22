# 前端学习知识库 - AGENTS.md

## 项目概述

这是一个系统化的前端学习知识库项目，用于记录和整理前端开发的学习过程和知识点。项目采用渐进式学习路径，从基础的 HTML、CSS 到现代前端框架 React，通过大量实例代码和文档来帮助理解和掌握前端技术。

**项目类型：** 学习型代码示例库（非生产项目）

**主要技术栈：**
- HTML5
- CSS3
- JavaScript
- React (基于 CDN 引入的方式)
- Babel (用于 JSX 转换)

**项目特点：**
- 知识点按序号组织，便于系统学习
- 每个知识点都有独立的示例文件
- 包含详细的中文注释和说明
- 采用渐进式学习路径设计

## 目录结构

```
frontEndLearning/
├── 01_html/              # HTML 基础学习模块
│   ├── 01_HTML初体验.html
│   ├── 02_HTML标签属性.html
│   ├── ...               # 共27个HTML知识点示例
│   └── image/            # HTML示例所需图片资源
├── 02_CSS/               # CSS 基础学习模块
│   ├── 01_CSS的编写位置/
│   ├── 02_样式表的优先级/
│   ├── 03_CSS语法规范/
│   ├── 04_CSS代码风格/
│   └── 06_CSS复合选择器/
├── html+css/             # HTML+CSS 综合资料
│   └── pdf/              # 相关PDF文档
├── react/                # React 学习模块
│   ├── 01_react_html/    # React基础示例
│   │   ├── basic_code/   # 基础代码示例
│   │   ├── react入门.md  # React入门文档
│   │   └── png/          # 文档配图
│   └── js/               # React相关库文件
│       ├── react.development.js
│       ├── react-dom.development.js
│       └── babel.min.js
├── favicon.ico
└── README.md
```

## 学习路径

### 1. HTML 模块 (01_html/)

HTML 模块包含27个循序渐进的学习示例，涵盖以下主题：

- **基础入门：** HTML初体验、标签属性、基本属性
- **文档结构：** 注释、文档声明、字符编码、语言设置、标准结构
- **排版与语义：** 排版标签、语义化标签、块级元素与行内元素
- **文本处理：** 常用文本标签、不常用文本标签
- **媒体与链接：** 图片标签、超链接、文件跳转、锚点跳转
- **数据展示：** 列表、表格、跨行跨列
- **表单交互：** 表单、表单控件
- **高级特性：** 框架标签、字符实体、meta元信息

**学习建议：** 按照文件编号顺序学习，每个文件都是独立的可运行示例。

### 2. CSS 模块 (02_CSS/)

CSS 模块按主题组织，包含以下子目录：

- **01_CSS的编写位置：** 行内样式、内部样式、外部样式
- **02_样式表的优先级：** CSS优先级规则
- **03_CSS语法规范：** 语法规范和最佳实践
- **04_CSS代码风格：** 代码风格指南
- **06_CSS复合选择器：** 复合选择器的使用

**学习建议：** 每个子目录包含相关主题的完整示例，建议按目录编号顺序学习。

### 3. React 模块 (react/)

React 模块采用基于 CDN 的学习方式，无需构建工具：

**核心库文件 (react/js/)：**
- `react.development.js` - React 核心库
- `react-dom.development.js` - React DOM 操作库
- `babel.min.js` - JSX 语法转换器

**学习资料 (react/01_react_html/)：**
- `react入门.md` - React 基础概念和特点介绍
- `basic_code/hello_react.html` - React Hello World 示例

**React 示例代码结构：**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>React示例</title>
</head>
<body>
    <div id="test"></div>
    
    <!-- 引入React核心库 -->
    <script src="../../js/react.development.js"></script>
    <script src="../../js/react-dom.development.js"></script>
    <script src="../../js/babel.min.js"></script>
    
    <!-- 使用 type="text/babel" -->
    <script type="text/babel">
        const VDOM = <h1>Hello,React</h1>
        ReactDOM.render(VDOM, document.getElementById('test'))
    </script>
</body>
</html>
```

## 如何使用本项目

### 运行示例文件

所有 HTML 文件都可以直接在浏览器中打开运行：

1. **HTML/CSS 示例：**
   - 直接双击 `.html` 文件
   - 或使用浏览器的"打开文件"功能

2. **React 示例：**
   - 由于使用了本地 JS 库文件，建议使用本地服务器运行
   - 推荐使用 VS Code 的 Live Server 插件
   - 或使用 Python 简单服务器：
     ```bash
     # Python 3
     python -m http.server 8000
     ```
   - 然后在浏览器访问 `http://localhost:8000`

### 学习建议

1. **循序渐进：** 按照模块顺序学习（HTML → CSS → React）
2. **动手实践：** 每个示例都要亲自运行和修改
3. **理解原理：** 阅读代码注释，理解每个知识点的原理
4. **做笔记：** 在学习过程中记录自己的理解和疑问
5. **扩展练习：** 在示例基础上进行扩展和创新

### 添加新内容

当添加新的学习内容时，请遵循以下规范：

1. **文件命名：** 使用序号+描述的方式，如 `28_新知识点.html`
2. **代码注释：** 添加清晰的中文注释说明
3. **独立性：** 每个示例应该是独立可运行的
4. **资源管理：** 图片等资源放在对应的 `image/` 或 `png/` 目录

## 开发工具建议

- **代码编辑器：** Visual Studio Code
  - 推荐插件：Live Server、HTML CSS Support、Auto Rename Tag
- **浏览器：** Chrome 或 Firefox（推荐使用开发者工具）
- **版本控制：** Git（项目已初始化 Git 仓库）

## 项目维护

### Git 工作流

项目使用 Git 进行版本控制：

```bash
# 查看当前状态
git status

# 添加新文件
git add .

# 提交更改
git commit -m "添加：新的学习示例"

# 查看提交历史
git log
```

### 更新日志

本项目作为个人学习知识库，会持续更新和迭代。欢迎批评指正！

## 注意事项

1. **浏览器兼容性：** 示例代码主要在现代浏览器中测试，建议使用最新版本的 Chrome 或 Firefox
2. **React 版本：** 当前使用的是 React 18.0.0 开发版本（通过 CDN 引入）
3. **学习目的：** 本项目仅用于学习目的，不适合直接用于生产环境
4. **文件编码：** 所有文件使用 UTF-8 编码

## 相关资源

### 官方文档
- [MDN Web Docs](https://developer.mozilla.org/zh-CN/) - HTML/CSS/JavaScript 权威文档
- [React 中文官网](https://react.docschina.org/learn) - React 学习资源
- [React 英文官网](https://react.dev/learn) - React 官方文档

### CDN 资源
- React 核心库：https://unpkg.com/react@18.0.0/umd/react.development.js
- React DOM：https://unpkg.com/react-dom@18.0.0/umd/react-dom.development.js
- Babel：https://unpkg.com/babel-standalone@6/babel.min.js

## 贡献指南

虽然这是个人学习项目，但欢迎提出建议和改进：

1. 发现错误或不准确的内容
2. 有更好的示例或解释方式
3. 建议添加新的学习主题
4. 代码优化建议

## 许可证

本项目为个人学习项目，代码和文档可自由使用和参考。

---

**项目维护者：** @RichardWGang  
**最后更新：** 2025年10月22日
