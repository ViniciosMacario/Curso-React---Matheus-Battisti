function Form(){
  function cadastrarUsuario(e){
    // Existe um problema com o submit e formulários, é que eles são enviados de forma muito rápida, de modo que não conseguimos trata-los corretamente, fazendo necessário algum meio de para o envio por um momento.
      // e.preventDefault(), ele vai parar a execução do formulário e vai executar o que esta logo em seguida(console.log('Cadastrou o usuário'))
    e.preventDefault()
    console.log('Cadastrou o usuário')
  }

    return(
        <div>
            <h1>Meu Cadastro:</h1>
            {/* Quando esse formulário for enviado, será executado uma função chamada de 'cadastrar' */}
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu Nome" required/>
                </div>

                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
};

export default Form;