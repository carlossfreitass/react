import styles from './Botao.module.css'

function Botao() {
    function pressButton() {
        alert("Apertou no botão!")
    }

    return (
        <>
            <p>Clique no botão abaixo!</p>
            <button onClick={pressButton} className={styles.button}>Clique aqui</button>
        </>
    )
}

export default Botao