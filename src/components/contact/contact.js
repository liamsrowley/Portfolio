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
      <form className={styles.form} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>Your Name</label>
              <input name="name" type="text" className={styles.input} placeholder="eg. Liam Rowley" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input name="email" type="email" className={styles.input} placeholder="eg. test@gmail.com" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="tel" className={styles.label}>Contact Number</label>
              <input name="tel" type="tel" className={styles.input} placeholder="eg. 017382XXX167" />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="subject" className={styles.label}>Subject</label>
            <input name="subject" type="text" className={styles.input} placeholder="eg. Employment Opportunity" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea name="message" className={styles.textArea} placeholder="Type your messsage here" required ></textarea>
          </div>
          <Button variant="darkest" size="large">Send Message</Button>
        </form>
      </Layout>
    </section>
  );
}
