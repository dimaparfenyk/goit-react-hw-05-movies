import { useState, useEffect } from 'react';
import {  useParams, NavLink} from 'react-router-dom';

import { MovieInfoNav } from "components/FilmInfo/MovieNavInfo"
import { MovieListItem } from 'components/MoviesItem/Moviesitem';
import { getMovieDetails } from 'services/fetch';
import { Container } from 'components/FilmInfo/MovieInfo.styled';
import { DetailedMovieInfo } from 'components/FilmInfo/DetailedInfo';

export default function MovieDetails() {
    const [movie, setMovie] = useState([]);
    const [movieGenre, setMovieGenre]=useState('')
    const {movieId}  = useParams();
  
  useEffect(() => {
      getMovieDetails(movieId).then(movie =>
      {
          setMovie(movie)
          setMovieGenre(movie.genres)
      }
      ).then( )
  }, [ movieId]);
    
  return (
    <div style={{padding:'15px'}}>
          <NavLink to="/"
              style={{
                  textTransform: 'uppercase',
                  backgroundColor: '#ffb539',
                  width:'80px',
                  textDecoration: 'none',
                  color:'black',
                  marginBottom: '28px',
                  display: 'block',
                  padding: '10px',
                  borderRadius: '8px',
                  fontWeight:'600',
                  cursor: ' pointer',
                  textAlign:'center,'
              }}> Go Back</NavLink>

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
          
          <MovieInfoNav  />
        </div> 
  );
}
