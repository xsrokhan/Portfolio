import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaCodepen } from 'react-icons/fa'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: { duration: 1} }
}

const Contact = () => {
return (
  <motion.ul 
  className="contact"
  variants={container}
  initial="hidden"
  animate="show"
  >
    <motion.li variants={item}><FaGithub className="contact_icon"/><a href="https://github.com/Montinyek" target="_blank" rel="noopener noreferrer">GitHub</a></motion.li>
    <motion.li variants={item}><FaLinkedinIn className="contact_icon"/><a href="https://codepen.io/Montinyek" target="_blank" rel="noopener noreferrer">LinkedIn</a></motion.li>
    <motion.li variants={item}><FaCodepen className="contact_icon"/><a href="https://codepen.io/Montinyek" target="_blank" rel="noopener noreferrer">CodePen</a></motion.li>
    <motion.li variants={item}>xsrokhan@gmail.com</motion.li>
  </motion.ul>
)
}

export default Contact