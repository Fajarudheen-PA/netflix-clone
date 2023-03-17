import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants';
import axios from '../../axios'
import './Banner.css';
import Youtube from '../Youtube/Youtube';
function Banner() {
  const [movie, setMovie] = useState([])
  const [vidId,setVidId] = useState('')
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0]);
      setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length)]);
      // setMovie(response.data.results[0]);
    })
  }, [])

  const playVideo = (id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      console.log(id);
      setVidId(response.data.results[0])
    })
  }
  
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}} className='banner'>
        <div className='content-wrapper'>
          <div className='content'>
              <h1 className='title'>{movie ? movie.title ? movie.title : movie.name : ''}</h1>
              <div className='banner-buttons'>
                  <button onClick={()=>playVideo(movie.id)} className='button'>Play</button>
                  <button className='button'>My List</button>
              </div>
              <h1 className='description'>{movie ? movie.overview : ""}</h1>
          </div>
        </div>
        {/* <div className="fade-bottom"></div> */}
        {vidId && <Youtube videoId={vidId.key} close={()=>setVidId(!vidId)}/>}
    </div>
  )
}

export default Banner