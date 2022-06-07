import express from 'express';
import dotenv from 'dotenv';

import TelegramBot from 'node-telegram-bot-api';

dotenv.config();

const token = '5350684936:AAHNvGfkz9Bo2YpkxTFwHN8xfwfPOjbSXUA';

const bot = new TelegramBot(token, { polling: true });

const app = express();
const port = process.env.PORT;

app.post('/iniciada', (req, res) => {
  bot.sendMessage(
    339351193,
    `Transmissão iniciada (${new Date().toISOString()})`
  );
  return res.send('OK');
});

app.post('/finalizada', (req, res) => {
  bot.sendMessage(
    339351193,
    `Transmissão finalizada (${new Date().toISOString()})`
  );
  return res.send('OK');
});

app.listen(3333, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
