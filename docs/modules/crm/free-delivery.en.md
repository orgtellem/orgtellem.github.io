---
description: "Set up a free delivery example in Tellem: order value threshold, condition checks, and the customer view."
---

<span id="free-delivery-to-increase-order-value"></span>

<span id="_1"></span>

# Set up free delivery { #set-up-free-delivery }

Set the amount at which the store pays for delivery on the buyer's behalf. At checkout, buyers see how much more is needed to reach the threshold.

Where: **Settings → Delivery → required fulfillment method → General**.

<span id="set-up-the-offer"></span>

<span id="_2"></span>

## Set the threshold { #set-the-threshold }

1. Enter an amount in “Free delivery from”, for example ₽4,990, and save. The currency appears next to the field: enter a number only.
2. Check that the method is [enabled for the required chain](stores-and-delivery.md).
3. Review the [calculation rules and restrictions](delivery.md#free-delivery), then open checkout in the application.

The shared screenshots show the Russian interface.

![Example threshold: 4990 in Free delivery from.](../../media/crm/free-delivery/settings.png)

Each fulfillment method, your own or a carrier's, has its own threshold. An empty field or 0 disables the condition and hint. For free delivery, the store pays the carrier's charge, so account for this expense when choosing the amount.

<span id="what-the-buyer-sees"></span>

<span id="_3"></span>
<span id="assess-the-results"></span>

<span id="_4"></span>

## Check in the application { #check-in-the-application }

For example, with a ₽4,990 threshold and ₽4,200 in products, the hint suggests adding another ₽790:

![Checkout example: the buyer needs ₽790 more for free delivery.](../../media/crm/free-delivery/checkout-before.png)

Delivery becomes free when the threshold is reached. In this example, ₽5,250 in products meets the condition:

![Example order meeting the threshold, with delivery at ₽0.](../../media/crm/free-delivery/checkout-free.png)

The hint updates when products, discounts, and payment methods change. Switching fulfillment methods uses that method's threshold. While the application recalculates the amount, buyers see the general condition “Free delivery on orders from …”.
