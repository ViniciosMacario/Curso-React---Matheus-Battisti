function Evento({numero}) {

  function myEvent(){
    alert(`Evento Disparado! ${numero}`)
  };


  return (
    <div>
      <p>Clique para Disparar um Evento :</p>

      {/* No React.JS aplicamos o evento diretamente na tag */}
        {/* É importante se atentar a colocar somente o nome da função, pois se você colocar os parênteses, ela será executada imediatamente. */}
      <button onClick={myEvent}>Start!</button>
    </div>
  )   
};

export default Evento;