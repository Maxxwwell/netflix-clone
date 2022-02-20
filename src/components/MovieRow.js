import React, { useEffect, useState } from 'react'
import requests from '../services/request';
import axios from "../services/axios"
import styled from 'styled-components';
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function MovieRow({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    // console.table(movies);
    const opts = {
        height: "350",
        width: "100%",
        playerVars: {
            autoPlay: 1,
        }
    }

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    // https://www.youtube.com/watch?v=hUhMYRL4i1g
                    console.log(movie.name)
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                }).catch(error => console.log(error));
        }
    };

    return (
        <RowContainer>
            <h4>{title}</h4>

            <RowPoster>
                {movies.map(movie => (
                    <Wrap onClick={() => handleClick(movie)}>
                        <img
                            key={movie.id}
                            
                            height={isLargeRow ? "250px" : "120px"}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}
                        />
                    </Wrap>
                ))}
            </RowPoster>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

        </RowContainer>
    )
}

export default MovieRow;

const RowContainer = styled.div`
    margin-left: 20px;
    color: white;
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
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }

    &:hover {
       transform: scale(1.08) ;
       opacity: 1;
     
    }
`