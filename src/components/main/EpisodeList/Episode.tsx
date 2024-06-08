import { TableRow, TableCell, Rating } from "@mui/material"
import  { useDispatch } from 'react-redux'
import { setDetails } from "../../../state/detailsSlice"

type EpisodeType = {
  episode: {
    episode_id: number
    title: string
    opening_crawl: string
    release_date: string
    poster:string
    rating_IMD: number
    rating_RottenTomatoes: number
    rating_Metacritic: number
    general_rating: number
  }
}

function Episode({ episode }: EpisodeType) {

  const dispatch = useDispatch()
  const handleChange = ({ episode }: EpisodeType) => {
    dispatch(setDetails({title: episode.title, 
      info: episode.opening_crawl, poster:episode.poster, 
      rating_IMD:episode.rating_IMD, rating_RottenTomatoes:episode.rating_RottenTomatoes,
      rating_Metacritic: episode.rating_Metacritic, general_rating : episode.general_rating}))
  };
  return (
    <TableRow onClick={() => handleChange({ episode })}>
    <TableCell>EPISODE {episode.episode_id} </TableCell> 
    <TableCell>{episode.title} </TableCell> 
    <TableCell><Rating name="customized-10" size="small" readOnly={true} precision={0.2} defaultValue={episode.general_rating} max={10} /></TableCell>
    <TableCell>{episode.release_date? new Date(episode.release_date).toLocaleString('el', {year: 'numeric', month: 'numeric', day: 'numeric'}): '-'} </TableCell>  
 </TableRow>
  )
}

export default Episode