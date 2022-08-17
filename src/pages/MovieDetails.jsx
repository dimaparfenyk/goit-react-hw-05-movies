import { useState, useEffect, Suspense} from 'react';
import {  useParams, NavLink , Outlet,  useNavigate} from 'react-router-dom';

import { MovieListItem } from 'components/MoviesItem/Moviesitem';
import { getMovieDetails } from 'services/fetch';
import { Container, NavBox } from 'components/FilmInfo/MovieInfo.styled';
import { DetailedMovieInfo } from 'components/FilmInfo/DetailedInfo';

export default function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const [movieGenre, setMovieGenre] = useState('');
  const { movieId } = useParams();
  const navigate = useNavigate();
  
  const goBack = () => navigate(-1);
  
  useEffect(() => {
      getMovieDetails(movieId).then(movie =>
      {setMovie(movie)
      setMovieGenre(movie.genres)}
      )
  }, [ movieId]);
    
  return (
    <main style={{padding:'15px'}}>
          <button onClick={goBack}
              style={{
                  textTransform: 'uppercase',
                  backgroundColor: '#ffb539',
                width: '80px',
                  border:'none',
                  textDecoration: 'none',
                  color:'black',
                  marginBottom: '28px',
                  display: 'block',
                  padding: '10px',
                  borderRadius: '8px',
                  fontWeight:'600',
                  cursor: ' pointer',
                  textAlign:'center,'
              }}> Go Back</button>

            <Container>
                <MovieListItem
                    movie={movie}
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    id={movie.id}
                    title={movie.title}
                    release={movie.release_date}
                    vote={movie.vote_average}
                />

                <DetailedMovieInfo
                    vote={movie.vote_average}
                    overview={movie.overview} 
                    genres={movieGenre}/>                        
          </Container>
     
          <NavBox>
                <h2>Additional information:</h2>
                <ul>
                  <li> <NavLink to="cast">Cast</NavLink></li>
                  <li> <NavLink to="reviews">Reviews</NavLink></li>
                </ul>  
        
      </NavBox>
      
     <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
      </Suspense>   
      
    </main> 
  );
}
