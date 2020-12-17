
const LibrarySong = ({song, setCurrentSong, songs, id, audioRef, isPlaying, setSongs }) => {
    const songSelectHandler = async () => {
        // ed's mess up code
        // const selectedSong = songs.filter((state) => state.id === id);
        // setCurrentSong(selectedSong[0])
        await setCurrentSong(song)
        // add active state
        const newSongs = songs.map((song) => {
            if(song.id === id){
                return{
                    ...song, active: true,
                }
            } else {
                return {
                    ...song, active: false,
                }
            }
        });
        setSongs(newSongs)
        audioRef.current.play();
        if(isPlaying) audioRef.current.play();

    }
    return(
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ''}`}>
            <img src={song.cover} alt={song.name} />
            <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;