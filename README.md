## Mattress Shop Page: A Pairing

### Objective
Expand on the take home exercise to fetch external data and add a discount to the cart. 

#### Requirements
1. Create an internal api that fetches from the following external resources and returns a transformed dataset. Use the response as the new source for mattress data.
    - mattress data: `https://w5uw2yuhpg.execute-api.us-east-1.amazonaws.com/api/products?set=mattresses`
    - content data: `https://w5uw2yuhpg.execute-api.us-east-1.amazonaws.com/api/products?set=content`

2. Apply a coupon code via the query parameter that will discount the value of the discount in the cart view. 
     - if url is `http://localhost:3000/cart?discount=100`, the cart will show a $100 discount off the total price.
     - reference mock-discount.png for UI updates

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

##### content response:git
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