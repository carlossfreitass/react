import './App.css';
import Contador from './components/Contador'
import Nome from './components/Nome'

function App() {
  return (
    <div className="App">
      <h1>Contador Interativo</h1>
      <Contador />
      <h1>Nome Interativo</h1>
      <Nome />
    </div>
  );
}

export default App;
