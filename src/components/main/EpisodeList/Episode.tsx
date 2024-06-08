import { TableRow, TableCell } from "@mui/material"
import  { useDispatch } from 'react-redux'
import { setDetails } from "../../../state/detailsSlice"

type EpisodeType = {
  episode: {
    episode_id: number
    title: string
    opening_crawl: string
    release_date: string
  }
}

function Episode({ episode }: EpisodeType) {

  const dispatch = useDispatch()
  const handleChange = ({ episode }: EpisodeType) => {
    dispatch(setDetails({title: episode.title, info: episode.opening_crawl}))
  };
  return (
    <TableRow key={episode.episode_id}   onClick={() => handleChange({ episode })}>
    <TableCell>EPISODE {episode.episode_id} </TableCell> 
    <TableCell>{episode.title} </TableCell> 
    <TableCell>{episode.release_date? new Date(episode.release_date).toLocaleString('el', {year: 'numeric', month: 'numeric', day: 'numeric'}): '-'} </TableCell>  
 </TableRow>
  )
}

export default Episode