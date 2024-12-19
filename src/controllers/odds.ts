import type { Request } from "express";
import { KafkaProducer } from "../services/kafka/producer";
import config from "../config";
import { UPDATE_LIVE_ODDS } from "../utils/kafka-topics";
import { liveGameData, generateLiveUpdate  } from "../fixtures/betting-data";

export class OddsController {
	public async getLiveOdds(): Promise<boolean> {
		try {
			const clientId = config.kafka.clientId;
			const brokers = config.kafka.brokers;

			const producer = new KafkaProducer(brokers, clientId);
			console.log("---producer", producer);
			const producerRes = await producer.sendMessage(
				UPDATE_LIVE_ODDS,
				liveGameData,
			);
			return true;
		} catch (error) {
			console.log("---error", error);
			throw error;
		}
	}

  public async calculateOdds(req: Request): Promise<CalculateOddResponse> {
		try {

      const odds = generateLiveUpdate(req.body.gameId)
      // return odds

			const clientId = config.kafka.clientId;
			const brokers = config.kafka.brokers;

			const producer = new KafkaProducer(brokers, clientId);
			console.log("---producer", producer);
			const producerRes = await producer.sendMessage(
				UPDATE_LIVE_ODDS,
				liveGameData,
			);
      console.log('---producerRes', producerRes)
			return odds;
		} catch (error) {
			console.log("---error", error);
			throw error;
		}
	}

}
