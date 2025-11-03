import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

function App() {
  return (
    <Router>
      <Header />
      <hr />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>
        <Route path="/contato" element={<Contato />}></Route>
      </Routes>

      <hr />
      <Footer />
    </Router>
  );
}

export default App;
