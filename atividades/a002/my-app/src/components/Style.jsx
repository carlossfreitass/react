import styles from './Style.module.css'

import Button from 'react-bootstrap/Button'
import Fab from '@mui/material/Fab' 

function Style() {
    const estiloDiv = {
        backgroundColor: "red"
    }

    return (
        <div>
            <div style={estiloDiv}>
                <h1>Estilo Inline</h1>
                <p>Este é um exemplo de estilo inline em React</p>
            </div>

            <div className={styles.fundo_verde}>
                <h1>Estilo em Arquivo Separado</h1>
                <p>Este é um exemplo de estilo CSS em arquivo separado em React</p>
            </div>

            <div className={styles.fundo_cinza}>
                <h1>Bootstrap</h1>
                <Button variant='dark' size='lg' onClick={() => alert("Clicado!")}>
                    Clique aqui!
                </Button>
            </div>

            <br />

            <div className={styles.fundo_laranja}>
                <h1>Material UI</h1>
                <Fab color='secondary' aria-label='add'>
                    +
                </Fab>
            </div>
        </div>
    )
}

export default Style