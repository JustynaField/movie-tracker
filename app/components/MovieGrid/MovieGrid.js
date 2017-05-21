import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Movie from '../Movie/Movie';
import Favorites from '../Favorites/Favorites';

export default class MovieGrid extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.fetchMovies();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user.name !== nextProps.user.name) {
      this.props.fetchFavorites(nextProps.user)
    }
  }

  render() {
    const { movies, user, addFavorite, deleteFavorite, fetchFavorites, favorites} = this.props;
    const grid = () => movies.map((movie, index) => {
      return (
        <Movie key={index}
               movieData={movie}
               user={user}
               addFavorite={addFavorite}
               deleteFavorite={deleteFavorite}
               fetchFavorites={fetchFavorites}
               favorites={favorites}
             />
      )
    });

    return (
      <div className='movie-grid'>
      <h1>These are the favorites</h1>
      <Favorites user={user}
        deleteFavorite={deleteFavorite}
        fetchFavorites={fetchFavorites}
        favorites={favorites}
      />
        { grid() }
      </div>
    )
  }
}
