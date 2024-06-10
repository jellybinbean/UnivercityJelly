import React from 'react'
import arrow from '../../assets/dark-arrow.png'
import './Header.css'

const Header = () => {
  return (
    <div className='header container' name='home'>
        <div className="header-text">
            <h1>Empowering Minds, Inspiring Futures.</h1>
            <p>
              
      Jellybean University offers a wide range of programs including 
      over 200 undergraduate, graduate, and professional 
      degrees. Key areas of study include Engineering, Business, 
      Law, Medicine, Arts, and Sciences, all designed to foster 
      innovation and academic excellence. Interdisciplinary programs 
      and research opportunities provide a comprehensive education
      that prepares students for diverse career paths.
            </p>
            <button className='btn'>Explore more <img src={arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Header