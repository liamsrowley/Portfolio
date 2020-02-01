import React from 'react'

import SkillGroup from '../skillGroup/skillGroup'
import ProfileImage from './selfie.jpg'

import styles from './style.module.scss'

export default () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutLeft}>
        <img src={ProfileImage} alt="Selfie" className={styles.avatar} />
      </div>
      <div className={styles.aboutRight}>
        <h2 className={styles.title}>Hello.</h2>
        <p className={styles.description}>I'm Liam, a front-end web developer currently living in Newcastle upon Tyne.
        I'm on a constant mission to create professional, intuitive experiences using powerful web technologies that I can
        be proud of. I use my passion for web development to learn new technologies, understand best practices and improve
        my craft.</p>
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
