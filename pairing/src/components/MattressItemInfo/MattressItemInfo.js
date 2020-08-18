import React from 'react'
import './MattressItemInfo.scss'

function MattressItemInfo ({ selectedMattress }) {
  const renderReviewRating = (rating) => {
    const stars = []
    const intPart = Math.trunc(rating)
    const floatPart = Number((rating - intPart).toFixed(2))
    Array.from(Array(intPart)).forEach((x, i) => {
      stars.push(<i className='fa fa-star' key={`start-${i}`} aria-hidden='true' />)
    })
    if (floatPart >= 0.5) {
      stars.push(<i className='fa fa-star-half-full' key='half-start' aria-hidden='true' />)
    }

    return stars
  }

  return (
    <div className='columns details'>
      <div className='column is-half'>
        <h3 className='subtitle'>
          {`${selectedMattress.name} mattress`}
        </h3>
        <div className='stars'>
          {renderReviewRating(selectedMattress.reviewRating)}
        </div>
      </div>
      <div className='column is-half'>
        <h3 className='subtitle is-right-text'>
          {`$${new Intl.NumberFormat().format(selectedMattress.price)}`}
        </h3>
      </div>
    </div>
  )
}

export default MattressItemInfo
