import  { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../state/store'

function EpisodeList() {
  const sort = useSelector((state: RootState) => state.sort.value)
  const search= useSelector((state: RootState) => state.search.value)
  return (
    <>
    <div>EpisodeList</div>
    <p>{sort}</p>
    <p>{search}</p>
    </>
  )
}

export default EpisodeList