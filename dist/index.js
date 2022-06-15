"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const moment_1 = __importDefault(require("moment"));
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
dotenv_1.default.config();
const token = '5350684936:AAHNvGfkz9Bo2YpkxTFwHN8xfwfPOjbSXUA';
const bot = new node_telegram_bot_api_1.default(token, { polling: true });
const app = (0, express_1.default)();
const port = process.env.PORT || 3333;
app.post('/iniciada/:id_tipo', (req, res) => {
    bot.sendMessage(-1001766554144, `\u{2705} <b>Transmissão ${+req.params.id_tipo === 1 ? 'raspberry' : 'servidor'} iniciada\n\n\u{1F550}</b> ${(0, moment_1.default)()
        .utcOffset(-3)
        .format('DD/MM/YYYY - HH:mm')}`, { parse_mode: 'HTML' });
    return res.send('OK');
});
app.post('/finalizada/:id_tipo', (req, res) => {
    bot.sendMessage(-1001766554144, `\u{274C} <b>Transmissão ${+req.params.id_tipo === 1 ? 'raspberry' : 'servidor'} finalizada\n\n\u{1F550}</b> ${(0, moment_1.default)()
        .utcOffset(-3)
        .format('DD/MM/YYYY - HH:mm')}`, { parse_mode: 'HTML' });
    return res.send('OK');
});
app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
