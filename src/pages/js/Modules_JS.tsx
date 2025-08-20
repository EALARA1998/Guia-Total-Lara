import Code from "../../components/Code"

type Modules_JSProps = {
  
}

export default function Modules_JS({}:Modules_JSProps) {
  return (
    <>
      <h1>JavaScript — Módulos (import/export)</h1>
      <p>Los módulos permiten dividir el código en archivos independientes, encapsular variables y funciones, y reutilizar componentes de manera controlada. Desde ES6, JavaScript soporta nativamente módulos usando <code>export</code> y <code>import</code>.</p>

      <section>
        <h2>Exportar desde un módulo</h2>
        <p>Se pueden exportar variables, funciones o clases para que estén disponibles en otros archivos.</p>

        <section>
          <h3>Export nombrado (Named Export)</h3>
          <p>Permite exportar varias cosas desde un mismo archivo, referenciándolas por su nombre.</p>
          <Code>{`
            // archivo math.js
            export const PI = 3.1416;
            export function sum(a, b) { return a + b; }
            export class Circle {
              constructor(r) { this.radius = r }
              area() { return PI * this.radius ** 2 }
            }
          `}</Code>
        </section>

        <section>
          <h3>Export por defecto (Default Export)</h3>
          <p>Cada módulo puede tener un único export por defecto. Al importarlo, puedes usar cualquier nombre para referenciarlo.</p>
          <Code>{`
            // archivo logger.js
            export default function log(msg) {
              console.log('[LOG]', msg);
            }
          `}</Code>
        </section>

        <section>
          <h3>Export al final del archivo</h3>
          <p>También puedes declarar funciones, variables o clases primero y exportarlas al final.</p>
          <Code>{`
            const PI = 3.1416;
            function multiply(a,b){ return a*b }
            class Square { constructor(l){ this.l=l } }
            export { PI, multiply, Square };
          `}</Code>
        </section>
      </section>

      <section>
        <h2>Importar desde un módulo</h2>
        <p>Usa <code>import</code> para traer código exportado desde otro archivo.</p>

        <section>
          <h3>Import nombrado</h3>
          <p>Debe coincidir exactamente con el nombre exportado.</p>
          <Code>{`
            import { PI, sum, Circle } from './math.js';
            console.log(PI); // 3.1416
            console.log(sum(2,3)); // 5
            const c = new Circle(2);
            console.log(c.area()); // 12.5664
          `}</Code>
        </section>

        <section>
          <h3>Import con alias</h3>
          <p>Puedes renombrar al importar para evitar conflictos de nombres.</p>
          <Code>{`
            import { sum as add } from './math.js';
            console.log(add(5,7)); // 12
          `}</Code>
        </section>

        <section>
          <h3>Import por defecto</h3>
          <p>No necesita llaves y puede tener cualquier nombre.</p>
          <Code>{`
            import log from './logger.js';
            log('Hola mundo'); // [LOG] Hola mundo
          `}</Code>
        </section>

        <section>
          <h3>Import combinado</h3>
          <p>Puedes combinar default y named exports en la misma declaración.</p>
          <Code>{`
            import log, { Circle, PI } from './math.js';
            log(PI);
            const c = new Circle(3);
            console.log(c.area());
          `}</Code>
        </section>

        <section>
          <h3>Import dinámico (dynamic import)</h3>
          <p>Permite cargar módulos bajo demanda, devuelve una promesa y es útil para code splitting.</p>
          <Code>{`
            async function loadMath() {
              const math = await import('./math.js');
              console.log(math.sum(2,3));
            }
            loadMath();
          `}</Code>
        </section>
      </section>

      <section>
        <h2>Módulos y scope</h2>
        <p>Los módulos crean un scope propio: variables y funciones definidas dentro del módulo no contaminan el scope global.</p>
        <Code>{`
          // archivo example.js
          const secret = 42; // no visible fuera del módulo
          export const visible = 'sí';
        `}</Code>
        <p>Esto ayuda a mantener el código limpio y evitar colisiones de nombres.</p>
      </section>

      <section>
        <h2>Reexportar (export from)</h2>
        <p>Permite agrupar y volver a exportar módulos desde otro archivo.</p>
        <Code>{`
          // archivo index.js
          export { PI, sum, Circle } from './math.js';
          export { default as log } from './logger.js';
        `}</Code>
        <p>Esto facilita crear un único punto de entrada para librerías o colecciones de utilidades.</p>
      </section>

      <section>
        <h2>Importar todo como objeto</h2>
        <p>Usando <code>* as</code>, puedes importar todo el módulo bajo un mismo objeto.</p>
        <Code>{`
          import * as math from './math.js';
          console.log(math.PI);
          console.log(math.sum(4,5));
          const c = new math.Circle(2);
        `}</Code>
      </section>

      <section>
        <h2>Consideraciones y errores comunes</h2>
        <ul>
          <li>Los módulos son siempre en modo estricto (<code>strict mode</code>).</li>
          <li>Extensiones de archivo: generalmente <code>.js</code> o <code>.mjs</code>, algunas herramientas permiten omitirlas.</li>
          <li>Importar módulos que no existen genera <code>404</code> en navegador o error en Node.</li>
          <li>Reexportar con nombres incorrectos genera <code>SyntaxError</code>.</li>
          <li>Import dinámico es asíncrono; no puedes usarlo como si fuera síncrono.</li>
        </ul>
      </section>

      <section>
        <h2>Compatibilidad y entornos</h2>
        <p>Los módulos ES6 son soportados nativamente en navegadores modernos y Node.js. Para entornos antiguos se requiere bundler (Webpack, Rollup) o transpiler (Babel) para convertir a CommonJS o IIFE.</p>
      </section>

      <section>
        <h2>Ejemplos prácticos</h2>
        <section>
          <h3>Modulo de utilidades</h3>
          <Code>{`
            // utils.js
            export function upper(str){ return str.toUpperCase() }
            export function lower(str){ return str.toLowerCase() }

            // app.js
            import { upper, lower } from './utils.js';
            console.log(upper('hola')); // HOLA
            console.log(lower('ADIOS')); // adios
          `}</Code>
        </section>

        <section>
          <h3>Modulo por defecto y named export</h3>
          <Code>{`
            // logger.js
            export default function log(msg){ console.log(msg) }
            export const LEVELS = { INFO:'info', ERROR:'error' }

            // app.js
            import log, { LEVELS } from './logger.js';
            log('Mensaje');
            console.log(LEVELS.ERROR);
          `}</Code>
        </section>

        <section>
          <h3>Dynamic import con async/await</h3>
          <Code>{`
            async function init() {
              const module = await import('./utils.js');
              console.log(module.upper('dynamic')); // DYNAMIC
            }
            init();
          `}</Code>
        </section>

        <section>
          <h3>Reexportar módulos</h3>
          <Code>{`
            // index.js
            export * from './utils.js';
            export { default as log } from './logger.js';

            // app.js
            import { upper, lower, log } from './index.js';
          `}</Code>
        </section>
      </section>

      <section>
        <h2>Conclusión</h2>
        <p>Los módulos son esenciales para mantener código modular, organizado y reutilizable. Dominar export/import, dinámicos, reexport y scope evita errores y mejora la mantenibilidad y performance de aplicaciones modernas de JavaScript.</p>
      </section>
    </>
  )
}