import './App.css';
import CapsLock from './components/CapsLock';
import Contador from './components/Contador';
import Texto from './components/Texto';

function App() {
  return (
    <div className="App">
      <h1>Desafios React</h1>
      <hr />
      <h2>Desafio 1 e 2: Caps Lock / Closure ✅</h2>
      <CapsLock texto="Me deixe em Caps Lock por favor">Show!!!</CapsLock>
      <hr />
      <h2>Desafio 3: Memory ✅</h2>
      <Contador />
      <Texto />
    </div>
  );
}

export default App;