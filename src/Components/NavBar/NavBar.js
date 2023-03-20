import React, { useState } from 'react'
import "./NavBar.css";
// import ProfDrawer from '../ProfDrawer/ProfDrawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faClose, faGear, faHeadset } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [prof,setProf] = useState(false)

  const closeProfDrawer = () => {
    setProf(false);
  };
  
  return (
    <div className='navbar'>
      <div className='content-wrapper'>
        <div className='content-section'>
          <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix" />
          <img onClick={()=>setProf(!prof)} className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
        </div>
      </div>  
        { prof && (
        <div>
          <div className="overlay" onClick={closeProfDrawer}></div>
          <ProfDrawer onClose={closeProfDrawer}/>
        </div>
          ) }
    </div>
  )
}

// function closeClick(){
//   const element = document.getElementById('closeIcon');
//   element.classList.add('closing');
// }


function ProfDrawer(props) {
  const { onClose } = props;
  return (
    <div className='content-wrapper'>
      <div className='profile-drawer'>
        <div>
            <div className='closing'><FontAwesomeIcon icon={faClose} onClick={onClose} className='close'/></div>
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
    </div>
  )
}
export default NavBar