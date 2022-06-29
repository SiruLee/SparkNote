const { ipcRenderer } = require("electron");

const ipc = ipcRenderer;
let isLock = false;
const minimizeBtn = document.getElementById("minimize");
const maximizeBtn = document.getElementById("maximize");
const closeBtn = document.getElementById("close");

const lockBtn = document.getElementById("lock");

minimizeBtn.addEventListener("click", function () {
  ipc.send("minimize-window");
});
maximizeBtn.addEventListener("click", function () {
  ipc.send("maximize-window");
});
closeBtn.addEventListener("click", function () {
  ipc.send("close-window");
});

lockBtn.addEventListener("click", function () {
  ipc.send("always-on-top");
  if (isLock) {
    document.getElementById("lockIcon").className = "bx bx-lock-open-alt";
  } else {
    document.getElementById("lockIcon").className = "bx bxs-lock-alt";
  }
  isLock = !isLock;
});
