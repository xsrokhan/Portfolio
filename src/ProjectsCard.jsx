import React from 'react'
import { motion } from 'framer-motion'


const ProjectsCard = ({img, description, stack, code, demo, i}) => {
    return (
            <motion.div 
            className="card"
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1, ease: "easeOut", delay: i * 0.2}}
            >
                <img className="img" src={img} alt="project img"/>
                <div className="description">{description}{i === 0 && <>Here's a quick <a href="https://drive.google.com/file/d/1IEuF_ObRUzVXLCMRUn4urByT195wtQ7q/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{color: "#F9F6EE", textDecoration: "underline"}}>video</a> demo.</>}</div>
                <div className="stack">
                    {stack.map(s => <div className="stack-inner">{s}</div>)}
                </div>
                <div className="links">
                    <a className="links-inner" href={code[1]} target="_blank" rel="noopener noreferrer">{code[0]}</a>
                    <a className="links-inner" href={demo[1]} target="_blank" rel="noopener noreferrer">{demo[0]}</a>
                </div>
            </motion.div>
    )
}

export default ProjectsCard