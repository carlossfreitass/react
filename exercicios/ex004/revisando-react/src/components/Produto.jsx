import styles from './Produto.module.css'

function Produto({nome = "[ERRO]", preco = 0, promocao = false}) {

    return (
        <>
        <ul className={styles.cardList}>
            <li className={styles.card}>
                <p>Nome do Produto: <strong>{nome}</strong></p>
                <p>Preço: <strong>{preco}R$</strong></p>
                <p>Em Promoção? <strong>{promocao ? "SIM" : "NÃO"}</strong></p>
            </li>
        </ul>
        </>
    )
}

export default Produto