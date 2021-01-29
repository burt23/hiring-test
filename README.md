## Mattress Shop Page: A Pairing

### Objective
Build out a cart view to display all items in cart. 

#### Requirements
1. Create an internal api that fetches from the following external resources and returns a transformed dataset. Use the response as the new source for mattress data.
    - mattress data: `https://w5uw2yuhpg.execute-api.us-east-1.amazonaws.com/api/products?set=mattresses`
    - content data: `https://w5uw2yuhpg.execute-api.us-east-1.amazonaws.com/api/products?set=content`

2. Bulid out the Cart view
    - Cart item should have:
        * label
        * price
        * thumbnail
        * quantity of product in cart

##### mattress response:
```
{
    "mattresses": {
        "classic": {
            "name": "Saatva Classic",
            "price": 999,
            "reviewRating": 4.9
        },
        "loom": {
            "name": "Loom &amp; Leaf",
            "price": 1299,
            "reviewRating": 4
        },
        "zen": {
            "name": "Zenhaven",
            "price": 1599,
            "reviewRating": 4.5
        }
    }
}
```

##### content response:
```
[
    {
        "sku": "classic",
        "label": "<span>Saatva Classic Mattress</span>",
        "thumbnail": "https://store.saatva.com/media/catalog/product/t/h/thumb_sm_reg_2x_1_40.jpg",
        "imageFileName": "classic-carousel.jpg"
    },
    {
        "sku": "loom",
        "label": "<span>Loom & Leaf Mattress</span>",
        "thumbnail": "https://store.saatva.com/media/catalog/product/t/h/thumb_ll_reg_2x_12.jpg",
        "imageFileName": "loom-carousel.jpg"
    },
    {
        "sku": "zen",
        "label": "<span>Zenhaven Mattress</span>",
        "imageFileName": "zen-carousel.jpg",
        "thumbnail": "https://store.saatva.com/media/catalog/product/t/h/thumb_zen_reg_2x_4.jpg"
    }
]
```