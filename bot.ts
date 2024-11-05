import { Bot, InlineKeyboard } from "https://deno.land/x/grammy/mod.ts";

const bot = new Bot("5654438626:AAHaKf6O9w3HMIZupE-L5onRsRr05qVbuDQ");

bot.command("start", async (ctx) => {
  const inlineKeyboard = new InlineKeyboard()
    .url("Buy Now", "https://nullbite.net/non-vbv-cc/")
    .row()
    .url("Join CC Scraper", "https://t.me/nullsrc");

  await ctx.replyWithPhoto(
    { url: "https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/f0475ee7-7c3e-403c-fe68-8a466e101800/shopitem" },
    {
      caption: "NON VBV CC 🔥",
      reply_markup: inlineKeyboard,
    }
  );
});

bot.start();
