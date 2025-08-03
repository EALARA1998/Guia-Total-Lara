import Code from "../../components/Code";

export default function TypeScript_JSON() {
  return (
    <>
      <h1>Json en TypeScript</h1>
      <section>
        <h2>¿Qué es JSON?</h2>
        <p>JSON (JavaScript Object Notation) es un formato de datos ligero y universal. Es compatible con casi todos los lenguajes.</p>
        <p>Ejemplo:</p>
        <Code>{`
          {
            "nombre": "Emanuel",
            "edad": 25,
            "activo": true
          }
        `}</Code>
        <p>Es equivalente en JS a:</p>
        <Code>{`
          const persona = {
            nombre: "Emanuel",
            edad: 25,
            activo: true
          };
        `}</Code>
      </section>
      <section>
        <h2>JSON en TypeScript: tipado</h2>
        <p>En TypeScript, debes tipar los datos JSON para aprovechar el autocompletado, validación y seguridad de tipos.</p>
        <p>Ejemplo básico:</p>
        <Code>{`
          type Usuario = {
            nombre: string;
            edad: number;
            activo: boolean;
          };

          const datos: Usuario = {
            nombre: "Ana",
            edad: 30,
            activo: true
          };
        `}</Code>
      </section>
      <section>
        <h2>Leer JSON desde una API o archivo</h2>
        <p>Desde una API:</p>
        <Code>{`
          type Producto = {
            id: number;
            nombre: string;
            precio: number;
          };

          fetch("https://api.com/producto")
            .then(res => res.json())
            .then((data: Producto) => {
              console.log(data.nombre); // TS sabe que es string
            });
        `}</Code>
      </section>
      <section>
        <h2>Desde un archivo .json local (Node.js o Vite)</h2>
        <section>
          <h3>Opción 1: Importación directa</h3>
          <Code>{`
            // tsconfig.json
            {
              "compilerOptions": {
                "resolveJsonModule": true,
                "esModuleInterop": true
              }
            }
          `}</Code>
          <Code>{`
            import config from './config.json';

            console.log(config.apiUrl); // Tipado automático si usas tsconfig correcto
          `}</Code>
        </section>
        <section>
          <h3>Opción 2: fs.readFileSync() en Node.js</h3>
          <Code>{`
            import { readFileSync } from 'fs';

            const contenido = readFileSync('./datos.json', 'utf-8');
            const datos = JSON.parse(contenido) as Usuario;
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Escribir JSON (stringify)</h2>
        <p>Cuando quieras guardar o enviar datos:</p>
        <Code>{`
          const usuario = { nombre: "Luis", edad: 28 };
          const json = JSON.stringify(usuario);
          console.log(json); // {"nombre":"Luis","edad":28}
        `}</Code>
        <p>También puedes guardar en localStorage:</p>
        <Code>{`
          localStorage.setItem("usuario", JSON.stringify(usuario));
        `}</Code>
        <p>Y recuperar:</p>
        <Code>{`
          const datos = JSON.parse(localStorage.getItem("usuario") || "{}") as Usuario;
        `}</Code>
      </section>
      <section>
        <h2>Validar JSON antes de usarlo</h2>
        <p>JSON.parse puede lanzar error si la cadena no es válida:</p>
        <Code>{`
          try {
            const data = JSON.parse(jsonString);
          } catch (e) {
            console.error("JSON inválido");
          }
        `}</Code>
      </section>
      <section>
        <h2>Tipar JSON dinámico</h2>
        <p>Si no conoces la estructura exacta:</p>
        <Code>{`
          let data: any = JSON.parse(jsonString); // ⚠️ Pierdes el tipado
        `}</Code>
        <p>Mejor opción:</p>
        <Code>{`
          type Persona = {
            nombre: string;
            edad: number;
          };

          const data = JSON.parse(jsonString) as Persona;
        `}</Code>
        <ul>
          <li>
            <p>También puedes usar unknown si quieres forzar validación antes de confiar en los datos:</p>
          </li>
        </ul>
        <Code>{`
          const data = JSON.parse(jsonString) as unknown;

          if (esPersona(data)) {
            console.log(data.nombre);
          }
        `}</Code>
      </section>
      <section>
        <h2>Validar tipos con funciones guard (type guards)</h2>
        <Code>{`
          function esPersona(obj: any): obj is Persona {
            return (
              typeof obj.nombre === "string" &&
              typeof obj.edad === "number"
            );
          }
        `}</Code>
      </section>
      <section>
        <h2>Usar JSON con generics</h2>
        <p>Si creas funciones que reciben JSON:</p>
        <Code>{`
          function parseJSON<T>(json: string): T {
            return JSON.parse(json) as T;
          }

          const persona = parseJSON<Persona>('{"nombre":"Ana","edad":22}');
        `}</Code>
      </section>
      <section>
        <h2>Buenas prácticas</h2>
        <table>
          <thead>
            <tr>
              <th>Práctica</th>
              <th>Recomendación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tipar con interfaces o tipos</td>
              <td>Siempre que sepas la estructura</td>
            </tr>
            <tr>
              <td>Validar con type guards</td>
              <td>Antes de confiar en datos externos</td>
            </tr>
            <tr>
              <td>Usar resolveJsonModule</td>
              <td>Para importar archivos JSON con tipado</td>
            </tr>
            <tr>
              <td>Evitar any</td>
              <td>Prefiere unknown o tipos concretos</td>
            </tr>
            <tr>
              <td>JSON.parse puede lanzar error</td>
              <td>Usa try/catch si no controlas la fuente</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>Herramientas extra útiles</h2>
        <ul>
          <li>
            <p>Zod / Yup: validadores para validar esquemas JSON en TS</p>
          </li>
          <li>
            <p>as const: útil si defines JSON manual en TS con valores fijos</p>
          </li>
          <li>
            <p>JSON.stringify(obj, null, 2): genera JSON legible</p>
          </li>
        </ul>
        <p>Ejemplo completo</p>
        <Code>{`
          type Producto = {
            id: number;
            nombre: string;
            precio: number;
          };

          // Guardar
          const producto: Producto = { id: 1, nombre: "Teclado", precio: 199.99 };
          localStorage.setItem("producto", JSON.stringify(producto));

          // Recuperar
          const json = localStorage.getItem("producto") ?? "{}";
          const data = JSON.parse(json) as Producto;

          console.log(data.nombre); // Teclado
        `}</Code>
      </section>
    </>
  )
}