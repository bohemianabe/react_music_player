import LibrarySong from './LibrarySong'

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus}) => {
    return(
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong 
                    setCurrentSong={setCurrentSong} 
                    // this passes the individual song that we mapped
                    song={song}
                    // this passes all the songs from the list through props
                    songs={songs}
                    id={song.id}
                    key={song.id}
                    audioRef={audioRef}
                    isPlaying={isPlaying}
                    setSongs={setSongs}
                    />
                ))}
            </div>
        </div>
    )
}

export default Library;