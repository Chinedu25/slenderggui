const path = require('path');

const { app, BrowserWindow , ipcMain} = require('electron');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  // Create the browser window.
   mainWindow = new BrowserWindow({
    width: 800,
    height: 500,
    frame: false,
    titleBarStyle: 'customButtonsOnHover',
    webPreferences: {
        preload: path.join(__dirname, "preload.ts"),
       //preload: `${__dirname}/preload.js`,
        nodeIntegration: true,
        // contextIsolation: findAllByTestId,
        //@ts-ignore
        enableRemoteModule: true,
        contextIsolation: false,
      },
      resizable: false,

  });

 
  //mainWindow.maximize();

  // and load the index.html of the app. if Development
  mainWindow.loadURL("http://localhost:3000");

  // and load the index.html of the app. if executable
  // mainWindow.loadURL(
  //   url.format({
  //     pathname: path.join(__dirname, "index.html"),
  //     protocol: "file:",
  //     slashes: true,
  //   })
  // );

  mainWindow.on("closed", () => (mainWindow = null));
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow();
  
    app.on("activate", function () {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });
  
  // Quit when all windows are closed, except on macOS. There, it's common
  // for applications and their menu bar to stay active until the user quits
  // explicitly with Cmd + Q.
  app.on("window-all-closed", function () {
    if (process.platform !== "darwin") app.quit();
  });

  ipcMain.on('resize-window', (event, arg) => {
    mainWindow.setSize(1280,768);
    mainWindow.setResizable(true);
    mainWindow.frame = true;
    mainWindow.center();
  })
 
  ipcMain.on('shrink-window', (event, arg) => {
    mainWindow.setSize(800, 500)
    mainWindow.center();
  })

  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.