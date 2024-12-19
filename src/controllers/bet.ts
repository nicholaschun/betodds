import express, { type Router, type Response, type Request } from "express";

import config from "../config";
import { bets, simulateBetPlacement } from "../fixtures/betting-data";
import { KafkaProducer } from "../services/kafka/producer";
import { UPDATE_LIVE_ODDS } from "../utils/kafka-topics";
import logger from "../utils/logger";

const log = logger("BetController");

/**
 * bet controller placeholder
 *
 * @export
 * @class BetController
 * @typedef {BetController}
 */
export class BetController {
	/**
	 * Place user bet
	 *
	 * @public
	 * @async
	 * @param {Request} req
	 * @returns {Promise<PlaceBetResponse>}
	 */
	public async placeBet(req: Request): Promise<NullablePlaceBetResponse> {
		try {
			// write bet  to database
			const payload: PlaceBet = {
				userId: req.body.userId,
				gameId: req.body.gameId,
				betType: req.body.betType,
				pick: req.body.pick,
				amount: req.body.amount,
			};
			const simulatedBet = simulateBetPlacement(payload);
      console.log('---ssiii', simulatedBet)
			return simulatedBet;
		} catch (error) {
			log.error("could not place bet", error);
			throw error;
		}
	}

	/**
	 * Retrieves user bet history
	 *
	 * @public
	 * @async
	 * @param {Request} req
	 * @returns {Promise<UserBet[]>}
	 */
	public async betHistory(userId: string): Promise<UserBet[]> {
		try {
			//TODO: get user bet history from DB
			const userBets = bets.filter((bet) => bet.userId === userId);
			return userBets;
		} catch (error) {
			log.error("could not retrieve user bet", error);
			throw error;
		}
	}
}
