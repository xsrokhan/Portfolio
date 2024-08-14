import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { FaEnvelopeOpenText } from 'react-icons/fa'
import ProjectsIcon from './ProjectsIcon'

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="navbar">
        <Link className="link" to="/"><FaHome className={`${location.pathname === "/" ? "current_page" : ""}`}/></Link>
        <Link className="link" to="/about"><FaUser className={`${location.pathname === "/about" ? "current_page" : ""}`}/></Link>
        <Link className="link" to="/projects"><ProjectsIcon name={`${location.pathname === "/projects" ? "current_page" : ""}`}/></Link>
        <Link className="link" to="/contact"><FaEnvelopeOpenText className={`${location.pathname === "/contact" ? "current_page" : ""}`}/></Link>
    </div>
  )
}

export default Navbar