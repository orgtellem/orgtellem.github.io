---
description: "Prepare and send Tellem mailings, choose an audience, check available channels, and review the result."
---

<span id="_1"></span>

# Campaigns and mailings { #mailings }

Create a campaign for customers in selected segments and send a message immediately or at a scheduled time. Only the CRM owner can create and launch campaigns.

Where: **Marketing → Mailings**. On a phone, choose **Actions → Create**.

<span id="_2"></span>

## Recipients and channels { #recipients }

Mailings go to customers with mailings enabled, through every available channel they have not disabled in their [profile](../app/account.md#channels):

- Telegram: the integration is enabled, and the customer has started the bot and has not blocked it;
- VK: the [store community is connected](vk.md), and the customer has linked VK ID and allowed messages;
- email: the address is verified and email sending is available to the store.

Choose a channel, **“Auto”**, or **“All channels”**. The latter two use all channels the customer has enabled. Images go only to Telegram; VK receives text and links, and email receives text. An image-only message goes only to Telegram. Mailings do not use push.

In **“Segments”**, combine up to 20 standard RFM segments and [saved segments](segments.md) from one location. A customer matching several choices joins the audience once. RFM covers all time; the analytics report period does not change the audience. Archived segments cannot be selected or launched.

CRM selects a single location automatically. Changing the location keeps standard RFM choices and clears incompatible saved segments.

Review the available recipient count on the right. Expand **“Excluded”** for opt-outs, unavailable channels, and the frequency limit. CRM flags an audience smaller than 30 customers; you can still save the campaign.

CRM fixes the audience membership at launch. Later segment changes and new orders do not alter it; CRM checks consent and channel availability before sending. By default, a customer participates in at most one new campaign per location in seven days across all channels. An unknown result keeps the restriction. CRM does not reconstruct audience membership for older sends.

!!! warning "Advertising requires separate consent"
    The mailing switch covers informational messages. It does not replace separate prior consent for advertising. Sellers obtain consent and are responsible for message content; see [Legal documents](../../legal/index.md).

[Points expiry reminders](bonus-system.md#expiry) are configured separately and are unaffected by opting out of mailings.

<span id="create-a-mailing"></span>

<span id="_4"></span>

## Create and send { #create-and-send }

1. Click **“Create”**. Under **“Audience and goal”**, set the name, location, purpose, and audience. **“Segments”** contains **“Standard”** and **“Saved”** groups.
2. Under **“Message”**, select the channel and enter the text. The preview updates as you type. For “Auto” and “All channels”, switch **“Message appearance”** between Telegram, VK, and email; this does not change the sending channel.
3. Under **“Schedule”**, set a date at least two minutes ahead and an **“Observation window”** of 7, 14, or 30 days. CRM stores the window for later result assessment.
4. Click **“Schedule campaign”**, check the audience and channel, then confirm. Sending starts within a minute after the scheduled time. For an early send, select **“Send now”** in the list and confirm.

???+ example "Example: create a campaign"

    Demo data: standard and saved segments, text, preview, and scheduling. The shared GIF shows Russian interface labels and captions.

    <figure markdown="span">
    [![Create a campaign: segments, text, preview, date, and scheduling confirmation](../../media/crm/campaign-creation.gif){ width=720 height=900 loading=lazy }](../../media/crm/campaign-creation.gif)
    </figure>

Under **“Formatting”**, choose Markdown or HTML and open the help. The text limit is 4,000 characters, or 9,000 for VK. VK receives plain text and links. The form checks formatting before saving; correct any errors it reports.

**“Add image”** accepts SVG, PNG, JPEG, GIF, WebP, BMP, or HEIC up to 10 MB. In Telegram, the image and text arrive in one card. HTML preserves emphasis, links, and line breaks. Markdown uses the previous Telegram rules, so saved mailings do not need to be rewritten.

Only an “Await” campaign can be edited or cancelled; other campaigns are available for viewing. To repeat a campaign that has started, create a new one instead of editing the original.

<span id="email"></span>

<span id="_5"></span>

### Email behavior { #email-behavior }

The first line becomes the subject and heading, up to 100 characters. HTML keeps formatting; Markdown arrives as text without conversion. Tellem adds the layout and footer. Without text, no email is sent.

<span id="list-and-statuses"></span>

<span id="_3"></span>

## Check the result { #results }

| Status | Meaning and next action |
| --- | --- |
| “Await” | Waiting for its date; edit, cancel, or send now |
| “In progress” | Sending; wait for the result |
| “Sent” | Every channel accepted the message for at least one customer; this does not confirm reading |
| “Canceled” | Cancelled manually or nobody has an available channel |
| “Failed” | No channel accepted the message or validation failed before sending |
| “Partially sent” | Some channels accepted the message and others did not |
| “Unknown result” | A channel did not confirm acceptance; the message may have arrived. Repeat is blocked |

**“Repeat”** creates a new campaign with the original text, image, format, all segments, location, and observation window. At launch, CRM selects the audience again and checks frequency. After partial sending, a repeat may duplicate messages in channels that accepted them; check the result before sending again.

<span id="create-with-ai"></span>

## AI assistance { #ai }

**“Write with AI”** appears when the [AI integration](integrations.md#ai) is enabled and has an API key. First select the campaign audience and location.

Select a purpose or **“Choose automatically”** to let AI suggest a purpose from all selected segment conditions. Add optional wishes of up to 1,000 characters and click **“Generate”**. Review the suggestion, then click **“Apply”**. The campaign purpose and text stay unchanged until you apply; AI does not change the audience or location. You can cancel the request or generate another version. For VK, AI drafts plain text.

AI uses segment conditions, stores, catalog information, popular products, active promotions, and promo codes, including their codes. The recipient list is not included. Before applying, check prices, conditions, and codes against CRM.

## Customer history { #customer-history }

In the [customer record](clients.md#campaigns), choose a location and open **“Campaigns”**. Select a row and click **“Open campaign”** to review its original message and audience. Membership does not confirm delivery or reading. Merging accounts combines history rows and marks the merge; the original audience size remains unchanged.
