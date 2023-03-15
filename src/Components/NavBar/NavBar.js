import React, { useState } from 'react'
import "./NavBar.css";
import ProfDrawer from '../ProfDrawer/ProfDrawer';

function NavBar() {
  const [prof,setProf] = useState(false)
  return (
    <div className='navbar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix" />
        <img onClick={()=>setProf(!prof)} className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
        { prof && <ProfDrawer/> }
    </div>
  )
}

export default NavBar