import React from 'react'
import './MattressItemButton.scss'

function MattressItemButton ({ mattress, setSelectedMattress, selectedMattress }) {
  const active = (mattress.name === selectedMattress.name) ? 'is-active' : ''

  return (
    <div className='column mattress'>
      <button className={`button is-fullwidth break ${active}`} onClick={() => setSelectedMattress(mattress)}>
        {mattress.name}
      </button>
    </div>
  )
}

export default MattressItemButton
