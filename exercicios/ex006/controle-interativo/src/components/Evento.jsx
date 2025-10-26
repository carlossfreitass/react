import { useState } from 'react'
import Button from './events/Button'

function Evento() {
    const [acao = "Nenhuma ação executada", setAcao] = useState()

    function ligaLuzes() {
        alert('Ligando luzes!')
        setAcao('Ligou as luzes!')
    }

    function abrePorta() {
        alert('Abrindo portas!')
        setAcao('Abriu as portas!')
    }

    function ativaSeguranca() {
        alert('Sistema de segurança ativado')
        setAcao('Ativou o sistema de segurança!')
    }

    return (
        <>
            <Button text="Ligar luzes" event={ligaLuzes} />
            <Button text="Abrir portas" event={abrePorta} />
            <Button text="Ativar segurança" event={ativaSeguranca} />
            <p>Última ação executada: {acao}</p>
        </>
    )
}

export default Evento