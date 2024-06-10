import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlay}) => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt=""  onClick={()=>{setPlay(true)}} className='play-icon' />
        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing Tomorrow's Leaders</h2>
            <p>Jellybean University College, situated in the historic city 
                of Portside, is renowned for its top-tier academic programs, 
                cutting-edge research, and distinguished faculty. 
                The university offers over 200 diverse programs in fields
                such as Engineering, Business, Law, Medicine, Arts, and 
                Sciences. Its vibrant campus life and strong community 
                engagement provide students with a dynamic 
                and inclusive environment for personal and academic growth
                </p>
                <p>
                Jellybean University College, nestled in the heart of Portside,
                 boasts a rich academic tradition coupled with a forward-thinking 
                 approach. Offering over 200 programs across various
                  disciplines, including Engineering, Business, Law, Medicine, 
                  Arts, and Sciences, it caters to a diverse range of student 
                  interests and career aspirations. With a focus on innovation 
                  and excellence, Jellybean University College provides a 
                  dynamic learning environment where students 
                thrive academically and personally
                </p>
                <p>
                The institution's esteemed faculty, comprised of leaders in 
                their respective fields, foster a culture of intellectual 
                curiosity and mentorship. Through state-of-the-art facilities
                 and hands-on research opportunities, students engage in 
                 cutting-edge research and real-world applications, preparing
                  them for success in their chosen professions. Beyond 
                  academics, the vibrant campus life and strong community
                 connections at Jellybean University College enrich the student 
                experience, fostering a sense of belonging and collaboration
                </p>
            
        </div>
    </div>
  )
}

export default About