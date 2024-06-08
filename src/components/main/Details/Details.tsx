import { setDetails } from "../../../state/detailsSlice"
import { RootState } from '../../../state/store'
import  { useSelector } from 'react-redux'
import { Box } from "@mui/material"

function Details() {

  const details = useSelector((state: RootState) => state.details)

  return (
    <Box sx={{ minWidth: 300}}>
      <h3>{details.title}</h3>
      <p>{details.info}</p>
    </Box>
  )
}

export default Details