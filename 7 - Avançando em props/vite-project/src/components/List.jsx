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
        <Item marca="Fiat" ano_lancamento={1964}/>
        <Item marca="Fiat" ano_lancamento={1964}/>
      </ul>
    </>
  )
};

export default List;