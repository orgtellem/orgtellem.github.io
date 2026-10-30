---
description: "Configure extra Tellem order and product fields: types, required values, customer visibility, and confidential data."
---

<span id="_1"></span>

# Order fields { #order-fields }

Choose which details customers enter in their profile and at checkout.

Open **Settings → Order Fields**.

<span id="_2"></span>

## Customer address fields { #customer-address-fields }

Choose which address components are visible and required. Changes save immediately and apply to both the profile and checkout. Country, city, and street cannot be hidden. Required fields remain visible; hidden fields cannot be required.

<span id="order-fields-by-payment-method"></span>

<span id="_3"></span>

## Order fields by payment method { #payment-method-fields }

Configure first name, last name, phone, and email for each method under **Go to payment methods → required method → Order fields**. Payment provider requirements may make a field mandatory: see [Payment setup](payment-providers.md).

<span id="_4"></span>

## Additional order fields { #additional-order-fields }

1. Click **Create** and choose what the field applies to: **Fulfillment method** for the whole order, or **Product variant** for selected products. For the first option, you must select a fulfillment method.
2. Choose the field type: text, number, checkbox, date and time, or a drop-down list of values. For a drop-down list, add at least two values.
3. Set a unique name using Latin letters and digits, the **Display name** customers see, and a display order greater than zero. Leave the integration key empty unless a connected integration needs it. Do not change the unique name after connecting an integration.
4. Click **OK** and check the field on the [checkout screen](../app/checkout.md).

???+ example "Example: an intercom field for courier delivery"

    Example with demo data. The recording shows the Russian interface.

    <figure markdown="span">
    [![Creating an additional order field: Create, the fulfillment method parameter and the text type, the courier method, the unique name intercom, the display name for the intercom, display order 10 and OK; in the app, checkout with courier delivery shows the new field.](../../media/crm/crm-order-field.en.gif){ width="960" height="540" loading=lazy }](../../media/crm/crm-order-field.en.gif)
    </figure>

!!! warning "Confidential data"
    This option applies only to **Product variant** fields. After order completion, cancellation, return, or payment failure, CRM replaces their values with **DELETED**. Account for this if you will need the details after processing the order.
