import { useState } from 'react'

function Contador() {
    const [contador, setContador] = useState(0)

    function clickButton() {
        return setContador(contador + 1)
    }
    
    return (
        <>
            <p>Clique no botão para somar na contagem.</p>
            <button onClick={clickButton}>Clique aqui.</button>
            <h2>{contador}</h2>
        </>
    )
}

export default Contador