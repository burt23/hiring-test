import React, { useState } from 'react'
import classNames from 'classnames' 
import '../scss/Body.scss'

import mattressData from '../../data/mattresses.json'

// We kept as much of the original app as possible

const Body = ({
  // props
}) => {
  /**
   * Replacement for Vue data:
   */
  const mattresses = mattressData.mattresses
  const [selectedMattressKey, setSelectedMattressKey] = useState('classic')
  const selectedMattress = mattresses[selectedMattressKey]


  /**
   * Replacement for Vue methods:
   */
  const updateSelectedButton = () => {
    // No longer needed. Handled with useState hook
  }

  const showSelectedMattressAndInfo = (mattressKey) => {
    setSelectedMattressKey(mattressKey)
  }

  const updateCartCount = () => {
    const counter = 0
    const cartCountNode = document.querySelector('.nav-cart-count')
    counter = ++counter
    const cartCountText = Number(cartCountNode.innerText)
    cartCountNode.innerText = cartCountText + counter
  }

  /**
   * Replacement for Vue template:
   */
  return (
    <div className="body-content">
      {/* TODO: Functioning Carousel */}
      <div className="classic-carousel carousel">
        <div className="image-container">
          {/* 
            TODO: images
            <img src="/assets/classic-carousel.jpg" class="classic-carousel" />
          */}
        </div>
      </div>
      <div className="interactive-area">
        <h2>Choose Your Mattress</h2>
        <div className="mattress-types-container">
          <p className="select-mattress-type">Select Mattress Type</p>
          <div className="selector-buttons-container">
            {/* button */}
            { Object.keys(mattresses).map(mattressKey => {
              const mattress = mattresses[mattressKey]
              return (
                <button 
                  key={mattressKey}
                  className={ classNames({'selected': mattress.name === selectedMattress.name}) }
                  onClick={() => showSelectedMattressAndInfo(mattressKey)}>
                    {mattress.name}
                </button>
              )
            })}
          </div>
          <div className="selected-mattress-info">
            <p className="title">{ selectedMattress.name }</p>
            <p className="price">${ selectedMattress.price }</p>
          </div>
          <div className="selected-mattress-review">
            <p className="review">Average Review Rating: { selectedMattress.reviewRating }</p>
          </div>
        </div>
        <div className="add-to-cart-container">
          <button className="add-to-cart" onClick={updateCartCount}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Body