import {MenuItem, Select, InputLabel, FormControl } from '@mui/material'
import  { SelectChangeEvent } from '@mui/material/Select';
import  { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../state/store'
import { setSort } from '../../state/sortSlice';

function SortSelect() {

  const sort = useSelector((state: RootState) => state.sort.value)
  const dispatch = useDispatch()

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setSort(event.target.value))
  };


  return (
       <FormControl sx={{ m:2}}>
        <InputLabel data-testid="select-label" id="demo-simple-select-helper-label">Sort By...</InputLabel>
          <Select
            data-testid="select-element"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sort}
            label="Sort By..."
            onChange={handleChange}
          >
            <MenuItem value={'episode'}>Episode</MenuItem>
            <MenuItem value={'year'}>Year</MenuItem>
            <MenuItem value={'rating'}>Rating</MenuItem>
          </Select>
        </FormControl>
  )
}

export default SortSelect