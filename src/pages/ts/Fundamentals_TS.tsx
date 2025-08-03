import Code from "../../components/Code";

export default function Fundamentals_TS() {
  return (
    <>
      <h1>Fundamentos de TypeScript</h1>
      <section>
        <h2>¿Qué es TypeScript?</h2>
        <p>TypeScript es un superset de JavaScript que agrega tipado estático y nuevas características como interfaces, tipos, clases avanzadas, etc. El código TypeScript se transpila a JavaScript estándar para ejecutarse en el navegador o Node.js.</p>
      </section>
      <section>
        <h2>Instalación y uso básico</h2>
        <Code>{`
          npm install -g typescript
          tsc archivo.ts      # Transpila a archivo.js
        `}</Code>
        <section>
          <h3>Configuración con tsconfig.json:</h3>
          <Code>{`
            tsc --init
          `}</Code>
          <p>Algunos flags importantes:</p>
          <Code>{`
            {
              "strict": true,
              "target": "ES6",
              "module": "ESNext",
              "esModuleInterop": true,
              "noImplicitAny": true
            }
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Tipos de datos en TS</h2>
        <Code>{`
          let nombre: string = "Ana";
          let edad: number = 30;
          let activo: boolean = true;
          let tags: string[] = ["js", "ts"];
          let tupla: [string, number] = ["uno", 1];
          let cualquier: any = "lo que sea"; // ⚠️ pierde seguridad
        `}</Code>
      </section>
      <section>
        <h2>Tipos personalizados</h2>
        <Code>{`
          type Usuario = {
            nombre: string;
            edad: number;
          };

          const user: Usuario = { nombre: "Pedro", edad: 24 };
        `}</Code>
      </section>
      <section>
        <h2>Interfaces</h2>
        <Code>{`
          interface Producto {
            nombre: string;
            precio: number;
            descuento?: number; // opcional
          }

          const p: Producto = { nombre: "TV", precio: 1000 };
        `}</Code>
        <section>
          <h3>Herencia</h3>
          <Code>{`
          interface Producto {
            nombre: string;
            precio: number;
            descuento?: number; // opcional
          }
          interface Guitarra extends Producto {
            marca: string
          }

          const g: Guitarra = { nombre: "Lucille", precio: 2000, marca: "Gibson" };
        `}</Code>
        </section>
      </section>
      <search>
        <h2>Funciones con tipos</h2>
        <Code>{`
          function saludar(nombre: string): string {
            return \`Hola, \${nombre}\`;
          }

          // Función tipo flecha
          const sumar = (a: number, b: number): number => a + b;
        `}</Code>
        <p>Parámetros opcionales o con valor por defecto:</p>
        <Code>{`
          function hola(nombre: string = "Invitado") {}
        `}</Code>
      </search>
      <section>
        <h2>Uniones, intersecciones y tipos literales</h2>
        <section>
          <h3>Tipos de unión (|)</h3>
          <p>Permiten que una variable pueda ser de uno u otro tipo.</p>
          <Code>{`
            let id: string | number;
            id = "123";
            id = 456;
          `}</Code>
        </section>
        <section>
          <h3>Tipos de intersección (&)</h3>
          <p>Combinan múltiples tipos, formando un tipo más estricto.</p>
          <Code>{`
            type Persona = { nombre: string };
            type Empleado = { id: number };

            type EmpleadoPersona = Persona & Empleado;

            const e: EmpleadoPersona = { nombre: "Luis", id: 1 };
          `}</Code>
        </section>
        <section>
          <h3>Tipos literales</h3>
          <p>Permiten definir valores específicos posibles.</p>
          <Code>{`
            type Rol = "admin" | "user" | "guest";
            let rol: Rol = "admin";
          `}</Code>
          <p>Muy útil para estados, respuestas, acciones, etc.</p>
        </section>
      </section>
      <section>
        <h2>Enums</h2>
        <Code>{`
          enum Rol {
            ADMIN,
            USER,
            GUEST
          }

          const r: Rol = Rol.ADMIN;
        `}</Code>
      </section>
      <section>
        <h2>Clases en TS</h2>
        <p>TypeScript permite POO completa con clases, herencia y modificadores de acceso.</p>
        <section>
          <h3>Clase básica:</h3>
          <Code>{`
            class Persona {
              constructor(public nombre: string, private edad: number) {}

              saludar(): void {
                console.log(\`Hola, soy \${this.nombre}\`);
              }
            }
          `}</Code>
        </section>
        <section>
          <h3>Modificadores:</h3>
          <ul>
            <li>
              <p>public: accesible desde fuera (por defecto).</p>
            </li>
            <li>
              <p>private: solo accesible dentro de la clase.</p>
            </li>
            <li>
              <p>protected: accesible dentro de la clase y subclases.</p>
            </li>
            <li>
              <p>readonly: solo lectura.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Herencia:</h3>
          <Code>{`
            class Empleado extends Persona {
              constructor(nombre: string, edad: number, public cargo: string) {
                super(nombre, edad);
              }
            }
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Tipos avanzados</h2>
        <section>
          <h3>unknown</h3>
          <p>Más seguro que any. Obliga a validar antes de usar.</p>
          <Code>{`
            function procesar(valor: unknown) {
              if (typeof valor === "string") {
                console.log(valor.toUpperCase());
              }
            }
          `}</Code>
        </section>
        <section>
          <h3>never</h3>
          <p>Tipo para funciones que nunca terminan normalmente (errores o bucles infinitos).</p>
          <Code>{`
            function lanzarError(msg: string): never {
              throw new Error(msg);
            }
          `}</Code>
        </section>
        <section>
          <h3>void</h3>
          <p>Se usa cuando una función no retorna ningún valor.</p>
          <Code>{`
            function log(msg: string): void {
              console.log(msg);
            }
          `}</Code>
        </section>
        <section>
          <h3>typeof, keyof, in, as:</h3>
          <p></p>
          <Code>{`
            const persona = { nombre: "Ana", edad: 20 };
            type Persona = typeof persona;       // Inferir tipo
            type Llaves = keyof Persona;         // "nombre" | "edad"
            type Copia = { [K in keyof Persona]: Persona[K] }; // Mapped types
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Utility Types</h2>
        <p>TypeScript ofrece tipos utilitarios listos para modificar tipos existentes.</p>
        <table>
          <thead>
            <tr>
              <th>Utilitario</th>
              <th>Qué hace</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{`Partial<T>`}</td>
              <td>Vuelve todos los campos opcionales.</td>
            </tr>
            <tr>
              <td>{`Required<T>`}</td>
              <td>Hace que todos los campos sean obligatorios.</td>
            </tr>
            <tr>
              <td>{`Readonly<T>`}</td>
              <td>Hace que todas las propiedades sean solo lectura.</td>
            </tr>
            <tr>
              <td>{`Pick<T, K>`}</td>
              <td>Extrae solo algunas propiedades.</td>
            </tr>
            <tr>
              <td>{`Omit<T, K>`}</td>
              <td>Excluye ciertas propiedades.</td>
            </tr>
            <tr>
              <td>{`Record<K, T>`}</td>
              <td>Crea un objeto con claves K y valores de tipo T.</td>
            </tr>
            <tr>
              <td>{`ReturnType<T>`}</td>
              <td>Infiera el tipo de retorno de una función.</td>
            </tr>
          </tbody>
        </table>
        <Code>{`
          type Usuario = {
            nombre: string;
            edad: number;
          };

          type Opcional = Partial<Usuario>;    // { nombre?: string; edad?: number; }
          type SoloNombre = Pick<Usuario, "nombre">;
        `}</Code>
      </section>
      <section>
        <h2>Indexed Access Types</h2>
        <p>En TypeScript, los Indexed Access Types (o tipos de acceso por índice) te permiten referenciar un tipo de propiedad específica de otro tipo. Son útiles para reutilizar tipos y asegurar que tus definiciones estén sincronizadas.</p>
        <Code>{`
          type Persona = {
            nombre: string;
            edad: number;
          };

          type TipoNombre = Persona["nombre"]; // string
          type TipoEdad = Persona["edad"];     // number
        `}</Code>
        <section>
          <h3>Tipos combinados con union de claves</h3>
          <Code>{`
            type Propiedades = Persona["nombre" | "edad"]; 
            // string | number
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Generics</h2>
        <p>Permiten escribir código reutilizable y flexible.</p>
        <section>
          <h3>Función genérica:</h3>
          <Code>{`
            function envolver<T>(valor: T): T {
              return valor;
            }

            const resultado = envolver<number>(5);
          `}</Code>
        </section>
        <section>
          <h3>Interfaces genéricas:</h3>
          <Code>{`
            interface ApiResponse<T> {
              data: T;
              success: boolean;
            }

            const res: ApiResponse<string> = {
              data: "Hola",
              success: true,
            };
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Módulos y namespaces</h2>
        <section>
          <h3>Módulos ES</h3>
          <Code>{`
            // archivo.ts
            export function saludar() {
              return "Hola";
            }

            // main.ts
            import { saludar } from "./archivo";
          `}</Code>
          <p>Puedes exportar:</p>
          <ul>
            <li>
              <p>export const / function / class</p>
            </li>
            <li>
              <p>export default</p>
            </li>
          </ul>
          <p>En scripts individuales, puedes usar "type": "module" en package.json o .mjs en lugar de .js.</p>
        </section>
      </section>
      <section>
        <h2>Integración con JavaScript</h2>
        <p>TypeScript puede leer archivos .js, puedes ir migrando poco a poco.</p>
        <Code>{`
          // archivo.js
          function sumar(a, b) {
            return a + b;
          }

          // archivo.ts
          /// <reference path="./archivo.js" />
        `}</Code>
        <p>O con allowJs: true en tsconfig.json.</p>
      </section>
      <section>
        <h2></h2>
        <table>
          <thead>
            <tr>
              <th>Herramienta</th>
              <th>Uso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>tsc --watch</td>
              <td>Compilar automáticamente al guardar</td>
            </tr>
            <tr>
              <td>eslint + typescript-eslint</td>
              <td>Lint con reglas TS</td>
            </tr>
            <tr>
              <td>vite o ts-node</td>
              <td>Ejecutar sin compilar</td>
            </tr>
            <tr>
              <td>Zod / Yup</td>
              <td>Validar datos JSON con seguridad de tipos</td>
            </tr>
            <tr>
              <td>tsconfig.json</td>
              <td>Configurar comportamiento del compilador</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>Buenas prácticas</h2>
        <ul>
          <li>
            <p>Nunca uses any a menos que sea necesario.</p>
          </li>
          <li>
            <p>Prefiere unknown y valida.</p>
          </li>
          <li>
            <p>Divide en módulos pequeños y bien tipados.</p>
          </li>
          <li>
            <p>Usa utilitarios (Partial, Omit, etc.) para reutilizar tipos.</p>
          </li>
          <li>
            <p>Documenta tus tipos y funciones si son complejos.</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Testing tipado</h2>
        <p>Puedes usar tsd para probar que los tipos funcionen correctamente en bibliotecas.</p>
      </section>
    </>
  )
}