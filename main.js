// 引入electron并创建一个Browserwindow
const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

 
// 保持window对象的全局引用,避免JavaScript对象被垃圾回收时,窗口被自动关闭.
let mainWindow
 
function createWindow () {
//创建浏览器窗口,宽高自定义具体大小你开心就好
mainWindow = new BrowserWindow({
  width: 1100, 
  height: 680, 
  webPreferences:{
    preload: path.join(__dirname, './electron/preload.js')
  },
  contextIsolation: true, // 确保上下文隔离
  enableRemoteModule: false, // 禁用 remote 模块
  frame: false,
  // transparent: true,
  backgroundColor: '#00000000',
  titleBarStyle: 'hidden',
  titleBarOverlay:{
    color:'#E3EAF5',
    symbolColor: '#5542f6',
    height:32,
}
 })
 
  /* 
   * 加载应用-----  electron-quick-start中默认的加载入口
   mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
  */
  // 加载应用----适用于 react 项目
  mainWindow.loadURL('http://localhost:5173/');
  
  // 打开开发者工具，默认不打开
  // mainWindow.webContents.openDevTools()
 
  // 关闭window时触发下列事件.
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}
 
// 当 Electron 完成初始化并准备创建浏览器窗口时调用此方法
app.on('ready', createWindow)
 
// 所有窗口关闭时退出应用.
app.on('window-all-closed', function () {
  // macOS中除非用户按下 `Cmd + Q` 显式退出,否则应用与菜单栏始终处于活动状态.
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipcMain.on('closeWindow', function () {
    mainWindow.close()
})

ipcMain.on('maximizeWindow', function () {
    if (mainWindow.isMaximized()) {
      mainWindow.restore()
    } else {
      mainWindow.maximize()
    }
})

ipcMain.on('minimizeWindow', function () {
    mainWindow.minimize()
})

app.on('activate', function () {
   // macOS中点击Dock图标时没有已打开的其余应用窗口时,则通常在应用中重建一个窗口
  if (mainWindow === null) {
    createWindow()
  }
})
 
// 你可以在这个脚本中续写或者使用require引入独立的js文件. 
