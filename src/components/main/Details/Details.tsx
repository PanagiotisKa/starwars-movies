import { setDetails } from "../../../state/detailsSlice"
import { RootState } from '../../../state/store'
import  { useSelector } from 'react-redux'
import { Box } from "@mui/material"

function Details() {

  const details = useSelector((state: RootState) => state.details)

  return (
    <>
    <Box sx={{ minWidth: 300}}>
      <h3>{details.title}</h3>
      <p>{details.info}</p>
    </Box>
      <img src={details.poster} alt="starwars" width={200}/>
      <p>IMD: {details.rating_IMD}</p>
      <p>RottenTomatoes: {details.rating_RottenTomatoes}</p>
      <p>Metacritic: {details.rating_Metacritic}</p>
      <p>General Rating: {((details.rating_IMD + details.rating_RottenTomatoes + details.rating_Metacritic)/3).toFixed(1)}</p>
    </>
  )
}

export default Details