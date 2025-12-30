import { useState } from "react"

function ListForm() {
    const [list, setList] = useState([])
    const [inputValue, setInputValue] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        setList([...list, inputValue])
        setInputValue("")
    }

    function handleChange(e) {
        setInputValue(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} />
                <button type="submit">Adicionar</button>
            </form>

            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListForm