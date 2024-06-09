import React from 'react'
import EpisodeList from './EpisodeList/EpisodeList'
import Details from './Details/Details'
import {Grid} from '@mui/material/'
function Main() {
  return (
      <Grid container spacing={2} sx={{ minHeight: '100vh' }}>
        <Grid item md={12}  lg={7}>
          <EpisodeList/>
        </Grid>
        <Grid item md={12}  lg={5}>
           <Details/>
        </Grid>
      </Grid>
  )
}

export default Main