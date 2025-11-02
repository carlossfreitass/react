import styles from './Lista.module.css'

function Lista({ tarefas, setTarefas }) {

    function limparTarefas() {
        setTarefas([])
    }

    return (
        <div>
            {
                tarefas.length > 0 ? (
                    tarefas.map((item) => (
                        item.concluida ? (
                            <p className={styles.fundoVerde}>{item.nome} ✅</p>
                        ) : (
                            <p className={styles.fundoVermelho}>{item.nome} ❌</p>
                        )
                    ))
                ) : (
                    <p>Nenhuma tarefa pendente no momento.</p>
                )
            }

            {
                tarefas.length > 0 ? (
                    <button onClick={limparTarefas}>Limpar tarefas</button>
                ) : (
                    <span></span>
                )
            }
        </div>
    )
}

export default Lista