import React from 'react'
import './Image.scss'

function Image ({ filename }) {
  return <img src={`https://raw.githubusercontent.com/acarvajal-gap/florence/master/src/images/${filename}`} />
}

export default Image
