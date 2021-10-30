export interface Miner<
	T extends "amd" | "nvidia" | "cpu",
	K extends "win32" | "linux" | "darwin"
> {
	name: string;
	id: string;
	supportedGPUs: T[];
	supportedPlatforms: K[];
	devFees: number;
	downloadUrl: {
		[key in K]: string;
	};
	minimumVram: number;
	commandToStart: {
		[key in K]: string;
	};
	coin: string;
}

const ethminer: Miner<"nvidia", "linux" | "win32"> = {
	id: "ethminer",
	name: "Ethminer",

	supportedGPUs: ["nvidia"],
	supportedPlatforms: ["win32", "linux"],
	devFees: 0,
	downloadUrl: {
		win32: "https://github.com/ethereum-mining/ethminer/releases/download/v0.18.0/ethminer-0.18.0-cuda9.1-windows-amd64.zip",
		linux: "https://github.com/ethereum-mining/ethminer/releases/download/v0.18.0/ethminer-0.18.0-cuda-9-linux-x86_64.tar.gz",
	},
	commandToStart: {
		win32: "",
		linux: "./ethminer -o us1.ethermine.org:4444",
	},
	coin: "Ethereum (ETH)",
	minimumVram: 4,
};

const phoenixminer: Miner<"nvidia" | "amd", "linux" | "win32"> = {
	id: "phoenixminer",
	name: "Phoenix miner",
	supportedGPUs: ["amd", "nvidia"],
	supportedPlatforms: ["win32", "linux"],
	devFees: 0.65,
	downloadUrl: {
		win32: "https://cutt.ly/tQc7Vxw",
		linux: "https://cutt.ly/vQc7Naj",
	},
	commandToStart: {
		win32: `PhoenixMiner.exe -pool us1.ethermine.org:4444 -pool2 eu1.ethermine.org:4444 -wal {WALLET}.{WORKER}`,
		linux: "./PhoenixMiner -pool us1.ethermine.org:4444 -pool2 eu1.ethermine.org:4444 -wal {WALLET}.{WORKER",
	},
	coin: "Ethereum (ETH)",
	minimumVram: 4,
};
const xmrigMonero: Miner<"cpu", "linux" | "win32" | "darwin"> = {
	id: "xmrigMonero",
	name: "XMRig",
	supportedGPUs: ["cpu"],
	supportedPlatforms: ["win32", "linux", "darwin"],
	devFees: 1,
	downloadUrl: {
		win32: "https://github.com/xmrig/xmrig/releases/download/v6.15.2/xmrig-6.15.2-gcc-win64.zip",
		linux: "https://github.com/xmrig/xmrig/releases/download/v6.15.2/xmrig-6.15.2-linux-x64.tar.gz",
		darwin: "https://github.com/xmrig/xmrig/releases/download/v6.15.2/xmrig-6.15.2-macos-x64.tar.gz",
	},
	commandToStart: {
		win32: "xmrig.exe --coin=XMR -o pool.minexmr.com:4444 -u {WALLET} --rig-id {WORKER}",
		linux: "./xmrig --coin=XMR -o pool.minexmr.com:4444 -u {WALLET} --rig-id {WORKER}",
		darwin: "./xmrig --coin=XMR -o pool.minexmr.com:4444 -u {WALLET} --rig-id {WORKER}",
	},
	coin: "Monero (XMR)",
	minimumVram: 0,
};

// a list of all mining softwares configured for this app. The app will choose the most compatible mining software to install on the user's computer
const allMiners = [ethminer, phoenixminer, xmrigMonero];

export default allMiners;
