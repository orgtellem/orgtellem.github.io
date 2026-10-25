<span id="_1"></span>

# Delivery { #delivery }

Order fulfillment methods include your own courier delivery and pickup, as well as CDEK, Yandex, Ozon, and Russian Post. For CDEK and Yandex, CRM also creates shipments and updates order statuses automatically.

Open **Settings → Delivery** to configure a method. Check CDEK and Yandex shipments under **Delivery information** in the order.

<span id="_2"></span>

## Fulfillment methods { #fulfillment-methods }

Select **New method → Custom fulfillment method**, **CDEK**, **Ozon**, **Yandex**, or **Russian Post**. A new method is disabled in every store chain: enable it in the store chain's settings ([Stores](stores-and-delivery.md)). Built-in methods and methods used in orders cannot be deleted.

For a **Custom fulfillment method**:

1. Under **General**, set a name, type, conditions, and base price. The type determines [which details the customer enters](../app/checkout.md).
2. Under **Price**, add **Order amount from → Delivery price** thresholds if needed. The highest reached threshold applies; below all thresholds, the base price applies. Example: courier delivery costs ₽300 and is free from ₽2,000.
3. Under **Geography**, limit regions and cities. An empty list allows the method everywhere; an empty field in a row means any value.

**Carriers**:

| Carrier | What the customer gets | Type | Shipments in CRM |
|---|---|---|---|
| CDEK | A rate for delivery to the door or a pickup point | Delivery or Pickup, depending on the rate | Yes |
| Yandex (Across Russia) | A pickup point | Pickup | Yes |
| Ozon | A pickup point | Pickup | No |
| Russian Post | Delivery to an address, calculated by postal code | Delivery | No |

For CDEK and Yandex pickup points, the customer selects a city from suggestions, then finds a point by street, name, or code. A home address is not required ([Checkout](../app/checkout.md)). **Geography** restrictions use the location of the selected pickup point.

The carrier calculates price and delivery time; **Geography** restrictions still apply. Under **Integration**:

- Disable **Test mode** for live CDEK and Yandex credentials. Ozon has no test mode; for Russian Post, it does not affect the calculation.
- Set a default product weight and box dimensions. The order is calculated as one package: CRM sums product weights including quantities, using the default for missing weights. One set of dimensions applies to the order.

Keep carrier passwords and keys secret; do not include them in screenshots.

**Check connection** calculates a sample delivery and shows its price and delivery time. This check never creates a shipment.

Changing the CDEK account, Yandex token, or **Test mode** stops tracking existing shipments: their status becomes **Needs correction**. Complete active deliveries first or arrange the change with the Tellem team.

## Free delivery for the customer { #free-delivery }

Every fulfillment method has a **Free delivery from** field on the **General** tab.
Enter an amount in the store's currency; leave the field empty or enter 0 to disable the condition.
When the product total reaches the threshold, delivery costs the customer 0. The total includes discounts and payment fees,
but excludes delivery and redeemed bonuses. This condition takes priority over the **Price** tab rules.
The store pays the carrier's charge; an unavailable delivery method remains unavailable.

At checkout, customers see how much more to add for free delivery. Each method has its own threshold; changing the setting does not recalculate existing orders.

[Example: use free delivery to increase order value](free-delivery.md).

<span id="_3"></span>

## CDEK { #cdek }

On the **Integration** tab, enter the **Account** and **Secret password** from your CDEK account and select a **CDEK rate**, such as **Parcel — warehouse to warehouse (136)**. **Refresh rates** reloads the list. Warehouse means a CDEK point; door means an address. The rate determines the method's type: door delivery is **Delivery**, and delivery to a pickup point is **Pickup**. Parcel locker rates are not supported. Automatic registration works only for rates from a door or warehouse to a door or pickup point.

**Sender postal code** is required. For automatic shipments, also complete:

- **Origin city**: the full city name.
- **Sender name** and **Sender phone**.
- For warehouse-origin rates, **CDEK origin point**, where you hand over the parcel. This is not the customer's pickup point.
- For door-origin rates, **Full sender address**.

These details are not needed to calculate a rate. If they are missing after payment, the reason appears under **Delivery information**.

<span id="_4"></span>

## Yandex { #yandex }

