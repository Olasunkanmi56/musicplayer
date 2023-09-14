import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components'
import { useGetArtistDetailsQuery } from '../redux/service/shazamCom'



const ArtistDetails = () => {
    const  { id: artistId } = useParams()
    const { activeSong, isPlaying } = useSelector((state) => state.player)
    const { data: artistData, isFetching: isFetchingArtistDetails, error} = useGetArtistDetailsQuery(artistId) 
    const songs = artistData?.songs ? Object.values(artistData?.songs) : [];
    if(isFetchingArtistDetails) return <Loader title="Loading artist details" />
    if(error) return <Error />
  return (
      <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />

      <RelatedSongs
      data={songs}
      artistId={artistId}
      isPlaying={isPlaying}
      activeSong={activeSong}
      />
      </div> 
  )
}

export default ArtistDetails




