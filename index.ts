import express from 'express';
import dotenv from 'dotenv';
import moment from 'moment';

import TelegramBot from 'node-telegram-bot-api';

dotenv.config();

const token = '5350684936:AAHNvGfkz9Bo2YpkxTFwHN8xfwfPOjbSXUA';

const bot = new TelegramBot(token, { polling: true });

const app = express();
const port = process.env.PORT;

app.post('/iniciada', (req, res) => {
  bot.sendMessage(
    339351193,
    `\u{2705} <b>Transmissão iniciada\n\n\u{1F550}</b> ${moment().format(
      'DD/MM/YYYY - HH:mm'
    )}`,
    { parse_mode: 'HTML' }
  );
  return res.send('OK');
});

app.post('/finalizada', (req, res) => {
  bot.sendMessage(
    339351193,
    `\u{274C} <b>Transmissão finalizada\n\n\u{1F550}</b> ${moment().format(
      'DD/MM/YYYY - HH:mm'
    )}`,
    { parse_mode: 'HTML' }
  );
  return res.send('OK');
});

app.listen(3333, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
