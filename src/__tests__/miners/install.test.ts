// import { app } from 'electron';
import { graphics } from "systeminformation";
import { rmdirSync } from "fs";
import "core-js"; // import prefills
import path from "path";
import { getMostCompatibleMiner, installMiner } from "../../../miners";
import { AppError } from "../../errors";

/**
 * @jest-environment node
 */
jest.mock("systeminformation");
const mockGraphics = graphics as jest.Mock;
const originalProcess = { ...process };
describe("correctly installs the most compatible miner", () => {
	beforeEach(() => {
		mockGraphics.mockReset();
	});

	afterEach(() => {
		global.process = originalProcess;
	});

	afterAll(() => {
		rmdirSync(path.join(__dirname, "miners"), {
			recursive: true,
		});
	});
	it("throws an APP_INCOMPATIBLE_ERROR", async () => {
		global.process = {
			...originalProcess,
			platform: "some-fake-platform" as unknown as NodeJS.Platform,
		};
		mockGraphics.mockResolvedValue({
			controllers: [{ vendor: "AMD", vram: 4096 }],
		});
		await expect(getMostCompatibleMiner()).rejects.toEqual(
			new AppError("APP_INCOMPATIBLE_ERROR")
		);
	});

	it("returns the most compatible miner with the least dev fees", async () => {
		global.process = { ...originalProcess, platform: "win32" };
		mockGraphics.mockResolvedValue({
			controllers: [{ vendor: "AMD", vram: 4096 }],
		});
		const amdMiner = await getMostCompatibleMiner();
		expect(amdMiner?.id).toBe("phoenixminer");

		mockGraphics.mockResolvedValue({
			controllers: [{ vendor: "Nvidia", vram: 4096 }],
		});
		const nvidiaMiner = await getMostCompatibleMiner();
		expect(nvidiaMiner?.id).toBe("ethminer");
	});

	it("installs the most compatible miner", async () => {
		mockGraphics.mockResolvedValue({
			controllers: [{ vendor: "AMD", vram: 4096 }],
		});
		expect(
			(
				await installMiner({
					getPath() {
						return __dirname;
					},
				} as unknown as Electron.App)
			).id
		).toBe("xmrigMonero");
	});
});
