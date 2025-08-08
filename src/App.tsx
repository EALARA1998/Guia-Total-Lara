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
import UseReducer_React from './pages/react/UseReducer_React';
import Context_API_React from './pages/react/Context_API_React';
/*React*/
/*Node*/
import Nodejs_Node from './pages/node/Nodejs_Node';
import Npm_Node from './pages/node/Npm_Node';
import Npm_Packages_Node from './pages/node/Npm_Packages_Node';
/*Node*/
/*JSON*/
import TypeScript_JSON from './pages/json/TypeScript_JSON';
/*JSON*/
/*GIT*/
import Fundamentals_Git from './pages/git/Fundamentals_Git';
/*GIT*/
/*Bakery*/
import Milk_Cakes_Recipes_Bakery from './pages/bakery/Milk_Cakes_Recipes_Bakery';
import Lemon_Cakes_Recipes_Bakery from './pages/bakery/Lemon_Cakes_Recipes_Bakery';
import Jellies_Recipes_Bakery from './pages/bakery/Jellies_Recipes_Bakery';
/*Bakery*/
/*English*/
  /*Easy_Grammar*/
  import Question_Forms_English from './pages/english/easy/Question_Forms_English';
import Commands_VSC from './pages/vscode/Commands_VSC';
import Navbar from './components/Navbar';
  /*Easy_Grammar*/
/*English*/
export default function App() {

  return (
    <>
      <Router>
        <Navbar/>
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
            <Route path="/react/usereducer" element={<UseReducer_React />} />
            <Route path="/react/contextapi" element={<Context_API_React />} />
            {/*React*/}
            {/*Node*/}
            <Route path="/node/nodejs" element={<Nodejs_Node />} />
            <Route path="/node/npm" element={<Npm_Node />} />
            <Route path="/node/npm-packages" element={<Npm_Packages_Node />} />
            {/*Node*/}
            {/*Node*/}
            <Route path="/json/typescript" element={<TypeScript_JSON />} />
            {/*Node*/}
            {/*Git*/}
            <Route path="/git/fundamentals" element={<Fundamentals_Git />} />
            {/*VSCode*/}
            <Route path="/vscode/commands" element={<Commands_VSC />} />
            {/*VSCode*/}
            {/*Git*/}
            {/*Bakery*/}
            <Route path="/bakery/milk-cakes-recipes" element={<Milk_Cakes_Recipes_Bakery />} />
            <Route path="/bakery/lemon-cakes-recipes" element={<Lemon_Cakes_Recipes_Bakery />} />
            <Route path="/bakery/jellies-recipes" element={<Jellies_Recipes_Bakery />} />
            {/*Bakery*/}
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