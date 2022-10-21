import React from 'react'

function Pessoa({nome, idade, profissão, foto}) {
  return (
    <div>
      <img src={foto} alt={nome} />
        <h2> Nome: {nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissão}</p>
    </div>
  )
}

export default Pessoa;





// Api não verificadas
// API REST
// api soap



// function Pessoa(props) {
//   return (
//     <div>
//       {/* Se usarmos um recurso chamado de Structure, vamos transformar esse objeto props, já no nome da propriedade, sem precisar ficar chamando sempre o mesmo objeto */}
//         <img src={props.foto} alt={props.nome} />
//         <h2> Nome: {props.nome}</h2>
//         <p>Idade: {props.idade}</p>
//         <p>Profissão: {props.profissão}</p>
//     </div>
//   )
// }

// export default Pessoa;