import React from 'react'

function saudacao({ name }) {

  function gerarSaudacao(algumNome){
    return `Olá, ${algumNome}, tudo bem?`
  }
  return (
    <div>
      {name && <p>{gerarSaudacao(name)}</p>}
    </div>
  )
}

export default saudacao