import { useState, useEffect} from 'react';
import { useParams, useNavigate,useLocation, Outlet} from 'react-router-dom';

import { getMovieDetails } from 'services/fetch';
import { DetailedMovieInfo } from 'components/FilmInfo/DetailedInfo';
import { Container, NavBox, MovieBox} from 'components/FilmInfo/MovieInfo.styled';
import { FilmTitle, FilmRate  } from 'components/MoviesItem/MoviesItem.styled';
import { StyledNavLink, GoBackButton, SubTitle } from './Pages.styled';
import defaultMovie from "../images/defaultMovie.png"

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
       
        <MovieBox>
           <FilmTitle>
          {movie.title} ({new Date(movie.release_date).getFullYear()})
          </FilmTitle> 
              <img
            src={movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              :defaultMovie}
                alt={movie.title}
                width={360} 
                style={{ marginBottom:'20px'}}
              />          
             <FilmRate>Rating : { Math.round(movie.vote_average*10) }%</FilmRate>          
        </MovieBox>

                <DetailedMovieInfo
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
