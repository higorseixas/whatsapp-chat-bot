import { Injectable } from '@nestjs/common';
import { Whatsapp, create, } from 'venom-bot';

@Injectable()
export class AppService {
  private client: Whatsapp

  constructor() { this.initialize() }

  async sendText(to: string, body: string) {
    this.client.sendText(to, body)
    .catch((error) => console.error(error))
  }

  qr = (base64Qrimg: string) => { }
  status = (statusSession: string, session: string) => { }
  start = (client: Whatsapp) => {
    const numberToSend = process.env.NUMBER_TO_SEND+'@c.us'
    this.client = client
    this.sendText(numberToSend, 'Olá, tudo bem?')
  }

  private initialize() {
    create("whatsapp-chat-bot", this.qr, this.status)
      .then((client) => this.start(client))
      .catch((error) => console.error(error))
  }

  getHello(): string {
    return 'Hello World!';
  }
}
