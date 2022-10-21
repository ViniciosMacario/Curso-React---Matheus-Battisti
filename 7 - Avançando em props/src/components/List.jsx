import Item from './Item'

function List(){
  return(
    <>
      <h1>
        Minha Lista
      </h1>

      <ul>
        {/* Os valores do type of strings, devemos passar entre "" e quando for number, devemos passar entre chavês {} */}
        <Item marca="Ferrari" ano_lancamento={1985}/>
        <Item marca={0} ano_lancamento={1964}/>
        <Item  ano_lancamento={1964}/>
        <Item marca="Chevrolet" ano_lancamento="1250"/>
        <Item marca="Renault"/>

      </ul>
    </>
  )
};

export default List;