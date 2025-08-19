import Code from "../../components/Code"

type Generators_Iterators_JSProps = {
  
}

export default function Generators_Iterators_JS({}:Generators_Iterators_JSProps) {
  return (
    <>
      <h1>Generators y Iterators</h1>
      <p>Los <strong>Generators</strong> son funciones especiales que pueden pausar su ejecución y reanudarla más tarde, lo que permite generar secuencias de valores bajo demanda. Internamente, un Generator devuelve un <strong>Iterator</strong>, que implementa el método <code>next()</code> para obtener valores secuencialmente. Esto resulta útil para manejar colecciones grandes, streams o flujos asíncronos de manera controlada.</p>

      <section>
        <h2>Funciones Generadoras</h2>
        <p>Se definen con <code>function*</code> y usan la palabra clave <code>yield</code> para producir valores.</p>
        <Code>{`
          function* contador() {
            yield 1;
            yield 2;
            yield 3;
          }

          const gen = contador();
          console.log(gen.next()); // { value: 1, done: false }
          console.log(gen.next()); // { value: 2, done: false }
          console.log(gen.next()); // { value: 3, done: false }
          console.log(gen.next()); // { value: undefined, done: true }
        `}</Code>
        <p>Notas: <code>next()</code> devuelve un objeto con <code>value</code> y <code>done</code>. <code>done: true</code> indica que el Generator terminó.</p>
      </section>

      <section>
        <h2>Iterators</h2>
        <p>Un Iterator es cualquier objeto que implemente <code>next()</code> con la misma firma. Los Generators devuelven un Iterator automáticamente.</p>
        <Code>{`
          const iterador = {
            i: 0,
            next() {
              if (this.i < 3) return { value: this.i++, done: false };
              else return { value: undefined, done: true };
            }
          };
          console.log(iterador.next()); // { value: 0, done: false }
        `}</Code>
        <p>La interfaz Iterator permite consumir elementos secuencialmente y es la base de los objetos iterables en JavaScript.</p>
      </section>

      <section>
        <h2>Iterables</h2>
        <p>Un objeto es <strong>iterable</strong> si tiene el método <code>[Symbol.iterator]</code> que devuelve un Iterator. Esto permite usar <code>for...of</code>, spread operator y destructuring.</p>
        <Code>{`
          const iterable = {
            *[Symbol.iterator]() {
              yield 'a';
              yield 'b';
              yield 'c';
            }
          };
          for (const v of iterable) console.log(v); // a, b, c
        `}</Code>
      </section>

      <section>
        <h2>Paso de valores al Generator</h2>
        <p>Se puede enviar información de vuelta al Generator usando <code>next(valor)</code>.</p>
        <Code>{`
          function* saludo() {
            const nombre = yield '¿Cómo te llamas?';
            yield \`Hola, \${nombre}\`;
          }
          const gen = saludo();
          console.log(gen.next()); // { value: "¿Cómo te llamas?", done: false }
          console.log(gen.next('Ana')); // { value: "Hola, Ana", done: false }
          console.log(gen.next()); // { value: undefined, done: true }
        `}</Code>
        <p>Esto permite generar valores dependientes de información externa, haciendo los Generators muy flexibles.</p>
      </section>

      <section>
        <h2>Control de flujo con Generators</h2>
        <p>Los Generators son útiles para controlar flujo de ejecución, iterar secuencias grandes y manejar procesos pausables.</p>
        <Code>{`
          function* fibonacci(n) {
            let a = 0, b = 1;
            for (let i = 0; i < n; i++) {
              yield a;
              [a, b] = [b, a + b];
            }
          }
          for (const num of fibonacci(5)) console.log(num); // 0,1,1,2,3
        `}</Code>
      </section>

      <section>
        <h2>Throw y return en Generators</h2>
        <p>Un Generator puede recibir un error usando <code>throw()</code> o terminar anticipadamente con <code>return()</code>.</p>
        <Code>{`
          function* g() {
            try {
              yield 1;
              yield 2;
            } catch(e) {
              console.log('Error capturado:', e);
            }
          }
          const gen = g();
          console.log(gen.next()); // { value:1, done:false }
          gen.throw('Oops'); // Error capturado: Oops
        `}</Code>
        <p>El método <code>return(valor)</code> permite terminar la secuencia y establecer un valor final:</p>
        <Code>{`
          function* g2() {
            yield 1;
            yield 2;
          }
          const gen2 = g2();
          console.log(gen2.next()); // 1
          console.log(gen2.return('fin')); // { value: "fin", done: true }
        `}</Code>
      </section>

      <section>
        <h2>Generators asíncronos</h2>
        <p>Con <code>async function*</code> podemos crear Generators que producen Promises, útiles para streams de datos asíncronos.</p>
        <Code>{`
          async function* asyncGen() {
            const data = [1,2,3];
            for (const d of data) {
              await new Promise(r => setTimeout(r, 500));
              yield d;
            }
          }
          (async () => {
            for await (const val of asyncGen()) console.log(val);
          })();
        `}</Code>
        <p>El bucle <code>for await...of</code> permite iterar sobre Promises generadas por el Generator de manera secuencial y limpia.</p>
      </section>

      <section>
        <h2>Aplicaciones prácticas de Generators</h2>
        <ul>
          <li>Generar secuencias infinitas bajo demanda (p. ej., números aleatorios, Fibonacci).</li>
          <li>Controlar flujo de ejecución en librerías o frameworks.</li>
          <li>Implementar iterables personalizados.</li>
          <li>Streams de datos o consumo perezoso de colecciones grandes.</li>
          <li>Integración con async/await para tareas asíncronas secuenciales.</li>
        </ul>
      </section>

      <section>
        <h2>Ventajas y consideraciones</h2>
        <ul>
          <li>Permiten escribir código pausable y secuencial sin callbacks anidados.</li>
          <li>Consumir secuencias bajo demanda evita generar grandes estructuras en memoria.</li>
          <li>Se integran con iterables nativos, <code>for...of</code>, spread operator y destructuring.</li>
          <li>El manejo de errores con <code>throw</code> y finalización con <code>return</code> da un control fino del flujo.</li>
          <li>Los Generators asíncronos son muy útiles para streams y APIs que devuelven Promises.</li>
        </ul>
      </section>

      <section>
        <h2>Resumen</h2>
        <p>Los Generators y Iterators son herramientas poderosas para manejar secuencias, flujos y datos bajo demanda. Combinados con Async/Await permiten escribir código asíncrono limpio y eficiente. Entender la interacción entre <code>yield</code>, <code>next()</code>, <code>throw</code> y <code>return</code> es clave para dominar estas técnicas avanzadas de JavaScript.</p>
      </section>
    </>
  )
}