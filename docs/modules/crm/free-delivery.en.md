---
description: "Set up a free delivery example in Tellem: order value threshold, condition checks, and the customer view."
---

<span id="free-delivery-to-increase-order-value"></span>

<span id="_1"></span>

# Set up free delivery { #set-up-free-delivery }

Set the amount at which the store pays for delivery on the buyer's behalf. At checkout, buyers see how much more is needed to reach the threshold.

Where: **Settings → Delivery → required fulfillment method → General**.

???+ example "Example: free delivery from ₽1,500"

    Example with demo data. The recording shows the Russian interface.

    <figure markdown="span">
    [![Setting the free delivery threshold: for the courier method, 1500 replaces 2000 in Free delivery from and OK saves it; in the app, with ₽1,200 in products the hint asks for ₽300 more, and after the plus button (₽1,600) the note reads Free delivery and the cost details show delivery at ₽0.](../../media/crm/crm-free-delivery.en.gif){ width="960" height="540" loading=lazy }](../../media/crm/crm-free-delivery.en.gif)
    </figure>

<span id="set-up-the-offer"></span>

<span id="_2"></span>

## Set the threshold { #set-the-threshold }

1. Enter an amount in “Free delivery from”, for example ₽1,500, and click “OK”. The currency appears next to the field: enter a number only.
2. Check that the method is [enabled for the required chain](stores-and-delivery.md).
3. Review the [calculation rules and restrictions](delivery.md#free-delivery), then open checkout in the application.

Each fulfillment method, your own or a carrier's, has its own threshold. An empty field or 0 disables the condition and hint. For free delivery, the store pays the carrier's charge, so account for this expense when choosing the amount.

<span id="what-the-buyer-sees"></span>

<span id="_3"></span>
<span id="assess-the-results"></span>

<span id="_4"></span>

## Check in the application { #check-in-the-application }

For example, with a ₽1,500 threshold and ₽1,200 in products, the hint suggests adding another ₽300.

Delivery becomes free when the threshold is reached. In this example, ₽1,600 in products meets the condition: the hint changes to “Free delivery”, and “Cost details” shows delivery at ₽0.

The hint updates when products, discounts, and payment methods change. Switching fulfillment methods uses that method's threshold. While the application recalculates the amount, buyers see the general condition “Free delivery on orders from …”.
