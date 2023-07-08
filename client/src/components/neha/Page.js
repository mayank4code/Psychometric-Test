import React from 'react'
import Image from './image.png'
import { Link } from 'react-router-dom'
import './page.css'

const Page = () => {
  return (<>

    <div className='container-page1'>
<div className='content'>
      <div className='img-container'>
        <img className='image' src={Image} ></img>
      </div>

      <div className='container-2'>
        <h1 className="text-1">TAKE ONE <br />
          STEP AHEAD<br />
          IN YOUR<br />
          BUSINESS</h1><br />

        <Link to="/page2" style={{ textDecoration: 'none' }}>
          <button className='know-btn'>KNOW MORE <span className='arrow'>&rarr;</span></button>
        </Link>
      </div>
      </div>
    </div>
  </>
  )
}

export default Page