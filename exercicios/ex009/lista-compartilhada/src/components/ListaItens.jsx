import styles from './ListaItens.module.css'

function ListaItens({ lista }) {
    return (
        <div>
            {
                lista.length > 0 ? (
                    lista.map((item, index) => (
                        <p key={index} className={styles.fundo} >{item}</p>
                    ))
                ) : (
                    <p className={styles.fundoVermelho} >Nenhum item adicionado ainda.</p>
                )
            }
        </div>
    )
}

export default ListaItens