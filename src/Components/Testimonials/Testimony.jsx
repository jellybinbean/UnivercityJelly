import React, { useRef } from 'react'
import './Testimonials.css'
import nxtImg from '../../assets/next-icon.png'
import backImg from '../../assets/back-icon.png'
import user from '../../assets/user-1.png'
import stevo from '../../assets/stevo.jpg'
import manu from '../../assets/manu.jpg'
import cliff from '../../assets/cliff.jpg'

const Testimony = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () =>{
        if(tx> -50){
            tx -= 20;
        }
        slider.current.style.transform =`translateX(${tx}%)`
    }
    const slideback = () =>{
        if(tx < 0){
            tx += 20;
        }
        slider.current.style.transform =`translateX(${tx}%)`
    }
  return (
    <div className="testimonials">
        <img src={nxtImg} onClick = {slideForward} alt="" className='next-btn'/>
        <img src={backImg} onClick = {slideback} alt="" className='back-btn'/>
        <div className="slider">
            <ul ref= {slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user} alt="" />
                            <div>
                                <h3>Clementine Mwende 1</h3>
                                <span>Jellybean University, Kenya</span>
                            </div>
                        </div>
                        <p>
                            taking computer science degree at this school 
                            was one of the best decisions i've ever made. the school has provide me with vast knowledge 

                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={cliff} alt="" />
                            <div>
                                <h3>Cliffton Ngalu</h3>
                                <span>Jellybean University, Kenya</span>
                            </div>
                        </div>
                        <p>
                            taking computer science degree at this school 
                            was one of the best decisions i've ever made. the school has provide me with vast knowledge 

                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={stevo} alt="" />
                            <div>
                                <h3>Stephen Mukhebi</h3>
                                <span>Jellybean University, Kenya</span>
                            </div>
                        </div>
                        <p>
                            taking computer science degree at this school 
                            was one of the best decisions i've ever made. the school has provide me with vast knowledge 

                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={manu} alt="" />
                            <div>
                                <h3>Manuel Baraka</h3>
                                <span>Jellybean University, Kenya</span>
                            </div>
                        </div>
                        <p>
                            taking computer science degree at this school 
                            was one of the best decisions i've ever made. the school has provide me with vast knowledge 

                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user} alt="" />
                            <div>
                                <h3>jelly Rita</h3>
                                <span>Jellybean University, Kenya</span>
                            </div>
                        </div>
                        <p>
                            taking computer science degree at this school 
                            was one of the best decisions i've ever made. the school has provide me with vast knowledge 

                        </p>
                    </div>
                </li>
            </ul>
        </div>
    
    
    </div>
  )
}

export default Testimony