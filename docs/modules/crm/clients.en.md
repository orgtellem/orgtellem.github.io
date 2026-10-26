---
description: "Find customers and review contacts, order history, bonus accounts, and birthdays in Tellem CRM."
---

<span id="_1"></span>

# Customers { #customers }

Find a buyer, contact them, or check their orders and points.

Where: **Clients**. A buyer appears in the list after using the application; you cannot create or delete their record manually.

<span id="list"></span>

<span id="_2"></span>
<span id="contact-a-customer"></span>

<span id="_3"></span>

## Find and contact a customer { #find-and-contact-a-customer }

Search matches first name, last name, patronymic, Telegram username, and email. For phone numbers, use the column header filter. The Excel button exports the table.

Select a customer and open the contact action:

- “Telegram” opens a chat if the customer has a Telegram username.
- “Email” sends an email from CRM to a verified address; the first line becomes the subject. If sending fails, check email availability with the Tellem team.

Contact buttons inside the customer record open Telegram or your email application; these also accept unverified email addresses. Use [Mailings](mass-mailings.md) to message several customers.

<span id="_4"></span>

## Customer record { #customer-record }

Open the record with the edit button, or choose “Show orders” to go straight to orders. Save changes before leaving.

Contacts and addresses are read-only: the buyer changes them in their [application profile](../app/account.md). Under “Access”, permissions let you disable delivery or pickup orders. Buyers then stop seeing all methods of that type, including carriers. “Online” and “In establishment” remain available; the catalog-viewing permission has no effect on access.

In “Orders”, open the required order. See [Orders](orders.md) for processing it.

### Points { #bonuses }

“Bonuses” is available when the loyalty program is enabled. Check the balance, next expiry, and transaction history there. Buyers who have not joined have no balance. Manual balance changes are available only for Tellem and appear as a manual adjustment in history. See the [loyalty program](bonus-system.md) for calculation and expiry rules.

### Birthday { #birthday }

Enter or change the day and month without a year, then save before the gift period begins. If you delete the date manually, the application does not fill it again from an external service. Buyers see gift conditions in their [profile](../app/account.md#birthday).

An owner or administrator can compensate for missed points with “Compensate birthday gift” in the points section. Review the [compensation conditions](bonus-system.md#birthday-compensation) before confirming.

Use [Segments](segments.md) to select an audience by purchase behavior, or [Analytics](analytics.md#rfm) to review customer metrics.
