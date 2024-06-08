import React from 'react'
import EpisodeList from './EpisodeList/EpisodeList'
import Details from './Details/Details'
import {Grid} from '@mui/material/'
function Main() {
  return (
  
    <div className='main'>
      <Grid container spacing={9}>
        <Grid item sm={12} md={6}>
          <EpisodeList/>
        </Grid>
        <Grid item sm={12} md={6}>
           <Details/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Main