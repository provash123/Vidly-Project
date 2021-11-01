import React, { Component } from "react";
import { getMovies } from "./fakeMovie";
import Pagination from "./pagination";
import { Paginate } from "./paginate";
import { getGenres } from "./getGenreService";
import ListGroup from "./ListGroup";
import MoviesTable from "./MoviesTable";
import _ from 'lodash'

import SearchBox from './SearchBox';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
    
    sortColumn:{path:'Title',order:'asc'}
  };
  componentDidMount() {
    const genres = [{_id:"", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie_id) => {
    const filtered = this.state.movies.filter((m) => m._id !== movie_id);
    this.setState({ movies: filtered });
  };
  handleLike=(movie)=>{
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie)
    console.log("index=", index)   
    movies[index] = {...movies[index]}
    movies[index].liked = !movies[index].liked
    this.setState({movies})
  }
  handleSearch = query => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };



  
  handlePagination = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = (genre) => {
    console.log(genre);
    this.setState({ selectedGenre: genre,searchQuery:"", currentPage: 1 });
  };
  handleSort=(path)=>{
    const sortColumn = {...this.state.sortColumn}
    if(sortColumn.path === path)
      sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc'
    else{
      sortColumn.path = path
      sortColumn.order = 'asc'
    }
    this.setState({sortColumn})
  }

  render() {
    const {
      movies: allmovies,
      pageSize,
      currentPage,
      selectedGenre,
      sortColumn,
      searchQuery
    } = this.state;

    if (allmovies.length === 0) return <p>There Are No Movies In Database</p>;

    let filtered = allmovies;
    if(searchQuery)
     filtered = allmovies.filter(m=>m.Title.toLowerCase().startsWith(searchQuery.toLowerCase()))
     else if (selectedGenre && selectedGenre)
     filtered = allmovies.filter(m => m.Genre.name === selectedGenre);
          
 const sorted = _.orderBy(filtered,[sortColumn.path],[sortColumn.order])
        

    const movies = Paginate(sorted, currentPage, pageSize);
    
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
            onSelectedGenre={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <p>Showing {filtered.length} Movies</p>
          <SearchBox value={this.state.searchQuery} onChange = {this.handleSearch} />
          <MoviesTable 
               movies={movies} 
               onDelete={this.handleDelete}
               onLike={this.handleLike}
               onSort={this.handleSort}
               
           />
           <Pagination
            ItemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            handlePagination={this.handlePagination}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
