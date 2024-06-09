import { RootState } from '../../../state/store'
import  { useSelector } from 'react-redux'
import { Box,Typography, Grid } from "@mui/material"
import RatingInfo from './RatingInfo'
function Details() {

  const details = useSelector((state: RootState) => state.details)

  return (
      <Grid container spacing={2} justifyContent="center">
      {/* TITLE */}  
        <Grid item xs={10} sm={12} md={12} >
          <Typography variant='h4'>{details.title}</Typography>
        </Grid>
      {/* IMAGE/ POSTER */}
        <Grid item xs={10} sm={5} md={3} lg={4}>
          <Box component="img" sx={{ mb:1, mt:1, width: '100%'}} alt="starwars" src={details.poster} />
        </Grid>
      {/* MAIN TEXT */}
        <Grid item xs={10} sm={10} md={9} lg={8}>
        <Typography sx={ {p:1}} variant='body2'>{details.info}</Typography>
        </Grid>
        {/* RATING */}
        { details.general_rating > 0 &&
        <RatingInfo/>
        }
      </Grid>      
  )
}

export default Details