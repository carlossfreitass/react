import styles from './Produtos.module.css'

function Produtos({nome, preco, emPromocao, imagem, alt}) {
    if (emPromocao == true) {
        var estilo = styles.cardPromocao
    } else {
        var estilo = styles.card
    }

    return (
        <li className={estilo}>
            <h2>{nome}</h2>
            <img src={imagem} alt={alt} />
            <p>Preço: R$ {preco}</p>
            <p>{emPromocao == true ? "🔥 Em Promoção!" : ""}</p>
        </li>
    )
}

export default Produtos