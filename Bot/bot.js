const { Telegraf } = require("telegraf");
const TOKEN = "7343456782:AAG2rU2N_vc1grn5Cc78IpIRsqxmZ7BfS_k";
const bot = new Telegraf(TOKEN);

const web_link = "https://iventto.vercel.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();