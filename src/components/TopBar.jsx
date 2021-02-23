import React, { Component } from 'react'

import CartIcon from './CartIcon'
import Logo from './Logo'
import topbar from '../sass/topbar.module.sass'

class TopBar extends Component {
  render () {
    return (
      <nav className={topbar.bar}>
        <div className={topbar.container}>
          <Logo className={topbar.logo} />
          <button className={topbar.button}>
            <CartIcon className={topbar.cartIcon} />
            <span className={topbar.counter}>{this.props.counter}</span>
          </button>
        </div>
      </nav>
    )
  }
}

export default TopBar
