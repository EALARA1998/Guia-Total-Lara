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
      { label: "Async_JS", path: "/js/async" },
      { label: "Dom_JS", path: "/js/dom" },
      { label: "ECMAScript_Module_JS", path: "/js/ecmascript_Module" },
      { label: "Performance_JS", path: "/js/performance" },
      { label: "Json_JS", path: "/js/json" },
    ],
  },
  {
    label: "TS",
    path: "/ts",
    children: [
      { label: "Fundamentals_TS", path: "/ts/fundamentals" },
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
    label: "Git_Github",
    path: "/git",
    children: [
      { label: "Fundamentals", path: "/git/fundamentals" },
    ],
  },
  {
    label: "Visual Studio Code",
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

  const toggleMenu = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
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