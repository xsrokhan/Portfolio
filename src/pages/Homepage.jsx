import React from 'react'
import { TypeAnimation } from 'react-type-animation'
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


const Homepage = () => {
  return (
    <motion.div 
    className="homepage"
    variants={container}
    initial="hidden"
    animate="show"
    >
      <motion.h1 variants={item}>Khosrov Yavarifar</motion.h1>
      <motion.h2 variants={item}>I am a</motion.h2>
      <motion.div variants={item}>
      <motion.span className="typeAnimation">
      <TypeAnimation
        sequence={[
          'Developer', 
          2500, 
          'CS student', 
          2500, 
          'Language geek', 
          2500
        ]}
        wrapper="span"
        speed={{type: 'keyStrokeDelayInMs', value: 100}}
        deletionSpeed={70}
        cursor={true}
        repeat={Infinity}
        style={{ display: 'inline-block', transition: "all 1s", letterSpacing: "0.2rem", fontFamily: 'Helvetica, sans-serif' }}
      />
      </motion.span>
      </motion.div>
      <motion.p variants={item}>Welcome to my personal website. Please use the navbar below to view some of my latest projects, my social media links, as well as a brief introduction of myself and my background in coding.</motion.p>
    </motion.div>
  )
}


export default Homepage