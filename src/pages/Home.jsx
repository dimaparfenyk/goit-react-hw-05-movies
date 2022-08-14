import React, { useState, useEffect } from 'react';

import { getPopularMovies } from 'services/fetch';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { PageTitle } from 'components/MoviesList/MoviesList.styled';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
   getPopularMovies().then(movie => setMovies(movie.results));
  }, []);

  return (
    <>
      <PageTitle>Trending today</PageTitle>
      <MoviesList
        movies={movies} />
    </>
  );
}
