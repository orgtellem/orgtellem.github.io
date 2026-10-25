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

In **Analytics → Sources**, select a group and period for total and daily registrations. An empty group filter shows only ungrouped tags.

The tag assignment date counts, rather than account registration. Each customer counts once per tag. In a browser, the tag is assigned after following the link and signing in, for both new and existing customers.
