import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap'

import { URL_IMG, IMG_SIZE_THUMBNAIL} from '../const';
import './MovieThumbnail.css';

export default class MovieThumbnail extends Component {

    // Fetching Movie info for Thumbnail
    componentDidMount() {
        
    }

    render() {
        const year = new Date(this.props.movie.release_date);
        console.log("GENRE!!!!!!"+this.props.movie.genres);
        let genres = this.props.movie.genres;
        console.log("converted GENRE!!!!!"+this.props.movie.genres);

        

        return(
            <div className="MovieThumbnail">
                <Image className="Image" key={this.props.movie.id} src={URL_IMG+IMG_SIZE_THUMBNAIL+this.props.movie.poster_path} responsive />
                <div className="MovieInfo">
                    <div className="Title">{this.props.movie.title}</div>
                    <div>
                        <span className="InfoLabel">Genre : </span>
                        {/* <span className="Info">{year.getFullYear()}</span> */}
                        
                    </div>
                    <div>
                        <span className="InfoLabel">Year : </span>
                        <span className="Info">{year.getFullYear()}</span>
                    </div>
                </div>
            </div>
        )
    }
}