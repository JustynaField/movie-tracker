import React, { Component } from 'react';
import Movie from '../Movie/Movie'
import MovieGridContainer from '../MovieGrid/MovieGridContainer';
import CreateUserContainer from '../CreateUser/CreateUserContainer';
import UserLoginContainer from '../Login/UserLoginContainer';

export default class MovieGrid extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.fetchMovies();
  }


  render() {
    const { movies, user, addFavorite, fetchFavorites } = this.props;
    const grid = movies.map((movie) => {
      return (
        <Movie key={movie.id}
               movieData={movie}
               user={user}
               addFavorite={addFavorite}
               fetchFavorites={fetchFavorites}
        />
      )
    })

    return (
      <div className='app'>
        <UserLoginContainer />
        <CreateUserContainer />

        <div className='header'>
          <h1>Movie Watcher</h1>
        </div>
        <div className='movie-grid'>
          {grid}
        </div>
      </div>
    )
  }
}
