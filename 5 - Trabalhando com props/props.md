# Props

**Descrição:** O ReactJs tem um Objeto Especial, chamado de ``prop``(que significa propriedade) que usamos para **transportar dados de um componente para o outro**.

> **Observação:** as props transportam dados apenas em uma direção (somente do elemento pai para os elementos filhos). Não é possível com as props passar dados do elemento filho para o pai, nem para componentes de mesmo nível.



- As **props** são valores passados para componentes.
    > Um componente filho vai receber uma propriedade do pai.
- Podemos deixá-los **dinâmicos**.
- Ou seja, **mudando a execução** por causa do valor da prop.
- O valor é **passado como um atributo** na chamada do componente.
- E precisa ser **resgatado dentro de uma propriedade/argumento** chamada props na função de definição do componente.
- As props são **somente leitura**.
    > Vamos apenas receber o valor, não vamos modificar o valor.