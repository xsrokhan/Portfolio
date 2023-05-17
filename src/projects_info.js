
import jokes from './jokes.png'
import weather from './weather.png'
import cart from './shopping-cart.png'
import budget from './budget-app.png'
import dsadepot from './dsa-depot.png'
import { FaNodeJs } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { FaJs } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaBootstrap } from 'react-icons/fa'
import { SiMongodb } from '@icons-pack/react-simple-icons'

// img crop dimensions: {width 770px, height 450px} on https://www.iloveimg.com/crop-image

export const projects = [
   {
      description: 'Hand-picked jokes across 7 languages, with a pseudo-admin login and an ability to add new jokes to the Mongo database. ',
      image: jokes,
      stack: [<FaJs />, <FaCss3 />, <FaNodeJs />, <SiMongodb />],
      code: ['Code', 'https://github.com/Montinyek/Joke_depo'],
      demo: ['Demo', 'https://js-huk19u.stackblitz.io'],
   },
   {
      description: 'A simple React app demonstrating the basic functionality of a modern shopping cart, made using Context API.',
      image: cart,
      stack: [<FaReact />, <FaCss3 />],
      code: ['Code', 'https://github.com/Montinyek/Shopping_cart'],
      demo: ['Demo', 'https://montinyek.github.io/Shopping_cart/'],
   },
   {
      description: "This fully responsive weather app features a unique design and gradient backgrounds that change according to the current weather.",
      image: weather,
      stack: [<FaReact />, <FaCss3 />],
      code: ['Code', 'https://github.com/Montinyek/Weather_app'],
      demo: ['Demo', 'https://react-jxdthk.stackblitz.io'],
   },
   {
      description: 'A digital library, serving as a personal collection of Data Structures and Algorithms problems and solutions, searchable by title and tags.',
      image: dsadepot,
      stack: [<FaReact />, <FaCss3 />],
      code: ['Code', 'https://github.com/Montinyek/DSA_Depot_client'],
      demo: ['Demo', 'https://www.dsadepot.com/'],
   },
   {
      description: 'This app uses localStorage to keep track of your expenses in custom categories and provides a clear picture of your budget.',
      image: budget,
      stack: [<FaReact />, <FaBootstrap />],
      code: ['Code', 'https://github.com/Montinyek/Budget_app'],
      demo: ['Demo', 'https://montinyek.github.io/Budget_app/'],
   }
]