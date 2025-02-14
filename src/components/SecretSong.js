
const SecretSong = ({currentSong}) => {
    return(
        <div className="secretSong">
            <img src={currentSong.cover} alt={currentSong.name} />
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )
}

export default SecretSong;