import Button from "./Eventos/Button";

function Evento() {

  function myEvent(){
    alert(`Primeiro Evento Disparado!`)
  };

  //Os método normalmente ficam centralizados no componente pai e são passados para os filhos.
    
  function segundoEvento(){
    alert(`Segundo Evento Disparado`)
  }

  return (
    <div>
      <p>Clique para Disparar um Evento :</p>
      {/* Criamos uma propriedade chamada 'event' e estamos atribuindo uma função chamada 'myEvent' */}
        {/* A função myEvent será enviada para o Componente filho */}

      <Button event={myEvent} text="Primeiro Evento"/>
      {/* Estamos reaproveitando um componente de mesma orign, mas são componentes diferentes  */}
      <Button event={segundoEvento} text="Segundo Evento"/>

      <button onClick={myEvent}>Start!</button>
    </div>
  )   
};

export default Evento;