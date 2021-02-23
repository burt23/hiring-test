import React, { Component } from 'react'

import TopBar from './TopBar'
import Content from './Content'

import '../sass/app.sass'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { counter: 0 }
    this.onAddItemToCart = this.onAddItemToCart.bind(this)
  }

  onAddItemToCart() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render () {
    return (
      <div>
        <TopBar counter={this.state.counter}/>
        <Content onAddItemToCart={this.onAddItemToCart} />
      </div>
    )
  }
}

export default App
