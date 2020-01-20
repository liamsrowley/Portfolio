import React from "react"

import Header from '../components/header/header'
import Hero from '../components/hero/hero'
import Projects from '../components/projects/projects'
import About from '../components/about/about'
import Layout from '../components/layout/layout'
import '../style/reset.scss'

export default () => {
  return (
    <div>
      <Header />
      <Hero title="I'm a front-end web developer using the power of modern
        HTML, CSS and React to create intuitive web apps." />
      <Layout>
        <Projects />
        <About />
      </Layout>
    </div>
  )
}
