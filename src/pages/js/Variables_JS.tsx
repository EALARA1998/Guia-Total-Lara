import Code from "../../components/Code";

export default function Variables_JS() {
  return (
    <>
      <h1>Variables y Constantes</h1>
      <section>
        <h2>Qué son</h2>
        <p>En JavaScript, variables y constantes son contenedores para almacenar datos en memoria que podemos usar y manipular durante la ejecución del programa.</p>
        <ul>
          <li>Variable: un contenedor cuyo valor puede cambiar.</li>
          <li>Constante: un contenedor cuyo valor no puede cambiar una vez asignado.</li>
        </ul>
      </section>
      <section>
        <h2>Declaración</h2>
        <p>JavaScript tiene tres formas principales de declarar:</p>
        <section>
          <h3>var</h3>
          <Code>{`
            var edad = 25;
          `}</Code>
          <ul>
            <li>Ámbito (scope): global o de función.</li>
            <li>Hoisting: sí, se “eleva” al inicio de su contexto.</li>
            <li>Problema: puede provocar errores al sobreescribir valores involuntariamente.</li>
          </ul>
        </section>
        <section>
          <h3>let</h3>
          <Code>{`
            let nombre = "Emanuel";
          `}</Code>
          <ul>
            <li>Ámbito: de bloque { }.</li>
            <li>Hoisting: sí, pero no inicializado hasta la línea de declaración (temporal dead zone).</li>
            <li>Ventaja: evita errores de sobrescritura accidental.</li>
          </ul>
        </section>
        <section>
          <h3>const</h3>
          <Code>{`
            const PI = 3.1416;
          `}</Code>
          <ul>
            <li>Ámbito: de bloque { }.</li>
            <li>Hoisting: igual que let.</li>
            <li>Importante: su valor no puede reasignarse, pero si es un objeto o array, sus propiedades o elementos sí pueden cambiar.</li>
          </ul>
          <Code>{`
            const persona = { nombre: "Ana" };
            persona.nombre = "Luis"; // válido
            persona = { nombre: "Carlos" }; // ERROR
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Reglas para nombres de variables</h2>
        <ul>
          <li>No puede comenzar con un número.</li>
          <li>Puede contener letras, números, $ y _.</li>
          <li>Sensible a mayúsculas y minúsculas (edad ≠ Edad).</li>
          <li>No usar palabras reservadas de JS (var, for, if, etc.).</li>
        </ul>
      </section>
      <section>
        <h2>Tipos de valores que pueden almacenar</h2>
        <section>
          <h3>Primitivos:</h3>
          <p>Los tipos primitivos son los más simples; representan un solo valor y son inmutables, es decir, no se pueden cambiar una vez creados. Se almacenan directamente en la pila (stack) de memoria, lo que los hace muy rápidos de acceder.</p>
          <section>
            <h4>Caracteristicas</h4>
            <ul>
              <li>Se comparan por valor.</li>
              <li>Inmutables (cualquier operación produce un nuevo valor).</li>
              <li>Se almacenan directamente en la pila.</li>
            </ul>
          </section>
          <section>
            <h4>Regla</h4>
            <p>Si al copiar la variable, el cambio no afecta la original → primitivo.</p>
          </section>
          <section>
            <h4>Tipos</h4>
            <ul>
              <li>Number → enteros o decimales (10, 3.14)</li>
              <li>String → texto ("Hola Mundo")</li>
              <li>Boolean → verdadero o falso (true, false)</li>
              <li>Null → ausencia intencional de valor (null)</li>
              <li>Undefined → valor no asignado (let x;)</li>
              <li>Symbol → valor único e inmutable (Symbol("id"))</li>
              <li>BigInt → enteros grandes (123n)</li>
            </ul>
          </section>
        </section>
        <section>
          <h3>No primitivos. / Referencia</h3>
          <p>Los tipos no primitivos incluyen objetos, arrays, funciones, etc. No almacenan el valor directamente, sino una referencia en memoria (una dirección en el heap).</p>
          <section>
            <h4>Caracteristicas</h4>
            <ul>
              <li>Se comparan por referencia, no por valor.</li>
              <li>Son mutables; puedes cambiar sus propiedades sin crear un nuevo objeto.</li>
              <li>Se almacenan en el heap, y la variable guarda un puntero al objeto.</li>
            </ul>
          </section>
          <section>
            <h4>Regla</h4>
            <p>Si al copiar la variable, el cambio afecta la original → no primitivo.</p>
          </section>
          <section>
            <h4>Tipos</h4>
            <ul>
              <li>Object → objetos con propiedades</li>
              <li>Array → listas ordenadas</li>
              <li>Function → funciones</li>
              <li>Date, Map, Set, RegExp etc.</li>
            </ul>
          </section>
        </section>
      </section>
      <section>
        <h2>Asignación y re-declaración</h2>
        <ul>
          <li>var permite re-declarar y reasignar.</li>
          <li>let permite reasignar pero no re-declarar en el mismo bloque.</li>
          <li>const no permite re-declarar ni reasignar.</li>
        </ul>
      </section>
      <section>
        <h2>Buenas prácticas</h2>
        <ul>
          <li>Usa let y const en lugar de var.</li>
          <li>Prefiere const por defecto; solo usa let si necesitas cambiar el valor.</li>
          <li>Nombres descriptivos, camelCase (miVariable, totalPrecio).</li>
          <li>Evita variables globales innecesarias (contaminan el entorno).</li>
        </ul>
      </section>
      <section>
        <h2>Ejemplos prácticos</h2>
        <Code>{`
          // Variables
          let edad = 30;
          edad = 31; // válido

          // Constantes
          const PI = 3.1416;
          // PI = 3.14; // ERROR

          // Objetos y arrays con const
          const colores = ["rojo", "verde"];
          colores.push("azul"); // válido
          // colores = ["amarillo"]; // ERROR

          // Scope de bloque
          if(true){
              let bloque = "solo existe aquí";
              var globalVar = "existe fuera también";
          }
          console.log(globalVar); // válido
          // console.log(bloque); // ERROR
        `}</Code>
      </section>
      <section>
        <h2>Hoisting y temporal dead zone</h2>
        <ul>
          <li>var se eleva y se inicializa como undefined.</li>
          <li>let y const se elevan pero no se inicializan hasta que se ejecuta la línea, generando error si se accede antes.</li>
        </ul>
        <Code>{`
          console.log(a); // undefined
          var a = 10;

          console.log(b); // ERROR
          let b = 20;
        `}</Code>
      </section>
      <section>
        <h2>Resumen clave</h2>
        <table>
          <thead>
            <tr>
              <th>Concepto</th>
              <th>let</th>
              <th>const</th>
              <th>var</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Reasignable</td>
              <td>Sí</td>
              <td>No</td>
              <td>Sí</td>
            </tr>
            <tr>
              <td>Redeclarable</td>
              <td>No</td>
              <td>No</td>
              <td>Sí</td>
            </tr>
            <tr>
              <td>Scope</td>
              <td>Bloque</td>
              <td>Bloque</td>
              <td>Función/Global</td>
            </tr>
            <tr>
              <td>Hoisting</td>
              <td>Sí (TDZ)</td>
              <td>Sí (TDZ)</td>
              <td>Sí (inicializado)</td>
            </tr>
            <tr>
              <td>Uso recomendado</td>
              <td>Cuando cambia</td>
              <td>Por defecto</td>
              <td>Evitar</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  )
}