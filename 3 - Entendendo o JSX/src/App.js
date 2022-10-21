import './App.css';

function App() {
  const name = 'Vinicios';
  const newName = name.toLocaleUpperCase();

  function sum(a, b){
    return a + b;
  }
  // Inserir ``valores em atributos de tags`` também é valido em JSX.
  const url = 'https://via.placeholder.com/150'

  return (
    // É necessário entregar somente um tipo de container
    <header className='App'>
      <h1>Alterando o JSX</h1>
      {/*
        Podemos ``interpolar variáveis``, inserindo ela entre ``{ }``.
          podemos mostrar ao usuários de forma simples um valor pertencente a uma variável atráves de chavês( { } ).

          Veja um exemplo:
      */}
      <p>Olá, {newName} </p>

      {/* É possível também ``executar funções`` em JSX. */}
      <p>Soma: {2 + 2} </p>
      <p>Soma: {sum(1,5)} </p>

      {/* Inserir ``valores em atributos de tags`` também é valido em JSX. */}
      <img src={url} alt='Minha imagem' />
      </header>
    
  );
}

export default App;
