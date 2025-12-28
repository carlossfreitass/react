import { useState } from "react"

function ClickEvent() {
    const [isEnabled, setIsEnabled] = useState(false)

    function handleClick() {
        setIsEnabled(!isEnabled);
    }

    return (
        <div>
            <p>Clique no botão abaixo!</p>
            <p><button onClick={handleClick}>CLICAR</button></p>
            <p>{isEnabled ? "Ativado" : "Desativado"}</p>
        </div>
    )
}

export default ClickEvent