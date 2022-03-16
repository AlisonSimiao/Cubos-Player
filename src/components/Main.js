import React from 'react'
import CardMusic from './CardMusic'
import "./Main.css"

function Main({current_music, setcurrent_music, musics}) {

  return (
    <div className="main">
      <div className="box-main">
        <h2>the best playlist</h2>
        <hr />
        <div className="screen-music">
          {musics.map((music, index)=>{
            return <CardMusic key={music.id} music={music} index={index} setcurrent_music={setcurrent_music}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Main