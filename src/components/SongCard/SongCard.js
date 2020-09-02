import React from 'react'
import './SongCard.css'

const SongCard = ( { songName, artistName, link } ) => {
    return (
      <div className="Song-card">
        <h2>{songName}</h2>
        <p>by: {artistName}</p>
        <a href={link}>Listen Here</a>
        <button className="song-card-button">Next Song</button>
      </div>
    )
}

export default SongCard