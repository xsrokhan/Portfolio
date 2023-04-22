import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { FaEnvelopeOpenText } from 'react-icons/fa'
import ProjectsIcon from './ProjectsIcon'

const Navbar = () => {
  return (
    <div className="navbar">
        <Link className="link" to="/"><FaHome /></Link>
        <Link className="link" to="/about"><FaUser /></Link>
        <Link className="link" to="/projects"><ProjectsIcon /></Link>
        <Link className="link" to="/contact"><FaEnvelopeOpenText /></Link>
    </div>
  )
}

export default Navbar