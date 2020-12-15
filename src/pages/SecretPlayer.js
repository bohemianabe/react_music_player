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
    })
    const [libraryStatus, setLibraryStatus] = useState(false)
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime: current, duration: duration})
    }

    return(
        <div className="App">
            <Nav 
            libraryStatus={libraryStatus}
            setLibraryStatus={setLibraryStatus}
            setlibraryStatus={setSongInfo}
            />
            <SecretSong currentSong={currentSong}/>
            <Player2 isPlaying={isPlaying}
            audioRef={audioRef}
            setIsPlaying={setIsPlaying}
            currentSong={currentSong}
            songInfo={songInfo}
            setSongInfo={setSongInfo}
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
            ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}

export default SecretPlayer;