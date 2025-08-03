import Code from "../../components/Code";

export default function Variables_JS() {
  return (
    <>
      <h1>Variables</h1>
      <section>
        <h2>¿Qué es una variable en JavaScript?</h2>
        <p>Una variable es un contenedor para almacenar datos que pueden cambiar durante la ejecución del programa. Por ejemplo:</p>
        <Code>{`
          let nombre = "Emanuel";
        `}</Code>
      </section>
      <section>
        <h2>Tipos de declaraciones: var, let y const</h2>
        <section>
          <h3>✅ let (recomendado para variables mutables)</h3>
          <ul>
            <li>
              <p>Se introdujo en ES6 (2015).</p>
            </li>
            <li>
              <p>Alcance de bloque (block scope).</p>
            </li>
            <li>
              <p>Se puede reasignar.</p>
            </li>
          </ul>
          <Code>{`
            let edad = 25;
            edad = 26; // válido
          `}</Code>
        </section>
        <section>
          <h3>✅ const (recomendado para constantes)</h3>
          <ul>
            <li>
              <p>También de ES6 (2015).</p>
            </li>
            <li>
              <p>Alcance de bloque.</p>
            </li>
            <li>
              <p>No se puede reasignar.</p>
            </li>
          </ul>
          <Code>{`
            const PI = 3.1416;
            // PI = 4; ❌ Error
          `}</Code>
          <p>⚠️ Pero los objetos y arrays con const pueden modificarse internamente:</p>
          <Code>{`
            const persona = { nombre: "Ana" };
            persona.nombre = "Luisa"; // ✅ permitido
          `}</Code>
        </section>
        <section>
          <h3>🚫 var (forma antigua, NO recomendado)</h3>
          <ul>
            <li>
              <p>Alcance de función (function scope).</p>
            </li>
            <li>
              <p>Puede ser redefinido y reasignado, lo cual puede causar errores.</p>
            </li>
          </ul>
          <Code>{`
            var mensaje = "Hola";
            var mensaje = "Hola de nuevo"; // permitido
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Ámbitos o "scopes"</h2>
        <section>
          <h3>Global: Declarada fuera de funciones.</h3>
          <Code>{`
            let x = 10;
          `}</Code>
        </section>
        <section>
          <h3>Local (de bloque): Usando let o const dentro de {}.</h3>
          <Code>{`
            if (true) {
              let y = 5;
              // y solo vive dentro del bloque
            }
          `}</Code>
        </section>
        <section>
          <h3>De función: Especialmente con var.</h3>
          <Code>{`
            function saludo() {
              var mensaje = "Hola";
            }
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Hoisting (elevación)</h2>
        <p>JavaScript mueve las declaraciones al inicio del contexto:</p>
        <ul>
          <li>
            <p>var se "eleva" pero su valor es undefined hasta que se asigna.</p>
          </li>
          <li>
            <p>let y const también se elevan, pero no se pueden usar antes de declararse (causa error).</p>
          </li>
        </ul>
        <Code>{`
          console.log(x); // undefined
          var x = 5;

          console.log(y); // ❌ ReferenceError
          let y = 10;
        `}</Code>
      </section>
      <section>
        <h2>Nombres válidos para variables</h2>
        <ul>
          <li>
            <p>Deben comenzar con letra, $ o _.</p>
          </li>
          <li>
            <p>No pueden comenzar con números.</p>
          </li>
          <li>
            <p>No usar palabras reservadas (for, let, function, etc.).</p>
          </li>
        </ul>
        <Code>{`
          let _nombre;
          let $cantidad;
          let edad1;
        `}</Code>
      </section>
      <section>
        <h2>Tipado dinámico</h2>
        <p>JavaScript es un lenguaje de tipado dinámico, lo que significa que una variable puede cambiar de tipo en tiempo de ejecución:</p>
        <Code>{`
          let valor = 10;
          valor = "Ahora soy un string"; // válido
        `}</Code>
      </section>
      <section>
        <h2>Declarar múltiples variables</h2>
        <p>Puedes declarar varias en una línea:</p>
        <Code>{`
          let a = 1, b = 2, c = 3;
        `}</Code>
      </section>
      <section>
        <h2>Buenas prácticas</h2>
        <ul>
          <li>
            <p>✅ Usa const por defecto, y let solo si necesitas reasignar.</p>
          </li>
          <li>
            <p>❌ Evita usar var.</p>
          </li>
          <li>
            <p>✅ Usa nombres descriptivos.</p>
          </li>
          <li>
            <p>✅ Declara variables al inicio de bloques o funciones.</p>
          </li>
          <li>
            <p>✅ Prefiere una variable por línea para claridad.</p>
          </li>
        </ul>
      </section>
    </>
  )
}