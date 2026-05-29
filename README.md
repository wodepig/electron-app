## 说明

用来测试electron-vite和mini-electron的兼容问题.

| 日期       | 变动          | mb版本                 | 结果         | 备注 |
| -------- | ----------- | -------------------- | ---------- | -- |
| 26年5月29日 | 空白项目        | miniblink132\_260528 | 成功, 菜单栏没问题 | 无  |
| 26年5月29日 | 迁移源项目,dev分支 | miniblink132\_260528 | 失败         | 无  |

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

