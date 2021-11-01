import { AppError } from "./src/errors";
import { Miner } from "./miners/config";

export interface IPCRendererToMain {
	minimize: never;
	closeApp: never;
	"shrink-window": never;
	"resize-window": never;
	setIntensityPref: number;
	setUserPCName: string;
}

export interface IPCMainToRenderer {
	install:
		| AppError<"GENERIC_ERROR" | "APP_INCOMPATIBLE_ERROR" | "NETWORK_ERROR">
		| Miner<any, any>;
}
