import React from "react";
import { Link} from 'react-router-dom';
import { FilmCard, FilmDescription, FilmTitle } from "./MoviesItem.styled";

export const MovieListItem = ({ id, title, src }) => {
   
    return (
        <Link style={{
            textDecoration: 'none',
            fontSize: '24px',
            color:'#684929'}}
            to={`/movies/${id}`}
        >
        <FilmCard
            key={id}>
            <img src={src} alt='' width={320} />
            <FilmDescription>
            <FilmTitle>{title}</FilmTitle>
            </FilmDescription>
            </FilmCard>
            </Link>
        );
};