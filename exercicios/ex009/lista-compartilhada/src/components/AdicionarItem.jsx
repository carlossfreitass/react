import { useState } from "react"
import styles from './AdicionarItem.module.css'

function AdicionarItem({ setLista }) {
    const [item, setItem] = useState()

    function pressLista() {
        if (item) {
            setLista((prevLista) => prevLista.concat(item))
        } else {
            alert('Digite algo para adicionar à lista.')
        }
    }

    return (
        <div className={styles.fundo}>
            <p>Adicione um item à lista:</p>
            <input type="text" placeholder="Digite aqui" onChange={(e) => setItem(e.target.value)}/>
            <button onClick={pressLista}>Adicionar</button>
        </div>
    )
}

export default AdicionarItem