import Code from "../../components/Code"

type Modules_Namespaces_TSProps = {
  
}

export default function Modules_Namespaces_TS({}:Modules_Namespaces_TSProps) {
  return (
    <>
      <h1>Módulos y Namespaces</h1>
      <p>TypeScript soporta la organización de código mediante <strong>módulos</strong> y <strong>namespaces</strong>. Esto permite separar responsabilidades, reutilizar código y evitar conflictos de nombres en proyectos grandes.</p>

      <section>
        <h2>Namespaces</h2>
        <p>Los namespaces agrupan código bajo un nombre único, evitando colisiones globales. Son útiles en proyectos más antiguos o cuando no se usa un sistema de módulos moderno.</p>
        <Code>{`
          namespace Utilidades {
            export function saludar(nombre: string): string {
              return \`Hola, \${nombre}\`;
            }

            export const PI = 3.1416;
          }

          console.log(Utilidades.saludar('Emanuel')); // Hola, Emanuel
          console.log(Utilidades.PI); // 3.1416
        `}</Code>

        <p><strong>Nota:</strong> Para acceder a funciones o variables dentro del namespace desde fuera, deben ser exportadas con <code>export</code>.</p>
      </section>

      <section>
        <h2>Módulos (ES Modules)</h2>
        <p>Los módulos permiten dividir el código en archivos independientes, usando <code>export</code> e <code>import</code>. Esto es estándar en TypeScript moderno.</p>

        <h3>Exportar elementos</h3>
        <Code>{`
          // archivo persona.ts
          export interface Persona {
            nombre: string;
            edad: number;
          }

          export function saludar(persona: Persona): string {
            return \`Hola, \${persona.nombre}\`;
          }
        `}</Code>

        <h3>Importar elementos</h3>
        <Code>{`
          // archivo app.ts
          import { Persona, saludar } from './persona';

          const p: Persona = { nombre: 'Ana', edad: 30 };
          console.log(saludar(p));
        `}</Code>
      </section>

      <section>
        <h2>Export default</h2>
        <p>Permite exportar un solo elemento principal de un módulo:</p>
        <Code>{`
          // archivo calculadora.ts
          export default class Calculadora {
            static sumar(a: number, b: number) {
              return a + b;
            }
          }

          // archivo app.ts
          import Calculadora from './calculadora';
          console.log(Calculadora.sumar(5, 3)); // 8
        `}</Code>
      </section>

      <section>
        <h2>Re-exportaciones</h2>
        <p>Se pueden combinar módulos y re-exportar elementos:</p>
        <Code>{`
          // archivo index.ts
          export * from './persona';
          export { default as Calculadora } from './calculadora';

          // archivo app.ts
          import { Persona, saludar, Calculadora } from './index';
        `}</Code>
      </section>

      <section>
        <h2>Diferencias entre Namespaces y Módulos</h2>
        <ul>
          <li><strong>Namespaces:</strong> Agrupan código dentro de un mismo archivo o globalmente, requieren <code>export</code> para acceder desde fuera.</li>
          <li><strong>Módulos:</strong> Cada archivo es un módulo separado, se importan explícitamente. Son el estándar moderno y recomendado.</li>
          <li>Namespaces se usan más en código antiguo o librerías que no usan sistemas de módulos.</li>
        </ul>
      </section>

      <section>
        <h2>Buenas prácticas</h2>
        <ul>
          <li>Usar módulos ES6/ESNext siempre que sea posible, evitando namespaces en proyectos modernos.</li>
          <li>Organizar el código en carpetas y archivos según la funcionalidad.</li>
          <li>Evitar exportar todo globalmente; exportar solo lo necesario.</li>
          <li>Usar <code>export default</code> para elementos principales y <code>export</code> para utilidades secundarias.</li>
          <li>Nombrar archivos y módulos de manera clara y coherente.</li>
        </ul>
      </section>

      <section>
        <h2>Conclusión</h2>
        <p>Módulos y namespaces permiten estructurar aplicaciones TypeScript de manera ordenada y modular. Los módulos son la forma moderna de organizar código, mientras que los namespaces pueden usarse en proyectos más antiguos o específicos. Dominar esta organización mejora la mantenibilidad, evita conflictos de nombres y facilita la escalabilidad.</p>
      </section>
    </>
  )
}