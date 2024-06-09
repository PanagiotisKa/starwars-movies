import React from 'react'
import EpisodeList from './EpisodeList/EpisodeList'
import Details from './Details/Details'
import {Grid} from '@mui/material/'
function Main() {
  return (
      <Grid container  spacing={5}>
        <Grid item  sm={12} md={6}>
          <EpisodeList/>
        </Grid>
        <Grid item  sm={12} md={6}>
           <Details/>
        </Grid>
      </Grid>
  )
}

export default Main