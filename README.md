# work-summary-vitePress

个人工作总结文档站（VitePress 版），由原 GitBook 项目 `work-summary` 迁移而来。

- **在线站点**：<https://tomgou.github.io/work-summary-vitePress/>
- **代码仓库**：<https://github.com/TOMGOU/work-summary-vitePress>

## 目录结构

```
work-summary-vitePress/
├── .github/workflows/deploy.yml   # GitHub Actions 自动部署工作流
├── .gitignore                     # 忽略 node_modules / 构建产物 / 缓存
├── package.json                   # 依赖与脚本
└── docs/                          # VitePress 源文件根目录
    ├── .vitepress/
    │   └── config.mts             # 站点配置：nav / sidebar / 搜索 / 主题
    ├── index.md                   # 站点首页（hero + 分类卡片）
    ├── imgs/                      # 全站图片资源
    └── pages/                     # 全部文档内容
        ├── css/<主题>/index.md
        ├── js/<主题>/index.md
        ├── vue/<主题>/index.md
        ├── react/<主题>/index.md
        ├── threeJS/<主题>/index.md
        ├── node/<主题>/index.md
        ├── webpack/<主题>/index.md
        ├── interview/<主题>/index.md
        ├── experience/<主题>/index.md
        └── ...
```

## 一、本地运行

### 1. 环境要求

- **Node.js >= 18**（推荐 20 LTS，查看版本：`node -v`）
- 包管理器：npm（随 Node 自带）或 yarn 均可

### 2. 安装依赖

首次克隆或拉取代码后，在项目根目录执行：

```bash
npm install
# 或
yarn
```

> 依赖只有两个：`vitepress` 和 `markdown-it-mathjax3`（用于 threeJS/Math 页面的数学公式渲染）。

### 3. 启动本地开发服务器

```bash
npm run dev
# 或
yarn dev
```

启动后终端会输出：

```
  vitepress v1.x.x
  ➜  Local:   http://localhost:5173/work-summary-vitePress/
```

浏览器打开该地址即可实时预览，修改 markdown 保存后自动热更新。

> **注意**：本地地址会带 `/work-summary-vitePress/` 前缀，这是因为 [config.mts](docs/.vitepress/config.mts) 中配置了 `base` 用于 GitHub Pages 子路径部署，属正常现象，不是 bug。

### 4. 本地构建预览（可选）

```bash
npm run build      # 构建产物输出到 docs/.vitepress/dist
npm run preview    # 本地预览构建产物
```

> 日常写文档只需 `dev`；`build` 主要由 GitHub Actions 在服务器上执行，本地一般不需要手动跑。

## 二、如何写文章

### 1. 新增/修改一篇文章

按目录约定在 `docs/pages/<分类>/<主题>/index.md` 创建或修改文件，例如新增一篇 CSS 文章：

```
docs/pages/css/新主题/index.md
```

### 2. 注册到侧边栏

新文章必须到 [docs/.vitepress/config.mts](docs/.vitepress/config.mts) 的 `themeConfig.sidebar` 对应分组里加一行，才能出现在左侧导航：

```ts
{ text: '文章标题', link: '/pages/css/新主题/' },
```

> `link` 以 `/pages/` 开头、以 `/` 结尾（指向目录下的 index.md）。改完配置后 `yarn dev` 会自动重启生效。

### 3. 图片

图片统一放在 `docs/imgs/`，在 md 中使用相对路径引用（注意目录层级）：

```md
![说明文字](../../../imgs/xxx.png)
```

### 4. ⚠️ markdown 书写红线（重要）

VitePress 会把 markdown 当作 **Vue 模板**编译，以下内容**裸写在正文中会导致构建失败**，必须放在代码围栏（``` 包裹）或行内代码（反引号包裹）里：

| 危险写法 | 示例 | 后果 |
|---|---|---|
| Vue 插值 | 正文里裸写 `{{ count }}` | 被当成 Vue 插值报错 |
| 事件指令 HTML | `<comA @click="do()"></comA>` | 表达式无法解析（如 `do()`）直接构建失败 |
| 绑定指令 | `v-if` / `:class="xxx"` 裸写在正文 | 编译异常 |
| 裸泛型尖括号 | `Partial<T>`（TS 类型名写在正文） | `<Partial>` 被当成未闭合 HTML 元素 |
| 裸尖括号占位符 | `<filename>`、`<format>` 这类命令行占位符 | 被当成未闭合 HTML 元素 |

正确写法示例：

````md
- 正确：`Partial<T>`（加反引号）
- 正确：`<comA @click="do()"></comA>`（加反引号）
- 正确：代码块用 ``` 包裹
````

