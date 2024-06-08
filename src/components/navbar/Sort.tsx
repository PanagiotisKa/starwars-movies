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
       <Box sx={{ minWidth: 100}}>
       <FormControl sx={{ m: 1, minWidth: 100}}>
       <InputLabel id="demo-simple-select-helper-label">Sort By...</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Sort By..."
          onChange={handleChange}
        >
          <MenuItem value={'episode'}>Episode</MenuItem>
          <MenuItem value={'year'}>Year</MenuItem>
        </Select>
        </FormControl>
       </Box>
    </div>
  )
}

export default Sort