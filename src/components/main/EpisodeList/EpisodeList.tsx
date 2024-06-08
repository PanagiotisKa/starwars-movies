import React, {useState, useEffect} from 'react'
import  { useDispatch, useSelector } from 'react-redux'
import { getEpisodeListData } from '../../../state/episodeListSlice'
import { RootState, AppDispatch } from '../../../state/store'

function EpisodeList() {

  const [finalArray, setFinalArray] = useState([])

    const dispatch = useDispatch<AppDispatch>()
    const { value, loading, error } = useSelector((state: RootState) => state.episodeList)
    const sort = useSelector((state: RootState) => state.sort.value)
    const search= useSelector((state: RootState) => state.search.value)

    useEffect(()=>{
      dispatch(getEpisodeListData(process.env.REACT_APP_API_ENDPOINT!))
    }, [dispatch])


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if(value) {
      return (
        <>
        <ul>
        {[...value].sort((a,b)=>{ 
          if( sort === 'year') { return parseInt(a.release_date.split("-")[0]) - parseInt(b.release_date.split("-")[0])} 
          return a.episode_id - b.episode_id}).filter(episode => episode.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map(episode => {
          return (
            <li key={episode.episode_id}> EPISODE {episode.episode_id} {episode.title} {episode.release_date}</li>
          )
        })}
        </ul>
        <div>episodeList</div>
        </>
      )
    }
}

export default EpisodeList