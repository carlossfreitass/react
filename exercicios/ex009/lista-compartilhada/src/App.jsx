import { useState } from 'react';
import './App.css';
import AdicionarItem from './components/AdicionarItem';
import ListaItens from './components/ListaItens';
import ApagarItem from './components/ApagarItem';

function App() {
  const [lista, setLista] = useState([])

  return (
    <div className="App">
      <h1>Lista Compartilhada</h1>
      <ListaItens lista={lista} />
      <AdicionarItem setLista={setLista} />
      <br />
      <ApagarItem setLista={setLista} />
    </div>
  );
}

export default App;
