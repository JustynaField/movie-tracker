import React from 'react';

const Movie = ({movieData, user, addFavorite, deleteFavorite, favorites}) => {

  const { id, title, poster_path, release_date, vote_average, overview } = movieData;
  console.log(favorites);

  return (
    <div className='movie-card'>
      <div className='container'>
        <img className='movie-img'
             src={`https://image.tmdb.org/t/p/w500${poster_path}`}
           />
      </div>
      <h3 className='movie-title'>{title}</h3>
      <p className='movie-overview'>Release Date: {release_date}</p>
      <p className='movie-overview'>{overview}</p>
      <p className='movie-overview'>Vote Average: {vote_average}</p>
      <button className='mark-favorite'
      onClick={() => favoriteMovie()}>
      Favorite
      </button>
    </div>
  )
}

export default Movie;
