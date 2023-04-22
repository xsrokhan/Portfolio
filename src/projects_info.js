
import jokes from './jokes.png'
import tenzies from './tenzies.png'
import weather from './weather.png'
import cart from './shopping-cart.png'
import budget from './budget-app.png'
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
      id: 0
   },
   {
      description: 'A classic dice game made with React. Keep rolling while selecting matching numbers and see how long it takes you to win! (My record is 7.25).',
      image: tenzies,
      stack: [<FaReact />, <FaCss3 />],
      code: ['Code', 'https://github.com/Montinyek/Tenzies_game'],
      demo: ['Demo', 'https://react-l2lm55.stackblitz.io'],
      id: 0
   },
   {
      description: "This fully responsive weather app features a unique design and gradient backgrounds that change according to the current weather.",
      image: weather,
      stack: [<FaReact />, <FaCss3 />],
      code: ['Code', 'https://github.com/Montinyek/Weather_app'],
      demo: ['Demo', 'https://react-jxdthk.stackblitz.io'],
      id: 1
   },
   {
      description: 'A simple React app demonstrating the basic functionality of a modern shopping cart, made using Context API.',
      image: cart,
      stack: [<FaReact />, <FaCss3 />],
      code: ['Code', 'https://github.com/Montinyek/Shopping_cart'],
      demo: ['Demo', 'https://montinyek.github.io/Shopping_cart/'],
      id: 2
   },
   {
      description: 'This app uses localStorage to keep track of your expenses in custom categories and provides a clear picture of your budget.',
      image: budget,
      stack: [<FaReact />, <FaBootstrap />],
      code: ['Code', 'https://github.com/Montinyek/Budget_app'],
      demo: ['Demo', 'https://montinyek.github.io/Budget_app/'],
      id: 3
   }
]