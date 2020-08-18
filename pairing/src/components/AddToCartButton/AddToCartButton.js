import React from 'react'
import './AddToCartButton.scss'

function AddToCartButton ({ setMattressCount, mattressCount }) {
  return (
    <button className='button is-medium is-fullwidth add-to-cart' onClick={() => setMattressCount(mattressCount + 1)}>
      Add to Cart
    </button>
  )
}

export default AddToCartButton
