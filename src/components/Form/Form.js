import React, { Component } from 'react'
import './Form.css'
import shortid from 'shortid'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            song: '',
            artist: '',
            link: ''
        }
    }

    updateIdeaForm = (event) => {
        const inputName = event.target.name
        const inputValue = event.target.value
        this.setState({ [inputName]: inputValue })

        // OR 
        /*
        this.setState({ [event.target.name]: event.target.value });
        */
    }

    submitSong = event => {
        event.preventDefault()
        // create a new idea
        const newSong = {
            id: shortid.generate(),
            songName: this.state.song,
            artistName: this.state.artist,
            link: this.state.link
        }
        // get data to app
        this.props.addNewSong(newSong)
        //clear inputs
    }

    render() {
        return (
            <>
            <h2>Add song to queue</h2>
            <form className="Form">
                <input
                    type="text"
                    placeholder="Song"
                    name="song"
                    value={this.state.song}
                    onChange={this.updateForm}
                />
                <input
                    type="text"
                    placeholder="Artist"
                    name="artist"
                    value={this.state.artist}
                    onChange={this.updateForm}
                />
                <input
                    type="text"
                    placeholder="Link"
                    name="artist"
                    value={this.state.link}
                    onChange={this.updateForm}
                />
                <button onClick={this.submitSong}>Submit</button>
            </form>
            </>
        )
    }
}

export default Form;