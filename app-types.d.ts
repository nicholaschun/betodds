interface CalculateOddResponse {
	gameId: string;
	timeElapsed: number;
	eventType: string;
	team: string;
}

interface LoginResponse {
	token: string;
	user: {
		id: string;
		email: string;
	};
}

interface SignupResponse {
	user: {
		id: string;
		email: string;
	};
}

interface ApiResponse<T> {
	statusCode: number;
	data: T | null | boolean | string | undefined;
	message: string | null;
}

interface KafkaConsumerMessage{
  topic: string
  partition: string
  message: string
}
