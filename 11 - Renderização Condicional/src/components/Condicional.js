import { useState} from 'react';
// useState auxilia na manipulação dos dados do componente.

function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  // Vamos passar como parâmetro o acesso aos dados referente ao evento ocorrido.
  function enviarEmail(e){
    e.preventDefault() //para não enviar o formulário.
    setUserEmail(email)
  }

  function limparEmail(){
    setUserEmail('') //Precisamos apenas colocar um valor vázio/0 que ai ele já gera um false e não cai na condicional novamente
  }

  return (
    <div>
      <h2>Cadastre o seu e-mail:</h2>
      <form>
          <input 
            type="email" 
            placeholder="Digite o seu Email..."
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button 
            type='submit' 
            onClick={enviarEmail}
          >
            Enviar e-mail
          </button>

          {/* Se o Email for preenchido, vamos mostrar uma div */}
          {/* Para que ele seja true, basta que exista algum valor dentro de userEmail
          Estamos usando && para fazer um concatenação. se tem o userEmail, execute isso aqui do lado */}

          {/* isso então seria uma renderização condicional, pois ela só será renderizada se a condição for true */}
          {userEmail && (
            <div>
              <p>O email do Usuário é: {userEmail}</p>
              <button onClick={limparEmail}>Limpar Email</button>
            </div>
          )}
      </form>
      {/* {userEmail} */}
    </div>
  )
};

export default Condicional;