import React from 'react'

function Stars(props) {
  const elements = []
  for(let i = 0; i < props.maxStars; i++) {
    elements.push((
      <svg className={props.className} viewBox="0 0 17.053 16.978" key={i}>
        <path d="M15.5,6.956H10.206L10.093,6.6,8.512,1.648,6.825,6.956H1.5l4.283,3.211-.118.347L3.929,15.635l4.585-3.369.3.222,4.3,3.16L11.274,9.993l.3-.216Z"></path>
      </svg>
    ))
  }
  return elements
}

export default Stars
