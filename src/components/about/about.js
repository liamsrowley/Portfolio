import React from 'react'

import SkillGroup from '../skillGroup/skillGroup'

import styles from './style.module.scss'

export default () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutLeft}>
        <img src="/images/selfie.jpg" alt="Selfie" />
      </div>
      <div className={styles.aboutRight}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.description}>I've always been interested in technology, so when I first discovered
          the web development world it was immediately apparent to me that I
          wanted to get involved. I wanted to do this for a living. Fast forward
          a number of years and here I am now, with knowledge of multiple technologies,
          techniques and patterns and a constant desire to learn and improve.</p>
        <SkillGroup
          title="Front-End"
          items={['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Gatsby']}
        />
        <SkillGroup
          title="Back-End"
          items={['Firebase']}
        />
        <SkillGroup
          title="Design"
          items={['Adobe Photoshop', 'Adobe XD']}
        />
      </div>
    </section>
  )
}
