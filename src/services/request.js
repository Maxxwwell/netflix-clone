const apiKey = 'f942c6143f31284cc5d352eb8281cf12';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${apiKey}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
    fetchHorroMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${apiKey}&with_genres=99`,
    fetchCrime: `/discover/movie?api_key=${apiKey}&with_genres=80`,
    fetchHistory: `/discover/movie?api_key=${apiKey}&with_genres=36`,
    fetchUpcoming: `/discover/movie/upcoming?api_key=${apiKey}`,
    fetchAnime: `/discover/movie?api_key=${apiKey}&with_genres=16`,

}

export default requests;