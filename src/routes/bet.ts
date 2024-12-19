import express, { type Router, type Response, type Request } from "express";
import { socket } from "../server";
import { OddsController } from "../controllers/odds";
import { BetController } from "../controllers/bet";
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

routes.post("/", async (req: Request, res: Response) => {
	const betController = new BetController();
	await betController.placeBet(req);
});

routes.get("/", async (req: Request, res: Response) => {
	const betController = new BetController();
	await betController.betHistory(req);
});

routes.put("/odds", async (req: Request, res: Response) => {
	// get live game data
	const oddsController = new OddsController();
	await oddsController.getLiveOdds();
});

routes.post("/odds/calculate", async (req: Request, res: Response) => {
	// calculate odds
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
