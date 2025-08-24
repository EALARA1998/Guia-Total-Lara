import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles/css/app.css";
import Index from './pages/Index';
import Navbar from './components/Navbar';
/*CSS*/
import Selectors_CSS from './pages/css/Selectors_CSS';
import Specificity_Inheritance_CSS from './pages/css/Specificity_Inheritance_CSS';
import Colors_Units_Measurements_CSS from './pages/css/Colors_Units_Measurements_CSS';
import Box_Model_CSS from './pages/css/Box_Model_CSS';
import Display_Flow_CSS from './pages/css/Display_Flow_CSS';
import Position_ZIndex_CSS from './pages/css/Position_ZIndex_CSS';
import Backgrounds_Borders_CSS from './pages/css/Backgrounds_Borders_CSS';
import Typography_Text_CSS from './pages/css/Typography_Text_CSS';
import Advanced_Design_CSS from './pages/css/Advanced_Design_CSS';
import Transitions_Transformations_Animations_CSS from './pages/css/Transitions_Transformations_Animations_CSS';
import Functions_Variables_Organization_CSS from './pages/css/Functions_Variables_Organization_CSS';
import Timers_Event_Loops_JS from './pages/js/Timers_Event_Loops_JS';
  /*Styles*/
  import Tools_CSS_Styles from "./pages/css/styles/Tools_CSS_Styles"
  /*Styles*/
/*CSS*/
/*JS*/
import Arrays_JS from './pages/js/Arrays_JS';
import Async_Promises_JS from './pages/js/Async_Promises_JS';
import Classes_JS from './pages/js/Classes_JS';
import Control_Structures_JS from './pages/js/Control_Structures_JS';
import Data_Types_JS from './pages/js/Data_Types_JS';
import DOM_JS from './pages/js/DOM_JS';
import ECMAScript_Module_JS from './pages/js/ECMAScript_Module_JS';
import Functions_JS from './pages/js/Functions_JS';
import Object_Literal_JS from './pages/js/Object_Literal_JS';
import Operators_JS from './pages/js/Operators_JS';
import Performance_Optimization_JS from './pages/js/Performance_Optimization_JS';
import Strings_JS from './pages/js/Strings_JS';
import Variables_JS from './pages/js/Variables_JS';
import Json_JS from './pages/js/Json_JS';
import Modules_JS from './pages/js/Modules_JS';
import Generators_Iterators_JS from './pages/js/Generators_Iterators_JS';
import Fetch_AJAX_HTTP_requests_JS from './pages/js/Fetch_AJAX_HTTP_requests_JS';
import BOM_JS from './pages/js/BOM_JS';
import Web_Storage_Cookies_JS from './pages/js/Web_Storage_Cookies_JS';
import Regular_Expressions_JS from './pages/js/Regular_Expressions_JS';
import Proxies_Reflect_JS from './pages/js/Proxies_Reflect_JS';
/*JS*/
/*TS*/
import Basic_Types_Annotations_TS from './pages/ts/Basic_Types_Annotations_TS';
import Operators_TS from './pages/ts/Operators_TS';
import Interfaces_Types_Advanced_TS from './pages/ts/Interfaces_Types_Advanced_TS';
import Classes_OOP_TS from './pages/ts/Classes_OOP_TS';
import Advanced_Utility_Types_TS from './pages/ts/Advanced_Utility_Types_TS';
import Interfaces_Classes_TS from './pages/ts/Interfaces_Classes_TS';
import Generics_TS from './pages/ts/Generics_TS';
import Modules_Namespaces_TS from './pages/ts/Modules_Namespaces_TS';
import Introduction_TS from './pages/ts/Introduction_TS';
import Advanced_Functions_Types_TS from './pages/ts/Advanced_Functions_Types_TS';
import Advanced_Types_TypeScript_Utilities_TS from './pages/ts/Advanced_Types_TypeScript_Utilities_TS';
import Decorators_TS from './pages/ts/Decorators_TS';
import Integration_With_APIs_External_Types_TS from './pages/ts/Integration_With_APIs_External_Types_TS';
import Advanced_Generics_Combined_Utilities_TS from './pages/ts/Advanced_Generics_Combined_Utilities_TS';
/*TS*/
/*React*/
import Components_React from './pages/react/Components_React';
import React_Hooks_React from './pages/react/React_Hooks_React';
import Fundamentals_React from './pages/react/Fundamentals_React';
import React_Tools_React from './pages/react/React_Tools_React';
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
/*Frontend*/
import Vite_Frontend from './pages/frontend/Vite_Frontend';
/*Frontend*/
/*GIT*/
import Fundamentals_Git from './pages/git/Fundamentals_Git';
/*GIT*/
/*VSC*/
import Commands_VSC from './pages/vscode/Commands_VSC';
/*VSC*/
/*Bakery*/
import Milk_Cakes_Recipes_Bakery from './pages/bakery/Milk_Cakes_Recipes_Bakery';
import Lemon_Cakes_Recipes_Bakery from './pages/bakery/Lemon_Cakes_Recipes_Bakery';
import Jellies_Recipes_Bakery from './pages/bakery/Jellies_Recipes_Bakery';
/*Bakery*/
/*English*/
  /*Easy_Grammar*/
  import Question_Forms_English from './pages/english/easy/Question_Forms_English';
import Open_Weather_APIs from './pages/APIs/Open_Weather_APIs';
import Food_Data_Central_APIs from './pages/APIs/Food_Data_Central_APIs';
import Content from './components/Content';
  /*Easy_Grammar*/
