import { useState } from "react"

function KeyPress() {
    const [inputValue, setInputValue] = useState("")
    const [message, setMessage] = useState("")

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            setMessage(inputValue)
            setInputValue("")
        }
    }

    function handleChange(e) {
        setInputValue(e.target.value)
    }

    return (
        <div>
            <input type="text" onChange={handleChange} onKeyDown={handleKeyDown} />
            <p>{message}</p>
        </div>
    )
}

export default KeyPress