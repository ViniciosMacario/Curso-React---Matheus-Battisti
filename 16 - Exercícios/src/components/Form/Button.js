import React from 'react'
import styles from './Button.module.css'

function Button({handlEvent, text, customClass}) {
  return (
    <div className={`${styles.form_btn} ${styles[customClass]}`}>
      <button onClick={handlEvent}>{text}</button>
    </div>
  )
}

export default Button