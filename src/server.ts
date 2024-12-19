import { createServer } from "node:http";
import dotenv from "dotenv";
import app from "./app";
import config from "./config/index";
import { Socket } from "./services/socket";
import { KafkaConsumer } from "./services/kafka/consumer";


export const httpServer = createServer(app);

dotenv.config();
const { port, host } = config;

const server = httpServer.listen(port, () => {
	console.log(`Running on ${host}:${port}`);
});


//initialize bet oods consumers
const {kafka: { odds: { groupId, clientId, brokers }}} = config
const kafkaBetOddsConsumer = new KafkaConsumer(brokers, clientId, groupId);
kafkaBetOddsConsumer.initializeConsumers()

export const socket = new Socket(httpServer);
socket.createNamespace("bet-sessions");


export default server;