## 三、如何部署上线（更新 https://tomgou.github.io/work-summary-vitePress/）

部署已全自动化，**只要把代码推送到 GitHub 的 main 分支，剩下的全部自动完成**。

### 1. 日常更新流程（最常用）

```bash
# 1. 修改/新增文档后
git add .
git commit -m "docs: 更新 xxx 文章"
git push

# 2. 等待 2~3 分钟，GitHub Actions 自动完成 构建部署

# 3. 访问站点确认（必要时强刷 Ctrl+F5）
#    https://tomgou.github.io/work-summary-vitePress/
```

### 2. 查看构建进度/状态

推送后打开仓库 Actions 页面查看实时构建日志：

- 构建记录：<https://github.com/TOMGOU/work-summary-vitePress/actions>
- 绿色 ✅ = 部署成功；红色 ❌ = 构建失败，点进去看日志定位（常见原因：markdown 里出现了上文「书写红线」中的裸语法）

### 3. 自动部署的工作原理

工作流文件：[.github/workflows/deploy.yml](.github/workflows/deploy.yml)

```
push main 分支
  └─> GitHub Actions 触发
        ├─ ① checkout 代码（完整历史，用于 lastUpdated 修订时间）
        ├─ ② 安装 Node 20 + npm ci 安装依赖
        ├─ ③ npm run build（在 GitHub 服务器上构建）
        ├─ ④ 上传构建产物（docs/.vitepress/dist）
        └─ ⑤ actions/deploy-pages 发布到 GitHub Pages
```

- Pages 的构建源已设置为 **GitHub Actions**（首次部署时由工作流 `configure-pages` 的 `enablement: true` 自动启用）
- 站点地址中的 `/work-summary-vitePress/` 子路径对应 [config.mts](docs/.vitepress/config.mts) 里的 `base: '/work-summary-vitePress/'`，**如果以后仓库改名，base 必须同步修改**

### 4. 手动重新部署（偶尔需要）

如果推送了代码但站点没更新：

1. 打开 <https://github.com/TOMGOU/work-summary-vitePress/actions>
2. 选中最新一次运行 → 右上角 **Re-run all jobs**
3. 等待 2~3 分钟

如果运行报错 `Pages not enabled`（正常情况下不会出现）：

> 仓库 → Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**，然后回到 Actions 页面 Re-run。

### 5. 本地直推被拒时（Push Protection）

GitHub 会在推送时扫描密钥。如果 push 被拒并提示 `GITHUB PUSH PROTECTION ... Push cannot contain secrets`：

1. 根据报错中的 `path` 找到文件和行号
2. 将密钥/token 替换为占位符（如 `<my-token>`）并脱敏
3. 由于密钥已进入本地提交历史，需要重写该提交再推：

```bash
git add <修改的文件>
git commit --amend --no-edit   # 修正最近一次提交（仅限未推送成功的提交）
git push
```

> 教训：不要在笔记中记录真实 token，泄露的 token 应尽快到 GitHub → Settings → Developer settings → Personal access tokens 撤销。

## 四、常用命令速查

| 命令 | 作用 |
|---|---|
| `npm install` / `yarn` | 安装依赖（首次或拉取新代码后） |
| `npm run dev` / `yarn dev` | 启动本地开发服务器（热更新） |
| `npm run build` | 本地构建（一般不需要，CI 会做） |
| `npm run preview` | 预览本地构建产物 |
| `git push` | 推送代码并触发自动部署 |

## 五、相关链接

- 知识结构图：<https://www.processon.com/view/link/60960b635653bb147738b082#map>
- 数据结构与算法：<https://tomgou.github.io/algorithm-study/>
- 3D 相关知识总结：<https://tomgou.github.io/3d-study-notes/>
- 3D 动效组件库：<https://tomgou.github.io/vue-three-components/>
- 自动化 selenium：<https://tomgou.github.io/share_automation/pages/selenium/>

---

Copyright © tomgou 2022
