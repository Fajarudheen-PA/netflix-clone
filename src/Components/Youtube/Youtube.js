import React from 'react'
import './Youtube.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import "react-resizable/css/styles.css";

function Youtube(props) {
  return (
    <Draggable handle='.handle'>
      <div className='youtube-player'>
        <ResizableBox className='iframe'>
          <iframe
            title="Youtube-Player"
            id="player"
            type="text/html"
            style={{ width: "100%", height: "100%" }}
            src={`https://www.youtube.com/embed/${props.videoId}`}
            frameborder="0"
            allow="autoplay"
            allowfullscreen>
          </iframe>
          <div className="close">
            <FontAwesomeIcon icon={faTimes} onClick={props.close}/>
          </div>
          <div className="handle">
            <FontAwesomeIcon icon={faArrowsAlt} />
          </div>
        </ResizableBox>
      </div>
    </Draggable>
  )
}

export default Youtube