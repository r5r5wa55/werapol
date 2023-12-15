import React from 'react'
import './navbar.css'
import {Link} from 'react-scroll'
import { FaUserCheck } from "react-icons/fa";


export default function Navbar() {
  return (
    <div className='Navbar'>
        <div className="navbarleft">
            <div className='textrleft'>Werapol</div>
        </div>
        <div className="navbarcenter">
                <Link className="card">Home</Link>
                <Link className="card">About</Link>
                <Link className="card">Portfolio</Link>
                <Link className="card">Clients</Link>
        </div>
        <button className="btnright">
            <FaUserCheck  className='iconfausercheck' />
            Contact Me
        </button>
    </div>

  )
}
