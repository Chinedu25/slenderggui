import { IPCMainToRenderer, IPCRendererToMain } from "../types";

export {};

declare global {
	interface Window {
		api: {
			send: <T extends keyof IPCRendererToMain>(
				channel: T,
				data?: IPCRendererToMain[T]
			) => void;
			receive: <T extends keyof IPCMainToRenderer>(
				channel: T,
				cb: (data: IPCMainToRenderer[T]) => unknown
			) => void;
			invoke: <T = any, K = any>(channel: string, data: T) => Promise<K>;
		};
	}
}
