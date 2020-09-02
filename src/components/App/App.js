import React, { Component } from 'react';
import './App.css';
// import SongController from '../SongController/SongController';
import SongContainer from '../SongContainer/SongContainer'
import Form from '../Form/Form'
import { getAllSongs } from '../../Fetch/apiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      songQueue: []
    }
    this.addNewSong = this.addNewSong.bind(this)
  }

  async componentDidMount() {
    try {
      const data = await getAllSongs()
      this.setState({ songs: data })
    } catch (error) {
      this.setState({error: error})
    }
  }

  addNewSong(newSong) {
    const songs = this.state.songs
      songs.push(newSong)
      this.setState({ songs: songs })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Playlist</h1>
        </header>
        <div className="App-background">
          <main>
            <div>
              <Form addNewSong={this.addNewSong}/>
            </div>

            <div>
              <SongContainer 
                songs={this.state.songs}
              />
            </div>
          </main>
        </div> 
      </div>
    )
  }
}

export default App;
