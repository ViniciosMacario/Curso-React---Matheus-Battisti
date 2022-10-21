import PropTypes from 'prop-types'; // Estamos importando um pacote que vem nativo do Rect.JS

function Item({marca, ano_lancamento}) {
    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
};

// prototype é uma propriedade usada para ter acesso a vários recursos.
Item.propTypes  = {
    //Estamos determinando o type da do atributo 'marca' do componente 'Item', então se você passar qualquer valor diferente de 'string'
        // Você receberá um Warning
    marca: PropTypes.string.isRequired,
    //Estamos determinando o type da do atributo 'ano_lancamento' do componente 'Item'
        //então se você passar qualquer valor diferente de 'number'
            // Será retornado um Warning
                //Lembrando que Warning é apenas um aviso, ele não vai impactar na visualização do componente.
    ano_lancamento: PropTypes.number
}
//Usando o defaultProps, o isRequired não será mais útil, pois será preenchido pelos valores do default.

Item.defaultProps = {
    marca: 'Não Informado a Marca',
    ano_lancamento: 0,
}

export default Item;