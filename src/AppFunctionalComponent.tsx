import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Header/Navbar';
import ProductContainer from './components/Products/ProductContainer';
import { ParseJson } from './utils/parseJson';
import Mattress from './model/Mattress';

const data = new ParseJson().ParseJsonData();

export interface CartItem {
  product: Mattress,
  count: number
}

const App = () => {
  // types not set for useState
  const { productSelected, setProductSelected } = useState(data[0].get_Mattress())
  const { cartItems, setCartItems } = useState([])
  const { isCheckout, setIsCheckout } = useState(false)


  const checkoutOrder = () => {
    setIsCheckout(true)
  }

  const removeItemFromCart = (item: Mattress) => {
    let newCartItems = cartItems
    setCartItems(newCartItems.filter((element: CartItem )=> element.product.get_Name() !== item.get_Name()))
  }

  const addItemToCart = (item: Mattress) => {
    const newCartItems = cartItems
    let alreadyInCart = false;

    newCartItems.forEach((element: CartItem) => {
      if (element.product.get_Name() === item.get_Name()) {
        element.count++;
        alreadyInCart = true;
      }
    });

    if (!alreadyInCart) {
      newCartItems.push({ product: item, count: 1 });
    }

    setCartItems(newCartItems)
    setIsCheckout(false)

  }

  const selectedProduct = (product: Mattress) => {
    setProductSelected(product)
  }

  if (data.length < 0) {
    return (
      <div className="spinner-border mt-5 ml-5" role="status">
        <span className="visually-hidden"></span>
      </div>
    )
  }

  return (
    <div>
      <Navbar
        cartItems={cartItems}
        isCheckout={isCheckout}
        checkoutOrder={checkoutOrder}
        removeItemFromCart={removeItemFromCart}
      />
      <ProductContainer
        productSelected={productSelected}
        selectedProduct={selectedProduct}
        productList={data}
        addItemToCart={addItemToCart} />
    </div>
  );

}

export default App;
