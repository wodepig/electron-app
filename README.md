## 说明

用来测试electron-vite和mini-electron的兼容问题.

| 日期       | 变动          | mb版本                 | 结果         | 备注 |
| -------- | ----------- | -------------------- | ---------- | -- |
| 26年5月29日 | 空白项目        | miniblink132\_260528 | 成功, 菜单栏没问题 | 无  |
| 26年5月29日 | 迁移源项目,dev分支 | miniblink132\_260528 | 失败         | 无  |
| 26年5月30日 | 迁移源项目,dev分支 | miniblink132\_260528 | 失败         | 无法设置窗口标题  |

指定minielectron: 在electron-builder.yml中指定electronDist: D:\\soft\\electron
打包命令: pnpm build:win:mode
默认配置文件:
.env.demo
```yml
VITE_UL_CONF_AK=1
VITE_UL_CONF_SK=2
VITE_UL_CONF_FILEKEY=3
VITE_UL_CONF_URL=http://localhost:3000
VITE_APP_NAME=演示
VITE_APP_EXE_NAME=演示
VITE_APP_DESC=演示
VITE_APP_ID=demo.xxdl.xyz
VITE_APP_ICON=image/shein.png
VITE_APP_HOME=https://dcnjo468lptb.feishu.cn/wiki/Gtq7wZSVzipN17k1NSacffB3nad
VITE_APP_LINKS=😀|关于我|https://dcnjo468lptb.feishu.cn/wiki/Gtq7wZSVzipN17k1NSacffB3nad
VITE_AUTHOR_NAME=筱筱
VITE_AUTHOR_WX=xxdlovo
VITE_AUTHOR_WX_IMG=image/wx_blank.png
VITE_AUTHOR_EMAIL=dddgoal@163.com
VITE_ADMIN_PASSWORD=123456

```

# electron-app

An Electron application with Vue and TypeScript

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Project Setup

### Install

```bash
$ pnpm install
```

### Development

```bash
$ pnpm dev
```

### Build

```bash
# For windows
$ pnpm build:win

# For macOS
$ pnpm build:mac

# For Linux
$ pnpm build:linux
```

