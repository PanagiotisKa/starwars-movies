import { TextField, InputAdornment} from '@mui/material'
import  { useDispatch} from 'react-redux'
import { setSearch, resetSearch } from '../../state/searchSlice';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function SearchInput() {

  const dispatch = useDispatch()

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    dispatch(setSearch(event.target.value))
  };

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    e.target.value = ''
    dispatch(resetSearch())
  };

  return (
        <TextField sx={{width:'80%', m:2}} InputProps={{startAdornment: (
          <InputAdornment position="start">
            <SearchOutlinedIcon/>
          </InputAdornment>)}} id="outlined-basic" label="Search Title" variant="outlined" 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)} onFocus={(e: React.FocusEvent<HTMLInputElement>) => handleFocus(e)} />
  )
}

export default SearchInput