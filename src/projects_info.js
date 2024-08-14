
import hanziiseasy from './images/hanziiseasy.png'
import dsadepot from './images/dsa-depot.png'
import lifechamp from './images/lifechamp.png'
import { FaNodeJs } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { SiMongodb } from '@icons-pack/react-simple-icons'
import { SiTypescript } from "react-icons/si";
import { SiFlask } from "react-icons/si";

// img crop dimensions: {width 770px, height 450px} on https://www.iloveimg.com/crop-image

export const projects = [
   {
      description: 'A digital library, serving as a personal collection of Data Structures and Algorithms problems and solutions, searchable by title and tags.',
      image: dsadepot,
      stack: [<FaReact />, <FaCss3 />, <FaNodeJs />, <SiMongodb />],
      code: ['Code', 'https://github.com/Montinyek/DSA_Depot_client'],
      demo: ['Demo', 'https://www.dsadepot.com/'],
   },
   {
      description: 'A productivity app that makes use of charts and a reward system to allow the user to track their progress and productivity, available in 10 languages.',
      image: lifechamp,
      stack: [<FaReact />, <FaCss3 />, <FaNodeJs />, <SiMongodb />],
      code: ['Code', 'https://github.com/Montinyek/Lifechamp_client'],
      demo: ['Demo', 'https://lifechamp.net/'],
   },
   {
      description: "An app for practicing Mandarin Chinese tones and characters, with a database of over 100 thousand words and 2500 most frequent characters.",
      image: hanziiseasy,
      stack: [<FaReact />, <SiTypescript />, <FaPython/>, <FaCss3 />, <SiFlask />],
      code: ['Code', 'https://github.com/xsrokhan/Hanziiseasy_client'],
      demo: ['Demo', 'https://hanziiseasy.com/'],
   }
]