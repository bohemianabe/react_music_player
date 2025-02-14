import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';

const SecretPlayer = ({ setSongs, songs, audioRef, setCurrentSong, currentSong, isPlaying, setIsPlaying, songInfo, setSongInfo }) => {
    // event handlers
    const playSongHandler = () => {
        if(isPlaying){
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current.play()
            setIsPlaying(!isPlaying)
        }
    }
    const getTime = (time) => {
        return(
            Math.floor(time / 60 ) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
    }
    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
        if(direction === 'skip-forward'){
            await setCurrentSong(songs[(currentIndex + 1) % songs.length])
        }
        if(direction === 'skip-back'){
            if((currentIndex -1) % songs.length === -1){
                await setCurrentSong(songs[songs.length -1]);
                if(isPlaying) audioRef.current.play();
                return;
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length])
        }
        if(isPlaying) audioRef.current.play();
    }
        // useEffect
        useEffect(() => {
            // add active state
            const newSongs = songs.map((song) => {
                if(song.id === currentSong.id){
                    return {
                        ...song, active: true,
                    }
                } else {
                    return {
                        ...song, active: false,
                    }
                }
            });
            setSongs(newSongs);
        }, [currentSong])
        // add the styles
        const trackAnim = {
            transform: `translateX(${songInfo.animationPercentage}%)`
        }
        return(
        <div className="secretPlayer">
            <div className="secret-time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className="track"> 
                <input min={0} max={songInfo.duration || 0} 
                onChange={dragHandler}
                value={songInfo.currentTime} type="range"/>
                <div className="animate-track" style={trackAnim}></div>
                </div>
                <p> {songInfo.duration ? getTime(songInfo.duration): '0:00'}</p>
            </div>
            <div className="secret-play-control">
            <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} className="skip-back" size='2x' icon={faAngleLeft} />
            <FontAwesomeIcon className="play" 
            onClick={playSongHandler}
            size='2x' 
            icon={ isPlaying ? faPause : faPlay} />
            <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} className="skip-forward" size='2x' icon={faAngleRight} />
            </div>
        </div>
    )
}

export default SecretPlayer;