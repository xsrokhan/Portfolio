import React from 'react'
import { motion } from 'framer-motion'

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

const About = () => {
  return (
    <motion.div 
    className="about"
    variants={container}
    initial="hidden"
    animate="show"
    >
      <motion.h1 variants={item}>About me</motion.h1>
      <motion.p variants={item}>My interest in coding is rooted in my fascination with human languages, which are also a complex form of code, and a passion for learning and cultivating skills from various domains. Over the years, this love of knowledge has enriched me culturally, transformed my worldview and led me to acquire a host of skills that have benefited me throughout life, the latest such skill being programming. I've been studying web development for over a year, during which time I've familiarized myself with a range of languages, frameworks and libraries and built several projects, some of which can be found on this website.</motion.p>
    </motion.div>
  )
}


export default About