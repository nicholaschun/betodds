import type { Request } from "express";

export class AuthController {
	public async login(req: Request): Promise<LoginResponse> {
		try {
			//TODO: login logic

			return {
				token: "",
				user: {
					id: "",
					email: "",
				},
			};
		} catch (error) {
			console.log("---error", error);
			throw error;
		}
	}

	public async signup(req: Request): Promise<SignupResponse> {
		try {
			//TODO: signup logic
			return {
				user: {
					id: "",
					email: "",
				},
			};
		} catch (error) {
			console.log("---error", error);
			throw error;
		}
	}
}
