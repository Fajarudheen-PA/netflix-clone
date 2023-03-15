import React from 'react'
import './ProfDrawer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faGear, faHeadset } from "@fortawesome/free-solid-svg-icons";

function ProfDrawer() {
  return (
    <div className='profile-drawer'>
        <div>
            <li title='My Account'><FontAwesomeIcon icon={faUser}/> My Account</li>
            <li title='Watchlist'><FontAwesomeIcon icon={faHeart}/> Watchlist</li>
            <li title='Settings'><FontAwesomeIcon icon={faGear}/> Settings</li>
            <li title='Help'><FontAwesomeIcon icon={faHeadset}/> Help</li>
            <button title='Logout'>Logout</button>
            <div className='version'>
                <p><i>version 1.0.1</i></p>
            </div>
        </div>
    </div>
  )
}

export default ProfDrawer