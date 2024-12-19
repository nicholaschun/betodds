import dotenv from "dotenv";
dotenv.config();

const config = {
	env: process.env.ENV || "dev",
	port: process.env.PORT,
	host: process.env.HOST,
	baseUrl: process.env.BASE_URL,
	socketHandshake: process.env.SOCKET_HANDSHAKE,
	kafka: {
		brokers: ["kafka:9092"],
		clientId: "q1Sh-9_ISia_zwGINzRvyQ",
	},
};

export default config as typeof config;
