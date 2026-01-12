import { useState } from "react"

function Contador() {
    const [contador, setContador] = useState(1)

    function handleChange() {
        setContador(contador + 1)
    }

    return (
        <div>
            <p>{contador}</p>
            <button onClick={handleChange}>Adicionar</button>
        </div>
    )
}

export default Contador