
import weather from './weather.png'
import budget from './budget-app.png'
import dsadepot from './dsa-depot.png'
import lifechamp from './lifechamp.png'
import { FaNodeJs } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaBootstrap } from 'react-icons/fa'
import { SiMongodb } from '@icons-pack/react-simple-icons'

// img crop dimensions: {width 770px, height 450px} on https://www.iloveimg.com/crop-image

export const projects = [
   {
      description: "This fully responsive weather app features a unique design and gradient backgrounds that change according to the current weather.",
      image: weather,
      stack: [<FaReact />, <FaCss3 />],
      code: ['Code', 'https://github.com/Montinyek/Weather_app'],
      demo: ['Demo', 'https://react-jxdthk.stackblitz.io'],
   },
   {
      description: 'This app uses localStorage to keep track of your expenses in custom categories and provides a clear picture of your budget.',
      image: budget,
      stack: [<FaReact />, <FaBootstrap />],
      code: ['Code', 'https://github.com/Montinyek/Budget_app'],
      demo: ['Demo', 'https://montinyek.github.io/Budget_app/'],
   },
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
   }
]