function CapsLock({ texto, children }) {
    return (
        <>
            <p>{texto.toUpperCase()}</p>
            <p>{children.toUpperCase()}</p>
        </>
    )
}

export default CapsLock