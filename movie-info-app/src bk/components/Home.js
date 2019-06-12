import React, { Component } from 'react';

import { API_URL, API_KEY} from '../config';
import Header from './Header';

export default class Menu extends Component {
    constructor(props) {    super(props)  }

    state = {
        movie_list : [],
        currentPage : 0,
        totalPage : 0,
        searchTerm : ''
    }

    componentDidMount() {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-USpage=1`;
        this.fetchItems(endpoint);
    }

    fetchItems = (endpoint) => {
        fetch(endpoint)
        .then(result => result.json())
        .then(result => {
            this.setState({
                movies: [...this.state.movie_list, ...result.results],
                currentPage: result.page,
                totalPages: result.total_pages
            })
        })
    }

    searchItems = (searchTerm) => {
        console.log(searchTerm);
        let endpoint = '';
        this.setState({
            movie_list: [],
            searchTerm: searchTerm
        })

        if(searchTerm === '') {
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-USpage=1`;
        } else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
        }
        this.fetchItems(endpoint);
    }

    loadMoreItems = () => {
        let endpoint = '';
        this.setState({ loading:true })

        if(this.state.searchTerm === '') {
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;
        } else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query${this.state.searchTerm}&page=${this.state.currentPage + 1}`;
        }
        this.fetchItems(endpoint);
    }

    render() {    
        const element = (<div>Text from Element</div>)    
        return (
            <div className="home">
                <Header />
            </div>
        )  
    }
}