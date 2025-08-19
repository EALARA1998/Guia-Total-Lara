import Code from "../../components/Code"

type Advanced_Utility_Types_TSProps = {
  
}

export default function Advanced_Utility_Types_TS({}:Advanced_Utility_Types_TSProps) {
  return (
    <>
      <h1>Tipos avanzados y utilitarios</h1>
      <p>Además de los tipos básicos, TypeScript ofrece <strong>tipos avanzados</strong> y <strong>tipos utilitarios</strong> que permiten crear estructuras más seguras, reutilizables y expresivas. Estos son fundamentales para trabajar en proyectos grandes.</p>

      <section>
        <h2>Tipos de unión (Union Types)</h2>
        <p>Permiten que una variable pueda ser de varios tipos posibles:</p>
        <Code>{`
          let valor: string | number;
          valor = "Hola";
          valor = 42;
        `}</Code>
        <p>Se suelen usar con type guards:</p>
        <Code>{`
          function imprimirId(id: string | number) {
            if (typeof id === "string") {
              console.log("ID en texto:", id.toUpperCase());
            } else {
              console.log("ID en número:", id.toFixed(2));
            }
          }
        `}</Code>
      </section>

      <section>
        <h2>Tipos de intersección (Intersection Types)</h2>
        <p>Combinan múltiples tipos en uno solo:</p>
        <Code>{`
          type Persona = { nombre: string };
          type Empleado = { id: number };
          type PersonaEmpleado = Persona & Empleado;

          const empleado: PersonaEmpleado = { nombre: "Ana", id: 101 };
        `}</Code>
      </section>

      <section>
        <h2>Alias de tipos (Type Aliases)</h2>
        <p>Permiten nombrar tipos complejos:</p>
        <Code>{`
          type Punto = { x: number; y: number };
          type ID = string | number;

          const p1: Punto = { x: 10, y: 20 };
          const id: ID = "abc123";
        `}</Code>
      </section>

      <section>
        <h2>Tipos literales</h2>
        <p>Restringen el valor a opciones específicas:</p>
        <Code>{`
          type Direccion = "norte" | "sur" | "este" | "oeste";

          function mover(d: Direccion) {
            console.log("Moviendo hacia", d);
          }

          mover("norte"); // ✅
          // mover("arriba"); ❌ Error
        `}</Code>
      </section>

      <section>
        <h2>Tipos condicionales</h2>
        <p>Permiten lógica en el tipado:</p>
        <Code>{`
          type EsString<T> = T extends string ? "sí" : "no";

          type A = EsString<string>;  // "sí"
          type B = EsString<number>;  // "no"
        `}</Code>
      </section>

      <section>
        <h2>Tipos inferidos con infer</h2>
        <p>Usados en condicionales para extraer tipos:</p>
        <Code>{`
          type Retorno<T> = T extends (...args: any[]) => infer R ? R : never;

          type Fn = () => number;
          type Resultado = Retorno<Fn>; // number
        `}</Code>
      </section>

      <section>
        <h2>Tipos mapeados</h2>
        <p>Permiten transformar propiedades de objetos:</p>
        <Code>{`
          type Opcional<T> = {
            [K in keyof T]?: T[K];
          };

          type Usuario = { id: number; nombre: string };
          type UsuarioOpcional = Opcional<Usuario>;
          // { id?: number; nombre?: string }
        `}</Code>
      </section>

      <section>
        <h2>Tipos indexados</h2>
        <p>Permiten acceder al tipo de una propiedad:</p>
        <Code>{`
          type Persona = { nombre: string; edad: number };
          type Nombre = Persona["nombre"]; // string
        `}</Code>
      </section>

      <section>
        <h2>Tipos utilitarios (Utility Types)</h2>
        <p>TypeScript incluye utilitarios listos para usar:</p>
        <ul>
          <li><code>Partial{`T`}</code> → Todas las propiedades opcionales.</li>
          <li><code>Required{`T`}</code> → Todas las propiedades obligatorias.</li>
          <li><code>Readonly{`T`}</code> → Todas las propiedades inmutables.</li>
          <li><code>Pick{`T,K`}</code> → Selecciona algunas propiedades.</li>
          <li><code>Omit{`T,K`}</code> → Omite algunas propiedades.</li>
          <li><code>Record{`K,T`}</code> → Crea un objeto con claves K y valores T.</li>
          <li><code>Exclude{`T,U`}</code> → Excluye tipos de una unión.</li>
          <li><code>Extract{`T,U`}</code> → Extrae tipos comunes de una unión.</li>
          <li><code>NonNullable{`T`}</code> → Elimina <code>null</code> y <code>undefined</code>.</li>
          <li><code>ReturnType{`T`}</code> → Obtiene el tipo de retorno de una función.</li>
          <li><code>InstanceType{`T`}</code> → Obtiene el tipo de instancia de una clase.</li>
        </ul>
        <Code>{`
          type Usuario = { id: number; nombre: string; email: string };

          type UsuarioParcial = Partial<Usuario>;
          // { id?: number; nombre?: string; email?: string }

          type UsuarioSoloNombre = Pick<Usuario, "nombre">;
          // { nombre: string }

          type UsuarioSinEmail = Omit<Usuario, "email">;
          // { id: number; nombre: string }

          type IdSolo = Extract<string | number | boolean, number>;
          // number
        `}</Code>
      </section>

      <section>
        <h2>Tipos nunca (never)</h2>
        <p>Se usan para funciones que nunca retornan:</p>
        <Code>{`
          function error(msg: string): never {
            throw new Error(msg);
          }
        `}</Code>
      </section>

      <section>
        <h2>Tipos desconocidos (unknown)</h2>
        <p>Más seguro que <code>any</code>, obliga a validación antes de uso:</p>
        <Code>{`
          let valor: unknown = "Hola";
          if (typeof valor === "string") {
            console.log(valor.toUpperCase());
          }
        `}</Code>
      </section>

      <section>
        <h2>Conclusión</h2>
        <p>Los tipos avanzados de TypeScript permiten crear estructuras flexibles y seguras. Al combinarlos con los tipos utilitarios incorporados, se pueden escribir aplicaciones robustas, reducir duplicación y mejorar la mantenibilidad.</p>
      </section>
    </>
  )
}