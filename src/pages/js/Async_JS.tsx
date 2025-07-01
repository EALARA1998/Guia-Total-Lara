import Code from "../../components/Code";

export default function Asinc_JS() {
  return (
    <>
      <h1>Programacion asincrona</h1>
      <section>
        <h2>¿Qué es la programación asincrónica?</h2>
        <p>En términos simples, es una forma de ejecutar código sin detener el flujo principal (sin bloquear).</p>
        <p>Mientras una tarea "larga" se completa, JavaScript puede seguir ejecutando otras cosas.</p>
        <p>Ejemplo de tareas comunes asincrónicas:</p>
        <ul>
          <li>
            <p>Peticiones HTTP (APIs)</p>
          </li>
          <li>
            <p>Acceso a bases de datos</p>
          </li>
          <li>
            <p>Lectura de archivos</p>
          </li>
          <li>
            <p>Temporizadores (setTimeout)</p>
          </li>
          <li>
            <p>Eventos del navegador (click, input, etc.)</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>JavaScript es single-threaded</h2>
        <p>Esto significa que solo ejecuta una cosa a la vez. Para poder hacer varias tareas sin bloquear la ejecución, utiliza:</p>
        <ul>
          <li>
            <p>El event loop (bucle de eventos).</p>
          </li>
          <li>
            <p>La cola de tareas (task queue).</p>
          </li>
          <li>
            <p>Y mecanismos como callbacks, promesas y async/await.</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Formas de manejar código asincrónico</h2>
        <section>
          <h3>Callbacks (el estilo antiguo)</h3>
          <p>Una función que se pasa como argumento y se ejecuta después de una tarea asincrónica.</p>
          <Code>{`
            function leerArchivo(callback) {
              setTimeout(() => {
                callback("Contenido del archivo");
              }, 1000);
            }

            leerArchivo((contenido) => {
              console.log(contenido);
            });
          `}</Code>
          <p>Problema: puede terminar en lo que se llama "callback hell" (infierno de callbacks) si se encadenan muchos.</p>
        </section>
        <section>
          <h3>Promesas (Promises)</h3>
          <p>Una promesa es un objeto que representa un valor que puede estar disponible ahora, más tarde o nunca.</p>
          <Code>{`
            const promesa = new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve("Hecho");
              }, 1000);
            });

            promesa.then(resultado => {
              console.log(resultado); // "Hecho"
            }).catch(error => {
              console.error(error);
            });
          `}</Code>
          <ul>
            <li>
              <p>resolve() → éxito</p>
            </li>
            <li>
              <p>reject() → error</p>
            </li>
            <li>
              <p>.then() → recibe el resultado</p>
            </li>
            <li>
              <p>.catch() → captura errores</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Async/Await (la forma moderna y clara)</h3>
          <p>Es azúcar sintáctico sobre las promesas, hace que el código se vea más lineal y legible.</p>
          <Code>{`
            async function leerDatos() {
              try {
                const resultado = await promesa;
                console.log(resultado);
              } catch (error) {
                console.error(error);
              }
            }
          `}</Code>
          <p>await pausa la ejecución hasta que la promesa se resuelva o falle.</p>
        </section>
        <section>
          <h3>setTimeout y setInterval</h3>
          <Code>{`
            setTimeout(() => {
              console.log("Pasaron 2 segundos");
            }, 2000);

            setInterval(() => {
              console.log("Cada segundo...");
            }, 1000);
          `}</Code>
        </section>
        <section>
          <h3>Peticiones HTTP con fetch (retorna una promesa)</h3>
          <Code>{`
            async function obtenerDatos() {
              const respuesta = await fetch("https://api.example.com");
              const datos = await respuesta.json();
              console.log(datos);
            }
          `}</Code>
        </section>
      </section>
      <section>
        <h2>El Event Loop (explicación sencilla)</h2>
        <ul>
          <li>
            <p>JavaScript ejecuta su pila principal (call stack).</p>
          </li>
          <li>
            <p>Si encuentra una tarea asincrónica, la delega al navegador/Node.js.</p>
          </li>
          <li>
            <p>Una vez que termina, la pone en una cola (task queue).</p>
          </li>
          <li>
            <p>Cuando el stack está libre, el event loop mete la tarea de la cola al stack.</p>
          </li>
        </ul>
        <p>Este proceso permite que tu aplicación no se "congele" mientras espera algo.</p>
      </section>
      <section>
        <h2>Consejos prácticos</h2>
        <ul>
          <li>
            <p>Usa async/await siempre que puedas, es más limpio.</p>
          </li>
          <li>
            <p>Siempre maneja errores con try/catch o .catch().</p>
          </li>
          <li>
            <p>Si tienes varias promesas que pueden ejecutarse al mismo tiempo, puedes usar Promise.all():</p>
          </li>
        </ul>
        <Code>{`
          const [res1, res2] = await Promise.all([
            fetch(url1),
            fetch(url2)
          ]);
        `}</Code>
      </section>
    </>
  )
}