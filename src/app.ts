import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { type Application } from "express";
import routes from "./routes";
import appLogger from "./utils/app-logger";
import initializeSentry from "./utils/sentry";
dotenv.config();
const app: Application = express();

initializeSentry(process.env.SENTRY_DSN || "");

app.use(cors());
app.use(appLogger);
app.use(bodyParser.json());

app.use(routes);

export default app;
