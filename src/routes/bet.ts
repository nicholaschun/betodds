import express, { type Router, type Response, type Request } from "express";

const routes: Router = express.Router();

routes.get("/health", async (req: Request, res: Response) => {
	res.end("Api is live");
});

export default routes;
