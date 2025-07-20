import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./styles/css/app.css"
import Index from './pages/Index';
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
/*TS*/
import Fundamentals_TS from './pages/ts/Fundamentals_TS';
import Operators_TS from './pages/ts/Operators_TS';
/*TS*/
/*React*/
import Components_React from './pages/react/Components_React';
import React_Hooks_React from './pages/react/React_Hooks_React';
import Fundamentals_React from './pages/react/Fundamentals_React';
import React_Tools_React from './pages/react/React_Tools_React';
import Vite_React from './pages/react/Vite_React';
import Custom_Hooks_React from './pages/react/Custom_Hooks_React';
/*React*/
/*Node*/
import Npm_Node from './pages/node/Npm_Node';
/*Node*/
/*JSON*/
import TypeScript_JSON from './pages/json/TypeScript_JSON';
/*JSON*/
/*GIT*/
import Fundamentals_Git from './pages/git/Fundamentals_Git';
/*GIT*/
/*English*/
  /*Easy_Grammar*/
  import Question_Forms_English from './pages/english/easy/Question_Forms_English';
  /*Easy_Grammar*/
/*English*/
export default function App() {

  return (
    <>
      <Router>
        <nav className='navbar'>
          <ul className='navbar_menu'>
            <li className='navbar_menu_section'>
              Home
              <ul className='navbar_menu_section_submenu'>
                <li><Link to="/">Home</Link></li>
              </ul>
            </li>
            <li className='navbar_menu_section'>
              JS
              <ul className='navbar_menu_section_submenu'>
                <li><Link to="/js/variables">Variables_JS</Link></li>
                <li><Link to="/js/strings">Strings_JS</Link></li>
                <li><Link to="/js/arrays">Arrays_JS</Link></li>
                <li><Link to="/js/operators">Operators_JS</Link></li>
                <li><Link to="/js/data-types">Data_Types_JS</Link></li>
                <li><Link to="/js/object-literal">Object_Literal_JS</Link></li>
                <li><Link to="/js/control_structures">Control_Structures_JS</Link></li>
                <li><Link to="/js/functions">Functions_JS</Link></li>
                <li><Link to="/js/classes">Classes_JS</Link></li>
                <li><Link to="/js/async">Async_JS</Link></li>
                <li><Link to="/js/dom">Dom_JS</Link></li>
                <li><Link to="/js/ecmascript_Module">ECMAScript_Module_JS</Link></li>
                <li><Link to="/js/performance">Performance_JS</Link></li>
                <li><Link to="/js/json">Json_JS</Link></li>
              </ul>
            </li>
            <li className='navbar_menu_section'>
              TS
              <ul className='navbar_menu_section_submenu'>
                <li><Link to="/ts/fundamentals">Fundamentals_TS</Link></li>
                <li><Link to="/ts/operators">Operators_TS</Link></li>
              </ul>
            </li>
            <li className='navbar_menu_section'>
              React
              <ul className='navbar_menu_section_submenu'>
                <li><Link to="/react/components">Components_React</Link></li>
                <li><Link to="/react/react-hooks">React_Hooks_React</Link></li>
                <li><Link to="/react/fundamentals">Fundamentals_React</Link></li>
                <li><Link to="/react/react-tools">React_Tools_React</Link></li>
                <li><Link to="/react/vite">Vite_React</Link></li>
                <li><Link to="/react/custom-hooks">Custom_Hooks</Link></li>
              </ul>
            </li>
            <li className='navbar_menu_section'>
              Node
              <ul className='navbar_menu_section_submenu'>
                <li><Link to="/node/npm">NPM_Node</Link></li>
              </ul>
            </li>
            <li className='navbar_menu_section'>
              JSON
              <ul className='navbar_menu_section_submenu'>
                <li><Link to="/json/typescript">Typescript</Link></li>
              </ul>
            </li>
            <li className='navbar_menu_section'>
              Git_Github
              <ul className='navbar_menu_section_submenu'>
                <li><Link to="/git/fundamentals">Fundamentals</Link></li>
              </ul>
            </li>
            <li className='navbar_menu_section'>
              English
              <ul className='navbar_menu_section_submenu'>
                <li className='navbar_menu_section'>
                  Grammar (Easy)
                  <ul className="navbar_menu_section_submenu navbar_menu_section_submenu--nested">
                    <li><Link to="/english/easy-grammar/question-forms">Question Forms</Link></li>
                  </ul>
                </li>
                <li>
                  Grammar (Medium)
                  <ul className="navbar_menu_section_submenu navbar_menu_section_submenu--nested">
                    <li><Link to="/english/easy-grammar/question-forms">Question Forms</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <section className='content'>
          <Routes>
            {/* ToDo Para rutas que no existan <Route path="*" element={<NotFound />} />*/}
            {/*Index*/}
            <Route path="/" element={<Index />} />
            {/*Index*/}
            {/*JS*/}
            <Route path="/js/variables" element={<Variables_JS />} />
            <Route path="/js/strings" element={<Strings_JS />} />
            <Route path="/js/arrays" element={<Arrays_JS />} />
            <Route path="/js/operators" element={<Operators_JS />} />
            <Route path="/js/data-types" element={<Data_Types_JS />} />
            <Route path="/js/object-literal" element={<Object_Literal_JS />} />
            <Route path="/js/control_structures" element={<Control_Structures_JS />} />
            <Route path="/js/functions" element={<Functions_JS />} />
            <Route path="/js/classes" element={<Classes_JS />} />
            <Route path="/js/async" element={<Async_JS />} />
            <Route path="/js/dom" element={<Dom_JS />} />
            <Route path="/js/ecmascript_Module" element={<ECMAScript_Module_JS />} />
            <Route path="/js/performance" element={<Performance_JS />} />
            <Route path="/js/json" element={<Json_JS />} />
            {/*JS*/}
            {/*TS*/}
            <Route path="/ts/fundamentals" element={<Fundamentals_TS />} />
            <Route path="/ts/operators" element={<Operators_TS />} />
            {/*TS*/}
            {/*React*/}
            <Route path="/react/components" element={<Components_React />} />
            <Route path="/react/react-hooks" element={<React_Hooks_React />} />
            <Route path="/react/fundamentals" element={<Fundamentals_React />} />
            <Route path="/react/react-tools" element={<React_Tools_React />} />
            <Route path="/react/vite" element={<Vite_React />} />
            <Route path="/react/custom-hooks" element={<Custom_Hooks_React />} />
            {/*React*/}
            {/*Node*/}
            <Route path="/node/npm" element={<Npm_Node />} />
            {/*Node*/}
            {/*Node*/}
            <Route path="/json/typescript" element={<TypeScript_JSON />} />
            {/*Node*/}
            {/*Git*/}
            <Route path="/git/fundamentals" element={<Fundamentals_Git />} />
            {/*Git*/}
            {/*English*/}
            {/*Easy-Grammar*/}
            <Route path="/english/easy-grammar/question-forms" element={<Question_Forms_English />} />
            {/*Easy-Grammar*/}
            {/*Medium-Grammar*/}
            {/*Medium-Grammar*/}
            {/*English*/}
          </Routes>
        </section>
      </Router>
    </>
  )
}