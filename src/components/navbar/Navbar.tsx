import SortSelect from './SortSelect'
import SearchInput from './SearchInput'
import { Grid } from '@mui/material'
function Navbar() {
  return (
      <Grid container  sx={{backgroundColor: '#eaf0f0'}} justifyContent="space-evenly">
        <Grid item md={4}>
          <SortSelect/>
        </Grid>
        <Grid item md={8}>
          <SearchInput/>
        </Grid>
      </Grid>
  )
}

export default Navbar