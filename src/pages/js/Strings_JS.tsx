import Code from "../../components/Code";

export default function Strings_JS() {
  return (
    <>
      <h1>Strings (Cadenas de Texto)</h1>
      <section>
        <h2>Qué son</h2>
        <p>Un string es un tipo de dato primitivo que representa una secuencia de caracteres.</p>
        <p>En JavaScript, los strings se usan para almacenar texto, caracteres individuales o incluso combinaciones de números y letras.</p>
        <Code>{`
          let saludo = "Hola Mundo";
          let letra = 'A';
          let mensaje = \`Bienvenido, \${nombre}\`; // string con template literal
        `}</Code>
      </section>
      <section>
        <h2>Formas de declarar strings</h2>
        <ol>
          <li>Comillas dobles " "</li>
          <li>Comillas simples ' '</li>
          <li>Backticks / Template literals ` ` (introducido en ES6)
            <ul>
              <li>Permite interpolación de variables:
                <Code>{`
                  let nombre = "Emanuel";
                  let mensaje = \`Hola, \${nombre}!\`;
                `}</Code>
              </li>
              <li>Permite strings multilínea sin concatenación:
                <Code>{`
                  let texto = \`Línea 1
                  Línea 2\`;
                `}</Code>
              </li>
            </ul>
          </li>
        </ol>
      </section>
      <section>
        <h2>Caracteres y longitud</h2>
        <section>
          <h3>Cada carácter ocupa una posición (índice) dentro del string, empezando en 0.</h3>
          <Code>{`
            let palabra = "JavaScript";
            console.log(palabra[0]); // "J"
            console.log(palabra.length); // 10
          `}</Code>
        </section>
        <section>
          <h3>Los strings son inmutables, es decir, no puedes cambiar un carácter directamente:</h3>
          <Code>{`
            let texto = "Hola";
            texto[0] = "J"; // NO funciona
          `}</Code>
        </section>
        <section>
          <h3>Para modificar, debes crear un nuevo string:</h3>
          <Code>{`
            let nuevoTexto = "J" + texto.slice(1); // "Jola"
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Métodos esenciales de strings</h2>
        <p>JavaScript provee muchos métodos nativos para manipular strings. Aquí los más importantes:</p>
        <section>
          <h3>Transformación de mayúsculas/minúsculas</h3>
          <Code>{`
            let nombre = "Emanuel";
            nombre.toUpperCase(); // "EMANUEL"
            nombre.toLowerCase(); // "emanuel"
          `}</Code>
        </section>
        <section>
          <h3>Búsqueda</h3>
          <Code>{`
            let frase = "Aprender JavaScript es divertido";
            frase.indexOf("JavaScript"); // 9 → posición donde empieza
            frase.lastIndexOf("a");      // 19 → última aparición
            frase.includes("Java");      // true
            frase.startsWith("Aprender");// true
            frase.endsWith("divertido");// true
          `}</Code>
        </section>
        <section>
          <h3>Extracción de partes</h3>
          <Code>{`
            let texto = "JavaScript";
            texto.slice(0, 4);  // "Java" (start incluido, end excluido)
            texto.substring(0, 4); // igual que slice
            texto.substr(4, 6); // "Script" (start, longitud)
          `}</Code>
        </section>
        <section>
          <h3>Reemplazo</h3>
          <Code>{`
            let mensaje = "Hola Mundo";
            mensaje.replace("Mundo", "JS"); // "Hola JS"
            // Regex global
            let texto = "abc abc abc";
            texto.replace(/abc/g, "123"); // "123 123 123"
          `}</Code>
        </section>
        <section>
          <h3>Dividir y unir</h3>
          <Code>{`
            let frase = "Hola, cómo estás";
            frase.split(" "); // ["Hola,", "cómo", "estás"]
            let palabras = ["Hola", "Mundo"];
            palabras.join("-"); // "Hola-Mundo"
          `}</Code>
        </section>
        <section>
          <h3>Espacios y trimming</h3>
          <Code>{`
            let nombre = "   Emanuel   ";
            nombre.trim();  // "Emanuel"
            nombre.trimStart(); // "Emanuel   "
            nombre.trimEnd();   // "   Emanuel"
          `}</Code>
        </section>
        <section>
          <h3>Repetir</h3>
          <Code>{`
            "Hola ".repeat(3); // "Hola Hola Hola "
          `}</Code>
        </section>
        <section>
          <h3>Conversión a array</h3>
          <Code>{`
            let chars = Array.from("Hola"); // ["H","o","l","a"]
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Template literals avanzados</h2>
        <section>
          <h3>Interpolación de variables y expresiones:</h3>
          <Code>{`
            let a = 5, b = 3;
            let resultado = \`La suma de \${a} + \${b} es \${a+b}\`; // "La suma de 5 + 3 es 8"
          `}</Code>
        </section>
        <section>
          <h3>Multilínea sin \n:</h3>
          <Code>{`
            let html = \`<div>
              <p>Hola Mundo</p>
            </div>\`;
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Escape de caracteres</h2>
        <section>
          <h3>Para caracteres especiales dentro de strings:</h3>
          <Code>{`
            let mensaje = "Hola \"Mundo\""; // comillas dentro del string
            let nuevaLinea = "Primera línea\nSegunda línea"; // salto de línea
            let tab = "Col1\tCol2"; // tabulación
          `}</Code>
        </section>
        <section>
          <h3>Caracteres Unicode:</h3>
          <Code>{`
            let corazon = "\\u2764"; // ❤️
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Conversión de tipos a string</h2>
        <section>
          <h3>Todos los valores pueden convertirse a string usando:</h3>
          <Code>{`
            String(123); // "123"
            (123).toString(); // "123"
            true.toString(); // "true"
          `}</Code> 
        </section>
      </section>
      <section>
        <h2>Comparación de strings</h2>
        <section>
          <h3>Los strings se comparan lexicográficamente según el valor Unicode:</h3>
          <Code>{`
            console.log("a" < "b"); // true
            console.log("Z" < "a"); // true, porque Z=90 y a=97 en Unicode
          `}</Code>
        </section>
        <section>
          <h3>Diferencia entre == y ===:</h3>
          <Code>{`
            "5" == 5;  // true (conversión implícita)
            "5" === 5; // false (tipo diferente)
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Buenas prácticas</h2>
        <ul>
          <li>Usar template literals para concatenación, evita errores con +.</li>
          <li>Evitar modificar strings directamente; usar métodos que retornen un nuevo string.</li>
          <li>Limpiar espacios con trim() antes de comparaciones.</li>
          <li>Usar includes, startsWith, endsWith en lugar de indexOf cuando sea posible.</li>
        </ul>
      </section>
      <section>
        <h2>Errores comunes</h2>
        <section>
          <h3>Intentar modificar un carácter directamente:</h3>
          <Code>{`
            let s = "Hola";
            s[0] = "J"; // NO funciona
          `}</Code>
        </section>
        <section>
          <h3>Comparar strings con mayúsculas/minúsculas sin normalizar:</h3>
          <Code>{`
            "hola" === "Hola"; // false
          `}</Code>
        </section>
        <section>
          <h3>Olvidar escapar caracteres especiales (", ', \n, \t).</h3>
        </section>
      </section>
      <section>
        <h2>Resumen de métodos importantes</h2>
        <table>
          <thead>
            <tr>
              <th>Método</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>length</td>
              <td>Longitud del string</td>
            </tr>
            <tr>
              <td>toUpperCase()	</td>
              <td>Convierte a mayúsculas</td>
            </tr>
            <tr>
              <td>toLowerCase()	</td>
              <td>Convierte a minúsculas</td>
            </tr>
            <tr>
              <td>indexOf()</td>
              <td>Índice de primera aparición</td>
            </tr>
            <tr>
              <td>lastIndexOf()</td>
              <td>Índice de última aparición</td>
            </tr>
            <tr>
              <td>includes()</td>
              <td>True si contiene</td>
            </tr>
            <tr>
              <td>startsWith()</td>
              <td>True si empieza</td>
            </tr>
            <tr>
              <td>endsWith()</td>
              <td>True si termina</td>
            </tr>
            <tr>
              <td>slice()</td>
              <td>Extrae parte del string</td>
            </tr>
            <tr>
              <td>substring()</td>
              <td>Similar a slice</td>
            </tr>
            <tr>
              <td>substr()</td>
              <td>Extrae con longitud</td>
            </tr>
            <tr>
              <td>replace()</td>
              <td>Reemplaza texto</td>
            </tr>
            <tr>
              <td>split()</td>
              <td>Convierte a array por separador</td>
            </tr>
            <tr>
              <td>join()</td>
              <td>Une elementos de array en string</td>
            </tr>
            <tr>
              <td>trim()</td>
              <td>Elimina espacios inicio/final</td>
            </tr>
            <tr>
              <td>repeat()</td>
              <td>Repite el string</td>
            </tr>
            <tr>
              <td>charAt()</td>
              <td>Devuelve carácter por índice</td>
            </tr>
            <tr>
              <td>charCodeAt()</td>
              <td>Código Unicode del carácter</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  )
}