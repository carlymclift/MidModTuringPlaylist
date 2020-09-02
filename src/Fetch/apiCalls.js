export const getAllSongs = async () => {
    const response = await fetch('http://localhost:8080/api/v1/playlist')
    const data = await response.json()
    return data
}

export const addMovieRating = async (songName, artistName, link) => {
    const response = await fetch(`http://localhost:8080/api/v1/playlist`, {
        "method": "POST",
        "headers": {
            "content-type": "application/json"
        },
        "body": JSON.stringify({
          "songName": songName,
          "artistName": artistName,
          "link": link
        })
      }
    )
    const message = await response.json()
    return message
  }