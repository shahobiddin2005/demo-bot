TLEGRAM_BOT_TOKEN = '5494635583:AAE2tEt_RHJKgMmHE7vpFT1h9TUFHfv0wn8';
const TeleBot = require('telebot');
const bot = new TeleBot(TLEGRAM_BOT_TOKEN);
const chatIds = [];
const CronJob = require('cron').CronJob;
const job = new CronJob('0/5 * * * * *', function() {
    console.log('You will see this message every 5 second');
    chatIds.forEach((chatId) => {
        bot.sendMessage(chatId, 'Hammaga salom, ahvollar qalay! 👋🏻👋🏻👋🏻 \n Dasturchi: 👉 @Mr_shahobiddin');
    });
}, null, true);

bot.on('text', (msg) => msg.reply.text('Kelgan habar 📩: ' + msg.text));

bot.on(['/start'], (msg) => {
    let chatId = msg.chat.id;
    if (!chatIds.includes(chatId)) {
        chatIds.push(chatId);
        msg.reply.text('Boshladik! 😉');
        job.start();
    }
});

bot.on(['/stop'], (msg) => {
    let chatId = msg.chat.id;
    chatIds.pop(chatId);
    job.stop();
});


bot.start();