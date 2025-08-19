import Code from "../../components/Code"

type Timers_Event_Loops_JSProps = {
  
}

export default function Timers_Event_Loops_JS({}:Timers_Event_Loops_JSProps) {
  return (
    <>
      <h1>JavaScript — Timers y Event Loop</h1>
      <p>Los timers y el Event Loop son conceptos centrales para comprender cómo JavaScript maneja la asincronía y la ejecución de código. Aunque JavaScript es single-threaded, puede manejar múltiples operaciones asíncronas gracias al Event Loop, la cola de tareas y los timers (temporizadores).</p>

      <section>
        <h2>Timers en JavaScript</h2>
        <p>Los timers permiten ejecutar código después de cierto tiempo o de manera repetitiva.</p>

        <section>
          <h3>setTimeout</h3>
          <p>Ejecuta una función una sola vez después de un retraso especificado en milisegundos.</p>
          <Code>{`
            setTimeout(() => {
              console.log('Esto se ejecuta después de 2 segundos');
            }, 2000);
          `}</Code>
          <p>Retorna un identificador que permite cancelar el timer con <code>clearTimeout(id)</code>.</p>
        </section>

        <section>
          <h3>setInterval</h3>
          <p>Ejecuta una función repetidamente cada intervalo de tiempo definido en milisegundos.</p>
          <Code>{`
            const id = setInterval(() => {
              console.log('Esto se repite cada 1 segundo');
            }, 1000);

            // Para detenerlo después de 5 segundos
            setTimeout(() => clearInterval(id), 5000);
          `}</Code>
        </section>

        <section>
          <h3>clearTimeout y clearInterval</h3>
          <p>Permiten cancelar un timer iniciado con <code>setTimeout</code> o <code>setInterval</code>.</p>
          <Code>{`
            const timeoutId = setTimeout(() => console.log('Nunca se ejecuta'), 1000);
            clearTimeout(timeoutId);

            const intervalId = setInterval(() => console.log('No se verá'), 1000);
            clearInterval(intervalId);
          `}</Code>
        </section>

        <section>
          <h3>setImmediate y nextTick (Node.js)</h3>
          <p>En Node.js existen métodos adicionales:</p>
          <ul>
            <li><code>setImmediate(callback)</code>: ejecuta <code>callback</code> después de que el event loop haya completado la fase de I/O.</li>
            <li><code>process.nextTick(callback)</code>: ejecuta <code>callback</code> antes de continuar con el event loop, útil para microtasks.</li>
          </ul>
        </section>
      </section>

      <section>
        <h2>Event Loop</h2>
        <p>El Event Loop es un mecanismo que permite a JavaScript manejar operaciones asíncronas mientras sigue siendo single-threaded. Controla cuándo se ejecutan callbacks y promesas en relación con el código síncrono.</p>

        <section>
          <h3>Call Stack (Pila de llamadas)</h3>
          <p>Es donde se ejecuta el código actual. Las funciones se apilan en la pila y se desapilan al terminar.</p>
          <Code>{`
            function a() { console.log('A'); }
            function b() { console.log('B'); a(); }
            b(); // Call stack: b -> a
          `}</Code>
        </section>

        <section>
          <h3>Task Queue (Cola de tareas)</h3>
          <p>Contiene callbacks de operaciones asíncronas (setTimeout, setInterval, I/O). Cuando la pila está vacía, el event loop toma la primera tarea de la cola y la ejecuta.</p>
          <Code>{`
            console.log('Inicio');
            setTimeout(() => console.log('Timeout'), 0);
            console.log('Fin');
            // Resultado: 'Inicio', 'Fin', 'Timeout'
          `}</Code>
          <p>Aunque el timeout es 0ms, se ejecuta después porque primero se vacía la pila.</p>
        </section>

        <section>
          <h3>Microtasks</h3>
          <p>Cola de tareas con prioridad sobre la cola de tareas normal, utilizada por Promises y MutationObserver.</p>
          <Code>{`
            console.log('Inicio');

            Promise.resolve().then(() => console.log('Promise 1'));
            Promise.resolve().then(() => console.log('Promise 2'));

            setTimeout(() => console.log('Timeout'), 0);

            console.log('Fin');
            // Orden: Inicio, Fin, Promise 1, Promise 2, Timeout
          `}</Code>
        </section>

        <section>
          <h3>Fases del Event Loop (Node.js)</h3>
          <p>En Node.js, el event loop tiene fases: timers, I/O callbacks, idle, poll, check (setImmediate), close callbacks y microtasks (promises, process.nextTick).</p>
          <p>Esto permite manejar múltiples tipos de tareas de manera eficiente sin bloquear la ejecución.</p>
        </section>

        <section>
          <h3>Prioridad entre tasks y microtasks</h3>
          <p>Las microtasks se ejecutan antes de la siguiente tarea de la cola de tareas, incluso si hay timers pendientes.</p>
          <Code>{`
            setTimeout(() => console.log('Timeout'), 0);
            Promise.resolve().then(() => console.log('Promise'));
            // Resultado: 'Promise' primero, luego 'Timeout'
          `}</Code>
        </section>

        <section>
          <h3>Timers y Event Loop en el navegador vs Node.js</h3>
          <p>En navegadores, las fases principales son macrotasks (setTimeout, setInterval) y microtasks (promises, MutationObserver). Node.js tiene más fases y procesos internos (I/O, check, close), pero el principio de microtasks primero sigue siendo el mismo.</p>
        </section>
      </section>

      <section>
        <h2>Errores y trampas comunes</h2>
        <ul>
          <li>Confundir el orden de ejecución de <code>setTimeout</code> y promesas; las promesas siempre tienen prioridad en microtasks.</li>
          <li>Usar <code>setTimeout(fn,0)</code> no garantiza ejecución inmediata; solo pasa a la cola de tareas.</li>
          <li>Demasiados <code>setInterval</code> pueden congestionar la cola de tareas y afectar performance.</li>
          <li>No comprender la diferencia entre call stack y task queue puede generar confusión sobre cuándo se ejecuta un callback.</li>
          <li>En Node.js, <code>process.nextTick</code> puede bloquear la siguiente fase si se abusa de él.</li>
        </ul>
      </section>

      <section>
        <h2>Ejemplos prácticos</h2>
        <section>
          <h3>Simulación de retraso con Promises</h3>
          <Code>{`
            function delay(ms) {
              return new Promise(resolve => setTimeout(resolve, ms));
            }

            async function main() {
              console.log('Inicio');
              await delay(1000);
              console.log('1 segundo después');
            }

            main();
          `}</Code>
        </section>

        <section>
          <h3>Combinar setTimeout y Promises</h3>
          <Code>{`
            console.log('Inicio');

            setTimeout(() => console.log('Timeout'), 0);
            Promise.resolve().then(() => console.log('Promise'));

            console.log('Fin');
            // Resultado: Inicio, Fin, Promise, Timeout
          `}</Code>
        </section>

        <section>
          <h3>setInterval con cancelación</h3>
          <Code>{`
            let count = 0;
            const id = setInterval(() => {
              console.log(count);
              count++;
              if(count > 3) clearInterval(id);
            }, 500);
          `}</Code>
        </section>

        <section>
          <h3>Event Loop visual</h3>
          <Code>{`
            console.log('Script start');

            setTimeout(() => console.log('setTimeout'), 0);

            Promise.resolve().then(() => console.log('Promise 1'))
                          .then(() => console.log('Promise 2'));

            console.log('Script end');
            // Resultado: Script start, Script end, Promise 1, Promise 2, setTimeout
          `}</Code>
        </section>
      </section>

      <section>
        <h2>Conclusión</h2>
        <p>Comprender timers y event loop es esencial para escribir código asíncrono eficiente y predecible en JavaScript. Saber cómo funcionan la call stack, la task queue, las microtasks y la interacción con setTimeout/setInterval permite evitar errores comunes, mejorar la performance y entender el comportamiento de promesas y async/await en distintos entornos.</p>
      </section>
    </>
  )
}