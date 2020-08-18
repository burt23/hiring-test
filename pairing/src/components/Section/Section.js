import React, { useState } from 'react'
import './Section.scss'
import Image from '../Image/Image'
import MattressList from '../MattressList/MattressList'
import data from '../../api/data'

function Section ({ setMattressCount, mattressCount }) {
  const { mattresses } = data()
  const mattressesArray = Object.values(mattresses)
  const defaultSelectedMattress = mattressesArray[0]
  const [selectedMattress, setSelectedMattress] = useState(defaultSelectedMattress)

  return (
    <section className='section'>
      <div className='tile is-ancestor'>
        <div className='tile is-vertical is-8'>
          <div className='tile is-child box'>
            <Image filename={selectedMattress.imageFileName} />
          </div>
        </div>
        <div className='tile is-parent'>
          <div className='tile is-child box'>
            <MattressList
              mattresses={mattressesArray}
              setSelectedMattress={setSelectedMattress}
              selectedMattress={selectedMattress}
              setMattressCount={setMattressCount}
              mattressCount={mattressCount}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section
