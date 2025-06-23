import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Componentes_JS from './pages/JS/Componentes_JS';

function App() {

  return (
    <>
      <Router>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/JS/componentes_JS">Componentes_JS</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/JS/componentes_JS" element={<Componentes_JS />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
