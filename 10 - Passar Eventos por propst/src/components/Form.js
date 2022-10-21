import { useState } from 'react'; //OS hooks devem ser importandos do próprio REACT

function Form(){  
  function cadastrarUsuario(e){
    e.preventDefault()
    console.log(`O usuário(a) ${name} foi cadastrado(a) com a senha ${password}, Sucesso!!`)
  }
  //Sempre vamos ter o nome do Atributo(o que queremos tratar) seguindo da Função do atributo.
    //Sempre vamos ter o Nome do Atributo que é o que vamos resgatar, ou seja, que vamos ler 
      //Setname será o que vamos alterar, será o que vamos atribuir para alterar o valor que está no atributo  
      //Nesse método 'UseState', podemos definir um valor que Inicia quando o componente for inicializado.
        // Vamos atribuir o atributo e o Setname para useState
      const [name, setName] = useState('Vinicios'); //hook
      const [password, setPassword] = useState(15); //hook

  return(
    <div>
      <h1>Meu Cadastro:   </h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Digite o seu Nome"
            value={name}

            //A cada caracter digitado no input será modificado o state e passado para ele os novos caracteres.

            //Veja que usamos o ``Setname`` para atribuir o valor e usamos o ``name`` para ler o valor
            //O evento onChange ocorre quando o valor de um elemento foi alterado.
            onChange={(event) => setName(event.target.value)} 

              //Para botões de opção e caixas de seleção, o evento onchange ocorre quando o estado verificado foi alterado.
            required
          />
        </div>

        {/* Vamos salvar os 'Value' que o Usário Digitar e enviar para o método que futuramente enviaremos para o Back-end */}

        <div>
          <label htmlFor="password">Senha:   </label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={password}
            placeholder="Digite sua Senha" 
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        <div>
            <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  )
};

export default Form;