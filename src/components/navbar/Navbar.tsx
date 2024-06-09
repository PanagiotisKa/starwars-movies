import React from 'react'
import Sort from './Sort'
import Search from './Search'
import { Grid } from '@mui/material'
function Navbar() {
  return (
      <Grid container  sx={{backgroundColor: '#eaf0f0'}}>
        <Grid item md={4}>
          <Sort/>
        </Grid>
        <Grid item md={8}>
          <Search/>
        </Grid>
      </Grid>
  )
}

export default Navbar