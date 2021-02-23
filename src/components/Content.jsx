import React, { Component } from 'react'
import axios from 'axios'

import Details from './Details'
import ToggleButtonGroup from './ToggleButtonGroup'

import content from '../sass/content.module.sass'
import mattresses from '../js/data.js'

class Content extends Component {
  constructor(props) {
    super(props)
    const mattressesList = Object.keys(mattresses)
    const currentMattress = mattressesList[0]
    const mattress = mattresses[currentMattress]
    this.state = { currentMattress, mattress, mattresses, mattressesList }
    this.onAddItemToCart = this.onAddItemToCart.bind(this)
    this.onMattressChanged = this.onMattressChanged.bind(this)
  }

  componentDidMount() {
    /* fetch data from internal endpoint */

    /* update state with new data */
  }

  onAddItemToCart() {
    this.props.onAddItemToCart()
  }

  onMattressChanged(mattressKey) {
    this.setState({
      currentMattress: mattressKey,
      mattress: this.state.mattresses[mattressKey]
    })
  }

  render () {
    return (
      <main className={content.container}>
        <div className={content.image_container}>
          <img alt={this.state.mattress.name} src={this.state.mattress.imageFileName} />
        </div>
        <div className={content.item}>
          <h1 className={content.header}>Choose Your Mattress</h1>
          <div className={content.group_label}>Select mattress type</div>
          <ToggleButtonGroup
            currentMattress={this.state.currentMattress}
            mattresses={this.state.mattresses}
            onMattressChanged={this.onMattressChanged}
          />
          <Details mattress={this.state.mattress} />
          <button className={content.buy_button} onClick={this.onAddItemToCart}>Add to Cart</button>
        </div>
      </main>
    )
  }
}

export default Content
