import { SubTitle,OverviewText, GenresList,GenreItem } from 'components/FilmInfo/MovieInfo.styled';

export const DetailedMovieInfo = ({vote, overview,genres}) => {
    return (
          <div>
              <SubTitle>Overview</SubTitle>
              <OverviewText>{overview}</OverviewText>
              <SubTitle>Genres</SubTitle>
              <GenresList>
                {genres && genres.map(({id, name}) => (
                <GenreItem key={id}>{name} </GenreItem>
              ))}
        </GenresList>
        
        <OverviewText>Rating : { Math.round(vote*10) }%</OverviewText>
             </div> 
    )
}