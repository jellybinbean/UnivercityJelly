import './Video.css'
import React, { useRef } from 'react'
import video from '../../assets/ru.mp4'

const Video = ({setPlay,play}) => {
    const player = useRef(null);

    const closePlayer = (e) =>{
        if(e.target === player.current){
            setPlay(false);
        }
    }
  return (
    <div onClick={closePlayer} className={`video ${play ? '':'hide'}`} ref={player}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Video