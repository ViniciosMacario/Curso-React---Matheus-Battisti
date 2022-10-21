
function Button(props){
  // Quando o bloco de código possui só uma linha, podemos ocultar o parênteses da seguinte forma.
    // Fica mais organizado e menos poluido.

    //Vamos ativar aquela propriedade 'event={myEvent}' por meio de algum evento.
      // Vamos aplicar o evento onClick e vamos passar a propriedade 'event'
  return <button onClick={props.event}> {props.text}</button>
}


export default Button;