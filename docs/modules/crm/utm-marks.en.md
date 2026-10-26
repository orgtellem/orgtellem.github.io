---
description: "Use Tellem marks and invitation links for ads and partners, associate customers, and compare purchases."
---

<span id="_1"></span>

# Tags and invitation links { #tags-and-invitation-links }

Create separate links for advertising or partners to compare the customers they bring.

Where: **Marketing → Marks** to create tags and **Analytics → Sources** for statistics.

<span id="_2"></span>

## Create a tag { #create-a-tag }

1. Select “Mark” above the table and click “Create”.
2. Enter a name and type. For “Custom”, enter a unique code up to 30 characters. For UTM format, enter the source, medium, and campaign name, up to 20 characters each. UTM parameters are standard link fields identifying the source and campaign.
3. Use Latin letters, digits, and hyphens. The combination of three UTM values must be unique.
4. Optionally choose a group and save.

A group combines tags in statistics and has no link of its own. For example, create a “Bloggers (October)” group and a tag for each blogger.

<span id="_3"></span>

## Get the link { #get-the-link }

Click “Copy link” in the list or use “Invite link” in the record:

| Type | Link format |
| --- | --- |
| Custom | `<application address>/?start=<code>` |
| UTM | `<application address>/?start=<source>_<medium>_<campaign>` |

For Telegram, use the same value after `start=`:

- `https://t.me/<bot>/app?startapp=m-<value>` opens a Mini App with the short name `app`; [configure the Mini App](../../getting-started/bot-setup.md#4-mini-app) first. The tag is assigned when the buyer signs in.
- `https://t.me/<bot>?start=<value>` opens the chat; the tag is assigned only to a new bot user.

In a browser, you can also use `utm_source`, `utm_medium`, and `utm_campaign`; they count toward a UTM tag with matching values.

<span id="_4"></span>

## Check statistics { #statistics }

In **Analytics → Sources**, select a group and period. An empty group filter shows only ungrouped tags. Dates filter when tags were assigned, rather than when accounts were registered; day boundaries follow the CRM user's time zone.

### Mark effectiveness { #effectiveness }

Use **Mark effectiveness** to compare purchases by each customer's first known tag across their entire history. Changing the group or period does not replace that tag with a later one. Customers who purchased before the tag appear separately and do not count toward acquisition metrics. **No purchases before mark** can include customers who registered long ago.

| Metric | How to read it |
| --- | --- |
| First order within 30 days | Share of customers with a first completed purchase within 30 days after the tag |
| Repeat within 30 days / Repeat within 60 days | Share of first-time buyers with a second completed order within 30 or 60 days after the first |
| 30-day revenue per customer | Revenue within 30 days after the tag, divided by the number of customers included, even those who bought nothing |

Each metric includes customers whose full observation window has passed: from the tag for first orders and revenue, or from the first purchase for repeats. The number of customers included therefore differs. A late first order can count toward repeat purchases even if it falls outside **First order within 30 days**.

Completed orders across all locations in the chain count; revenue follows the [general analytics rules](analytics.md#filters-and-calculations). For rate metrics with fewer than 30 customers in the calculation, counts appear instead of percentages: for example, “10 / 20” means 10 of 20 customers purchased. “—” means there is no data for the calculation. Click **Download CSV** to export the current table with the number of customers included in each calculation.

### Tag links in charts { #tag-links }

The charts below the table show all tag assignments, including existing customers. Each customer counts once per tag and may appear under several tags, so the counts differ from the effectiveness table. In a browser, the tag is assigned after following the link and signing in, for both new and existing customers.

These data do not show clicks or advertising costs and do not prove that the link caused a purchase.
