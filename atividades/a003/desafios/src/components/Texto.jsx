import { useState } from "react"

function Texto() {
    const [text, setText] = useState('')

    function handleChange(e) {
        setText(e.target.value)
    }

    return (
        <div>
            <p>Escreva no campo abaixo e veja aparecer o que você escrever!</p>
            <input type="text" name="txtNome" id="txtNome" onChange={handleChange} />
            <p>{text}</p>
            <p></p>
        </div>
    )
}

export default Texto