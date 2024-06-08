import { RootState } from '../../../state/store'
import  { useSelector } from 'react-redux'
import { Box, Rating } from "@mui/material"

function Details() {

  const details = useSelector((state: RootState) => state.details)

  return (
    <>
    <Box>
      <h3>{details.title}</h3>
      <p>{details.info}</p>
      <img src={details.poster} alt="starwars" width={200}/>
      <p> Avarange rating: <Rating name="customized-11" size="small" readOnly={true} precision={0.5} value={details.general_rating} max={10} /></p>
      <p>IMD: {details.rating_IMD *10}%</p>
      <p>RottenTomatoes: {details.rating_RottenTomatoes*10}%</p>
      <p>Metacritic: {details.rating_Metacritic *10}%</p>
    </Box>
    </>
  )
}

export default Details