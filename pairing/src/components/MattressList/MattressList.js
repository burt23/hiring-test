import React from 'react'
import './MattressList.scss'
import MattressItemButton from '../MattressItemButton/MattressItemButton'
import MattressItemInfo from '../MattressItemInfo/MattressItemInfo'
import AddToCartButton from '../AddToCartButton/AddToCartButton'

function MattressList ({ mattresses, setSelectedMattress, selectedMattress, setMattressCount, mattressCount }) {
  const title = 'Choose Your Product'

  title = mattresses && 'Choose Your Mattress'

  return (
    <div>
      <h1 className='title'>
        {title}
      </h1>
      <h3 className='subtitle'>
        SELECT MATTRESS TYPE
      </h3>
      <div className='columns is-desktop is-gapless'>
        {mattresses.map((mattress) =>
          <MattressItemButton
            key={mattress.name}
            mattress={mattress}
            setSelectedMattress={setSelectedMattress}
            selectedMattress={selectedMattress}
          />)}
      </div>
      <MattressItemInfo selectedMattress={selectedMattress} />
      <div className='columns cart'>
        <AddToCartButton setMattressCount={setMattressCount} mattressCount={mattressCount} />
      </div>
    </div>
  )
}

export default MattressList
