import  { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../state/store'

function EpisodeList() {
  const sort = useSelector((state: RootState) => state.sort.value)
  return (
    <>
    <div>EpisodeList</div>
    <p>{sort}</p>
    </>
  )
}

export default EpisodeList