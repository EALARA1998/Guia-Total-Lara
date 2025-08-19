import Code from "../../components/Code"

type Advanced_Types_TypeScript_Utilities_TSProps = {
  
}

export default function Advanced_Types_TypeScript_Utilities_TS({}:Advanced_Types_TypeScript_Utilities_TSProps) {
  return (
    <>
      <h1>Tipos Avanzados y Utilidades</h1>
      <p>TypeScript ofrece tipos avanzados y utilidades que permiten crear tipos dinámicos, condicionales y derivados de otros tipos, aumentando la flexibilidad y seguridad del código.</p>

      <section>
        <h2>keyof</h2>
        <p>Permite obtener un tipo que representa las claves de un objeto:</p>
        <Code>{`
          interface Persona {
            nombre: string;
            edad: number;
            email: string;
          }

          type ClavesPersona = keyof Persona; 
          // "nombre" | "edad" | "email"

          const clave: ClavesPersona = "nombre"; // válido
          // const clave2: ClavesPersona = "direccion"; // Error
        `}</Code>
      </section>

      <section>
        <h2>typeof (en tipos)</h2>
        <p>Se puede usar para crear un tipo basado en una variable existente:</p>
        <Code>{`
          const usuario = { nombre: 'Ana', edad: 30 };
          type Usuario = typeof usuario;

          const u: Usuario = { nombre: 'Juan', edad: 25 }; // mismo tipo que usuario
        `}</Code>
      </section>

      <section>
        <h2>Indexed Access Types</h2>
        <p>Permiten acceder a tipos de propiedades específicas:</p>
        <Code>{`
          type Nombre = Persona['nombre']; // string
          type Edad = Persona['edad'];     // number
        `}</Code>
      </section>

      <section>
        <h2>Mapped Types</h2>
        <p>Permiten transformar tipos existentes creando nuevas versiones:</p>

        <h3>Ejemplo: Readonly</h3>
        <Code>{`
          type ReadonlyPersona = { readonly [K in keyof Persona]: Persona[K] };
          const p: ReadonlyPersona = { nombre: 'Ana', edad: 30, email: 'a@mail.com' };
          // p.edad = 31; // Error
        `}</Code>

        <h3>Ejemplo: Partial</h3>
        <Code>{`
          type PartialPersona = { [K in keyof Persona]?: Persona[K] };
          const p: PartialPersona = { nombre: 'Ana' }; // edad y email opcionales
        `}</Code>

        <h3>Ejemplo: Pick</h3>
        <Code>{`
          type SoloNombreEdad = { [K in 'nombre' | 'edad']: Persona[K] };
          const p: SoloNombreEdad = { nombre: 'Ana', edad: 30 };
        `}</Code>

        <h3>Ejemplo: Omit</h3>
        <Code>{`
          type SinEmail = { [K in Exclude<keyof Persona, 'email'>]: Persona[K] };
          const p: SinEmail = { nombre: 'Ana', edad: 30 };
        `}</Code>
      </section>

      <section>
        <h2>Conditional Types (Tipos condicionales)</h2>
        <p>Permiten crear tipos que dependen de una condición:</p>
        <Code>{`
          type EsString<T> = T extends string ? 'Es un string' : 'No es un string';

          type A = EsString<string>; // "Es un string"
          type B = EsString<number>; // "No es un string"
        `}</Code>

        <p>Se pueden combinar con generics para mayor flexibilidad:</p>
        <Code>{`
          type ElementoArray<T> = T extends (infer U)[] ? U : T;

          type Num = ElementoArray<number[]>; // number
          type Txt = ElementoArray<string>;   // string
        `}</Code>
      </section>

      <section>
        <h2>Exclude y Extract</h2>
        <p>Permiten manipular tipos de unión:</p>

        <Code>{`
          type Valores = 'a' | 'b' | 'c';
          type SinB = Exclude<Valores, 'b'>; // 'a' | 'c'
          type SoloB = Extract<Valores, 'b' | 'c'>; // 'b' | 'c'
        `}</Code>
      </section>

      <section>
        <h2>NonNullable</h2>
        <p>Elimina <code>null</code> y <code>undefined</code> de un tipo:</p>
        <Code>{`
          type Valor = string | null | undefined;
          type SoloString = NonNullable<Valor>; // string
        `}</Code>
      </section>

      <section>
        <h2>ReturnType y Parameters</h2>
        <p>Permiten extraer el tipo de retorno o los parámetros de una función:</p>
        <Code>{`
          function suma(a: number, b: number) { return a + b; }

          type Ret = ReturnType<typeof suma>; // number
          type Params = Parameters<typeof suma>; // [number, number]
        `}</Code>
      </section>

      <section>
        <h2>Record</h2>
        <p>Permite definir objetos con claves y valores genéricos:</p>
        <Code>{`
          type Usuarios = Record<string, Persona>;
          const usuarios: Usuarios = {
            'u1': { nombre: 'Ana', edad: 25, email: 'a@mail.com' },
            'u2': { nombre: 'Juan', edad: 30, email: 'j@mail.com' }
          };
        `}</Code>
      </section>

      <section>
        <h2>Pick y Omit</h2>
        <p>Pick selecciona propiedades, Omit las excluye:</p>
        <Code>{`
          type SoloNombre = Pick<Persona, 'nombre'>; // { nombre: string }
          type SinEdad = Omit<Persona, 'edad'>;      // { nombre: string; email: string }
        `}</Code>
      </section>

      <section>
        <h2>Buenas prácticas</h2>
        <ul>
          <li>Usar utilidades genéricas para manipular tipos sin duplicar definiciones.</li>
          <li>Combinar Conditional Types con generics para crear tipos dinámicos seguros.</li>
          <li>Evitar usar <code>any</code> cuando se puedan usar utilidades como <code>Unknown</code>, <code>Partial</code> o <code>Record</code>.</li>
          <li>Nombrar tipos derivados de manera clara para mantener la legibilidad.</li>
        </ul>
      </section>

      <section>
        <h2>Conclusión</h2>
        <p>Los tipos avanzados y utilidades de TypeScript permiten generar tipos dinámicos, seguros y reutilizables. Dominar <code>keyof</code>, <code>typeof</code>, Mapped Types, Conditional Types y utilidades como Pick, Omit, Record y ReturnType es esencial para escribir aplicaciones grandes, escalables y libres de errores de tipado.</p>
      </section>
    </>
  )
}