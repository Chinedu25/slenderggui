enum ErrorTypes {
	GENERIC_ERROR = "Something went wrong",
	NETWORK_ERROR = "Problem connecting. Check your internet connection and try again",
	APP_INCOMPATIBLE_ERROR = "This app is not compatible with your device. Please check your GPUs and your GPU VRAM",
	LOGIN_FAILED = "Login failed. Please ensure that you have entered the username correctly and that you have a stable internet connection.",
}

type ErrorCode = keyof typeof ErrorTypes;
export class AppError<T extends ErrorCode> {
	code: T;
	message: string;

	constructor(code: T) {
		this.code = code;
		this.message = ErrorTypes[code];
	}
}
