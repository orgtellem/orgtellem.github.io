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
2. Choose the field type. For a dropdown list, add at least two values.
3. Set a unique name using Latin letters and digits, and a display order greater than zero. Leave the integration key empty unless a connected integration needs it. Do not change the unique name after connecting an integration.
4. Save the field and check it on the [checkout screen](../app/checkout.md).

!!! warning "Confidential data"
    This option applies only to **Product variant** fields. After order completion, cancellation, return, or payment failure, CRM replaces their values with **DELETED**. Account for this if you will need the details after processing the order.
