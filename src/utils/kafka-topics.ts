//TODO: Cleanup

import { socket } from "../server";
export const UPDATE_LIVE_ODDS = "UpdateLiveOdds";
export const UPDATE_ONE_ODD = "UpdateOneOdd";
export const CLIENT_BET_ODDS = "bet_odds";
export const ODDS_NAMESPACE = "/bet-sessions"

export const TOPICS = ["UpdateLiveOdds"];

export const consumerTopics = [
	{
		topic: UPDATE_LIVE_ODDS,
		consumer: <T>(payload: T) => {
			socket.emitToClient(CLIENT_BET_ODDS, ODDS_NAMESPACE , {
				data: payload,
			});
		},
	},
  {
		topic: UPDATE_ONE_ODD,
		consumer: <T>(payload: T) => {
			socket.emitToClient(CLIENT_BET_ODDS, ODDS_NAMESPACE , {
				data: payload,
			});
		},
	},
];
