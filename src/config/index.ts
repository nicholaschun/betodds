import dotenv from "dotenv";
dotenv.config();

const config = {
	env: process.env.ENV || "dev",
	port: process.env.PORT,
	host: process.env.HOST,
	baseUrl: process.env.BASE_URL,
};

export default config as typeof config;
