import { type Consumer, Kafka, type Producer, type ProducerRecord } from 'kafkajs';

export class KafkaConsumer {
  private consumer: Consumer;

  constructor(brokers: string[], clientId: string, groupId: string) {
    const kafka = new Kafka({
      clientId,
      brokers
    });
    
    this.consumer = kafka.consumer({ groupId });
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  public async consumeMessage<T>(topic: string, message: T, callback: any): Promise<void> {
    try {
      await this.consumer.connect();
      await this.consumer.subscribe({ topic, fromBeginning: true })
      await this.consumer.run({
        eachMessage: async ({topic, partition, message}) => {
            const value = message;

            // send to socket.io
            callback(topic, partition, value);
        },
    });

    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    } finally{
      await this.consumer.disconnect()
    }
  }


}