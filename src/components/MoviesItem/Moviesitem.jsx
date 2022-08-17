import { Link} from 'react-router-dom';
import { FilmCard, FilmDescription, FilmTitle } from "./MoviesItem.styled";

export const MovieListItem = (movie) => {
    return (
        <FilmCard>
        <Link
            key={movie.id}
            to={`/movies/${movie.id}`}
                style={{ textDecoration: 'none'}}> 
            <img src={movie.src} alt={movie.title} width={360} />
            
            <FilmDescription>
                <FilmTitle>{movie.title} ({new Date(movie.release).getFullYear()})
                </FilmTitle> 
            </FilmDescription>
        </Link>
        </FilmCard>
        );
};