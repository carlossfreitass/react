import { useState } from 'react';
import './App.css';
import Lista from './components/Lista';

function App() {
  const [listaTarefas, setListaTarefas] = useState([
    {
      id: 1,
      nome: 'Estudar React',
      concluida: true
    }, {
      id: 2,
      nome: 'Revisar JavaScript',
      concluida: false
    }, {
      id: 3,
      nome: 'Fazer exercício prático',
      concluida: true
    }])

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <Lista tarefas={listaTarefas} setTarefas={setListaTarefas} />
    </div>
  );
}

export default App;
