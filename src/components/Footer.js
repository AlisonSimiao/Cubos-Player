import React,{useRef,useState,useEffect} from 'react'
import "./Footer.css"
import stop from "./../assets/stop.svg";
import play from "./../assets/play.svg";
import pause from "./../assets/pause.svg";
import next from "./../assets/next.svg";
import previous from "./../assets/previous.svg";

function Footer({current_music, setcurrent_music, musics}) {
  const [playing, setPlaying] = useState(false);
  const audioRef    = useRef(null),
        current_time= useRef(null),
        duration    = useRef(null),
        range       = useRef(null),
        titleRef    = useRef(null),
        authorRef   = useRef(null);
    useEffect(() => {
      audioRef.current.src = musics[current_music].url;

      titleRef.current.textContent = musics[current_music].title;
      authorRef.current.textContent = musics[current_music].artist;
      setPlaying(false);

    }, [current_music])
    
  

  const modulo = (x, N)=>{
    return (x % N + N) %N;
  }
  const reset =()=>{
    setPlaying(false);
    range.current.value = 0;
    current_time.current.textContent = `00:00`;
    duration.current.textContent = `00:00`;
  }
  return (
    <section className="player">
      <div className="player-audio-desc">
        <strong ref={titleRef}>??? ?????</strong>
        <p className="author" ref={authorRef}>???? ?????</p>
      </div>
      <div className="player-params">
        <div className="controls">
          <img src={stop} alt="stop" 
            onClick={()=>{
              setcurrent_music(0);
              if(playing){
                audioRef.current.pause();
                audioRef.current.current_time = 0;
              }

              titleRef.current.textContent = "--- ----";
              authorRef.current.textContent = "---- -----";
              audioRef.current.src = "";
              reset();
            }}
          />
          <img src={previous} alt="previou" 
            onClick={()=>{
              const state = modulo( current_music - 1 ,musics.length);
             
              setcurrent_music( state );
            }}
          />
          <img className="play" src={playing ? pause : play} alt="play/pause" 
            onClick={()=>{
              if( !playing )
                audioRef.current.play();
              else 
                audioRef.current.pause();

              setPlaying(!playing);
              
            }}
          />
          <img src={next} alt="next" 
            onClick={()=>{
              
              const state = modulo( current_music + 1 ,musics.length);
              
              setcurrent_music( state );
            }}
          />
        </div>
        <div className="audio-conteiner">

          <audio
            controls
            ref={audioRef}
            loop = {true}
            onEnded={  reset }
            onLoadedData = {()=>{
              range.current.max = audioRef.current.duration;
              range.current.value = 0;
              const min = Math.round( audioRef.current.duration/60);
              const seg = Math.round(audioRef.current.duration%60);
               
              duration.current.textContent = `${min.toString().padStart(2,0)}:${seg.toString().padStart(2,0)}`;
            }}
            onTimeUpdate={()=>{
              
              const min = Math.round( audioRef.current.currentTime/60);
              const seg = Math.round(audioRef.current.currentTime%60);
               
              range.current.value = audioRef.current.currentTime;
              current_time.current.textContent = `${min.toString().padStart(2,0)}:${seg.toString().padStart(2,0)}`;
            }}
          />
          <p ref={current_time}>00:00</p>
          <input type="range" ref={range} defaultValue="0" min="0" max="100"/>
          <p ref={duration} >00:00</p>
        </div>
      </div>

    </section>
  )
}

export default Footer
