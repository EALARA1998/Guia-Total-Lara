import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
/*JS*/
import Variables_JS from './pages/js/Variables_JS';
import Arrays_JS from './pages/js/Arrays_JS';
import Operators_JS from './pages/js/Operators_JS';
import Data_Types_JS from './pages/js/Data_Types_JS';
import Object_Literal_JS from './pages/js/Object_Literal_JS';
/*JS*/
/*React*/
import Componentes_React from './pages/react/Componentes_React';
/*React*/
/*Node*/
import Inicio_Node from './pages/node/Inicio_Node';
import Npm_Node from './pages/node/Npm_Node';
/*Node*/

export default function App() {

  return (
    <>
      <Router>
        <nav>
          {/*Inicio*/}
          <Link to="/">Inicio</Link>
          {/*Inicio*/}
          {/*JS*/}
          <Link to="/js/variables_js">Variables_JS</Link>
          <Link to="/js/arrays_js">Arrays_JS</Link>
          <Link to="/js/operators_js">Operators_JS</Link>
          <Link to="/js/data_types_js">Data_Types_JS</Link>
          <Link to="/js/object_literal_js">Object_Literal_JS</Link>
          {/*JS*/}
          {/*React*/}
          <Link to="/react/componentes_react">Componentes_React</Link>
          {/*React*/}
          {/*Node*/}
          <Link to="/node/inicio_node">Inicio_Node</Link>
          <Link to="/node/npm_node">NPM_Node</Link>
          {/*Node*/}
        </nav>
        <Routes>
          {/*Inicio*/}
          <Route path="/" element={<Inicio />} />
          {/*Inicio*/}
          {/*JS*/}
          <Route path="/js/variables_js" element={<Variables_JS />} />
          <Route path="/js/arrays_js" element={<Arrays_JS />} />
          <Route path="/js/operators_js" element={<Operators_JS />} />
          <Route path="/js/data_types_js" element={<Data_Types_JS />} />
          <Route path="/js/object_literal_js" element={<Object_Literal_JS />} />
          {/*JS*/}
          {/*React*/}
          <Route path="/react/componentes_react" element={<Componentes_React />} />
          {/*React*/}
          {/*Node*/}
          <Route path="/node/inicio_node" element={<Inicio_Node />} />
          <Route path="/node/npm_node" element={<Npm_Node />} />
          {/*Node*/}
        </Routes>
      </Router>
    </>
  )
}