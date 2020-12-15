import Song from '../components/Song'
import Player from '../components/Player'
import Library from '../components/Library'
import Nav from '../components/Nav'
// import styles scss
import "../styles/app.scss"
// import util
import data from '../util'
// react components
import { useState, useRef } from 'react';
import EyeComponent from '../components/EyeComponent'



const MusicPlayer = () => {
      // ref
    const audioRef = useRef(null);
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    // state of the song
    const [songInfo, setSongInfo] = useState({
      currentTime: 0,
      duration: 0,
  })
  const [libraryStatus, setLibraryStatus] = useState(false);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime: current, duration: duration})
}

    return (
      <div className="App">
        <Nav libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        />
        <Song currentSong={currentSong} />
        <Player 
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        currentSong={currentSong} />
        <EyeComponent />
        <Library 
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
        />
            <audio 
            onLoadedMetadata={timeUpdateHandler}
            onTimeUpdate={timeUpdateHandler}
            ref={audioRef} src={currentSong.audio}></audio>        
      </div>
    )
  };

export default MusicPlayer;