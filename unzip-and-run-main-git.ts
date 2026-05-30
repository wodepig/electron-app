import { execSync, spawn } from 'child_process';
import { join } from 'path';
import { existsSync, mkdirSync, rmSync } from 'fs';

// ===================== 配置 =====================
const ZIP_FILE = 'electron-app-1.0.0-win.zip';
const BAT_FILE = 'run-with-log.bat';
const SEVEN_ZIP_PATH = 'C:\\Program Files\\7-Zip\\7z.exe';
// ================================================

// 当前目录
const currentDir = process.cwd();
const zipPath = join(currentDir, ZIP_FILE);

// 解压目标目录
const extractDir = join(currentDir, 'electron-app-1.0.0-win');
const batPath = join(extractDir, BAT_FILE);

// 检查压缩包
if (!existsSync(zipPath)) {
  console.error(`❌ 找不到压缩包：${zipPath}`);
  process.exit(1);
}

// 检查7zip
if (!existsSync(SEVEN_ZIP_PATH)) {
  console.error(`❌ 未找到 7-Zip，请检查路径：${SEVEN_ZIP_PATH}`);
  process.exit(1);
}

try {
  // ===================== 新增功能：解压前先删除旧目录 =====================
  if (existsSync(extractDir)) {
    console.log(`✅ 检测到旧目录，正在删除：${extractDir}`);
    rmSync(extractDir, { recursive: true, force: true });
  }

  // 创建新目录
  mkdirSync(extractDir);
  console.log(`✅ 开始解压到目录：${extractDir}`);

  // 解压
  execSync(`"${SEVEN_ZIP_PATH}" x "${zipPath}" -o"${extractDir}" -y`, {
    stdio: 'ignore',
    windowsHide: true,
  });

  console.log('✅ 解压完成');

  // 检查 bat
  if (!existsSync(batPath)) {
    console.error(`❌ 找不到批处理文件：${batPath}`);
    process.exit(1);
  }

  console.log(`✅ 准备运行：${batPath}`);

  // 运行 bat
  const batProcess = spawn('cmd.exe', ['/c', 'start', 'cmd.exe', '/k', batPath], {
    cwd: extractDir,
    shell: true,
    stdio: 'inherit',
  });

  batProcess.on('close', (code) => {
    console.log(`✅ 脚本执行完毕，退出码：${code}`);
  });

} catch (err) {
  console.error('❌ 执行失败：', err);
  process.exit(1);
}