import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import img5 from '../assets/logo512.png'

const Header = () => {
  return (
    <nav>
      <div >
      <img style={{height:"40px",width:"40px"}} src={img5} alt="" />
        <h1>Div.io</h1>
        </div>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <Link to={"/contact"}>Contact</Link>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <Link to={"/services"}>Services</Link>
        </main>
    </nav>
  )
}

export default Header