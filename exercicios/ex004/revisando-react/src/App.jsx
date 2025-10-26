import './App.css';
import Produto from './components/Produto'
import Botao from './components/Botao'

function App() {
  let nome = "Carlos"
  let idade = 17

  function chamarMensagem() {
    return "Aprendendo React!"
  }

  return (
    <div className="App">
      <h1>Revisando React</h1>

      <h2>Fundamentos JSX</h2>
      <p>Meu nome é {nome}!</p>
      <p>Tenho {idade} anos.</p>
      <p>{chamarMensagem()}</p>

      <h2>Componentes e Props</h2>
      <Produto nome="Facas Ginsu" preco={150} promocao={false} />
      <hr />
      <Produto nome="Air Fry" preco={300} promocao={true} />

      <h2>Eventos DOM</h2>
      <Botao />
    </div>
  );
}

export default App;