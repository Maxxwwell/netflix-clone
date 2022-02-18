import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from "../services/axios"
import requests from "../services/request"

function Banner() {

    const [movie, setMovie] = useState([]);



    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <BannerContainer style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`
        }}>
            <BannerContent>
                <h1>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <ButtonsContainer>
                    <BannerButton>Play</BannerButton>
                    <BannerButton>My List</BannerButton>
                </ButtonsContainer>

                <h2>
                    {truncate(movie?.overview, 150)}
                </h2>
            </BannerContent>

        </BannerContainer>

    )
}


export default Banner

const BannerContainer = styled.header`
    background-size: cover;
    background-position: center;
    color: white;
    object-fit: cover;
    height: 448px;
`

const BannerContent = styled.div`
    margin-left: 30px;
    padding-top: 140px;
    height: 190px;

    h1 {
        font-size: 3rem;
        font-weight: 800;
        padding-bottom: 0.3rem;
    }
    h2 {
       width : 45rem;
       line-height: 1.3;
       padding-top: 1rem;
       font-size: 0.8rem;
        max-width: 360px;
        height: 80px;
    }
`

const ButtonsContainer = styled.div`
`


const BannerButton = styled.button`
`
