import express, { type Router, type Response, type Request } from "express";
import { BetController } from "../controllers/bet";
import { OddsController } from "../controllers/odds";
import { socket } from "../server";
import respondWithData from "../utils/respond-with-data";
const routes: Router = express.Router();

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Checks health of api
 *     description: Check to see if api is up and running
 */
routes.get("/health", async (req: Request, res: Response) => {
	socket.emitToClient("health_pulse", "/bet-sessions", {
		name: "healthendpoint",
	});
	res.end("Api is up and running");
});


/**Place bet */
routes.post("/", async (req: Request, res: Response) => {
	try {
		const betController = new BetController();
		const bet = await betController.placeBet(req);
		return respondWithData(
			{
				data: bet,
				message: "success",
				statusCode: 200,
			},
			res,
		);
	} catch (error) {
		return respondWithData(
			{
				data: null,
				message: "Could not place bet",
				statusCode: 500,
			},
			res,
		);
	}
});

/**user bet history  */
routes.get("/", async (req: Request, res: Response) => {
	try {
		const betController = new BetController();
		const userId = "U1"; //:Todo should come from user token
		const betHistory = await betController.betHistory(userId);
		return respondWithData(
			{
				data: betHistory,
				message: "success",
				statusCode: 200,
			},
			res,
		);
	} catch (error) {
		return respondWithData(
			{
				data: null,
				message: "Could not place bet",
				statusCode: 500,
			},
			res,
		);
	}
});

routes.get("/odds", async (req: Request, res: Response) => {
	try {
		const oddsController = new OddsController();
		const liveOdds = await oddsController.getLiveOdds();

		return respondWithData(
			{
				data: liveOdds,
				message: "success",
				statusCode: 200,
			},
			res,
		);
	} catch (error) {
		return respondWithData(
			{
				data: null,
				message: "Could not calculate odds",
				statusCode: 500,
			},
			res,
		);
	}
});

routes.post("/odds/calculate", async (req: Request, res: Response) => {
	try {
		const oddsController = new OddsController();
		const oddRes = await oddsController.calculateOdds(req);
		return respondWithData<CalculateOddResponse>(
			{
				data: oddRes,
				message: "success",
				statusCode: 200,
			},
			res,
		);
	} catch (error) {
		return respondWithData(
			{
				data: null,
				message: "Could not calculate odds",
				statusCode: 500,
			},
			res,
		);
	}
});

export default routes;
