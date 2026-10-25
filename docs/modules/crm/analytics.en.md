<span id="_1"></span>

# Home and analytics { #home-and-analytics }

Use Home and Analytics to review sales, repeat purchases, and customers. Home and Overview show the same metrics when their filters match.

Where: **Home** and **Analytics**.

<span id="_2"></span>

## Filters and calculations { #filters-and-calculations }

Select the period, locations, city, order type, and platform. For another period, choose “Custom dates” and enter “From” and “To”. Filters are saved in the link.

A single location is selected automatically. With several locations, an empty selection means the whole chain.

Purchase metrics include only completed orders, using the order date in the CRM time zone. Revenue includes delivery and payment fees, with redeemed points deducted. Cancellations, returns, and payment failures do not count as purchases. Editing an old order changes the metrics for its original period.

A new customer placed their first completed order across the chain in the selected period. A location or platform filter does not change that first purchase date. For a small audience, some shares and percentage changes are hidden; absolute values appear instead. “—” means a metric or comparison cannot be calculated.

<span id="_3"></span>

## Home { #home }

Use the information button to read metric formulas. Changes are compared with the preceding period of the same length. “View guests” on a card opens the corresponding customer list.

Inactive guests have no completed orders in the 90 days ending at the selected period's end, or at the current moment if earlier. Without filters, the chain-wide base includes guests who have never purchased. With a location selected, including the only location selected automatically, or a city, order type, or platform filter, it includes all-time buyers in that selection.

## Customers and RFM { #rfm }

In **Analytics → Guests**, buyers are grouped by how recently they purchased, how often they buy, and how much they spend. This grouping method is called RFM. Select a segment to view its customers, then open a guest's record. “All customers” beside the matrix also includes guests without purchases in the chain-wide view.

The matrix uses the report period. Mailings and saved segments use a separate all-time calculation for each location, updated separately, including after saving **Settings → RFM analytics**. The groups can therefore differ. Guests without completed orders receive no RFM segment.

### Audience segments { #audience-segments }

To select customers using your own conditions and estimate whether you can contact them, open **Analytics → Segments**. See [Segments](segments.md) for steps and limitations.

<span id="_4"></span>

## Cohorts { #cohorts }

In **Analytics → Cohorts**, compare repeat purchases by customers who first bought in the same month. This group is called a cohort.

- Each row is the month of the first completed purchase; “Customers” shows the group size.
- “M+0” is 100%. Later months show the share of returning customers and “N of M”. Each customer counts once per month; future months show “—”.
- “Cohort year” selects the first purchase year. Repeat purchases also count in the following year. Completed orders from all stores count by their completion date.
- Cohorts cannot be selected for mailings.

<span id="_5"></span>

## Overview { #overview }

In **Analytics → Overview**, “Owner” mode shows key metrics and location comparisons. “Marketer” adds detailed breakdowns of sales, products, cancellations, payments, and registrations.

“Registrations” includes guests who registered during the period, including those without purchases. Order type and platform filters keep guests with matching purchases. Without tags, “First known attribution”, meaning the first known customer source, shows “Unknown”; it is not inferred from the order platform.

Without purchases, charts are hidden, but registrations and inactivity remain available. CSV exports use the current filters; the guest list exports in full, including other pages. See [Customers](clients.md) for working with a customer record.

<span id="_6"></span>

## Tags { #tags }

In **Analytics → Sources**, compare activity from [invitation links](utm-marks.md#statistics).

<span id="_7"></span>

## Reports { #reports }

Open **Reports → Stock reports**, choose “Warehouse stock”, and click “Download”. Excel buttons on the orders, customers, products, and inventory screens export their tables.
