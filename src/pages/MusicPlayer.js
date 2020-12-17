import Song from '../components/Song'
import Player from '../components/Player'
import Library from '../components/Library'
import Nav from '../components/Nav'
// import styles scss
import "../styles/app.scss"
// import util
import data from '../data'
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
      animationPercentage: 0,
  })
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [eyeStatus, setEyeStatus] = useState(false);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    // calculate percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100)
    setSongInfo({...songInfo, currentTime: current, duration: duration, 
      animationPercentage: animation})
}
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
        await setCurrentSong(songs[(currentIndex + 1) % songs.length])
        if(isPlaying) audioRef.current.play();
    }
    return (
      <div className={`App ${libraryStatus ? 'library-active' : ''}`}>
        <Nav libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        eyeStatus={eyeStatus}
        setEyeStatus={setEyeStatus}
        />
        <Song currentSong={currentSong} />
        <Player 
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong} 
        songs={songs}
        setSongs={setSongs}
        setSongs={setSongs}
        />
        <EyeComponent 
        eyeStatus={eyeStatus}
        setEyeStatus={setEyeStatus}
        />
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
            ref={audioRef} src={currentSong.audio}
            onEnded={songEndHandler}>
              </audio>        
      </div>
    )
  };

export default MusicPlayer;