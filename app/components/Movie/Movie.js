import React from 'react';

import './Movie.css';

const Movie = ({movieData, user, addFavorite, deleteFavorite, fetchFavorites, favorites}) => {

  const { id, title, poster_path, release_date, vote_average, overview } = movieData;

  const checkFavorites = () => {
    return favorites.find(movie => {
      return movie.movie_id === id;
    });
  }

  const addToFavorites = () => {
    if (!checkFavorites()) {
      addFavorite(id, user, title, poster_path, release_date, vote_average, overview);
      return fetchFavorites(user);
    } else {
      deleteFavorite(user, id);
      return fetchFavorites(user);
    }
  }

  return (
    <div className='movie-card'>
      <div className='container'>
        <img className='movie-img'
             src={`https://image.tmdb.org/t/p/w500${poster_path}`}
           />
      </div>
      <button className='mark-favorite'
              onClick={() => addToFavorites()}>
              Favorite
            </button>
      <h3 className='movie-title'>{title}</h3>
      <p className='movie-overview'>Release Date: {release_date}</p>
      <p className='movie-overview'>{overview}</p>
      <p className='movie-overview'>Vote Average: {vote_average}</p>
    </div>
  )
}

export default Movie;
