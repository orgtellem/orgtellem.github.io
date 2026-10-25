<span id="_1"></span>

# Combining two products by color { #combining-two-products-by-color }

Combine two separate products into one group so customers can choose a color directly in the product card.

Where: **Catalog → Products**. The shared screenshots show the Russian interface.

In this example, a café sells **vanilla macarons, 3 pieces**, for **360 rubles**, in pink and pistachio colors. The filling and flavor are the same; only the almond shells' color differs.

<span id="1"></span>

## 1. Prepare two products { #1-prepare-two-products }

The catalog must already contain two simple products:

| Product | Photo | Price |
|---|---|---|
| Vanilla macaron — pink, 3 pieces | Pink macarons | 360 rubles |
| Vanilla macaron — pistachio color, 3 pieces | Green macarons | 360 rubles |

If the products do not exist, add each through **Create → Create single** — see [Categories and products](products-and-categories.md). For a restaurant menu sent to iiko, use **Add from iiko** and the matching menu items.

!!! warning "Before merging"
    The selected products must not yet have any orders. Merge products of the same type: regular products with regular products, or iiko products with iiko products. Record their stock quantities by store and article codes: you will need to set them again after merging. Saving the new group replaces the original products.

<span id="2"></span>

## 2. Merge the products { #2-merge-the-products }

1. Select **Group variative products**.
2. Search for “Macaron” and press **Enter**.
3. Select both rows using the checkboxes.
4. Open **Actions → Transform to variants**.
5. In the product editor, set **Name of group** to **Vanilla macaron, 3 pieces** and check the category.

![Two products selected using checkboxes; Transform to variants is available in the Actions menu.](../../media/crm/product-colors/select-products.png)

<span id="3"></span>

## 3. Add the Color attribute { #3-add-the-color-attribute }

On **Main**, under **Variative attributes**, click **Create**. In the attribute template window, select **Color** and click **Select**.

If no suitable template exists, create one in the same window: set **Name** to **Color**, **Type** to **Color**, and click **Save**. Then select the template for the group.

![The Color template has Color selected as its type.](../../media/crm/product-colors/color-template.png)

The **Color** type gives customers colored circles. A text attribute with the same name shows text buttons.

<span id="4"></span>

## 4. Assign colors to variants { #4-assign-colors-to-variants }

In the variants list, select the pink macaron and click **Edit**. In its card, scroll to **Variative attributes** and click **Edit** in the **Color** row.

Choose an existing shade or **Create…**. For a new color, enter its name and choose a shade using the colored square:

| Variant | Color name | Example color code |
|---|---|---|
| Pink macaron | Pink | `#E7A3AD` |
| Green macaron | Pistachio | `#ABC47D` |

![Creating a pink shade from the variant card: Pink as the name and a colored square.](../../media/crm/product-colors/create-color.png)

Save the color, check the variant's photo and price, set an article code such as **VAN-PINK-3**, and click **Save** in the variant card. Repeat for pistachio with **VAN-GREEN-3**. The color values must differ.

To show **one card** in the category, leave **Show in catalog** enabled only for the pink variant. Pistachio remains available through the selector inside the card. To show both cards in the category, enable this checkbox for both variants.

![A group with two differently colored variants; Show in catalog is enabled only for pink.](../../media/crm/product-colors/variants.png)

<span id="5"></span>

## 5. Set stock and save { #5-set-stock-and-save }

On **Assortment**, select a store and set each variant's quantity using **Edit** in its row. Confirm each row using the checkmark button. This example uses **30 sets** of each color. Repeat for other stores as needed — see [Inventory](inventory.md).

![Assortment: each color has its own article code and example stock of 30.](../../media/crm/product-colors/stock.png)

Click **Save** at the bottom of the product editor. If the CRM offers to configure empty stock in other stores, choose **Yes** to configure it or **No** if the product is not yet sold there.

<span id="6"></span>

## 6. Check the customer experience { #6-check-the-customer-experience }

Open the app, select the correct store, and find the macaron in its category. The card shows **Color: Pink** and two colored circles below the price. Tapping the pistachio circle switches the variant: the photo, name, color label, and article code change. An outline marks the selected circle.

<div class="grid" markdown>

![Customer card: pink macarons, the pink circle selected, article code VAN-PINK-3.](../../media/crm/product-colors/customer-pink.png){ width="300" }

![After tapping the green circle: pistachio macarons, Pistachio as the color, article code VAN-GREEN-3.](../../media/crm/product-colors/customer-green.png){ width="300" }

</div>

The example price stays at **360 rubles**; if variants have different prices, it changes too. The purchase buttons apply to the selected color. Before opening sales, switch between both colors and check photos, prices, and stock. More details: [Storefront and cart](../app/ui-and-pages.md).
