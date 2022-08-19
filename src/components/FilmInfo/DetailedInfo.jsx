import { SubTitle,OverviewText, GenresList,GenreItem } from 'components/FilmInfo/MovieInfo.styled';
import PropTypes from 'prop-types';

export const DetailedMovieInfo = ({ overview, genres }) => {
  return (
    <div>
      <SubTitle>Overview</SubTitle>
      <OverviewText>{overview}</OverviewText>
      <SubTitle>Genres</SubTitle>
      <GenresList>
        {genres && genres.map(({ id, name }) => (
          <GenreItem key={id}>{name} </GenreItem>
        ))}
      </GenresList>
    </div>
  )
};

DetailedMovieInfo.prototype = {
  genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })),
  overview:PropTypes.string
}