import React, { Component } from 'react';
import { MovieThumbnail} from '../components';
import {URL_LIST, URL_GENRES, API_KEY} from '../const';
import { Row } from 'react-bootstrap';

import './MovieListContainer.css';

export default class MovieListContainer extends Component{

    constructor() {
		super();
		this.state = {
            movielist: [],
            genereslist: []
        };
        
        
    }

    componentDidMount() {
        

        // Fetch Genre List
        // let genre_url = URL_GENRES + API_KEY;
        // fetch(genre_url)
        // .then(response => response.json())
		// .then(data => this.genereslist);

        // Fetch Movie List
        let list_url = URL_LIST + API_KEY;
        fetch(list_url)
        .then(response => response.json())
		.then(data => {
			let movielist = data.results.map((movie) => {
		    	return(
                    // <MovieThumbnail key={movie.id} path={movie.poster_path} title={movie.title} 
                    //     release_date={movie.release_date} vote={movie.vote_average}/>
                    <MovieThumbnail movie={movie}/>
				)
			})
			this.setState({movielist: movielist});
		});
    }

    render() {        
        return (
            <div className='MovieListContainer'>
                <Row>
                        {this.state.movielist}
                        {this.state.genereslist}
                </Row>
            </div>            
        )
    }
}