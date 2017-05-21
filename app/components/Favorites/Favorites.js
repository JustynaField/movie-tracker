import React, { Component } from 'react';

export default class Favorites extends Component{
  constructor(){
    super()
  }


  componentWillMount(){
    this.props.fetchFavorites(this.props.user);
  }

  render(){
    const { favorites, user, deleteFavorite, fetchFavorites } = this.props
    const faves = () => favorites.map(movie => {
      return (
        <div className='movie-card'>
          <div className='container'>
            <img className='movie-img'
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
          </div>
          <button className='favorited'
                  onClick={() => { deleteFavorite(user, movie.movie_id)
                              return fetchFavorites(user) } }>
                  Favorite
                </button>
          <h3 className='movie-title'>{movie.title}</h3>
          <p className='movie-overview'>Release Date: {movie.release_date}</p>
          <p className='movie-overview'>{movie.overview}</p>
          <p className='movie-overview'>Vote Average: {movie.vote_average}</p>
        </div>
      )
  });

  return (
    <div className='favorites-grid'>
      { faves() }
    </div>
  )
  }
}
