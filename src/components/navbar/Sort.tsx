import {useState} from 'react'
import { Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material'
import  { SelectChangeEvent } from '@mui/material/Select';
import  { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../state/store'
import { setSort } from '../../state/sortSlice';

function Sort() {

  const sort = useSelector((state: RootState) => state.sort.value)
  const dispatch = useDispatch()

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setSort(event.target.value))
  };


  return (
    <div>
      {sort}
       <Box sx={{ minWidth: 200 }}>
       <FormControl sx={{ m: 1, minWidth: 200 }}>
       <InputLabel id="demo-simple-select-helper-label">Sort By...</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Sort By..."
          onChange={handleChange}
        >
          <MenuItem value={'Episode'}>Episode</MenuItem>
          <MenuItem value={'Year'}>Year</MenuItem>
        </Select>
        </FormControl>
       </Box>
    </div>
  )
}

export default Sort