Connect your company and accept the offer in your Yandex Delivery account ([Yandex guide](https://yandex.ru/support/delivery-profile/ru/other-day/how-to-join)). A successful rate check in CRM does not mean shipment creation is available.

Enter the **API token** for **Across Russia**, using the selected environment, then select an **Origin station**: a warehouse or acceptance point. After entering the token, use **Refresh stations**. **Packaging weight, g** is added to the product weight.

A Yandex shipment does not call a courier. If you use your own warehouse, configure dispatches in your Yandex account.

## Ozon { #ozon }

1. In Ozon Delivery for Business, create a delivery method and note its identifier.
2. In the Ozon private applications section, create an application with `delivery-api.delivery`, `delivery-api.delivery-point`, and `delivery-api.order` access. Copy its Client ID and Client Secret.
3. Select **New method → Ozon** and complete **Client ID**, **Client secret**, and **Shipping method ID**. When saving, CRM requests a token from Ozon; invalid credentials cannot be saved. Each dispatch point needs its own configuration.
4. For **Check connection**, complete **Test recipient phone** with a number registered with Ozon, and **Test pickup point ID**. The sample calculation uses the default box; it does not confirm the final price for a real order.

The customer needs a Russian phone number registered with Ozon. Frequent checks of different numbers temporarily make the method unavailable. An order cannot be placed with Ozon until the calculation succeeds. Pickup points take time to load after connection: customers may see **The Ozon pickup point list is loading. Try again in a minute.** Only pickup points are available; couriers and parcel lockers are not supported. The price includes delivery and insurance based on the product total. Ozon's final rate at acceptance may differ from the estimate.

<span id="_5"></span>

## Russian Post { #russian-post }

Only price and delivery time calculation through Russian Post's public calculator is supported. It uses the recipient's postal code, so the customer must include that code in their address. Russian Post pickup points are not available.

Complete **Calculation object code** (the shipment type in the calculator) and **Sender postal code**. **Declared value** provides insurance: a fixed amount, the order amount, or a percentage of it, capped by **Maximum declared value**. The object code must support declared value. When insurance is enabled, CRM checks this with Russian Post and will not save an unsupported configuration.

<span id="_6"></span>

## Shipments { #shipments }

Available only for CDEK and Yandex. For Ozon and Russian Post, CRM does not create shipments or show **Delivery information**. Create the shipment in the carrier's account and update the order status manually.

- A shipment is created as soon as an order becomes **Paid**, without waiting for the hourly check. It is prepaid, with no cash on delivery: the customer pays nothing on receipt, and the carrier charges you under your contract.
- If you accept an order before it becomes **Paid**, or use payment on receipt, no shipment is created automatically. Create it in the carrier's account. The order's section will show **Not created**.
- CRM checks active shipments at the start of each hour. When the carrier accepts the parcel, the order becomes **In delivery**; when it is delivered, the order becomes **Completed**. Arrival at a pickup point does not complete the order. If the order is already **Pending pickup**, acceptance does not change its status, but delivery completes it.
- Canceling an order does not cancel its shipment. Manage waybills, labels, and collections in the carrier's account.

<span id="_7"></span>

### Delivery information { #delivery-information }

Check the shipment status, waybill number, and next check time. **Message** explains failures. Shipment status is separate from order status.

Buttons:

- **Create shipment**: available when shipment status is **Not created** and the order is **Paid**.
- **Request carrier status**: available after a registration attempt while the order is not **Completed**, **Canceled**, **Returned**, or **Payment error**. It does not wait for the hourly check. If the response during creation was lost, it first looks for an existing shipment to avoid a duplicate. After a few seconds, click **Refresh data**, which only refreshes the displayed order details.
- **Retry after correction**: available for **Needs correction** if the shipment was not created.

| Shipment status | Meaning and action |
|---|---|
| Not created | Payment is unconfirmed or payment on receipt is used. Wait for Paid or create the shipment with the carrier |
| Awaiting registration, Registering | Creation is in progress; wait |
| Registered | The carrier created the shipment but has not accepted the parcel. Prepare and hand it over; the order status does not change |
| In delivery | The carrier accepted the parcel. The order is In delivery; the next change follows delivery to the customer |
| Delivered | The order is Completed; checks stop |
| Result being confirmed | The carrier's response was lost or the status is unknown. Click Request carrier status if available; otherwise wait for the hourly check |
| Needs correction | The carrier rejected the shipment or required details are missing. Read Message, correct the problem, and click Retry after correction |
| Not delivered, Canceled | Investigate in the carrier's account and handle the order manually; it is not marked successfully completed automatically |

Example reasons shown in **Message**:

- Yandex: **Complete company connection and accept the offer in your Yandex Delivery account** means the contract and offer steps are incomplete. Complete them, then click **Retry after correction**.
- CDEK: the sender's name, phone, origin point, or address is missing, or the order has no recipient details.
- **Shipment settings changed before registration; check them and retry after correction** means the fulfillment method or account changed while the shipment was awaiting creation.

Checks stop after **Delivered**, **Not delivered**, **Canceled**, or **Needs correction**, and when the order becomes **Completed**, **Canceled**, **Returned**, or **Payment error**.
