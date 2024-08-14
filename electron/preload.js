const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    closeWindow: () => ipcRenderer.send('closeWindow'),
    maximizeWindow: () => ipcRenderer.send('maximizeWindow'),
    minimizeWindow: () => ipcRenderer.send('minimizeWindow'),


})