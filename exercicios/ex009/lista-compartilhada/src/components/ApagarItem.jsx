function ApagarItem({ setLista }) {
    function apagaItem() {
        setLista([])
    }

    return (
        <>
            <button onClick={apagaItem}>🗑️ Limpar lista</button>
        </>
    )
}

export default ApagarItem