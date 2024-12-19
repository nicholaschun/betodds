import dotenv from "dotenv";
dotenv.config();

const config = {
	env: process.env.ENV || "dev",
	port: process.env.PORT,
	host: process.env.HOST,
	baseUrl: process.env.BASE_URL,
	socketHandshake: process.env.SOCKET_HANDSHAKE,
	kafka: {
    odds: {
      brokers: ["kafka:29092"],
		  clientId: "q1Sh-9_ISia_zwGINzRvyQ",
      groupId: "oddGroup"
    },
	},
};

export default config as typeof config;
