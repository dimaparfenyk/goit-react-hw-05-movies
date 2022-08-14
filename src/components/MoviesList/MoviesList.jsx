import React from "react";
import { MovieListItem } from "components/MoviesItem/Moviesitem";
import { FilmsList } from "./MoviesList.styled";

export const MoviesList = ({movies}) =>(
    <main>
        <FilmsList>
            {movies.map(({ id, title, poster_path }) =>
                <MovieListItem
            key={id}
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            title={title} 
            />
        )}
        </FilmsList>
    </main>);

