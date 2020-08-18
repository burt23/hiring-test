import React from 'react'
import './Navbar.scss'
import Logo from '../../images/logo_saatva_new.svg'
import Cart from '../../images/svgexport-4.svg'

function Navbar ({ mattressCount }) {
  const renderMattressCount = (count) => {
    return <span className='mattress-count is-size-7-mobile'>{count}</span>
  }

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a className='navbar-item' href=''>
          <Logo />
        </a>
        <a className='navbar-item cart' href=''>
          <Cart />
          {mattressCount >= 0 && mattressCount <= 99 && renderMattressCount(mattressCount)}
          {mattressCount >= 100 && renderMattressCount('+99')}
        </a>
      </div>
    </nav>
  )
}

export default Navbar
