import express, { type Router, type Response, type Request } from "express";

import config from "../config";
import { bets } from "../fixtures/betting-data";
import { KafkaProducer } from "../services/kafka/producer";
import { UPDATE_LIVE_ODDS } from "../utils/kafka-topics";

export class BetController {
	public async placeBet(
		req: Request,
	): Promise<{ data: Record<string, string> }> {
		try {
			// write bet  to database
			return {
				data: {},
			};
		} catch (error) {
			console.log("---error", error);
			throw error;
		}
	}

	public async betHistory(
		req: Request,
	): Promise<{ data: Record<string, string> }> {
		try {
			// get user bet history from DB
			return {
				data: {},
			};
		} catch (error) {
			console.log("---error", error);
			throw error;
		}
	}
}
