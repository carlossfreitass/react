import styles from './Contato.module.css'

function Contato() {
    return (
        <div>
            <h2 className={styles.title}>Área de Contato</h2>
            <p>Para entrar em contato comigo:</p>
            <p>Email: carlosfreitassdev@gmail.com</p>
            <p><a href="https://github.com/carlossfreitass" target='_blank'>Meu GitHub</a></p>
        </div>
    )
}

export default Contato