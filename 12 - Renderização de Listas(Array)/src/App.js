import OutraLista from "./components/OutraLista";

function App() {
  const meuItens = ['React', 'Vue', 'Angular']

  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <OutraLista itens={meuItens}/>
      {/*E se informamos um Array vázio? precisamos informar uma mensagem ao usuário. */}
      <OutraLista itens={[]}/>

    </div>
  );
}

export default App;