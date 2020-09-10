import React from "react";

import Layout from "./Layout";
import Body from "./Body";

import { CartProvider } from "../context/CartContext";

function App() {
  return (
    <CartProvider>
      <Layout>
        <Body />
      </Layout>
    </CartProvider>
  );
}

export default App;
