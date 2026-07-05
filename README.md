## 说明

用来测试electron-vite和mini-electron的兼容问题.

| 日期       | 变动          | mb版本                 | 结果         | 备注 |
| -------- | ----------- | -------------------- | ---------- | -- |
| 26年5月29日 | 空白项目        | miniblink132\_260528 | 成功, 菜单栏没问题 | 无  |
| 26年5月29日 | 迁移源项目,dev分支 | miniblink132\_260528 | 失败         | 无  |
| 26年5月30日 | 迁移源项目,dev分支 | miniblink132\_260528 | 失败         | 无法设置窗口标题  |
| 26年7月4日 | 迁移源项目,dev分支 | miniblink132_260622 | 失败         | 标题没事但是打开无内容/无页面数据  |

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

## 问题描述
大佬, 用minielectron本地启动没问题, 打包后启动首页正常, 创建新窗口后还是展示为首页内容, 而且也无法打开控制台 可能会是啥问题
  log.info(`加载窗口路由_ialx ${__dirname.toString()},${pageUrl.toString()}`)
  const htmlPath = join(__dirname, '../renderer/index.html')
  win.loadFile(htmlPath, { hash: pageUrl }).catch(() => {
    // 降级方案：通过JS设置路由
    win.loadFile(htmlPath).then(() => {
      setTimeout(() => {
        win.webContents.executeJavaScript(`
          if (window.location.hash !== '#${pageUrl}') {
            window.location.hash = '#${pageUrl}';
          }
        `).catch(e => log.error('设置路由失败:', e))
      }, 500)
    })
  })
打印日志: 
加载窗口路由_ialx D:\project\temp\electron-app\dist\工具-1.1.0-win\resources\app.asar\out\main,/log


## 问题路径
通过菜单创建的窗口, 菜单定义在: src\main\index.ts的ensureMenuCreated函数中
创建窗户的入口在  src\main\utils\window.ts的createWindows函数中
实际出问题的入口是 loadWindowRoute函数