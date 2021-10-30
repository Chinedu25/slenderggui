import si from "systeminformation";
import Downloader from "nodejs-file-downloader";
import path from "path";
import decompress from "decompress";
import allMiners, { Miner } from "./config";
import { App } from "electron";
import { AppError } from "../src/errors";

// gets the most compatible mining software for a user's computer
export async function getMostCompatibleMiner(): Promise<
	| undefined
	| (Miner<any, any> & { downloadUrl: string; commandToStart: string })
> {
	try {
		const { platform } = process;
		const { arch } = process;
		if (arch !== "x64") throw new AppError("APP_INCOMPATIBLE_ERROR"); // this app only supports 64 bit OS
		const { controllers } = await si.graphics(); // get the details of the GPUs on the user's computer

		// the following code is to find the most compatible mining software
		const idealMiner = allMiners
			// filter the mining softwares by checking whether they are available for the user's OS or not
			.filter((miner) =>
				miner.supportedPlatforms.includes(platform as any)
			)
			.filter((miner) =>
				miner.supportedGPUs.some(
					(gpu) =>
						[...controllers, { vendor: "cpu", vram: 0 }].find(
							(controller) =>
								controller.vendor.toLowerCase() === gpu &&
								controller.vram >= miner.minimumVram
						) !== undefined
				)
			) // filter the mining softwares by checking whether the GPUs they support are available in the user's computer or not
			// and by checking whether the user's GPUs have a vram of more than 4gb
			.sort((minerA, minerB) => minerA.devFees - minerB.devFees)[0]; // then find the mining software amongst the filtered ones with the least dev fees
		if (!idealMiner) throw new AppError("APP_INCOMPATIBLE_ERROR");
		return {
			...idealMiner,
			// @ts-ignore
			downloadUrl: idealMiner.downloadUrl[platform] as string,
			// @ts-ignore
			commandToStart: idealMiner.commandToStart[platform] as string,
		};
	} catch (error) {
		if (!(error instanceof AppError)) {
			throw new AppError("GENERIC_ERROR");
		}
		throw error;
	}
}

// installs the most compatible mining software in the user's computer.
// Returns true if the software is successfully installed or returns false when the software couldn't be installed
export async function installMiner(app: App) {
	const miner = await getMostCompatibleMiner();
	if (!miner) throw new AppError("APP_INCOMPATIBLE_ERROR"); // if no miner is compatible with the user's computer then exit early
	const minerDir = path.join(app.getPath("userData"), "miners");
	const url = miner.downloadUrl; // the url to download the software from
	let name: string | undefined;
	try {
		name = await new Promise((resolve, reject) => {
			let fileName: string | undefined;
			const downloader = new Downloader({
				url,
				directory: minerDir,
				skipExistingFileName: true, // if file already exists then skip downloading
				onBeforeSave(resolvedName) {
					fileName = resolvedName;
				},
			});
			// start downloading
			downloader
				.download()
				.then(() => resolve(fileName))
				.catch((e) => {
					if (e.code === "ERR_REQUEST_TIMEDOUT") {
						reject("NETWORK_ERROR");
					}
					reject("GENERIC_ERROR");
				});
		});
	} catch (error) {
		throw new AppError(error as "NETWORK_ERROR" | "GENERIC_ERROR");
	}
	if (!name) return miner;
	const installationPath = path.join(minerDir, name);

	await decompress(installationPath, minerDir);
	return miner;
}
