import './App.css';
import Counter from './components/Counter';
import Greetings from './components/Greetings';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div className="App">
      <h1>Aprendendo React</h1>
      <h2>React JS: Guia Completo para o Desenvolvedor Front-End</h2>
      <hr />
      <div>
        <h1>Primeiro Contato com React</h1>
        <h2>Componentes:</h2>
        <HelloWorld />
        <h2>Propriedades:</h2>
        <Greetings name="John" />
        <h2>Estado</h2>
        <Counter />
      </div>
    </div>
  );
}

export default App;
