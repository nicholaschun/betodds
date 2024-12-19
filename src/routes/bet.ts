import express, { type Router, type Response, type Request } from "express";

const routes: Router = express.Router();

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Checks health of api
 *     description: Check to see if api is up and running
 */
routes.get("/health", async (req: Request, res: Response) => {
	res.end("Api is up and running");
});

export default routes;
