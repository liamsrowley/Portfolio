import React from 'react'

import Layout from '../layout/layout'
import Button from '../button/button'

import styles from './style.module.scss'

export default () => {
  return (
    <section className={styles.contact}>
      <Layout>
        <h2 className={styles.title}>Get in touch</h2>
        <p className={styles.description}>I am currently looking for employment opportunities as a front-end web developer,
        preferably using React, but I am flexible in what I can do and I'm a quick learner.
        Drop me a message and let's have a chat.</p>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <label for="name" className={styles.label}>Your Name</label>
              <input name="name" type="text" className={styles.input} placeholder="eg. Liam Rowley" />
            </div>
            <div className={styles.inputGroup}>
              <label for="email" className={styles.label}>Email Address</label>
              <input name="email" type="email" className={styles.input} placeholder="eg. test@gmail.com "/>
            </div>
            <div className={styles.inputGroup}>
              <label for="tel" className={styles.label}>Contact Number</label>
              <input name="tel" type="tel" className={styles.input} placeholder="eg. 017382XXX167" />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label for="subject" className={styles.label}>Subject</label>
            <input name="subject" type="text" className={styles.input} placeholder="eg. Employment Opportunity" />
          </div>
          <div className={styles.inputGroup}>
            <label for="message" className={styles.label}>Message</label>
            <textarea name="message" className={styles.textArea} placeholder="Type your messsage here"></textarea>
          </div>
          <Button variant="darkest" size="large">Send Message</Button>
        </form>
      </Layout>
    </section>
  );
}