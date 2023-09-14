import { createApi, fetchBaseQuery} from  "@reduxjs/toolkit/query/react"

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '181b48e817mshbca2d08e1081fc2p1933a8jsn90c4b76730be',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam-core.p.rapidapi.com/v1",
        prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key", "181b48e817mshbca2d08e1081fc2p1933a8jsn90c4b76730be")

            return headers
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => "/charts/world"}),
        getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}`}),
        getSongsByGenre: builder.query({ query: (genre) => `v1/charts/genre-world?genre_code=${genre}` }),
        getSongsBySearch: builder.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
        getSongRelated: builder.query({ query: ({ songid}) => `/tracks/related?track_id=${songid}`}),
        getArtistDetails: builder.query({ query:(artistId) => `/artists/details?artist_id=${artistId}`}),
        getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country?country_code=${countryCode}`})
    })
})



export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery,
    useGetSongsByGenreQuery 
} = shazamCoreApi