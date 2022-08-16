import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { FiSearch } from "react-icons/fi";

import { MoviesList } from 'components/MoviesList/MoviesList';
import { searchMovie } from 'services/fetch';
import { Form, FormInput, FormButton} from './Pages.styled'

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get('movieName')??'';

    useEffect(() => {
        if (movieName === '') return;
        
        searchMovie(movieName).then(movie => {
            setMovies(movie.results)
        })
    }, [movieName]);


    const handleSubmit = e => {

        e.preventDefault();

        const query = e.currentTarget.elements.movieName.value;
        if (query.trim() === '') return;
    
        setSearchParams({ movieName: query});
        e.currentTarget.reset();
    };

    return (
        <>
            <Form
                className='Form'
                onSubmit={handleSubmit}>
                <FormInput
                    className='formInput'
                    type="text"
                    name='movieName'
                    placeholder="Search movie"
                    defaultValue="" 
                />
                <FormButton
                    className='formButton'
                    type="submit">
                    <FiSearch />
                </FormButton>
            </Form> 
            <MoviesList movies={movies}/>
        </>
    );
};