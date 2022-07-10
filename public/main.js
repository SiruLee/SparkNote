const { app, BrowserWindow, ipcMain, session } = require("electron");

const path = require("path");
const url = require("url");
const ipc = ipcMain;

function createWindow() {
  let isTop = false;
  const win = new BrowserWindow({
    width: 800,
    minWidth: 600,
    height: 600,
    minHeight: 400,
    frame: false,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    icon: path.join(__dirname, "./logo.png"),
  });

  ipc.on("minimize-window", () => win.minimize());
  ipc.on("close-window", () => win.close());
  ipc.on("maximize-window", () => {
    win.isMaximized() ? win.unmaximize() : win.maximize();
  });
  ipc.on("always-on-top", () => {
    isTop
      ? win.setAlwaysOnTop(false, "screen")
      : win.setAlwaysOnTop(true, "screen");
    isTop = !isTop;
  });
  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, "/../build/index.html"),
      protocol: "file:",
      slashes: true,
    });
  win.removeMenu();
  win.loadURL(startUrl);
  win.on("ready-to-show", () => {
    win.show();
  });
  win.webContents.on("new-window", function (e, url) {
    e.preventDefault();
    require("electron").shell.openExternal(url);
  });
}

app.on("ready", createWindow);
