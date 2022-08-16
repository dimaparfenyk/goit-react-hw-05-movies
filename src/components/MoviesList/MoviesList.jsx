import React from "react";
import { MovieListItem } from "components/MoviesItem/Moviesitem";
import { FilmsList } from "./MoviesList.styled";

export const MoviesList = ({movies}) =>(
    <main>
        <FilmsList>
            {movies.map(({ id, title, poster_path, release_date, vote_average }) =>
                <MovieListItem
                    key={id}
                    id={id}
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    title={title} 
                    release={release_date}
                    vote={vote_average}
            />
        )}
        </FilmsList>
    </main>);

