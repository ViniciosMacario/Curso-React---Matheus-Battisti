import React, { useState } from 'react'

import Button from '../components/Form/Button'
import Input from '../components/Form/Input'

import styles from './Home.module.css'

function Home() {
  const [activeInput, setActiveInput] = useState(false);
  const [inputValue, setInputValue] = useState('')
  const [visor, setVisor] = useState('')
  const [celsius, setCelsius] = useState(false)










  function celsuiusToFahrenheit(){
    setActiveInput(true)
    // if(inputValue.length){
    //   const celsuiusToFahrenheitForm =  (((Number(inputValue) * 9) / 5) + 32).toFixed([1]);
    //   return setVisor(celsuiusToFahrenheitForm)
    // }
    const celsiusStart = true;
    return celsiusStart
  };

  function fahrenheitToCelsius(){
    setActiveInput(true)
    // if(inputValue.length){
    //   const fahrenheitToCelsiusForm = (((Number(inputValue) - 32) * 5) / 9).toFixed([1]);
    //   return setVisor(fahrenheitToCelsiusForm)
    // }
    return true
  };  

  function converter(){
    if(0 === true){
      const celsuiusToFahrenheitForm =  (((Number(inputValue) * 9) / 5) + 32).toFixed([1]);
      return setVisor(celsuiusToFahrenheitForm)
    }else{
      const fahrenheitToCelsiusForm = (((Number(inputValue) - 32) * 5) / 9).toFixed([1]);
      return setVisor(fahrenheitToCelsiusForm)
    }
  }


  function clear(){
    setActiveInput(false)
    console.log(visor)

    setVisor('')
    console.log(visor)
  }

  return (
    <div className={styles.container}>
      <header>
        <h1>Conversor de Temperatura</h1>
        <p>Qual Temperatura você deseja fazer a conversão?</p>
      </header>

      <div className={styles.optionBtn}>
        <Button text='Celsius > Fahrenheit' customClass='celsius' handlEvent={() => setCelsius(true)}/>
        <Button text='Fahrenheit > Celsius' customClass='fahrenheit' handlEvent={fahrenheitToCelsius}/>
      </div>

      {activeInput && (
          <div>
            <Input text='Digite a Temperatura: ' type='number' placeholder='...' handleOnChange={(e) => setInputValue(e.target.value)}/>
              <input type='text' value={`${visor}`} readOnly/>
            <Button text='Limpar' customClass='btnClear' handlEvent={clear}/>
          </div>
        )
      }
      <Button text='Converter' handlEvent={converter}/>
    </div>
  )
}

export default Home