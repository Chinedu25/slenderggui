const path = require('path');

const { app,nativeImage ,Tray,Menu,BrowserWindow , ipcMain} = require('electron');
const isDev = require('electron-is-dev');
const find = require('find-process');
const fs = require("fs");
const Store = require('electron-store');

const store = new Store();

let mainWindow;
let isQuiting;
let tray = null;


const iconPath = process.platform !== 'darwin'
    ? 'src/assets/icons/logo.ico'
    : 'src/assets/icons/logo.icns';
    
// let macIcon = nativeImage.createFromPath(app.getAppPath() + iconPath);


function createWindow() {
  // Create the browser window.
   mainWindow = new BrowserWindow({
    width: 800,
    height: 500,
    frame: false,
    icon: iconPath,
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


ipcMain.on("setIntensityPref", (event, args) => {


    store.set("IntensityPref", args);

});



ipcMain.on("setUserPCName", (event, args) => {

    store.set("UserPCName", args);


});

// ipcMain.on("getIntensityPref", (event, args) => {
//   fs.readFile("path/to/file", (error, data) => {
//     console.log("Ran request")
//   const value =  store.get("IntensityPref");

//   console.log(value)
//   mainWindow.webContents.send("getIntensityPref", value);
  
//   });
// });

ipcMain.handle('getStoreValue', (event, key) => {
  //console.log("updated");
  //console.log(store.get(key))
	return store.get(key);
});

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


// var contextMenu = Menu.buildFromTemplate([
//   { label: 'Show App', click:  function(){
//       mainWindow.show();
//   } },
//   { label: 'Quit', click:  function(){
//       app.isQuiting = true;
//       app.quit();
//   } }
// ]);
  
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

    // let trayIcon = nativeImage.createFromPath(app.getAppPath() + iconPath);
    // // if needed resize to 16x16 but mac also accepted the 24 icon
    // trayIcon = trayIcon.resize({
    //    width: 16,
    //    height: 16
    //  });
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
    mainWindow.minimize();
  
    // Send result back to renderer process
   // mainWindow.webContents.send("fromMain", "responseOj");
  });


ipcMain.on("closeApp", (event, args) => {

    if (!isQuiting) {
      event.preventDefault();
      mainWindow.hide();

      if (tray == null)
          tray = createTray();
    }
  });


ipcMain.on('shrink-window', (event, args) => {

    mainWindow.setSize(800, 500)
    mainWindow.center();
  });



ipcMain.on('resize-window', (event, args) => {

    mainWindow.setSize(1280,768);
    // mainWindow.setResizable(true);
     
     mainWindow.center();
  });

  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.