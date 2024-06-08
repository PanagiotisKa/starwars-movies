import { TableRow, TableCell } from "@mui/material"
type EpisodeType = {
  episode: {
    episode_id: number
    title: string
    opening_crawl: string
    release_date: string
  }
}


function Episode({ episode }: EpisodeType) {
  return (
    <TableRow key={episode.episode_id}   onClick={() => console.log("ok")}>
    <TableCell>EPISODE {episode.episode_id} </TableCell> 
    <TableCell>{episode.title} </TableCell> 
    <TableCell>{episode.release_date? new Date(episode.release_date).toLocaleString('el', {year: 'numeric', month: 'numeric', day: 'numeric'}): '-'} </TableCell>  
 </TableRow>
  )
}

export default Episode