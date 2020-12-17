import SecretSong from '../components/SecretSong'
import Player2 from '../components/SecretPlayer'
import Library from '../components/Library'
import Nav from '../components/Nav'
import data from '../secretData'
import {useState, useRef} from 'react'
// import styles scss
import "../styles/app.scss"

const SecretPlayer = () => {
    // ref
    const audioRef = useRef(null);
    // states
    const [songs, setSongs] = useState(data())
    const [currentSong, setCurrentSong] = useState(songs[0])
    const [isPlaying, setIsPlaying] = useState(false)
    // state of the song
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0,
    })
    const [libraryStatus, setLibraryStatus] = useState(false)
    const [eyeStatus, setEyeStatus] = useState(false)
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        // calculate percentage
        const roundedCurrent = Math.round(current);
        const roundedDuration = Math.round(duration);
        const animation = Math.round((roundedCurrent / roundedDuration) * 100)
        setSongInfo({...songInfo, currentTime: current, 
            duration: duration, animationPercentage: animation})
    }
    const songEndHandler = async () => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
            await setCurrentSong(songs[(currentIndex + 1) % songs.length])
            if(isPlaying) audioRef.current.play();
        }    
    return(
        <div className={`App ${libraryStatus ? 'library-active' : ''}`}>
            <Nav 
            libraryStatus={libraryStatus}
            setLibraryStatus={setLibraryStatus}
            setlibraryStatus={setSongInfo}
            eyeStatus={eyeStatus}
            setEyeStatus={setEyeStatus}
            />
            <SecretSong currentSong={currentSong}/>
            <Player2 isPlaying={isPlaying}
            audioRef={audioRef}
            setIsPlaying={setIsPlaying}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            songInfo={songInfo}
            setSongInfo={setSongInfo}
            songs={songs}
            setSongs={setSongs}
            setSongs={setSongs}    
            />
            <Library songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong} 
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
}

export default SecretPlayer;