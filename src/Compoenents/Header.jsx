import React from 'react'
import { BsFillBellFill, BsFillEnvelopeAtFill, BsJustify, BsPersonCircle, BsSearch } from "react-icons/bs";

const Header = ({openSidebar}) => {
  return (
    <header className='header'>
      <div className="menu-icon">
        <BsJustify className="icon" onClick={openSidebar}/>
      </div>
      <div className="header-left">
        <BsSearch className="icon"/>
      </div>
      <div className="header-right">
        <BsFillBellFill className="icon"/>
        <BsFillEnvelopeAtFill className="icon"/>
        <BsPersonCircle className="icon"/>
      </div>
    </header>
  )
}

export default Header;