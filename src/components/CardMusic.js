import React from 'react'
import "./CardMusic.css"
function CardMusic({music, index, setcurrent_music}) {

  return (
    <div className="Card effect_hover"
      onClick={_=>setcurrent_music(index)  }
    >
        <div className="card-img">
            <img src={music.cover} alt="capa artista"/>
        </div>
        <div className="name">
            <p>{ music.title }</p>
        </div>
        <div className="card-desc">
            <p>{music.description}</p>
        </div>
    </div>
  )
}

export default CardMusic