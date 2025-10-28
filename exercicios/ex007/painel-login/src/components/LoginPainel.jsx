import { useState } from "react"

function LoginPainel() {
    const [logado, setLogado] = useState()
    const [nome, setNome] = useState()

    function pressLogin() {
        if (nome) {
            setLogado(true)
        } else {
            alert("Digite seu nome de usuário!")
        }
    }

    function pressOut() {
        setLogado(false)
    }

    return (
        <div>
            <input type="text" placeholder="Digite seu nome de usuário" onChange={(e) => setNome(e.target.value)}/> <br /> <br />
            <button onClick={pressLogin}>Efetuar login</button>
            {logado ? (
                <>
                    <p>Bem Vindo, {nome}!</p>
                    <textarea placeholder="Envie uma mensagem para o suporte."></textarea> <br />
                    <button onClick={pressOut}>Sair</button>
                </>
            ) : (
                <p>Você não está logado!</p>
            )}
        </div>
    )
}

export default LoginPainel