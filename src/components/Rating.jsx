import React, { Component } from 'react'

import Stars from './Stars'

import rating from '../sass/rating.module.sass'

class Rating extends Component {
  constructor(props) {
    super(props)
    this._spacerWidth = (props.width - props.maxRating * props.starWidth) / (props.maxRating - 1)
  }

  getWidth () {
    const Progress = this.props.reviewRating / this.props.maxRating
    const StarsWidth = this.props.starWidth * this.props.maxRating * Progress
    let SpacerWidth = Math.floor(this.props.reviewRating) * this._spacerWidth
    const Width = Math.round(StarsWidth + SpacerWidth)
    return Width
  }

  render () {
    return (
      <div className={rating.container}>
        <div className={rating.row}>
          <div className={rating.background}>
            <Stars className={rating.black_star} maxStars={this.props.maxRating}/>
          </div>
          <div className={rating.foreground} style={{width: this.getWidth()}}>
            <div className={rating.star_rating}>
              <Stars className={rating.gold_star} maxStars={this.props.maxRating} />
            </div>
          </div>
        </div>
        <div className={rating.text_points}>({this.props.reviewRating.toFixed(1)})</div>
      </div>
    )
  }
}

export default Rating
