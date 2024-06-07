import {Box, TextField, FormControl} from '@mui/material'
import  { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../state/store'
import { setSearch, resetSearch } from '../state/searchSlice';

function Search() {

  const search = useSelector((state: RootState) => state.search.value)
  const dispatch = useDispatch()

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    dispatch(setSearch(event.target.value))
  };

  const handleFocus = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    e.target.value = ''
    dispatch(resetSearch())
  };

  return (
    <div>
      <Box sx={{ minWidth: 400}}>
      <FormControl sx={{ m: 1, minWidth: 400}}>
      <TextField id="outlined-basic" label="Search Title" variant="outlined" 
      onChange={(e) => handleChange(e)} onFocus={(e) => handleFocus(e)}/>
      </FormControl>
      </Box>
    </div>
  )
}

export default Search