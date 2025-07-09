import Code from "../../components/Code";

export default function Performance_JS() {
  return (
    <>
      <h1>Rendimiento</h1>
      <p>Entender el rendimiento (performance) en JavaScript es crucial para que tus scripts, páginas o aplicaciones web sean rápidas, eficientes y optimizadas para el usuario.</p>
      <section>
        <h2>¿Qué es rendimiento?</h2>
        <p>En JavaScript, el rendimiento se refiere a qué tan rápido y eficiente se ejecuta tu código en el navegador o entorno (como Node.js).</p>
        <ul>
          <li>
            <p>Velocidad de ejecución del código</p>
          </li>
          <li>
            <p>Tiempo de carga inicial</p>
          </li>
          <li>
            <p>Tiempo de respuesta a eventos del usuario</p>
          </li>
          <li>
            <p>Uso de memoria</p>
          </li>
          <li>
            <p>Fluidez en animaciones/interacciones</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Cómo medir el rendimiento</h2>
        <section>
          <h3>console.time() y console.timeEnd()</h3>
          <p>Permite medir cuánto tarda una porción de código:</p>
          <Code>{`
            console.time("loop");
            for (let i = 0; i < 1_000_000; i++) {}
            console.timeEnd("loop"); // Imprime el tiempo en ms
          `}</Code>
        </section>
        <section>
          <h3>performance.now()</h3>
          <p>Mayor precisión (milisegundos con decimales):</p>
          <Code>{`
            const inicio = performance.now();
            hacerAlgoPesado();
            const fin = performance.now();
            console.log(\`Tardó: \${fin - inicio}ms\`);
          `}</Code>
          <Code>{`
            const url = "https://jsonplaceholder.typicode.com/comments"
            const consultarAPI = async () => {
              try{
                const inicio = performance.now()
                const response = await fetch(url)
                if (!response.ok) {
                  throw new Error("Hubo un error...")
                }
                const data = await response.json()
                console.log(data)
                const fin = performance.now()
                console.log(\`\${fin - inicio} ms \`)
              }catch(error){
                console.log(error)
              }
            }
            consultarAPI()
          `}</Code>
        </section>
        <section>
          <h3>Herramientas del navegador</h3>
          <ul>
            <li>
              <p>Lighthouse (Chrome DevTools): Analiza tiempo de carga, interactividad, accesibilidad, etc.</p>
            </li>
            <li>
              <p>Performance panel (en DevTools): Mide FPS, render, scripting, paint, etc.</p>
            </li>
            <li>
              <p>Memory panel: Detecta fugas de memoria (memory leaks)</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Web APIs</h3>
          <ul>
            <li>
              <p>performance.mark() y performance.measure(): Marcan y miden momentos clave</p>
            </li>
            <li>
              <p>window.requestIdleCallback(): Ejecuta código cuando el navegador esté libre</p>
            </li>
          </ul>
        </section>
      </section>
      <section>
        <h2>¿Cómo mejorar el rendimiento?</h2>
        <section>
          <h3>Evitar operaciones costosas en bucles</h3>
          <p>Mueve fuera del bucle lo que no cambia:</p>
          <Code>{`
            // ❌ Ineficiente
            for (let i = 0; i < arr.length; i++) {
              if (arr.includes(valor)) { ... }
            }

            // ✅ Mejor
            const incluye = arr.includes(valor);
            for (...) {
              if (incluye) { ... }
            }
          `}</Code>
        </section>
        <section>
          <h3>Usar for clásico en arrays grandes</h3>
          <Code>{`
            // ❌ Más lento
            arr.forEach(x => { ... });

            // ✅ Más rápido
            for (let i = 0; i < arr.length; i++) {
              ...
            }
          `}</Code>
        </section>
        <section>
          <h3>Minimizar manipulación del DOM</h3>
          <p>Cada acceso o cambio al DOM es costoso.</p>
          <Code>{`
            // ❌
            for (const item of lista) {
              const li = document.createElement("li");
              li.textContent = item;
              ul.appendChild(li); // Reflow por cada uno
            }

            // ✅
            const fragment = document.createDocumentFragment();
            for (const item of lista) {
              const li = document.createElement("li");
              li.textContent = item;
              fragment.appendChild(li);
            }
            ul.appendChild(fragment); // Solo un reflow
          `}</Code>
        </section>
        <section>
          <h3>Evitar repintados (reflows) frecuentes</h3>
          <ul>
            <li>
              <p>Cambiar clases con CSS mejor que estilos en línea</p>
            </li>
            <li>
              <p>Agrupar múltiples cambios de estilo</p>
            </li>
            <li>
              <p>Evitar leer y escribir al DOM al mismo tiempo</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Memoria y uso de objetos</h3>
          <ul>
            <li>
              <p>Libera memoria (nullifica) referencias no usadas</p>
            </li>
            <li>
              <p>Evita estructuras grandes que crecen indefinidamente</p>
            </li>
            <li>
              <p>Usa WeakMap y WeakSet si necesitas colecciones sin evitar GC</p>
            </li>
          </ul>
        </section>
      </section>
      <section>
        <h2>JS y Renderizado en el navegador</h2>
        <section>
          <h3>El navegador pinta la pantalla idealmente a 60 FPS (frames por segundo)</h3>
          <ul>
            <li>
              <p>Tienes ~16.6ms por frame</p>
            </li>
            <li>
              <p>JS bloquea el render mientras se ejecuta</p>
            </li>
            <li>
              <p>Código pesado o bloqueante provoca jank (saltos, congelamientos)</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Evitar bloqueos: asincronía</h3>
          <ul>
            <li>
              <p>Usa setTimeout(), setInterval() o requestAnimationFrame() para repartir trabajo</p>
            </li>
            <li>
              <p>Usa Web Workers para tareas muy pesadas (corren en otro hilo)</p>
            </li>
            <li>
              <p>Divide tareas largas en partes pequeñas (técnica de fragmentación)</p>
            </li>
          </ul>
        </section>
      </section>
      <section>
        <h2></h2>
        <table>
          <thead>
            <tr>
              <th>Antipatrón</th>
              <th>Solución</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Operaciones pesadas en onScroll o onInput	</td>
              <td>Usa debounce</td>
            </tr>
            <tr>
              <td>Muchos setTimeout() encadenados	</td>
              <td>Usa requestAnimationFrame o async/await</td>
            </tr>
            <tr>
              <td>Cambios masivos al DOM	</td>
              <td>Usa fragmentos o frameworks reactivos</td>
            </tr>
            <tr>
              <td>Objetos crecientes sin limpiar	</td>
              <td>Usa Map, WeakMap, y limpieza manual</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>Herramientas útiles</h2>
        <ul>
          <li>
            <p>Chrome DevTools (Performance, Memory, Lighthouse)</p>
          </li>
          <li>
            <p>JSBench.me para comparar código</p>
          </li>
          <li>
            <p>WebPageTest.org</p>
          </li>
          <li>
            <p>performance.mark() y performance.measure()</p>
          </li>
        </ul>
      </section>
    </>
  )
}