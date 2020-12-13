// adding components
import Player from './components/Player'
import Song from './components/Song'
import SecretComponent from './components/SecretComponent'
// import styles scss
import "./styles/app.scss"
// import util
import data from './util'
// react components
import { useState } from 'react';


function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player 
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      currentSong={currentSong} />
      <SecretComponent />
    </div>
  );
}

export default App;
