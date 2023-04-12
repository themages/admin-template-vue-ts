

1. 搭建本地系统环境，以 macOS 为例

```shell
# 下载安装 Node.js 版本管理工具
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
# 加载命令和新配置 （~/.bash_profile、~/.zshrc、~/.profile或~/.bashrc）
source ~/.zshrc
nvm --version
# 下载使用 NodeJS 最新版本
nvm install 18.15.0
nvm use 18.15.0
node --version
# 下载使用 pnpm 包依赖管理工具
npm install -g pnpm
pnpm --version
```

2. 使用命令 `pnpm create vite vue-ts-project --template vue-ts` 初始化项目模版

```reStructuredText
.../Library/pnpm/store/v3/tmp/dlx-17929  |   +1 +
Packages are hard linked from the content-addressable store to the virtual store.
  Content-addressable store is at: /Users/zengxingqi/Library/pnpm/store/v3
  Virtual store is at:             ../../Library/pnpm/store/v3/tmp/dlx-17929/node_modules/.pnpm
.../Library/pnpm/store/v3/tmp/dlx-17929  | Progress: resolved 1, reused 1, downloaded 0, added 1, done
Scaffolding project in /Users/zengxingqi/Desktop/init/vue-ts-project...
Done. Now run:
  cd vue-ts-project
  pnpm install
  pnpm run dev
```

3. 使用命令 `pnpm create @eslint/config` 按提示步骤，初始化 `ESLint` 配置文件

```reStructuredText
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · vue
✔ Does your project use TypeScript? · Yes
✔ Where does your code run? · browser, node
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · standard-with-typescript
✔ What format do you want your config file to be in? · JavaScript
✔ Would you like to install them now? · Yes
✔ Which package manager do you want to use? · pnpm
```

4. 使用命令 `pnpm dlx husky-init && pnpm install` 初始化 `Husky` 配置文件

```reStructuredText
.../Library/pnpm/store/v3/tmp/dlx-47642  |   +2 +
.../Library/pnpm/store/v3/tmp/dlx-47642  | Progress: resolved 2, reused 2, downloaded 0, added 2, done
husky-init updating package.json
  setting prepare script to command "husky install"
husky - Git hooks installed
husky - created .husky/pre-commit
husky - Git hooks installed
Done in 3.5s
```

5. 使用命令 `pnpm add --save-dev @commitlint/config-conventional @commitlint/cli` 初始化`Commitlint` 配置文件
6. 使用命令 `npx husky add .husky/commit-msg 'npx --no -- commitlint --edit ${1}'` 创建 `Git hooks` 











##### 以下为所有涉及内容的链接

[Node.js](https://nodejs.org/) [npm](https://docs.npmjs.com/) 

[pnpm](https://pnpm.io) [nvm](https://github.com/nvm-sh/nvm) 

[Vue](https://cn.vuejs.org/) [Pinia](https://pinia.vuejs.org/) [vue-router](https://router.vuejs.org/) [lodash](https://lodash.com/) [axios](https://axios-http.com/) [dayjs](https://day.js.org/) [pinia](https://pinia.vuejs.org/) 

[iterm2](https://iterm2.com/) 

[Vite](https://cn.vitejs.dev/) [typescript](https://www.typescriptlang.org/) 

[eslint-plugin-vue](https://eslint.vuejs.org/) [commitlint](https://commitlint.js.org/) [husky](https://typicode.github.io/husky) [lint-staged](https://github.com/okonet/lint-staged) [stylelint](https://stylelint.io/) [ESLint](https://eslint.org/) 

[walletconnect](https://docs.walletconnect.com/) 