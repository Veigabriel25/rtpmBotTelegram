import express from 'express';
import dotenv from 'dotenv';
import moment from 'moment';

import TelegramBot from 'node-telegram-bot-api';

dotenv.config();

const token = '5350684936:AAHNvGfkz9Bo2YpkxTFwHN8xfwfPOjbSXUA';

const bot = new TelegramBot(token, { polling: true });

const app = express();
const port = process.env.PORT || 3333;

app.post('/iniciada/:id_tipo', (req, res) => {
  bot.sendMessage(
    -1001766554144,
    `\u{2705} <b>Transmissão ${
      +req.params.id_tipo === 1 ? 'raspberry' : 'servidor'
    } iniciada\n\n\u{1F550}</b> ${moment()
      .utcOffset(-3)
      .format('DD/MM/YYYY - HH:mm')}`,
    { parse_mode: 'HTML' }
  );
  return res.send('OK');
});

app.post('/finalizada/:id_tipo', (req, res) => {
  bot.sendMessage(
    -1001766554144,
    `\u{274C} <b>Transmissão ${
      +req.params.id_tipo === 1 ? 'raspberry' : 'servidor'
    } finalizada\n\n\u{1F550}</b> ${moment()
      .utcOffset(-3)
      .format('DD/MM/YYYY - HH:mm')}`,
    { parse_mode: 'HTML' }
  );
  return res.send('OK');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
