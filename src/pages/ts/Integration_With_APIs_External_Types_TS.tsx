import Code from "../../components/Code"

type Integration_With_APIs_External_Types_TSProps = {
  
}

export default function Integration_With_APIs_External_Types_TS({}:Integration_With_APIs_External_Types_TSProps) {
  return (
    <>
      <h1>Integración con APIs y Tipos Externos</h1>
      <p>TypeScript puede trabajar con librerías JavaScript y APIs externas de manera segura gracias al tipado, archivos de declaración y módulos ambientales. Esto permite autocompletado, detección de errores y mayor seguridad al usar código externo.</p>

      <section>
        <h2>Uso de librerías JavaScript en TypeScript</h2>
        <p>Al importar librerías JavaScript, TypeScript necesita saber los tipos para mejorar el autocompletado y verificar errores:</p>
        <Code>{`
          // Instalar librería y sus tipos
          // npm install lodash
          // npm install --save-dev @types/lodash

          import _ from 'lodash';

          const numeros = [1,2,3,4];
          const duplicados = _.map(numeros, n => n * 2);
          console.log(duplicados); // [2,4,6,8]
        `}</Code>

        <p>Si la librería no tiene tipos, podemos usar <code>any</code> temporalmente, pero es recomendable usar <code>@types</code> cuando exista.</p>
      </section>

      <section>
        <h2>Archivos de declaración (.d.ts)</h2>
        <p>Permiten describir tipos de librerías JavaScript para que TypeScript los entienda:</p>

        <h3>Ejemplo de archivo de declaración</h3>
        <Code>{`
          // archivo saludo.d.ts
          declare module 'saludo' {
            export function decirHola(nombre: string): string;
          }

          // archivo app.ts
          import { decirHola } from 'saludo';
          console.log(decirHola('Emanuel'));
        `}</Code>

        <p>Esto indica a TypeScript cómo es la API de la librería externa.</p>
      </section>

      <section>
        <h2>Ambient Modules</h2>
        <p>Sirven para declarar módulos externos que no tienen tipos:</p>
        <Code>{`
          // archivo global.d.ts
          declare module 'libreria-sin-tipos';

          // app.ts
          import lib from 'libreria-sin-tipos';
          lib.hacerAlgo(); // tipo any, sin errores de compilación
        `}</Code>
      </section>

      <section>
        <h2>Interfaces para APIs externas</h2>
        <p>Se pueden definir interfaces para tipar respuestas de APIs:</p>
        <Code>{`
          interface Usuario {
            id: number;
            nombre: string;
            email: string;
          }

          async function obtenerUsuarios(): Promise<Usuario[]> {
            const res = await fetch('https://api.example.com/usuarios');
            return res.json();
          }

          obtenerUsuarios().then(usuarios => {
            usuarios.forEach(u => console.log(u.nombre));
          });
        `}</Code>

        <p>Esto asegura que solo se puedan acceder a propiedades válidas y detecta errores en tiempo de compilación.</p>
      </section>

      <section>
        <h2>Tipos genéricos con APIs</h2>
        <p>Se pueden crear funciones genéricas para tipar cualquier respuesta de API:</p>
        <Code>{`
          async function obtenerDatos<T>(url: string): Promise<T> {
            const res = await fetch(url);
            return res.json();
          }

          interface Post {
            id: number;
            title: string;
            body: string;
          }

          const post = await obtenerDatos<Post>('https://api.example.com/posts/1');
          console.log(post.title);
        `}</Code>
      </section>

      <section>
        <h2>Good Practices al integrar librerías externas</h2>
        <ul>
          <li>Siempre buscar paquetes <code>@types</code> oficiales antes de usar <code>any</code>.</li>
          <li>Crear archivos <code>.d.ts</code> para librerías sin tipado.</li>
          <li>Usar interfaces y tipos genéricos para respuestas de APIs externas.</li>
          <li>Evitar manipular propiedades de objetos externos sin tipado, para prevenir errores.</li>
          <li>Documentar los tipos definidos para librerías externas, especialmente en equipos grandes.</li>
        </ul>
      </section>

      <section>
        <h2>Conclusión</h2>
        <p>Integrar TypeScript con APIs y librerías externas mediante tipado, archivos <code>.d.ts</code> y módulos ambientales permite autocompletado, validación de tipos y código más seguro. Esto es esencial para trabajar con librerías JS, REST APIs y mantener escalabilidad y calidad en proyectos grandes.</p>
      </section>
    </>
  )
}