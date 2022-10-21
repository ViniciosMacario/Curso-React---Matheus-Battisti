import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import './App.css';

function App() {
  // Vamos passar para o Componente 'SayMyName' um nome por meio de uma variável.
  const name = 'Iasmin';
  const tag = <h1>Testando</h1>

  return (
    <div className="App">
      <HelloWorld/>
      {/*
        - O valor é passado como um atributo na chamada do componente.
          Em outras palavras;
        - Estamos inserindo a propriedade necessária para o Componente 'SayMyName' via atributo e como um valor de Texto.
      
      */}
      <SayMyName nome='Vinicios'/>
      <SayMyName nome='Maria'/>
      <SayMyName nome='Paulo'/>
      {/* Estamos passando para o Componente via variável o nome, para a propriedade 'nome' do meu componente. */}
      <SayMyName nome={name}/>

      <Pessoa 
        nome='Vinicios' 
        idade='21' 
        profissão='Programador' 
        foto='https://via.placeholder.com/150'
      />
      {tag}
    </div>
  );
}

export default App;
