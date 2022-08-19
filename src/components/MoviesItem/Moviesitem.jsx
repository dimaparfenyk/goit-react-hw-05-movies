import { Link} from 'react-router-dom';
import { FilmCard, FilmDescription, FilmTitle } from "./MoviesItem.styled";
import PropTypes from 'prop-types';

export const MovieListItem = (movie) => {
    return (
        <FilmCard>
        <Link
            key={movie.id}
            to={`/movies/${movie.id}`}
                style={{ textDecoration: 'none'}}> 
                <img
                    src={movie.src}
                    alt={movie.title}
                    width={360} 
                    style={{ marginBottom: '20px'}}
                    />
            
            <FilmDescription>
                <FilmTitle>{movie.title} ({new Date(movie.release).getFullYear()})
                </FilmTitle> 
            </FilmDescription>
        </Link>
        </FilmCard>
        );
};

MovieListItem.propTypes = {
    id: PropTypes.number.isRequired,
    release: PropTypes.string,
    src: PropTypes.string.isRequired,
    title: PropTypes.string,
    vote:PropTypes.number,
}