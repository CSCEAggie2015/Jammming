import React from 'react';
import { TrackList } from '../../Components/TrackList/TrackList';
import './Playlist.css';

export class Playlist extends React.Component {
    constructor(props) {
        super(props)

        this.handleNameChange = this.handleNameChange.bind(this);
    }
     
    handleNameChange(e) {
        this.props.onNameChange(e.target.value)
    }
    
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
                <TrackList playlistName={this.props.playlistName}
                            tracks={this.props.playlistTracks}
                            onRemove={this.props.onRemove}
                            isRemoval={true}/>
                <button onClick={this.props.onSave} 
                        className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>              
        )
    }
}