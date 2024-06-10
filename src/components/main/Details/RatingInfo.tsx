import { Grid, Typography, Chip, Stack, Rating } from '@mui/material'
import { RootState } from '../../../state/store'
import  { useSelector } from 'react-redux'

function RatingInfo() {
  const details = useSelector((state: RootState) => state.details)
  return (
    <>
    <Grid item xs={10} sm={10} md={12}>
    <Typography sx={ {p:1}} > Average rating: <Rating name="customized-11" size="small" readOnly={true} precision={0.5} value={details.general_rating} max={10} /></Typography>
    </Grid>
    <Grid item sx={{pb:2}} sm={10} md={12} >
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} >
      <Chip label={'Internet Movie DataBase: ' + details.rating_IMD *10 + '%'} color="primary" variant="outlined" />
      <Chip label={'RottenTomatoes: ' + details.rating_RottenTomatoes*10 + '%'} color="primary" variant="outlined" />
      <Chip label={'Metacritic: ' + details.rating_Metacritic *10 + '%'} color="primary" variant="outlined" />
    </Stack>
    </Grid>
    </>
  )
}

export default RatingInfo