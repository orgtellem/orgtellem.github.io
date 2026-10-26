---
description: "Create a Telegram bot with BotFather: choose a name, get a token, add an avatar, and connect it to Tellem."
---

<span id="telegram-"></span>

# Creating a Telegram bot { #creating-a-telegram-bot }

Create a bot for your store or venue so customers can open the catalog, sign in to the app, and receive notifications.

You need the owner's Telegram account, a customer-facing name, and an available username, the name used in search and the bot link. Have access to your CRM ready for the next step.

!!! info "Already have a bot?"
    You do not need another one. Using the owner's account, open [@BotFather](https://t.me/BotFather), send `/mybots`, select your bot, and click **API Token** to copy its current token. Then [connect it to the CRM](bot-setup.md). You do not need to delete a working bot or regenerate its token to configure it again.

<span id="1-botfather"></span>

## 1. Open BotFather { #1-open-botfather }

1. Sign in to Telegram with the account that should own the bot.
2. Open [@BotFather](https://t.me/BotFather) using the link or Telegram search.
3. Check the exact username **@BotFather** and the verification badge. Open the chat and click **Start**, if shown.

Screenshots show the Russian interface.

![The official BotFather in Telegram search, with a verification badge next to its name.](../media/telegram/botfather-search.png)

[View the full-size screenshot](../media/telegram/botfather-search.png).

<span id="2-username"></span>

## 2. Choose a name and username { #2-choose-a-name-and-username }

1. Send `/newbot` to BotFather.
2. When it says **“Please choose a name for your bot”**, send the name customers will see. For example: **My Store | Catalog and Orders**. The display name can use your customers' language.
3. Answer the next question with an available username, such as **my_shop_order_bot**. Do not enter `@`.

![The /newbot command and BotFather's two questions: the display name, then the unique username. The owner's replies are hidden.](../media/telegram/botfather-newbot.png)

[View the full-size screenshot](../media/telegram/botfather-newbot.png).

The username is used for search and links such as `https://t.me/my_shop_order_bot`. It must contain **5 to 32 characters**: Latin letters, digits, and underscores, and end in **bot**. Try another name if it is taken. These are [Telegram's rules](https://core.telegram.org/bots/features#creating-a-new-bot).

<span id="3"></span>

## 3. Copy the token { #3-copy-the-token }

After creating the bot, BotFather sends **“Done! Congratulations on your new bot”**, a link to the bot, and its access token.

1. Find the line below **“Use this token to access the HTTP API”**.
2. Copy the entire token: the digits, colon, and every character after it, without spaces or line breaks.
3. Keep the token for the **Bot token** field when connecting the CRM. A `t.me/…` link, username, or display name does not work in this field.

![BotFather's successful bot creation message. The token appears below Use this token to access the HTTP API; its value is hidden in this example.](../media/telegram/botfather-token.png){ width="470" }

[View the full-size screenshot](../media/telegram/botfather-token.png).

!!! warning "Treat the token like a password"
    It allows control of the bot. Do not publish it in chats, instructions, or screenshots. The examples here hide the token and the owner's details.

<span id="4"></span>

## 4. Add an avatar and description { #4-add-an-avatar-and-description }

This optional step helps customers recognize your store. In the BotFather chat, send a command, select your new bot, and follow the prompts:

- `/setuserpic` — upload a logo or another image for the bot's avatar.
- `/setdescription` — explain what customers can do with the bot. For example: “My Store catalog and orders. Press Start to begin.”

The description appears before the bot is started. The welcome message shown after **Start** is configured separately in the CRM.

**Next: [connect the bot to the CRM, set up the welcome message, and check that the catalog opens](bot-setup.md).**
