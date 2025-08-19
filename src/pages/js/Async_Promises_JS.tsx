import Code from "../../components/Code";

export default function Asinc_Promises_JS() {
  return (
    <>
      <h1>Promises y Async/Await</h1>
      <p>Las <strong>Promises</strong> y <strong>Async/Await</strong> son la manera moderna de manejar operaciones asíncronas en JavaScript. Permiten escribir código que se ejecuta de manera no bloqueante sin caer en el clásico “callback hell”. Una Promise representa un valor que puede estar disponible ahora, en el futuro, o nunca (por error).</p>

      <section>
        <h2>Estado de una Promise</h2>
        <p>Una Promise puede estar en uno de tres estados:</p>
        <section>
          <h3>Pending</h3>
          <p>Estado inicial. La operación aún no se ha completado ni ha fallado.</p>
        </section>
        <section>
          <h3>Fulfilled</h3>
          <p>La operación terminó correctamente y la Promise tiene un valor.</p>
        </section>
        <section>
          <h3>Rejected</h3>
          <p>La operación falló y la Promise tiene un motivo de rechazo (error).</p>
        </section>
      </section>

      <section>
        <h2>Creación de Promises</h2>
        <p>Se crea usando {`new Promise((resolve, reject) => { ... })`}. Dentro ejecutamos operaciones asíncronas y llamamos a <code>resolve(valor)</code> si todo va bien o <code>reject(error)</code> si hay fallo.</p>
        <Code>{`
          const promesa = new Promise((resolve, reject) => {
            setTimeout(() => resolve("Listo!"), 1000);
          });

          promesa.then(resultado => console.log(resultado)); // Listo! después de 1s
        `}</Code>
        <p>Notas: <code>then</code> se ejecuta cuando la Promise se cumple, <code>catch</code> cuando se rechaza.</p>
      </section>

      <section>
        <h2>Encadenamiento de Promises</h2>
        <p>Las Promises pueden encadenarse para ejecutar operaciones secuenciales:</p>
        <Code>{`
          Promise.resolve(5)
            .then(x => x * 2)
            .then(x => x + 1)
            .then(console.log); // 11
        `}</Code>
        <p>Importante: <code>then</code> siempre devuelve otra Promise, lo que permite el encadenamiento.</p>
      </section>

      <section>
        <h2>Manejo de errores</h2>
        <p>Se recomienda usar <code>catch</code> al final del encadenamiento para atrapar cualquier fallo.</p>
        <Code>{`
          Promise.reject("Algo salió mal")
            .then(x =&gt; console.log("ok"))
            .catch(err =&gt; console.error(err)); // "Algo salió mal"
        `}</Code>
        <p>También se puede encadenar <code>finally</code>, que se ejecuta siempre.</p>
      </section>

      <section>
        <h2>Métodos estáticos de Promises</h2>
        <section>
          <h3>Promise.all</h3>
          <p>Ejecuta múltiples Promises en paralelo. Solo se cumple si todas se cumplen; se rechaza si alguna falla.</p>
          <Code>{`
            Promise.all([Promise.resolve(1), Promise.resolve(2)])
              .then(results =&gt; console.log(results)); // [1,2]
          `}</Code>
        </section>
        <section>
          <h3>Promise.race</h3>
          <p>Se cumple o rechaza tan pronto como una Promise termine.</p>
          <Code>{`
            Promise.race([
              new Promise(r =&gt; setTimeout(() =&gt; r(1), 500)),
              new Promise(r =&gt; setTimeout(() =&gt; r(2), 100))
            ]).then(console.log); // 2
          `}</Code>
        </section>
        <section>
          <h3>Promise.allSettled</h3>
          <p>Espera a que todas las Promises terminen, sin importar si se cumplen o fallan. Devuelve un array con estado y valor/motivo.</p>
          <Code>{`
            Promise.allSettled([Promise.resolve(1), Promise.reject("error")])
              .then(console.log);
            // [{status:"fulfilled", value:1}, {status:"rejected", reason:"error"}]
          `}</Code>
        </section>
        <section>
          <h3>Promise.any</h3>
          <p>Se cumple cuando la primera Promise se cumple; ignora las rechazadas. Si todas fallan, se rechaza con <code>AggregateError</code>.</p>
          <Code>{`
            Promise.any([Promise.reject("fail"), Promise.resolve(42)])
              .then(console.log); // 42
          `}</Code>
        </section>
      </section>

      <section>
        <h2>Async/Await</h2>
        <p>Permite escribir código asíncrono de forma sincrónica. Una función declarada con <code>async</code> devuelve siempre una Promise. <code>await</code> espera a que una Promise se cumpla o se rechace.</p>
        <Code>{`
          async function ejemplo() {
            const valor = await Promise.resolve(10);
            console.log(valor); // 10
          }
          ejemplo();
        `}</Code>
      </section>

      <section>
        <h2>Manejo de errores con Async/Await</h2>
        <p>Se recomienda usar <code>try/catch</code> dentro de funciones async.</p>
        <Code>{`
          async function test() {
            try {
              const result = await Promise.reject("fallo");
            } catch(e) {
              console.error("Error capturado:", e);
            }
          }
          test(); // Error capturado: fallo
        `}</Code>
      </section>

      <section>
        <h2>Operaciones en paralelo con Async/Await</h2>
        <p>Para ejecutar múltiples Promises en paralelo, se recomienda combinar <code>Promise.all</code> con await:</p>
        <Code>{`
          async function paralelo() {
            const [a,b] = await Promise.all([
              fetch("/url1"),
              fetch("/url2")
            ]);
            console.log(a,b);
          }
        `}</Code>
        <p>Esto evita la ejecución secuencial innecesaria que ocurre si usas varios <code>await</code> consecutivos.</p>
      </section>

      <section>
        <h2>Callbacks a Promises</h2>
        <p>Muchas APIs antiguas usan callbacks. Se pueden “promisificar”:</p>
        <Code>{`
          const fs = require('fs');
          const readFile = (path) => new Promise((resolve, reject) => {
            fs.readFile(path, "utf8", (err, data) => err ? reject(err) : resolve(data));
          });
        `}</Code>
      </section>

      <section>
        <h2>Comparación: Callbacks vs Promises vs Async/Await</h2>
        <p>- Callbacks: más verboso, riesgo de “callback hell”.</p>
        <p>- Promises: encadenables, control de errores más claro, manejables con métodos estáticos.</p>
        <p>- Async/Await: sintaxis limpia, fácil de leer, mantiene ventajas de Promises.</p>
      </section>

      <section>
        <h2>Microtasks y ejecución</h2>
        <p>Promises usan el “microtask queue”, lo que significa que se ejecutan después del código síncrono pero antes de setTimeout/interval. Esto puede causar que algunas cosas se ejecuten antes de lo que se espera si no se comprende la cola de eventos.</p>
      </section>

      <section>
        <h2>Cancelación de Promises</h2>
        <p>No existe un método nativo para cancelar Promises, pero se puede usar <code>AbortController</code> o patrones de bandera para ignorar el resultado.</p>
        <Code>{`
          const controller = new AbortController();
          fetch("/url", { signal: controller.signal });
          // luego
          controller.abort(); // cancela
        `}</Code>
      </section>

      <section>
        <h2>Buenas prácticas</h2>
        <ul>
          <li>Siempre manejar errores con <code>catch</code> o <code>try/catch</code>.</li>
          <li>Usar <code>Promise.all</code> para paralelizar tareas cuando sea posible.</li>
          <li>No mezclar callbacks y Promises innecesariamente.</li>
          <li>Evitar anidar múltiples then() complejos; prefiera async/await para secuencias largas.</li>
          <li>Recordar que await bloquea solo dentro de la función async, no todo el hilo.</li>
          <li>Ser consciente del microtask queue para evitar comportamientos inesperados.</li>
        </ul>
      </section>

      <section>
        <h2>Resumen</h2>
        <p>Las Promises son la base del código asíncrono moderno en JavaScript. Async/Await permite escribir código limpio y fácil de leer. Entender el encadenamiento, manejo de errores, paralelismo y los métodos estáticos es fundamental para desarrollar aplicaciones robustas y eficientes.</p>
      </section>
    </>
  )
}