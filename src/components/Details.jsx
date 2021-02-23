import React, { Component } from 'react'

import Rating from './Rating'

import details from '../sass/details.module.sass'

class Details extends Component {
  render () {
    return (
      <div className={details.container}>
        <div className={details.name_price}>
          <div className={`${details.item} ${details.name}`}>{this.props.mattress.name}</div>
          <div className={`${details.item} ${details.price}`}>${this.props.mattress.price.toLocaleString('us')}</div>
        </div>
        <Rating
          maxRating={5}
          reviewRating={this.props.mattress.reviewRating}
          starWidth={16}
          width={112}
        />
      </div>
    )
  }
}

export default Details
