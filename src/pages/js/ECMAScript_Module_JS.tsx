import Code from "../../components/Code";

export default function ECMAScript_Module_JS() {
  return (
    <>
      <h1>ECMAScript_Module</h1>
      <p>Aprender sobre ECMAScript Modules (ES Modules o ESM) es clave para estructurar bien tus proyectos modernos en JavaScript, especialmente en aplicaciones web y en herramientas como Node.js, React o Vite.</p>
      <section>
        <h2>ECMAScript Modules (ES Modules) en JavaScript</h2>
        <section>
          <h3>¿Qué es un módulo?</h3>
          <p>Un módulo es simplemente un archivo .js que exporta o importa código (funciones, variables, objetos, clases...) de otro archivo.</p>
          <p>Antes se usaban sistemas como CommonJS (require) o AMD. Ahora el estándar moderno es ESM, introducido en ECMAScript 2015 (ES6).</p>
        </section>
      </section>
      <section>
        <h2>¿Por qué usar módulos?</h2>
        <ul>
          <li>
            <p>Organiza mejor el código (divide en archivos)</p>
          </li>
          <li>
            <p>Reutilizas funciones o componentes fácilmente</p>
          </li>
          <li>
            <p>Evitas variables globales</p>
          </li>
          <li>
            <p>Facilita testing, mantenimiento y escalabilidad</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Ejemplos basicos</h2>
        <section>
          <h3>math.js</h3>
          <Code>{`
            export const suma = (a, b) => a + b;
            export const resta = (a, b) => a - b;
          `}</Code>
        </section>
        <section>
          <h3>main.js</h3>
          <Code>{`
            import { suma, resta } from './math.js';

            console.log(suma(2, 3)); // 5
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Exportaciones</h2>
        <section>
          <h3>Exportación nombrada (Named Export)</h3>
          <p>Puedes exportar múltiples elementos:</p>
          <Code>{`
            // archivo.js
            export const nombre = "Ana";
            export function saludar() { ... }
            export class Persona { ... }
          `}</Code>
        </section>
        <section>
          <h3>Exportación por defecto (Default Export)</h3>
          <p>Solo puede haber una por archivo:</p>
          <Code>{`
            // archivo.js
            export default function() {
              console.log("Soy la función principal");
            }
          `}</Code>
          <Code>{`
            // otroArchivo.js
            import funcion from './archivo.js';
          `}</Code>
          <p>Puedes renombrar una default export sin usar {}.</p>
        </section>
      </section>
      <section>
        <h2>Importaciones</h2>
        <section>
          <h3>Importar exportaciones nombradas:</h3>
          <Code>{`
            import { nombre, saludar } from './archivo.js';
          `}</Code>
          <p>Puedes renombrar:</p>
          <Code>{`
            import { nombre as userName } from './archivo.js';
          `}</Code>
        </section>
        <section>
          <h3>Importar todo (namespace import):</h3>
          <Code>{`
            import * as utilidades from './archivo.js';

            console.log(utilidades.nombre);
            utilidades.saludar();
          `}</Code>
        </section>
        <section>
          <h3>Importar default + nombradas:</h3>
          <Code>{`
            import miFuncion, { helper } from './archivo.js';
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Re-exportar desde otro archivo</h2>
        <Code>{`
          export { suma, resta } from './math.js';
          export * from './otro.js';
        `}</Code>
      </section>
      <section>
        <h2>Cómo usar módulos en el navegador</h2>
        <section>
          <h3>Con archivos {`<script type="module">`}</h3>
          <Code>{`
            <script type="module" src="main.js"></script>
          `}</Code>
          <p>Esto permite usar import/export en archivos .js directamente en el navegador moderno.</p>
        </section>
      </section>
      <section>
        <h2>Cómo usar módulos en Node.js</h2>
        <section>
          <h3>Desde Node v12+ (estable en v14+), puedes usar:</h3>
          <ul>
            <li>
              <p>Archivos con extensión .mjs</p>
            </li>
            <li>
              <p>O agregar "type": "module" en package.json y usar .js</p>
            </li>
          </ul>
          <Code>{`
            {
              "type": "module"
            }
          `}</Code>
          <p>Entonces puedes usar:</p>
          <Code>{`
            import fs from 'fs';
          `}</Code>
          <p>En ESM no puedes usar require, solo import.</p>
        </section>
      </section>
      <section>
        <h2>Diferencias con CommonJS (require/export)</h2>
        <table>
          <thead>
            <tr>
              <th>Característica</th>
              <th>CommonJS (require)	</th>
              <th>ES Modules (import)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sintaxis</td>
              <td>require, module.exports	</td>
              <td>import, export</td>
            </tr>
            <tr>
              <td>Carga</td>
              <td>Dinámica (en tiempo de ejecución)	</td>
              <td>Estática (en compilación)</td>
            </tr>
            <tr>
              <td>Soporte en navegador	</td>
              <td>❌ No nativo	</td>
              <td>✅ Sí</td>
            </tr>
            <tr>
              <td>Soporte en Node.js	</td>
              <td>✅ Sí (histórico)	</td>
              <td>✅ Sí (moderno)</td>
            </tr>
            <tr>
              <td>Default + named exports	</td>
              <td>No tan flexible	</td>
              <td>Muy flexible</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>Restricciones de ESM</h2>
        <ul>
          <li>
            <p>No puedes usar import/export fuera del nivel superior del archivo</p>
          </li>
          <li>
            <p>Los imports son asincrónicos (por eso puedes usar top-level await)</p>
          </li>
          <li>
            <p>Solo puedes importar desde archivos con rutas relativas o absolutas, o import maps</p>
          </li>
          <li>
            <p>No puedes usar __dirname ni __filename directamente (en Node.js ESM)</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Buenas prácticas</h2>
        <ul>
          <li>
            <p>✅ Usa solo un export default por archivo (si es necesario)</p>
          </li>
          <li>
            <p>✅ Usa exportaciones nombradas para claridad y control</p>
          </li>
          <li>
            <p>✅ Mantén las rutas claras y usa alias o index.js para simplificar</p>
          </li>
          <li>
            <p>✅ Evita exportar variables que cambian (prefiere funciones)</p>
          </li>
          <li>
            <p>✅ Usa módulos desde el inicio del proyecto (evita combinar con CommonJS)</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>top-level await (solo en módulos)</h2>
        <Code>{`
          const data = await fetch("https://api.com/datos").then(r => r.json());
          console.log(data);
        `}</Code>
        <p>Solo posible en type="module" o .mjs / "type": "module"</p>
      </section>
    </>
  )
}