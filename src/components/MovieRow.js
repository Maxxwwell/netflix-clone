import React, { useEffect, useState } from 'react'
import requests from '../services/request';
import axios from "../services/axios"
import styled from 'styled-components';

const base_url = "https://image.tmdb.org/t/p/original/";

function MovieRow({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.table(movies);

    return (
        <RowContainer>
            <h2>{title}</h2>

            <RowPoster>
                {movies.map(movie => (
                    <Wrap>
                        <img
                            key={movie.id}
                             height= {isLargeRow ? "250px" : "120px"} 
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}
                        />
                    </Wrap>
                ))}
            </RowPoster>
        </RowContainer>
    )
}

export default MovieRow;

const RowContainer = styled.div`
    margin-left: 20px;
`
const RowPoster = styled.div`
    display: flex;
    width: 100%;
    overflow-y: scroll;
    overflow-y: hidden;
    padding: 10px;

    &::-webkit-scrollbar {
        display: none;
    }

`
const Wrap = styled.div` 

    margin-right: 10px;
      img {
        /* width: 100%; */
        cursor: pointer;
        object-fit: contain;
        transition: transform 250ms;

      
    }

    

    &:hover {
       transform: scale(1.08) ;
       opacity: 1;
    }
`