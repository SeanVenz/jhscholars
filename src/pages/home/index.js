import React from 'react'
import { Link } from 'react-router-dom';
import home from '../../images/home.png'
import aboutus from '../../images/aboutus.png'
import joinus from '../../images/joinus.png'
import scholars from '../../images/scholars.png'
import bgpt1 from '../../images/bgpt1.png'
import bg from '../../images/bg.png'
import './index.scss'

function Home() {
  return (
    <div className='home'>
      <Link to="/home">
        <img src={home} alt='Home'/>
      </Link>
      <Link to="/about">
        <img src={aboutus} alt='About Us'/>
      </Link>
      <Link to="/scholars">
        <img src={scholars} alt='Scholars'/>
      </Link>
      <Link to="/join">
        <img src={joinus} alt='Join Us'/>
      </Link>
    </div>
  )
}

export default Home