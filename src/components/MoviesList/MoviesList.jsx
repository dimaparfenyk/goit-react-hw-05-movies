import React from "react";
import PropTypes from 'prop-types';

import { MovieListItem } from "components/MoviesItem/Moviesitem";
import { FilmsList } from "./MoviesList.styled";
import defaultMovie from "../../images/defaultMovie.png"

export const MoviesList = ({movies}) =>(
    <main>
        <FilmsList>
            {movies.map(({ id, title, poster_path, release_date, vote_average }) =>
                <MovieListItem
                    key={id}
                    id={id}
                    src={poster_path
                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        :defaultMovie}
                    title={title} 
                    release={release_date}
                    vote={vote_average}
            />
        )}
        </FilmsList>
    </main>);

MoviesList.propTypes = {
        movies:PropTypes.array.isRequired,
    }

