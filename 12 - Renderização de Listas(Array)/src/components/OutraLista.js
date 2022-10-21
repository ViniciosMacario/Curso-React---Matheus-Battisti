function OutraLista({ itens }) {
  return (
    <div>
        <h3>Lista de Coisas Boas: </h3>
        {/* Quando existir alguma coisa em itens, vamos renderizar a lista, se não existir, vamos renderizar uma mensagem */}
        {itens.length > 0 ? (
          itens.map((item, index) => (
            <p key={index}>{item}</p>
              /*
                Quando fazemos um map(), precisamos adicionar uma key para cada um dos itens, ou seja, para que cada um tenha um id único
                podemos útizar por exemplo o index do próprio map como id.
              */
          )))
          :
          (
            <p>Não há itens na Lista!</p>
          )
        }
        
    </div>
  )
}

export default OutraLista;