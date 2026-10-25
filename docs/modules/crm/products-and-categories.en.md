<span id="_1"></span>

# Categories and products { #categories-and-products }

Create categories and products, then set [stock](inventory.md#by-store). To upload a file, use [catalog import](catalog-import.md).

Where: **Catalog → Categories**, **Catalog → Products**, **Catalog → Archive**.

<span id="_2"></span>

## Create categories { #categories }

1. In **Catalog → Categories**, click “Create”, enter a name, and add an image if needed.
2. For a nested category, select “Parent category”; without one, the category is at the top level. Selecting a category before creation makes it the parent.
3. Save. Drag categories to change their order; drop one onto another to nest it.

Use a square image up to 10 MB. “View products” opens the selected category's products; “Remove from category” moves them to the uncategorized category.

Buyers cannot see the uncategorized category, so assign products a category. A category is also hidden if the chain has no active products in it, or no available products when zero-stock items are hidden.

!!! warning "Deleting a category removes its products from sale"
    Deleting a category also deletes its subcategories. Their products are archived and become uncategorized. To restore them for buyers, publish the products from the archive and assign a new category.

<span id="_3"></span>

## Create a product { #products }

In **Catalog → Products → Create**, choose the appropriate method:

| Method | When to use it |
| --- | --- |
| “Create single” | A separate product without a color, size, or other variant selector |
| “Create variants” | Variants of one product differ by color, size, price, article code, or photo |
| “Add from iiko” | The product must be sent to iiko; an [integration](iiko.md#products) is required |

For a simple product, enter a category and sale price under “Main”. You can add up to 6 photos of up to 10 MB each; a 1:1 ratio is recommended. Buyers see the product's characteristics in its card. Set quantities by store under “Assortment”; CRM offers to configure zero quantities on the first save.

For a product with variants, add at least one variative attribute and set each variant's price, article code, and photo. Attribute combinations must be unique. See [Combining two products by color](product-colors.md) for an example of a color selector and merging existing products.

If using carriers, enter the weight in grams. It affects [delivery calculations](delivery.md); length, width, and height do not. These fields are in the variant record. For a simple product, open it with “Edit” in “Display products list” mode.

<span id="list-actions"></span>

<span id="_4"></span>

## Change or remove products { #change-or-remove-products }

Select rows and the required action under “Actions”. Check the whole selection before changing price, quantity, or category. When duplicating products, photos are copied only with “Product photos” enabled.

A product used in an order cannot be deleted from the regular list; archive it instead. Archiving hides it regardless of stock. See [Inventory](inventory.md) for other ways to remove a product temporarily.

In **Catalog → Archive**, “Publish” restores a product. Deletion from the archive is available if the product is not in an unfinished order.
