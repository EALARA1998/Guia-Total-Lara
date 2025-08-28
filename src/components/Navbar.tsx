import { useState } from "react";
import { Link } from "react-router-dom";

type MenuItem = {
  label: string;
  path: string;
  children?: MenuItem[];
}
type MenuProps = {
  items: MenuItem[]
  level?: number
}

const menuItems: MenuItem[] = [
  {
    label: "Home",
    path: "/",
    children: [
      { label: "Home", path: "/" }
    ],
  },
  {
    label: "CSS",
    path: "/css",
    children: [
      { label: "Selectors", path: "/css/selectors" },
      { label: "Specificity_Inheritance", path: "/css/specificity-inheritance" },
      { label: "Colors_Units_Measurements", path: "/css/colors-units-measurements" },
      { label: "Box_Model", path: "/css/box-model" },
      { label: "Display_Flow", path: "/css/display-flow" },
      { label: "Position_Z-Index", path: "/css/position-zindex" },
      { label: "Backgrounds_Borders", path: "/css/backgrounds-borders" },
      { label: "Typography_Text", path: "/css/typography-text" },
      { label: "Advanced_Design", path: "/css/advanced-design" },
      { label: "Transitions_Transformations_Animations", path: "/css/transitions-transformations-animations" },
      { label: "Functions_Variables_Organization", path: "/css/functions-variables-organization" },
      { 
        label: "Styles",
        path: "/css/styles",
        children: [
          { label: "Tools", path: "/css/styles/tools" }
        ]
      },
    ],
  },
  {
    label: "JS",
    path: "/js",
    children: [
      { label: "Variables_JS", path: "/js/variables" },
      { label: "Strings_JS", path: "/js/strings" },
      { label: "Arrays_JS", path: "/js/arrays" },
      { label: "Operators_JS", path: "/js/operators" },
      { label: "Data_Types_JS", path: "/js/data-types" },
      { label: "Object_Literal_JS", path: "/js/object-literal" },
      { label: "Control_Structures_JS", path: "/js/control_structures" },
      { label: "Functions_JS", path: "/js/functions" },
      { label: "Classes_JS", path: "/js/classes" },
      { label: "Async_Promises_JS", path: "/js/async-promises" },
      { label: "Timers_Event_Loops_JS", path: "/js/timers-event-loops" },
      { label: "Modules_JS", path: "/js/modules" },
      { label: "ECMAScript_Module_JS", path: "/js/ecmascript_Module" },
      { label: "Generators_Iterators_JS", path: "/js/generators-iterators" },
      { label: "Fetch_AJAX_HTTP_requests_JS", path: "/js/fetch-ajax-http-requests" },
      { label: "DOM_JS", path: "/js/dom" },
      { label: "BOM_JS", path: "/js/bom" },
      { label: "Web_Storage_Cookies_JS", path: "/js/web-storage-cookies" },
      { label: "Regular_Expressions_JS", path: "/js/regular-expressions" },
      { label: "Error_Handling_JS", path: "/js/error-handling" },
      { label: "Proxies_Reflect_JS", path: "/js/proxies-reflect" },
      { label: "Performance_Optimization_JS", path: "/js/performance" },
      { label: "Json_JS", path: "/js/json" },
    ],
  },
  {
    label: "TS",
    path: "/ts",
    children: [
      { label: "Introduction_TS", path: "/ts/introduction" },
      { label: "Basic_Types_Annotations_TS", path: "/ts/basic-types-annotations" },
      { label: "Interfaces_Types_Advanced_TS", path: "/ts/interfaces-types-advanced" },
      { label: "Classes_OOP_TS", path: "/ts/classes_oop" },
      { label: "Advanced_Utility_Types_TS", path: "/ts/advanced-Utility-Types" },
      { label: "Interfaces_Classes_TS", path: "/ts/interfaces-classes" },
      { label: "Generics_TS", path: "/ts/generics" },
      { label: "Modules_Namespaces_TS", path: "/ts/modules-namespaces" },
      { label: "Advanced_Functions_Types_TS", path: "/ts/advanced-functions-types" },
      { label: "Advanced_Types_TypeScript_Utilities_TS", path: "/ts/advanced-types-typescript-utilities" },
      { label: "Decorators_TS", path: "/ts/decorators" },
      { label: "Advanced_Classes_Inheritance_TS", path: "/ts/advanced-classes-inheritance" },
      { label: "Integration_With_APIs_External_Types_TS", path: "/ts/integration-with-apis-external-types" },
      { label: "Advanced_Generics_Combined_Utilities_TS", path: "/ts/advanced-generics-combined-utilities" },
      { label: "Operators_TS", path: "/ts/operators" },
    ],
  },
  {
    label: "React",
    path: "/react",
    children: [
      { label: "Components_React", path: "/react/components" },
      { label: "React_Hooks_React", path: "/react/react-hooks" },
      { label: "Fundamentals_React", path: "/react/fundamentals" },
      { label: "React_Tools_React", path: "/react/react-tools" },
      { label: "Vite_React", path: "/react/vite" },
      { label: "Custom_Hooks_React", path: "/react/custom-hooks" },
      { label: "UseReducer_React", path: "/react/usereducer" },
      { label: "Context_API_React", path: "/react/contextapi" },
    ],
  },
  {
    label: "Node",
    path: "/node",
    children: [
      { label: "NodeJS", path: "/node/nodejs" },
      { label: "NPM", path: "/node/npm" },
      { label: "NPM Packages", path: "/node/npm-packages" },
    ],
  },
  {
    label: "JSON",
    path: "/json",
    children: [
      { label: "Typescript", path: "/json/typescript" },
    ],
  },
  {
    label: "APIs",
    path: "/apis",
    children: [
      { label: "Open_Weather", path: "/apis/open_weather" },
      { label: "Food_Data_Central", path: "/apis/usda_fooddata_central" },
      { label: "Free_Cocktail", path: "/apis/free_cocktail" },
    ],
  },
  {
    label: "Frontend",
    path: "/frontend",
    children: [
      { label: "Vite", path: "/frontend/vite" },
    ],
  },
  {
    label: "Git_Github",
    path: "/git",
    children: [
      { label: "Fundamentals", path: "/git/fundamentals" },
    ],
  },
  {
    label: "Visual_Studio_Code",
    path: "/vscode",
    children: [
      { label: "Comandos", path: "/vscode/commands" },
    ],
  },
  {
    label: "Bakery",
    path: "/bakery",
    children: [
      { label: "Milk Cakes Recipes", path: "/bakery/milk-cakes-recipes" },
      { label: "Lemon Cakes Recipes", path: "/bakery/lemon-cakes-recipes" },
      { label: "Jellies Recipes", path: "/bakery/jellies-recipes" },
    ],
  },
  {
    label: "English",
    path: "/english",
    children: [
      {
        label: "Grammar (Easy)",
        path: "#",
        children: [
          { label: "Question Forms", path: "/english/easy-grammar/question-forms" },
        ],
      },
      {
        label: "Grammar (Medium)",
        path: "#",
        children: [
          { label: "Question Forms", path: "/english/medium-grammar/question-forms" },
        ],
      },
    ],
  },
];

function Menu({ items, level = 0 }: MenuProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleMenu = (i: number | null) => {
    setOpenIndex((openIndex === i)  ? null : i);
  };

  return (
    <ul className={`navbar_menu level-${level}`}>
      {items.map((item, i) => (
        <li
          key={i}
          className={`navbar_menu_section ${openIndex === i ? "open" : ""}`}
        >
          <Link
            to={item.path}
            className={openIndex === i ? "open" : ""}
            onClick={(e) => {
              if (item.children) {
                e.preventDefault();
                toggleMenu(i);
              }
            }}
          >
            {item.label}
          </Link>

          {/* Recursivamente renderizamos submenú sólo si está abierto */}
          {item.children && openIndex === i && (
            <Menu items={item.children} level={level + 1} />
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  return (
    <nav className="navbar">
      <Menu items={menuItems} level={0} />
    </nav>
  );
}