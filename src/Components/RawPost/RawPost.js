import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../../constants/constants'
import axios from '../../axios'
import './RawPost.css'
import Youtube from '../Youtube/Youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
// import YouTube from 'react-youtube';

function RawPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovies(response.data.results)
    }).catch(err => {
      console.log("Network Error");
    })
  }, [props.url])
  // const opts = {
  //   height: '390',
  //   width: "100%",
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // };
  // const alertFunction = ()=>{
  //     alert("Nothing Found")
  // }
  const handleVideos = (id) => {
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      console.log(id);
      if (response.data.results[''] !== 0) {
        setUrlId(response.data.results[0])
      }
      // else{
      //   alertFunction()
      // }
    })
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj) =>
          <div>
            <img onClick={() => handleVideos(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${movies ? imageUrl + obj.poster_path : ""}`} alt="Poster" />
            <div className='ratings'>
              <h5 className='wishlist-count'><FontAwesomeIcon icon={faHeart} beat className='wishlist-icon' /> {obj.vote_count}</h5>
              <h5 className='vote-avg'><FontAwesomeIcon icon={faStar} bounce className='wishlist-icon' /> {obj.vote_average}</h5>
            </div>
          </div>
        )}
        {/* {movies.map((obj)=>
            <img onClick={()=>handleVideos(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${movies ? imageUrl+obj.poster_path : ""}`} alt="Poster"/>
          )} */}
        {/* {movies.map((obj)=>
            <img onClick={()=>handleVideos(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${movies ? imageUrl+obj.poster_path : ""}`} alt="Poster" />
          )} */}
      </div>
      {/* {  urlId && <YouTube opts={opts} videoId={urlId.key}/>  } */}
      {urlId && <Youtube videoId={urlId.key} close={() => setUrlId(!urlId)} />}
    </div>
  )
}

export default RawPost