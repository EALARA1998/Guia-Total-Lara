import Code from "../../components/Code";

export default function Functions_JS() {
  return (
    <>
      <h1>Funciones</h1>
      <p>
        Las funciones son bloques de código reutilizables que permiten organizar, estructurar y ejecutar
        operaciones específicas. Una función recibe cero o más valores de entrada (<i>parámetros</i>),
        realiza una tarea y puede devolver un valor (<i>return</i>). Son fundamentales porque permiten
        escribir código más limpio, reutilizable y fácil de mantener.
      </p>

      <section>
        <h2>Declaración de funciones</h2>
        <p>Existen varias formas de definir funciones en JavaScript:</p>
        <section>
          <h3>Funciones declaradas</h3>
          <Code>{`
            function saludar(nombre) {
              return "Hola " + nombre;
            }
            console.log(saludar("Ana")); // Hola Ana`
          }</Code>
          <p>Se definen con la palabra clave <code>function</code>. Estas funciones se "elevan" (<b>hoisting</b>), es decir, se pueden invocar antes de ser declaradas en el código.</p>
        </section>
        <section>
          <h3>Funciones expresadas</h3>
          <Code>{`
            const despedir = function(nombre) {
              return "Adiós " + nombre;
            };
            console.log(despedir("Luis")); // Adiós Luis`}
          </Code>
          <p>Aquí la función se asigna a una variable. No tienen hoisting, por lo que deben definirse antes de usarse.</p>
        </section>
        <section>
          <h3>Funciones flecha (Arrow Functions)</h3>
          <Code>{`
            const sumar = (a, b) => a + b;
            console.log(sumar(2, 3)); // 5
          `}</Code>
          <p>Son más concisas y no crean su propio <code>this</code>, sino que heredan el del contexto donde fueron creadas. Se usan mucho en callbacks y programación funcional.</p>
        </section>
      </section>

      <section>
        <h2>Parámetros y argumentos</h2>
        <p>Los <b>parámetros</b> son las variables definidas en la función, mientras que los <b>argumentos</b> son los valores reales que se pasan al invocarla.</p>
        <section>
          <h3>Parámetros por defecto</h3>
          <Code>{`
            function saludar(nombre = "invitado") {
              return "Hola " + nombre;
            }
            console.log(saludar()); // Hola invitado
          `}</Code>
        </section>
        <section>
          <h3>Parámetros rest</h3>
          <Code>{`
            function sumar(...numeros) {
              return numeros.reduce((acc, n) => acc + n, 0);
            }
            console.log(sumar(1,2,3,4)); // 10
          `}</Code>
          <p>El operador <code>...</code> agrupa múltiples argumentos en un array.</p>
        </section>
      </section>
      <section>
        <h2>Retorno de valores</h2>
        <Code>{`
          function multiplicar(a, b) {
            return a * b;
          }
          console.log(multiplicar(4, 5)); // 20
        `}</Code>
        <p>Una función puede devolver cualquier tipo de valor: número, string, booleano, objeto, función, incluso <code>undefined</code> si no hay <code>return</code>.</p>
      </section>

      <section>
        <h2>Funciones como valores (First-Class Citizens)</h2>
        <p>En JavaScript, las funciones se tratan como cualquier otro valor: pueden guardarse en variables, pasarse como argumentos o devolverse desde otras funciones.</p>
        <Code>{`
          function operacion(a, b, callback) {
            return callback(a, b);
          }

          console.log(operacion(3, 4, (x, y) => x + y)); // 7
          console.log(operacion(3, 4, (x, y) => x * y)); // 12
        `}</Code>
      </section>

      <section>
        <h2>Ámbito (Scope) y Closures</h2>
        <p> Una función tiene acceso a las variables definidas dentro de ella y en el ámbito superior. Cuando una función interna recuerda el estado de su entorno incluso después de ejecutarse, hablamos de un <b>closure</b>.</p>
        <Code>{`
          function crearContador() {
            let contador = 0;
            return function() {
              contador++;
              return contador;
            }
          }

          const miContador = crearContador();
          console.log(miContador()); // 1
          console.log(miContador()); // 2
        `}</Code>
      </section>

      <section>
        <h2>Funciones anónimas</h2>
        <p>Son funciones sin nombre, comúnmente usadas en callbacks.</p>
        <Code>{`
          setTimeout(function() {
            console.log("Esto se ejecuta luego de 1 segundo");
          }, 1000);
        `}</Code>
      </section>

      <section>
        <h2>Funciones recursivas</h2>
        <p>Una función puede llamarse a sí misma para resolver problemas que se dividen en subproblemas más pequeños.</p>
        <Code>{`
          function factorial(n) {
            if (n === 0) return 1;
            return n * factorial(n - 1);
          }

          console.log(factorial(5)); // 120
        `}</Code>
      </section>

      <section>
        <h2>Funciones de orden superior</h2>
        <p>Son funciones que reciben otras funciones como argumento o devuelven funciones. Ejemplo típico en <code>map</code>, <code>filter</code> y <code>reduce</code>.</p>
        <Code>{`
          const numeros = [1,2,3,4,5];
          const cuadrados = numeros.map(n => n * n);
          console.log(cuadrados); // [1,4,9,16,25]
        `}</Code>
      </section>

      <section>
        <h2>Métodos especiales de funciones</h2>
        <ul>
          <li><code>func.call(thisArg, ...args)</code>: Invoca con un valor de <code>this</code> específico.</li>
          <li><code>func.apply(thisArg, argsArray)</code>: Similar a call pero los argumentos se pasan en array.</li>
          <li><code>func.bind(thisArg)</code>: Crea una nueva función con <code>this</code> fijo.</li>
        </ul>
        <Code>{`
          function saludar() {
            console.log("Hola " + this.nombre);
          }

          const persona = { nombre: "Ana" };
          saludar.call(persona); // Hola Ana

          const saludarAna = saludar.bind(persona);
          saludarAna(); // Hola Ana
        `}</Code>
      </section>

      <section>
        <h2>Funciones asíncronas</h2>
        <p>Una función puede ser declarada con <code>async</code>, y dentro de ella se pueden usar <code>await</code> para esperar promesas.</p>
        <Code>{`
          async function obtenerDatos() {
            const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const datos = await respuesta.json();
            console.log(datos);
          }

          obtenerDatos();
        `}</Code>
      </section>

      <section>
        <h2>Buenas prácticas con funciones</h2>
        <ul>
          <li>Usar nombres descriptivos que indiquen qué hace la función.</li>
          <li>No hacer funciones demasiado largas, aplicar el principio de responsabilidad única.</li>
          <li>Usar parámetros por defecto y rest en lugar de depender de <code>arguments</code>.</li>
          <li>Documentar la función si su comportamiento no es obvio.</li>
        </ul>
      </section>
    </>
  )
}