import Song from '../components/Song'
import Player from '../components/Player'
import Library from '../components/Library'
// import styles scss
import "../styles/app.scss"
// import util
import data from '../util'
// react components
import { useState } from 'react';
import EyeComponent from '../components/EyeComponent'



const MusicPlayer = () => {
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
        <EyeComponent />
        <Library 
        songs={songs}
        currentSong={currentSong} />
      </div>
    )
  };

export default MusicPlayer;