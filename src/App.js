import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import musics from './musics';

function App(props) {
  const [current_music, setcurrent_music] = useState(0);
  
  return (
    <div className="container">
      <Header />
      <Main musics={musics} current_music={current_music} setcurrent_music={setcurrent_music} />
      <Footer musics={musics} current_music={current_music} setcurrent_music={setcurrent_music} />
    </div>
  );
}

export default App;
