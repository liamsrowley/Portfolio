import React from 'react'

import Project from '../project/project'

import styles from './style.module.scss'

export default () => {
  return (
    <section className={styles.projects}>
      <Project
        imgSrc="chatty-image.jpg"
        title="Unsplash Image Gallery"
        description="A small image searching app with endless loading
        that uses the Unsplash API. Powered by React"
        requiresLoading
      />
      <Project
        imgSrc="todoit-image.jpg"
        title="Todoit"
        description="A to-do app with user authentication and a back-end
        built with Firebase. Powered by React."
        requiresLoading
      />
      <Project
        imgSrc="unsplash-image.jpg"
        title="Chatty"
        description="A real-time messaging app with user authentication and a back-end
        built with Firebase. Powered by React."
        requiresLoading
      />
    </section>
  )
}
