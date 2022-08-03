import React from 'react'
import { Banner } from '../components/Banner'
import Layout from '../components/Layout/Layout'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import netflix_main from '../assets/img/netflix-main.png'
import weather_app from '../assets/img/weather-react.png'
import advancedTodo from '../assets/img/AdvancedTodo.png'

const projects = [
  {
    title: 'Netflix Clone',
    description: 'Design & Development',
    imgUrl: netflix_main,
    demo: true,
    link: 'https://netflix-clone-react-app-git-master-appzz.vercel.app',
  },
  {
    title: 'Weather app',
    description: 'Design & Development',
    imgUrl: weather_app,
    demo: true,
    link: 'https://weather-app-react-virid.vercel.app/',
  },
  {
    title: 'Advanced Todo app',
    description: 'Design & Development',
    imgUrl: advancedTodo,
    demo: true,
    link: 'https://advanced-todo-app-react.vercel.app/',
  },
  // {
  //   title: 'Netflix Clone',
  //   description: 'Design & Development',
  //   imgUrl: netflix_main,
  //   demo: true,
  // },
]

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Skills />
      <Projects projects={projects} />
    </Layout>
  )
}

export default Home
