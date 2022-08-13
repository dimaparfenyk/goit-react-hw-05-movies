import React, { useState, useEffect } from 'react';

import { getPopularMovies } from 'services/fetch';
import { MoviesList } from 'components/MoviesList/MoviesList';


export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
   getPopularMovies().then(movie => setMovies(movie.results));
  }, []);
    return (
            <MoviesList
                movies={movies}
            />
  );
}


//   {/* <h1>Trending today</h1>
//             <ul>
//             {movies.map(({ id, title, poster_path }) => (
//                 <li key={id}>
//                     <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt='' width={250} />
//                     <Link to={`/movies/${id}`}>{title}</Link>
//                 </li>
//             ))}
//             </ul> */}