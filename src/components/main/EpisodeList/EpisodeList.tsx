import React, {useEffect} from 'react'
import  { useDispatch, useSelector } from 'react-redux'
import { getEpisodeListData } from '../../../state/episodeListSlice'
import { RootState, AppDispatch } from '../../../state/store'
import { Box, Table,TableBody } from '@mui/material'
import Episode from './Episode'

function EpisodeList() {

    const dispatch = useDispatch<AppDispatch>()
    const { value, loading, error } = useSelector((state: RootState) => state.episodeList)
    const sort = useSelector((state: RootState) => state.sort.value)
    const search= useSelector((state: RootState) => state.search.value)

    useEffect(()=>{
      dispatch(getEpisodeListData([process.env.REACT_APP_API_ENDPOINT!, process.env.REACT_APP_OMBAPI!]))
    }, [dispatch])


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if(value) {
      return (
        <Box sx={{borderRight: 1, borderColor: '#eaf0f0', width: '100%'}}>
        <Table>
          <TableBody>
        {[...value].sort((a,b)=>{ 
          if( sort === 'year') { return parseInt(a.release_date.split("-")[0]) - parseInt(b.release_date.split("-")[0])} 
          return a.episode_id - b.episode_id}).filter(episode => episode.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
          .map(episode => {
          return (<Episode key={episode.episode_id}  episode={episode}/>)
        })}
        </TableBody>
        </Table>
        </Box>
      )
    }
}

export default EpisodeList