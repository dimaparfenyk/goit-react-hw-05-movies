import { useState, useEffect} from 'react';
import { useParams, useNavigate,useLocation, Outlet} from 'react-router-dom';

import { MovieListItem } from 'components/MoviesItem/Moviesitem';
import { getMovieDetails } from 'services/fetch';
import { Container, NavBox } from 'components/FilmInfo/MovieInfo.styled';
import { StyledNavLink, GoBackButton, SubTitle } from './Pages.styled';
import { DetailedMovieInfo } from 'components/FilmInfo/DetailedInfo';

export default function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const [movieGenre, setMovieGenre] = useState('');
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();


  // const goBack = () => navigate(-1);
  const goBack= () => navigate(location?.state?.from ?? '/');
  
  useEffect(() => {
      getMovieDetails(movieId).then(movie =>
      {setMovie(movie)
      setMovieGenre(movie.genres)}
      )
  }, [ movieId]);
    
  return (
    <main style={{padding:'15px'}}>
          <GoBackButton onClick={goBack}> Go Back </GoBackButton>

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
                <SubTitle>Additional information:</SubTitle>
                <ul style={{listStyle:'none',}}>
                  <li> <StyledNavLink to="cast">Cast</StyledNavLink></li>
                  <li> <StyledNavLink to="reviews">Reviews</StyledNavLink></li>
                </ul> 

        <Outlet />
        
      </NavBox>
   
    </main> 
  );
}
