const path = require('path');

const { app, Tray,Menu,BrowserWindow , ipcMain} = require('electron');
const isDev = require('electron-is-dev');
const find = require('find-process');
const fs = require("fs");

let mainWindow;
let isQuiting;
let tray = null;



//const iconPath = path.join(__dirname, "/src/assets/images/SlenderGGLogoSmall.svg");

const iconPath = process.platform !== 'darwin'
    ? 'src/assets/icons/logo.ico'
    : 'src/assets/icons/logo.icns';

function createWindow() {
  // Create the browser window.
   mainWindow = new BrowserWindow({
    width: 800,
    height: 500,
    frame: false,
    icon:iconPath,
    transparent: true,
    titleBarStyle: 'customButtonsOnHover',
    webPreferences: {
        preload: path.join(__dirname, "preload.ts"),
       //preload: `${__dirname}/preload.js`,
        nodeIntegration: false,
        // contextIsolation: findAllByTestId,
        //@ts-ignore
        enableRemoteModule: true,
        contextIsolation: true,
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

  app.on('before-quit', function () {
    isQuiting = true;
  });
  
  // app.on('ready', () => {
  //   tray = new Tray(path.join(__dirname, iconPath));
  
  //   tray.setContextMenu(Menu.buildFromTemplate([
  //     {
  //       label: 'Show App', click: function () {
  //         mainWindow.show();
  //       }
  //     },
  //     {
  //       label: 'Quit', click: function () {
  //         isQuiting = true;
  //         app.quit();
  //       }
  //     }
  //   ]));
  
//   app.on('before-quit' , (e) => {
//     find('port', 3000)
//       .then(function (list) {
//       if(list[0] != null){
//           process.kill(list[0].pid, 'SIGHUP');
//       }
//     }.catch((e) => {
//         console.log(e.stack || e);
//     });
// });


var contextMenu = Menu.buildFromTemplate([
  { label: 'Show App', click:  function(){
      mainWindow.show();
  } },
  { label: 'Quit', click:  function(){
      app.isQuiting = true;
      app.quit();
  } }
]);
  
  // Quit when all windows are closed, except on macOS. There, it's common
  // for applications and their menu bar to stay active until the user quits
  // explicitly with Cmd + Q.
  app.on("window-all-closed", function () {
    if (process.platform !== "darwin") app.quit();
  });


 
app.on('restore', function (event) {
  mainWindow.show();
  tray.destroy();
});

function createTray() {
  let appIcon = new Tray(iconPath);
  const contextMenu = Menu.buildFromTemplate([
      {
          label: 'Show', click: function () {
              mainWindow.show();
          }
      },
      {
          label: 'Exit', click: function () {
              app.isQuiting = true;
              app.quit();
          }
      }
  ]);

  appIcon.on('double-click', function (event) {
      mainWindow.show();
  });
  appIcon.setToolTip('SlenderGG');
  appIcon.setContextMenu(contextMenu);
  return appIcon;
}



ipcMain.on("minimize", (event, args) => {
  fs.readFile("path/to/file", (error, data) => {

    mainWindow.minimize();
    // Send result back to renderer process
   // mainWindow.webContents.send("fromMain", "responseOj");
  });
});

ipcMain.on("closeApp", (event, args) => {
  fs.readFile("path/to/file", (error, data) => {
    if (!isQuiting) {
      event.preventDefault();
      mainWindow.hide();
      tray = createTray();
    }
  });
});

ipcMain.on('shrink-window', (event, args) => {
  fs.readFile("path/to/file", (error, data) => {
    mainWindow.setSize(800, 500)
    mainWindow.center();
  });
});


ipcMain.on('resize-window', (event, args) => {
  fs.readFile("path/to/file", (error, data) => {
    mainWindow.setSize(1280,768);
    // mainWindow.setResizable(true);
     
     mainWindow.center();
  });
});
  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.