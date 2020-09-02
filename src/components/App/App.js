import React, { Component } from 'react';
import './App.css';
// import SongController from '../SongController/SongController';
import SongContainer from '../SongContainer/SongContainer'
import { getAllSongs } from '../../Fetch/apiCalls'

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
      this.setState({ songs: data })
    } catch (error) {
      this.setState({error: error})
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Playlist</h1>
        </header>
        <div className="App-background">
          <main>
            <SongContainer 
              songs={this.state.songs}
            />
          </main>
        </div> 
      </div>
    )
  }
}

export default App;
