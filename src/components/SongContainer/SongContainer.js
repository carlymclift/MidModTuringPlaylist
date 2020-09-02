import React from 'react'
import './SongContainer.css'
import SongCard from '../SongCard/SongCard'

const SongContainer = ( { songs } ) => {
    const songCards = songs.map(song => {
        console.log(song)
        return (<SongCard {...song} key={song.id} />)
      })

    return (
      <div className="Song-container">
        {songCards}
      </div>
    )
}

export default SongContainer