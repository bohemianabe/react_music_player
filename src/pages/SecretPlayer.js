import SecretSong from '../components/SecretSong'
import Player2 from '../components/SecretPlayer'
import Library from '../components/Library';
import data from '../secretData'
import {useState} from 'react'
// import styles scss
import "../styles/app.scss"

const SecretPlayer = () => {
    const [songs, setSongs] = useState(data())
    const [currentSong, setCurrentSong] = useState(songs[0])
    const [isPlaying, setIsPlaying] = useState(false)
    return(
        <div className="App">
            <SecretSong currentSong={currentSong}/>
            <Player2 isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentSong={currentSong}
            />
            <Library songs={songs} currentSong={currentSong} />
        </div>
    )
}

export default SecretPlayer;