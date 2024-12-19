import dotenv from "dotenv";
import app from "./app";
import config from "./config/index";

dotenv.config();
const { port, host } = config;

const server = app.listen(port, () => {
	console.log(`Running on ${host}:${port}`);
});

export default server;
