import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer'>
        <div className='disclaimer'>
            <p>
                <a title='Disclaimer' href="https://help.netflix.com/legal/termsofuse">Disclaimer</a>
            </p>
        </div>
        <div title='&copy; 2023 NetFlix India' className='copyright'>
            <p>&copy; 2023 NetFlix India</p>
        </div>
        <div className='social-media'>
            <a title='twitter' href="https://twitter.com/netflix/"><FontAwesomeIcon icon={faTwitter} className='twitter'/></a>
            <a title='facebook' href="https://www.facebook.com/NetflixIN/"><FontAwesomeIcon icon={faFacebook} className='facebook'/></a>
        </div>
    </div>
  )
}

export default Footer