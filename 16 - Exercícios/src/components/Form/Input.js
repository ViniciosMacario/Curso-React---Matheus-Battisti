import React from 'react'
import styles from './Input.module.css'

function Input({ text, type, name, id, value, placeholder, handleOnChange}) {
  return (
    <div className={styles.form_Input}>
      <label htmlFor={name}>
        {text}
      </label>

      <input 
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </div>
  )
};

export default Input;