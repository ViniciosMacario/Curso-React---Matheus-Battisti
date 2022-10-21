import './App.css';
import Event from './components/Evento';
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      {/* Podemos trabalhar com propriedades dentro de eventos também */}
      <Event numero="1"/>
      <Event numero="2"/>
      <Form/>
    </div>
  );
}

export default App;
