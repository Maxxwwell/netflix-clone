import React from 'react'
import styled from 'styled-components'
import Banner from '../components/Banner'
import MovieRow from '../components/MovieRow'
import NavBar from '../components/NavBar'
import requests from '../services/request'

function Home() {
    return (
        

        <MoviesContainer>
            <NavBar />
            <Banner />

            <MovieRow title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <MovieRow title="Up Coming" fetchUrl={requests.fetchUpcoming} />
            <MovieRow title="Trending Now" fetchUrl={requests.fetchTrending} />
            <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <MovieRow title="Crime" fetchUrl={requests.fetchCrime} />
            <MovieRow title="Commedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <MovieRow title="History" fetchUrl={requests.fetchHistory} />
            <MovieRow title="Animations" fetchUrl={requests.fetchAnime} />
            <MovieRow title="Horror Movies" fetchUrl={requests.fetchHorroMovies} />
            <MovieRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <MovieRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </MoviesContainer>
    )
}

export default Home


// const BannerContainer = styled.div`
// `

const MoviesContainer = styled.div`
overflow-x: hidden;
`

