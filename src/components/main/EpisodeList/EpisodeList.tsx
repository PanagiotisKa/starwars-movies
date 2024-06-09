import React, {useEffect} from 'react'
import  { useDispatch, useSelector } from 'react-redux'
import { getEpisodeListData } from '../../../state/episodeListSlice'
import { RootState, AppDispatch } from '../../../state/store'
import {Box, CircularProgress, Table,TableBody } from '@mui/material'
import Episode from './Episode'

function EpisodeList() {

    const dispatch = useDispatch<AppDispatch>()
    const { value, loading, error } = useSelector((state: RootState) => state.episodeList)
    const sort = useSelector((state: RootState) => state.sort.value)
    const search= useSelector((state: RootState) => state.search.value)

    useEffect(()=>{
      dispatch(getEpisodeListData([process.env.REACT_APP_API_ENDPOINT!, process.env.REACT_APP_OMBAPI!]))
    }, [dispatch])


    if (loading) return (
      <Box display="flex" justifyContent="center">
        <CircularProgress sx={{color:"#ffbf00"}} />
     </Box>)
    if (error) return <div>Error: {error}</div>;
    if(value) {
      return (
        <Table>
          <TableBody>
        {[...value]
        .sort((a,b)=>{ 
          if( sort === 'year') { return parseInt(a.release_date.split("-")[0]) - parseInt(b.release_date.split("-")[0])}
          if( sort === 'rating') { return b.general_rating - a.general_rating } 
          return a.episode_id - b.episode_id})
        .filter(episode => episode.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        .map(episode => {
          return (<Episode key={episode.episode_id}  episode={episode}/>)
        })}
        </TableBody>
        </Table>
      )
    }
}

export default EpisodeList