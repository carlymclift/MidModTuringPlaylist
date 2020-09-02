export const getAllSongs = async () => {
    const response = await fetch('http://localhost:8080/api/v1/playlist')
    const data = await response.json()
    return data
}