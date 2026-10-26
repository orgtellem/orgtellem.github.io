---
description: "Connect AI, Telegram, VK, iiko, and custom actions on order status changes in Tellem."
---

<span id="_1"></span>

# Integrations { #integrations }

Open **Integrations** and choose the service your store needs.

| Service | Task |
|---|---|
| AI | CRM chat assistant and [drafting a mailing](mass-mailings.md) |
| Telegram | [Connect a bot, sign-in, and Mini App](../../getting-started/bot-setup.md) |
| VK | [Notifications and mailings from your store community](vk.md) |
| iiko | [Order transfer, tables, and stop lists](iiko.md) |
| Custom | Actions on order status changes, configured by the Tellem team |

Disabling Telegram or VK stops messages to that channel and hides its switch in customer profiles. Another channel is not enabled automatically: check the [notifications available to customers](../app/customer-notifications.md).

## AI { #ai }

1. In **Integrations → AI**, enable **AI integration**, choose a model, and paste an API key from your OpenAI account. Keep the key secret.
2. Click **Check connection**. Settings save immediately.
3. Reload the page: **AI chats**, marked with a magic wand, appears in the CRM header. **Create with AI** becomes available in mailings.

Review responses before using them. Chats are deleted after two weeks.

## Custom { #пользовательские }

The Tellem team configures actions that run when an order enters selected statuses. These actions may send order data to external systems. Store owners can check the result through **REST request history** for the selected integration.

!!! warning "Running an action again"
    **Run again** repeats the action in the external system. Check the first attempt's result before repeating it. If the integration issues digital codes, check the order's **System attributes**: you can send a saved code to the customer manually without issuing a second one.
