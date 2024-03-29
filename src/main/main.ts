/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import path from 'path';
import {
  app,
  BrowserWindow,
  shell,
  nativeImage,
  Menu,
  Tray,
  ipcMain,
} from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import MenuBuilder from './menu';
import { resolveHtmlPath } from './util';

const Store = require('electron-store');

const store = new Store();

export default class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let isQuiting: boolean;
let tray: Tray | null = null;
let mainWindow: BrowserWindow | null = null;

function closeApp() {
  if (!isQuiting) {
    if (mainWindow != null) mainWindow.hide();

    if (tray == null) tray = createTray();
  }
}

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDevelopment =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDevelopment) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload
    )
    .catch(console.log);
};

const RESOURCES_PATH = app.isPackaged
  ? path.join(process.resourcesPath, 'assets')
  : path.join(__dirname, '../../assets');

const getAssetPath = (...paths: string[]): string => {
  return path.join(RESOURCES_PATH, ...paths);
};

const createWindow = async () => {
  if (isDevelopment) {
    await installExtensions();
  }

  mainWindow = new BrowserWindow({
    show: false,
    width: 800,
    height: 500,
    frame: false,
    icon: getAssetPath('icon.png'),
    transparent: true,
    titleBarStyle: 'customButtonsOnHover',
    resizable: false,
    fullscreen: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,

      // @ts-ignore
      enableRemoteModule: true,
      contextIsolation: true,
    },
  });

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // mainWindow.webContents.on("did-frame-finish-load", async () => {
  //   if (process.env.NODE_ENV === 'development') {
  //     await installExtensions();
  //   }
  // });

  const menuBuilder = new MenuBuilder(mainWindow, closeApp);
  menuBuilder.buildMenu();

  // Open urls in the user's browser
  mainWindow.webContents.on('new-window', (event, url) => {
    event.preventDefault();
    shell.openExternal(url);
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};

app.on('before-quit', function () {
  isQuiting = true;
});

/**
 * Add event listeners...
 */

//  app.on('restore', function (event) {

//    if (mainWindow != null)
//         mainWindow.show();
//   if (tray != null)
//     tray.destroy();
// });

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);

function createTray() {
  let trayIcon = nativeImage.createFromPath(getAssetPath('icon.png'));
  // if needed resize to 16x16 but mac also accepted the 24 icon
  trayIcon = trayIcon.resize({
    width: 16,
    height: 16,
  });
  const appIcon = new Tray(trayIcon);

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Show',
      click() {
        if (mainWindow != null) mainWindow.show();

        tray?.destroy();
        tray = null;
      },
    },
    {
      label: 'Exit',
      click() {
        isQuiting = true;
        app.quit();
      },
    },
  ]);

  appIcon.on('double-click', function () {
    if (mainWindow != null) mainWindow.show();

    tray?.destroy();
    tray = null;
  });
  appIcon.setToolTip('SlenderGG');
  appIcon.setContextMenu(contextMenu);
  return appIcon;
}

// @ts-ignore
ipcMain.on('setIntensityPref', (event, args) => {
  store.set('IntensityPref', args);
});

ipcMain.on('setUserPCName', (_, args) => {
  store.set('UserPCName', args);
});

ipcMain.handle('getStoreValue', (_, key) => {
  return store.get(key);
});

ipcMain.on('minimize', () => {
  if (mainWindow != null) mainWindow.minimize();
});

ipcMain.on('closeApp', (event) => {
  if (!isQuiting) {
    event.preventDefault();
    closeApp();
  }
});

ipcMain.on('shrink-window', () => {
  if (mainWindow != null) {
    mainWindow.setSize(800, 500);

    mainWindow.setBounds({ width: 800, height: 500 });
    mainWindow.setMaximumSize(800, 500);
    mainWindow.center();
  }
});

ipcMain.on('resize-window', () => {
  if (mainWindow != null) {
    mainWindow.setSize(1280, 768);
    mainWindow.center();
  }
});
