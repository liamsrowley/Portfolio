import React from "react"

import Header from '../components/header/header'
import Hero from '../components/hero/hero'
import Project from '../components/project/project'
import Layout from '../components/layout/layout'
import '../style/reset.scss'

export default () => {
  return (
    <div>
      <Header />
      <Hero title="I'm a front-end web developer using the power of modern
        HTML, CSS and React to create intuitive web apps." />
      <Layout>
        <Project
          imgSrc="chatty-image.jpg"
          title="Unsplash Image Gallery"
          description="A small image searching app with endless loading
          that uses the Unsplash API. Powered by React"
        />
        <Project
          imgSrc="todoit-image.jpg"
          title="Todoit"
          description="A to-do app with user authentication and a back-end
          built with Firebase. Powered by React."
        />
        <Project
          imgSrc="unsplash-image.jpg"
          title="Chatty"
          description="A real-time messaging app with user authentication and a back-end
          built with Firebase. Powered by React."
        />
      </Layout>
    </div>
  )
}
