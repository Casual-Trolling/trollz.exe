const { app, BrowserWindow } = require('electron');
const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 550,
    height: 600,
    icon: __dirname + '/troll.ico',
    movable: false,
    resizable: false,
    closable: false,
    alwaysOnTop: true,
    frame: false,
    titleBarStyle: 'hidden'
  });

  mainWindow.setMenu(null)
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.on('close', e => {e.preventDefault()})

};


app.on('ready', () => {

  if (process.platform == 'darwin') {
    exec('open https://youtu.be/PobQzVsj7GE')}
    
    if (process.platform == 'win32') {
      exec('start msedge https://youtu.be/PobQzVsj7GE')
    }
  
  createWindow()

});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});