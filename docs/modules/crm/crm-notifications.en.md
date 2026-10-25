<span id="_1"></span>

# Notifications { #notifications }

Configure order and stock messages for staff, and add text to customer notifications.

Open **Settings → Notifications** and select a notification from the list on the right.

<span id="for-sellers"></span>

<span id="_2"></span>

## For sellers { #seller-notifications }

| Notification | When it is sent |
|---|---|
| Low product quantity | Stock changes and falls below **If less than**; archived products are excluded |
| New order notification | An order is created as **New** or **Awaiting payment**, before payment |
| Canceled order notification | A customer or staff member cancels an order |
| Overdue payment notification | An unpaid order is canceled or enters **Payment error** because the deadline expired or payment was declined |
| Unread order reminder | At the configured interval while **New** orders remain; the **If less than** field sets the interval in minutes |
| iiko errors | An order, status update, or stop list could not be transferred; the message includes [next steps](iiko-errors.md) |

Set the payment deadline in the [payment method](payment-providers.md).

<span id="recipients"></span>

<span id="_3"></span>

## Recipients { #seller-recipients }

1. Under **Notification recipients**, click **Add** and select the staff member's account from the customer list. A Telegram account is not required.
2. Choose a **Channel**: **All channels** uses all available channels; **Automatic** chooses one, preferring Telegram, then email. You can also choose a specific channel. Contact details come from the customer card.
3. Choose the **Stores** whose notifications the staff member needs. Without a selected store, messages will not arrive. Low stock notifications do not have this field.

Settings save immediately. Telegram requires a linked account and an enabled [bot integration](../../getting-started/bot-setup.md). Email requires mail delivery to be configured on the platform. Unavailable channels are skipped.

!!! warning "Disabling a notification"
    The enable switch for seller notifications controls Telegram delivery; emails to selected recipients continue.

**iiko errors** has no separate switch: it is enabled while at least one iiko connection is saved. It shares recipients with the connection wizard's **Notifications** step. Without recipients, nobody receives a message; if the affected venue is unknown, all selected staff receive it.

<span id="for-customers"></span>

<span id="_4"></span>

## For customers { #customer-status }

Customers receive **Order status change** messages through all [available channels they have enabled](../app/customer-notifications.md). Seller recipient settings do not affect them.

To add your own text to the system message:

1. Click **Create**, choose a **Status**, and enter a **Message**.
2. Review **Final message** and save. Each status can have one message; edit the existing one to change it.

The text is added to Telegram, VK, and email messages; push does not include it. The main text is sent without translations.

The `%name%` placeholder inserts an order system attribute's value, where `name` is the attribute name. [Custom integrations](integrations.md#пользовательские) can fill these attributes.
