import React, { Component } from 'react';
import './App.css';
import SongController from '../SongController/SongController';
import { getAllSongs } from '../FetchAPI/apiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      songQueue: []
    }
  }

  async componentDidMount() {
    try {
      const data = await getAllSongs()
      console.log(data)
      this.setState({ songs: data.movies })
    } catch (error) {
      this.setState({error: error})
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Playlist</h1>
        </header>
        <div className="App-background">
          <main>
          </main>
        </div> 
      </div>
    )
  }
}

export default App;
