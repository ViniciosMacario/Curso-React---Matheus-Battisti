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
            // isRequired é um tipo de validação com o value for nulo, ele retorna um warnin informando, ela é requerida, ela é obrigatoria
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}   

export default Item;