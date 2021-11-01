const { contextBridge, ipcRenderer } = require("electron");

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld("api", {
	//send: (channel, data) => {
	send: (channel, data) => {
		// whitelist channels
		let validChannels = [
			"minimize",
			"closeApp",
			"shrink-window",
			"resize-window",
			"setIntensityPref",
			"setUserPCName",
		];
		if (validChannels.includes(channel)) {
			ipcRenderer.send(channel, data);
		}
	},
	//receive: (channel, func) => {
	receive: (channel, func) => {
		let validChannels = ["getIntensityPref"];
		if (validChannels.includes(channel)) {
			// Deliberately strip event as it includes `sender`
			ipcRenderer.on(channel, (event, ...args) => func(...args));
		}
	},
	invoke: async (channel, data) => {
		return await ipcRenderer.invoke(channel, data);
	},
});
