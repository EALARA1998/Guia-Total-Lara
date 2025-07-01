import Code from "../../components/Code";

export default function Functions_JS() {
  return (
    <>
      <h1>Funciones</h1>
      <section>
        <h2>¿Qué es una función?</h2>
        <p>Una función es un bloque de código que se puede reutilizar. Se puede ejecutar (“invocar”) cuando lo necesites.</p>
        <Code>{`
          function saludar() {
            console.log("Hola!");
          }

          saludar(); // "Hola!"
        `}</Code>
      </section>
      <section>
        <h2>Declaración de funciones</h2>
        <section>
          <h3>Declaración tradicional (function declaration)</h3>
          <Code>{`
            function suma(a, b) {
              return a + b;
            }
          `}</Code>
          <p>Se puede llamar antes de su definición gracias al hoisting.</p>
        </section>
        <section>
          <h3>Expresión de función (function expression)</h3>
          <Code>{`
            const suma = function(a, b) {
              return a + b;
            };
          `}</Code>
          <p>Se guarda en una variable, por lo tanto no se puede invocar antes de su definición.</p>
        </section>
        <section>
          <h3>Funciones flecha (arrow functions - ES6)</h3>
          <Code>{`
            const suma = (a, b) => a + b;
          `}</Code>
          <ul>
            <li>
              <p>Sintaxis corta</p>
            </li>
            <li>
              <p>No tiene su propio this ni arguments</p>
            </li>
            <li>
              <p>Ideal para funciones pequeñas</p>
            </li>
          </ul>
          <p>⚠️ Si usas llaves {} debes usar return explícito:</p>
          <Code>{`
            const saludar = () => {
              console.log("Hola!");
            };
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Parámetros y argumentos</h2>
        <Code>{`
          function saludar(nombre) {
            console.log("Hola, " + nombre);
          }

          saludar("Emanuel"); // "Hola, Emanuel"
        `}</Code>
        <p>Puedes tener valores por defecto:</p>
        <Code>{`
          function saludar(nombre = "Invitado") {
            console.log("Hola, " + nombre);
          }
        `}</Code>
      </section>
      <section>
        <h2>Parámetros rest (...)</h2>
        <p>Agrupa múltiples argumentos en un array:</p>
        <Code>{`
          function sumar(...numeros) {
            return numeros.reduce((acc, n) => acc + n, 0);
          }

          sumar(1, 2, 3); // 6
        `}</Code>
      </section>
      <section>
        <h2>Funciones como valores (First-class citizens)</h2>
        <p>En JS, las funciones son ciudadanos de primera clase:</p>
        <ul>
          <li>
            <p>Se pueden asignar a variables</p>
          </li>
          <li>
            <p>Pasar como argumentos</p>
          </li>
          <li>
            <p>Retornar desde otras funciones</p>
          </li>
        </ul>
        <Code>{`
          function ejecutar(fn) {
            fn();
          }

          ejecutar(() => console.log("¡Ejecutado!"));
        `}</Code>
      </section>
      <section>
        <h2>Funciones anidadas</h2>
        <p>Puedes definir funciones dentro de otras funciones:</p>
        <Code>{`
          function padre() {
            function hijo() {
              console.log("Soy el hijo");
            }
            hijo();
          }
        `}</Code>
      </section>
      <section>
        <h2>Funciones que retornan funciones (Closures)</h2>
        <Code>{`
          function saludar(nombre) {
            return function() {
              console.log("Hola " + nombre);
            };
          }

          const saludo = saludar("Emanuel");
          saludo(); // "Hola Emanuel"
        `}</Code>
        <p>Este es un closure, y recuerda el valor de nombre aunque la función externa ya terminó.</p>
      </section>
      <section>
        <h2>Funciones IIFE (Immediately Invoked Function Expression)</h2>
        <p>Se ejecutan al instante en que se definen.</p>
        <Code>{`
          (function() {
            console.log("Soy una IIFE");
          })();
        `}</Code>
      </section>
      <section>
        <h2>Objeto arguments</h2>
        <p>Disponible en funciones normales (no en arrow functions), contiene todos los argumentos pasados:</p>
        <Code>{`
          function sumar() {
            let total = 0;
            for (let i = 0; i < arguments.length; i++) {
              total += arguments[i];
            }
            return total;
          }

          sumar(1, 2, 3); // 6
        `}</Code>
      </section>
      <section>
        <h2>Diferencia entre funciones normales y arrow functions</h2>
        <table>
          <thead>
            <tr>
              <th>Característica</th>
              <th>Función normal</th>
              <th>Arrow function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tiene this propio</td>
              <td>✅</td>
              <td>❌ Usa el this del entorno</td>
            </tr>
            <tr>
              <td>Tiene arguments</td>
              <td>✅</td>
              <td>❌</td>
            </tr>
            <tr>
              <td>Hoisting</td>
              <td>✅</td>
              <td>❌</td>
            </tr>
            <tr>
              <td>Sintaxis compacta</td>
              <td>❌</td>
              <td>✅</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>Funciones como métodos de objetos</h2>
        <Code>{`
          const persona = {
            nombre: "Ana",
            saludar() {
              console.log("Hola, soy " + this.nombre);
            }
          };

          persona.saludar(); // "Hola, soy Ana"
        `}</Code>
        <p>⚠️ Si usas arrow function aquí, this no funcionará correctamente.</p>
      </section>
      <section>
        <h2></h2>
        <p>Usa nombres descriptivos.</p>
        <p>Una función debe hacer una sola cosa.</p>
        <p>Usa funciones puras cuando puedas (sin efectos secundarios).</p>
        <p>Divide tareas complejas en varias funciones pequeñas.</p>
        <p>Reutiliza funciones, no copies código.</p>
      </section>
    </>
  )
}