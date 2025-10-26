import './App.css';
import Filme from './components/Filme.jsx'

function App() {
  return (
    <div className="App">
      <Filme titulo="A Origem" foto="https://i.ibb.co/nq2rS1hM/origem.jpg" ano="2010" genero="Ficção Científica / Suspense" avaliacao="9" txtalt="Pôster do Filme: A Origem"/>
      <hr />
      <Filme titulo="O Senhor dos Anéis: A Sociedade do Anel" foto="https://i.ibb.co/C3Z4J54g/senhor.jpg" ano="2001" genero="Fantasia / Aventura" avaliacao="9.5" txtalt="Pôster do Filme: O Senhor dos Anéis: A Sociedade do Anel"/>
      <hr />
      <Filme titulo="Divertida Mente" foto="https://i.ibb.co/x839tzss/divertidamente-2.jpg" ano="2015" genero="Animação / Família" avaliacao="7.5" txtalt="Pôster do Filme: Divertida Mente"/>
    </div>
  );
}

export default App