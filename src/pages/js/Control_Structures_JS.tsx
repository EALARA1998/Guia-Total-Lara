import Code from "../../components/Code";

export default function Control_Structures_JS() {
  return (
    <>
      <h1>Control Structures</h1>
      <section>
        <h2>Introducción</h2>
        <p>Las <strong>estructuras de control</strong> determinan el flujo de ejecución de tu programa: condiciones, bucles, saltos, y manejo de errores. Son la base para expresar lógica (decisiones, repeticiones, excepciones) en cualquier aplicación JavaScript.</p>
      </section>
      <section>
        <h2>Condicionales</h2>
        <section>
          <h3>If / else if / else</h3>
          <p>La forma primaria de ejecutar código según condiciones. Prefiere <em>guard clauses</em> (retornos tempranos) para reducir anidamiento.</p>
          <Code>{`
            // if - else simple
            if (x > 0) {
              console.log('positivo');
            } else if (x < 0) {
              console.log('negativo');
            } else {
              console.log('cero');
            }
            // Guard clause (evitar anidamiento profundo)

            function procesar(usuario) {
              if (!usuario) return; // sale temprano si no hay usuario
              // resto del código, sin anidar
            }`
          }</Code>
        </section>
        <section>
          <h3>Ternario (?:)</h3>
          <p>Es una forma compacta de if–else para expresiones simples. No abuses de ternarios anidados: reducen la legibilidad.</p>
          <Code>{`
            const estado = puntos > 10 ? 'avanzado' : 'inicial';
            // anidado: legible solo en casos muy simples
            const cat = score > 90 ? 'A' : score > 75 ? 'B' : 'C';
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Switch</h2>
        <p>Útil para múltiples ramas discretas. Atención al <code>fallthrough</code> (caída de un case al siguiente si no pones <code>break</code>).</p>
        <Code>{`
          switch (role) {
            case 'admin':
              permitir();
              break;
            case 'editor':
              editar();
              break;
            default:
              rechazar();
          }

          // Variante: agrupar casos
          switch (status) {
            case 1:
            case 2:
            case 3:
              handleLow();
              break;
            case 4:
              handleHigh();
              break;
          }`
        }</Code>
        <p>Alternativas comunes: usar un <code>Map</code> o un objeto {'{ key: fn }'} para dispatch dinámico, especialmente cuando las acciones son funciones.</p>
        <Code>{`
          const actions = {
            admin: permitir,
            editor: editar,
            guest: rechazar
          };
          (actions[role] || defaultHandler)();
        `}</Code>
      </section>
      <section>
        <h2>Bucle for (clásico)</h2>
        <p>Bucle clásico para cuando necesitas controlar índice y condiciones precisas.</p>
        <Code>{`
          for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            // trabajo con item
          }
          // Consejo: cachea arr.length en loops muy apretados si es crítico para rendimiento
        `}</Code>
      </section>
      <section>
        <h2>for...of (ES6) — recorrido de iterables</h2>
        <p>Ideal para arrays, strings, Map, Set u otros iterables. Respetuoso con el orden de los elementos y simple de leer.</p>
        <Code>{`
          const nums = [10, 20, 30];
          for (const n of nums) {
            console.log(n);
          }

          // Útil con destructuring
          const pairs = [[1,'a'], [2,'b']];
          for (const [id, name] of pairs) console.log(id, name);
        `}</Code>
      </section>
      <section>
        <h2>for...in — propiedades enumerables</h2>
        <p>Recorre claves (propiedades) de un objeto (propias y heredadas enumerables). No lo uses para arrays si no quieres sorpresas; el orden y las claves pueden no ser lo que esperas.</p>
        <Code>{`
          const o = { a:1, b:2 };
          for (const key in o) {
            if (!Object.prototype.hasOwnProperty.call(o, key)) continue; // filtrar heredadas
            console.log(key, o[key]);
          }
        `}</Code>
      </section>
      <section>
        <h2>while / do...while</h2>
        <p><code>while</code> evalúa la condición antes de cada iteración; <code>do...while</code> garantiza al menos una ejecución.</p>
        <Code>{`
          let n = 0;
          while (n < 3) { console.log(n); n++; }

          do { console.log('ejecuto al menos una vez'); } while(false);
        `}</Code>
      </section>
      <section>
        <h2>Array iteration helpers (funcionales)</h2>
        <p>Métodos como <code>forEach</code>, <code>map</code>, <code>filter</code>, <code>reduce</code> son declarativos y expresan la intención. Recuerda que <code>forEach</code> no retorna un valor y no se puede <code>await</code> correctamente.</p>
        <Code>{`
          // map: transforma y retorna nuevo array
          const dobles = [1,2,3].map(n => n*2); // [2,4,6]

          // forEach no espera promesas
          arr.forEach(async item => {
            await doAsync(item); // el forEach no espera estos awaits
          });
          // usa for...of para esperar
          for (const item of arr) {
            await doAsync(item);
          }
        `}</Code  >
      </section>
      <section>
        <h2>Break / Continue</h2>
        <p><code>break</code> termina el loop actual; <code>continue</code> salta a la siguiente iteración. Útiles para controlar el flujo dentro de bucles.</p>
        <Code>{`
          for (const v of arr) {
            if (condDeSalida(v)) break;
            if (!condValida(v)) continue; // salta este v
            procesar(v);
          }
        `}</Code>
      </section>
      <section>
        <h2>Etiquetas (labels) y saltos anidados</h2>
        <p>Las etiquetas permiten <code>break</code> o <code>continue</code> de bucles externos. Son poco usadas y pueden reducir legibilidad, pero son útiles para salir de múltiples niveles de bucle sin banderas adicionales.</p>
        <Code>{`
          outer: for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
              if (i === 1 && j === 1) break outer; // sale de ambos bucles
            }
          }
        `}</Code>
      </section>
      <section>
        <h2>Generadores (generators) y control iterativo</h2>
        <p>Los <code>function*</code> generan valores perezosamente con <code>yield</code>. Permiten modelar secuencias, pipelines y cooperar con consumidores usando iteración.</p>
        <Code>{`
          function* contador(limit) {
            for (let i = 0; i < limit; i++) yield i;
          }
          for (const n of contador(3)) console.log(n); // 0,1,2
        `}</Code>
        <p>Para async streams existe <code>for await...of</code> y los <em>async iterables</em>.</p>
      </section>
      <section>
        <h2>Try / Catch / Finally (manejo de excepciones)</h2>
        <p>Maneja errores excepcionales. Recuerda que <code>try/catch</code> captura solo errores lanzados sincrónicamente o cuando usas <code>await</code> en funciones async.</p>
        <Code>{`
          try {
            peligrosa();
          } catch (err) {
            console.error('falló', err);
          } finally {
            limpiar(); // siempre se ejecuta
          }

          // Ejemplo con async/await
          async function run() {
            try {
              await fetchData();
            } catch (e) {
              console.error('fetch falló', e);
            }
          }
        `}</Code>
        <p>Evita usar <code>try/catch</code> para control de flujo regular (no son para lógica esperada), y evita returns dentro de <code>finally</code> que pueden ocultar valores retornados o excepciones originales.</p>
      </section>
      <section>
        <h2>Throw — lanzar errores</h2>
        <p>Lanza errores con <code>throw</code>. Crea clases de error personalizadas cuando necesites diferenciarlos.</p>
        <Code>{`
          throw new Error('Fallo inesperado');

          class ValidationError extends Error {}
          throw new ValidationError('Campo requerido');`
        }</Code>
      </section>
      <section>
        <h2>Control de flujo asíncrono (resumen)</h2>
        <p>Aunque el tema profundo es async, es importante entender cómo encaja el control de flujo: las promesas representan valores futuros y necesitan <code>.then</code> / <code>.catch</code> o <code>await</code> para integrarse con estructuras sincrónicas.</p>
        <Code>{`
          // secuencial
          await step1();
          await step2();

          // paralelo
          await Promise.all([step1(), step2()]);

          // carrera: toma el primero
          await Promise.race([p1, p2]);
        `}</Code>
      </section>
      <section>
        <h2>Patrones y alternativas</h2>
        <ul>
          <li>
            <strong>Dispatcher/lookup</strong>: usar objeto/Map en lugar de switch para acciones.
          </li>
          <li>
            <strong>State machine</strong>: para flujos complejos, modela estados y transiciones
            en lugar de condicionales anidados.
          </li>
          <li>
            <strong>Strategy pattern</strong>: encapsula variantes de comportamiento en funciones.
          </li>
        </ul>
        <Code>{`
          // ejemplo dispatcher
          const handlers = { start: startFn, stop: stopFn };
          (handlers[action] || defaultFn)();
        `}</Code>
      </section>
      <section>
        <h2>Buenas prácticas</h2>
        <ul>
          <li>Evita anidar condicionales más de 2 niveles; extrae funciones descriptivas.</li>
          <li>Usa early returns para simplificar la lectura.</li>
          <li>Prefiere <code>for...of</code> para iterar elementos y <code>for...in</code> para claves de objetos.</li>
          <li>No uses <code>forEach</code> si necesitas <code>await</code>.</li>
          <li>Evita <code>return</code> dentro de <code>finally</code>; puede ocultar errores.</li>
          <li>Para muchas ramas, prefiere un Map/objeto de handlers o una máquina de estados.</li>
        </ul>
      </section>
      <section>
        <h2>Rendimiento y consideraciones</h2>
        <p>Los motores modernos optimizan bucles comunes. Prioriza la legibilidad; micro-optimiza solo cuando midas un problema real. Consejos puntuales:</p>
        <ul>
          <li>Evita calcular <code>arr.length</code> en cada iteración si es costoso en contextos raros.</li>
          <li>Prefiere <code>for</code> clásico en bucles muy apretados donde el índice importa.</li>
          <li>Minimiza work inside the loop; extrae funciones o variables fuera cuando tenga sentido.</li>
          <li>Cuidado con crear closures por cada iteración si impacta memoria/performance.</li>
        </ul>
      </section>
      <section>
        <h2>Errores comunes y cómo evitarlos</h2>
        <ul>
          <li>Usar <code>forEach</code> con <code>await</code> esperando que espere — no lo hace.</li>
          <li>Olvidar <code>break</code> en <code>switch</code> y provocar fallthrough indeseado.</li>
          <li>Modificar una colección mientras la recorres — preferir crear una copia o iterar al revés.</li>
          <li>Retornar desde <code>finally</code> (oculta errores originales).</li>
          <li>Usar <code>for...in</code> para arrays (puede iterar props heredadas y orden inesperado).</li>
        </ul>
      </section>
      <section>
        <h2>Checklist rápido</h2>
        <ul>
          <li>¿Necesitas índice? → for clásico o for...of con entries()</li>
          <li>¿Iteras un objeto? → for...in o Object.keys</li>
          <li>¿Necesitas parar desde varias capas? → etiqueta (label) o reestructurar</li>
          <li>¿Asíncrono? → evita forEach, usa for...of / Promise.all según paralelismo</li>
        </ul>
      </section>
    </>
  )
}