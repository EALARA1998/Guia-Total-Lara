import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./styles/css/app.css"
import Inicio from './pages/Inicio';
/*JS*/
import Arrays_JS from './pages/js/Arrays_JS';
import Async_JS from './pages/js/Async_JS';
import Classes_JS from './pages/js/Classes_JS';
import Control_Structures_JS from './pages/js/Control_Structures_JS';
import Data_Types_JS from './pages/js/Data_Types_JS';
import Dom_JS from './pages/js/Dom_JS';
import ECMAScript_Module_JS from './pages/js/ECMAScript_Module_JS';
import Functions_JS from './pages/js/Functions_JS';
import Object_Literal_JS from './pages/js/Object_Literal_JS';
import Operators_JS from './pages/js/Operators_JS';
import Performance_JS from './pages/js/Performance_JS';
import Strings_JS from './pages/js/Strings_JS';
import Variables_JS from './pages/js/Variables_JS';
import Json_JS from './pages/js/Json_JS';
/*JS*/
/*React*/
import Components_React from './pages/react/Components_React';
import React_Hooks_React from './pages/react/React_Hooks_React';
import Fundamentals_React from './pages/react/Fundamentals_React';
import React_Tools_React from './pages/react/React_Tools_React';
import Vite_React from './pages/react/Vite_React';
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
          <Link to="/js/strings_js">Strings_JS</Link>
          <Link to="/js/arrays_js">Arrays_JS</Link>
          <Link to="/js/operators_js">Operators_JS</Link>
          <Link to="/js/data_types_js">Data_Types_JS</Link>
          <Link to="/js/object_literal_js">Object_Literal_JS</Link>
          <Link to="/js/control_structures_js">Control_Structures_JS</Link>
          <Link to="/js/functions_js">Functions_JS</Link>
          <Link to="/js/classes_js">Classes_JS</Link>
          <Link to="/js/async_js">Async_JS</Link>
          <Link to="/js/dom_js">Dom_JS</Link>
          <Link to="/js/ecmascript_Module_js">ECMAScript_Module_JS</Link>
          <Link to="/js/performance_js">Performance_JS</Link>
          <Link to="/js/json_js">Json_JS</Link>
          {/*JS*/}
          {/*React*/}
          <h2>React</h2>
          <Link to="/react/components_react">Components_React</Link>
          <Link to="/react/react_hooks_react">React_Hooks_React</Link>
          <Link to="/react/fundamentals_react">Fundamentals_React</Link>
          <Link to="/react/react_tools_react">React_Tools_React</Link>
          <Link to="/react/vite_react">Vite_React</Link>
          {/*React*/}
          <h2>Node</h2>
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
          <Route path="/js/strings_js" element={<Strings_JS />} />
          <Route path="/js/arrays_js" element={<Arrays_JS />} />
          <Route path="/js/operators_js" element={<Operators_JS />} />
          <Route path="/js/data_types_js" element={<Data_Types_JS />} />
          <Route path="/js/object_literal_js" element={<Object_Literal_JS />} />
          <Route path="/js/control_structures_js" element={<Control_Structures_JS />} />
          <Route path="/js/functions_js" element={<Functions_JS />} />
          <Route path="/js/classes_js" element={<Classes_JS />} />
          <Route path="/js/async_js" element={<Async_JS />} />
          <Route path="/js/dom_js" element={<Dom_JS />} />
          <Route path="/js/ecmascript_Module_js" element={<ECMAScript_Module_JS />} />
          <Route path="/js/performance_js" element={<Performance_JS />} />
          <Route path="/js/json_js" element={<Json_JS />} />
          {/*JS*/}
          {/*React*/}
          <Route path="/react/components_react" element={<Components_React />} />
          <Route path="/react/react_hooks_react" element={<React_Hooks_React />} />
          <Route path="/react/fundamentals_react" element={<Fundamentals_React />} />
          <Route path="/react/react_tools_react" element={<React_Tools_React />} />
          <Route path="/react/vite_react" element={<Vite_React />} />
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