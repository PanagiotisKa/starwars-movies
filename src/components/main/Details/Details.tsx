import { RootState } from '../../../state/store'
import  { useSelector } from 'react-redux'
import { Box, Rating, Stack, Chip, Typography, Grid, Paper } from "@mui/material"

function Details() {

  const details = useSelector((state: RootState) => state.details)

  return (
    <Box sx={{p:1}}>
      <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} sm={12} md={12} >
        <Typography variant='h4'>{details.title}</Typography>
      </Grid>
        <Grid item xs={12} sm={12} md={4} >
          {/* <Paper variant='elevation' elevation={20} >
              <img src={details.poster} alt="starwars" width='100%' />
          </Paper> */}
          <Box
            component="img"
            sx={{
              mb:1,
              mt:1,
              width: '100%'
            }}
            alt="starwars"
            src={details.poster}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
        <Typography variant='body1'>{details.info}</Typography>
        </Grid>
        { details.general_rating > 0 &&
            <>
            <Grid item sm={12} md={12}>
            <Typography> Avarange rating: <Rating name="customized-11" size="small" readOnly={true} precision={0.5} value={details.general_rating} max={10} /></Typography>
            </Grid>
            <Grid  item sm={12} md={12}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} >
              <Chip label={'Internet Movie DataBase: ' + details.rating_IMD *10 + '%'} color="primary" variant="outlined" />
              <Chip label={'RottenTomatoes: ' + details.rating_RottenTomatoes*10 + '%'} color="primary" variant="outlined" />
              <Chip label={'Metacritic: ' + details.rating_Metacritic *10 + '%'} color="primary" variant="outlined" />
            </Stack>
            </Grid>
            </>
        }
      </Grid>      
    </Box>
  )
}

export default Details