import styles from './Perfil.module.css'

function Perfil({nome, idade, foto, bio}) {
    let card = ""

    if (idade > 30) {
        card = styles.cardDestaque
    } else {
        card = styles.cardContainer
    }

    return (
        <div className={card}>
            <h1>{nome}</h1>
            <img src={foto} alt="Foto do Usuário" className={styles.imagem} />
            <p>Idade: {idade} anos</p>
            <p className={styles.paragrafo}>{bio}</p>
        </div>
    )
}

export default Perfil