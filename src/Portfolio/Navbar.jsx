import React from 'react'
import { NavLink } from 'react-router-dom'
import NavbarStyles from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
        <div className={NavbarStyles.main}>
            <div className={NavbarStyles.logo}>
                <h1>LOGO</h1>
            </div>

            <div className={NavbarStyles.side}>
                <ul className={NavbarStyles.link}>
                    <li>
                        <NavLink to='/'>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink to='/skills'>SKILLS</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>CONTACT</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar