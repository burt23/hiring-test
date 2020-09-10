import React, { useContext } from "react";

import logo from "../assets/images/logo.svg";
import cartLogo from "../assets/images/cart.svg";

import { CartContext } from "../context/CartContext";

export default function Header() {
  const [cartCounter] = useContext(CartContext);

  return (
    <header className="header">
      <div className="header-container">
        <a
          href="https://www.saatvamattress.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="header-container__logo"
            src={logo}
            alt="saatva-logo"
          />
        </a>
        <div className="header-container__cart-logo">
          <img src={cartLogo} alt="cart-logo" />
          {cartCounter > 0 && <span data-testid="counter">{cartCounter}</span>}
        </div>
      </div>
    </header>
  );
}
