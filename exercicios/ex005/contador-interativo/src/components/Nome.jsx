import { useState } from 'react'

function Nome() {
    const [name, setName] = useState()

    return (
        <>
            <input type="text" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} />
            <p>Nome Digitado: {name}</p>
        </>
    )
}

export default Nome