/*English*/
export default function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <section className='content'>
          <Content>
            <Routes>
              {/* ToDo Para rutas que no existan <Route path="*" element={<NotFound />} />*/}
              {/*Index*/}
              <Route path="/" element={<Index />} />
              {/*Index*/}
              {/*CSS*/}
              <Route path="/css/selectors" element={<Selectors_CSS />} />
              <Route path="/css/specificity-inheritance" element={<Specificity_Inheritance_CSS />} />
              <Route path="/css/colors-units-measurements" element={<Colors_Units_Measurements_CSS />} />
              <Route path="/css/box-model" element={<Box_Model_CSS />} />
              <Route path="/css/display-flow" element={<Display_Flow_CSS />} />
              <Route path="/css/position-zindex" element={<Position_ZIndex_CSS />} />
              <Route path="/css/backgrounds-borders" element={<Backgrounds_Borders_CSS />} />
              <Route path="/css/typography-text" element={<Typography_Text_CSS />} />
              <Route path="/css/advanced-design" element={<Advanced_Design_CSS />} />
              <Route path="/css/transitions-transformations-animations" element={<Transitions_Transformations_Animations_CSS />} />
              <Route path="/css/functions-variables-organization" element={<Functions_Variables_Organization_CSS />} />
                {/*CSS*/}
                <Route path="/css/styles/tools" element={<Tools_CSS_Styles />} />
                {/*CSS*/}
              {/*CSS*/}
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
              <Route path="/js/async-promises" element={<Async_Promises_JS />} />
              <Route path="/js/timers-event-loops" element={<Timers_Event_Loops_JS />} />
              <Route path="/js/generators-iterators" element={<Generators_Iterators_JS />} />
              <Route path="/js/modules" element={<Modules_JS />} />
              <Route path="/js/ecmascript_Module" element={<ECMAScript_Module_JS />} />
              <Route path="/js/fetch-ajax-http-requests" element={<Fetch_AJAX_HTTP_requests_JS />} />
              <Route path="/js/dom" element={<DOM_JS />} />
              <Route path="/js/bom" element={<BOM_JS />} />
              <Route path="/js/web-storage-cookies" element={<Web_Storage_Cookies_JS />} />
              <Route path="/js/regular-expressions" element={<Regular_Expressions_JS />} />
              <Route path="/js/proxies-reflect" element={<Proxies_Reflect_JS />} />
              <Route path="/js/performance" element={<Performance_Optimization_JS />} />
              <Route path="/js/json" element={<Json_JS />} />
              {/*JS*/}
              {/*TS*/}
              <Route path="/ts/introduction" element={<Introduction_TS />} />
              <Route path="/ts/basic-types-annotations" element={<Basic_Types_Annotations_TS />} />
              <Route path="/ts/interfaces-types-advanced" element={<Interfaces_Types_Advanced_TS />} />
              <Route path="/ts/classes_oop" element={<Classes_OOP_TS />} />
              <Route path="/ts/advanced-Utility-Types" element={<Advanced_Utility_Types_TS />} />
              <Route path="/ts/interfaces-classes" element={<Interfaces_Classes_TS />} />
              <Route path="/ts/generics" element={<Generics_TS />} />
              <Route path="/ts/modules-namespaces" element={<Modules_Namespaces_TS />} />
              <Route path="/ts/advanced-functions-types" element={<Advanced_Functions_Types_TS />} />
              <Route path="/ts/advanced-types-typescript-utilities" element={<Advanced_Types_TypeScript_Utilities_TS />} />
              <Route path="/ts/decorators" element={<Decorators_TS />} />
              <Route path="/ts/advanced-classes-inheritance" element={<Advanced_Types_TypeScript_Utilities_TS />} />
              <Route path="/ts/integration-with-apis-external-types" element={<Integration_With_APIs_External_Types_TS />} />
              <Route path="/ts/advanced-generics-combined-utilities" element={<Advanced_Generics_Combined_Utilities_TS />} />
              <Route path="/ts/operators" element={<Operators_TS />} />
              {/*TS*/}
              {/*React*/}
              <Route path="/react/components" element={<Components_React />} />
              <Route path="/react/react-hooks" element={<React_Hooks_React />} />
              <Route path="/react/fundamentals" element={<Fundamentals_React />} />
              <Route path="/react/react-tools" element={<React_Tools_React />} />
              <Route path="/react/custom-hooks" element={<Custom_Hooks_React />} />
              <Route path="/react/usereducer" element={<UseReducer_React />} />
              <Route path="/react/contextapi" element={<Context_API_React />} />
              {/*React*/}
              {/*Node*/}
              <Route path="/node/nodejs" element={<Nodejs_Node />} />
              <Route path="/node/npm" element={<Npm_Node />} />
              <Route path="/node/npm-packages" element={<Npm_Packages_Node />} />
              {/*Node*/}
              {/*Json*/}
              <Route path="/json/typescript" element={<TypeScript_JSON />} />
              {/*Json*/}
              {/*APIs*/}
              <Route path="/apis/open_weather" element={<Open_Weather_APIs />} />
              <Route path="/apis/usda_fooddata_central" element={<Food_Data_Central_APIs />} />
              {/*APIs*/}
              {/*Frontend*/}
              <Route path="/frontend/vite" element={<Vite_Frontend />} />
              {/*Frontend*/}
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
          </Content>
        </section>
      </Router>
    </>
  )
}