import Code from "../../components/Code"

type Interfaces_Types_Advanced_TSProps = {
  
}

export default function Interfaces_Types_Advanced_TS({}:Interfaces_Types_Advanced_TSProps) {
  return (
    <>
      <h1>Interfaces y Tipos Avanzados</h1>
      <p>Después de dominar los tipos básicos, podemos definir estructuras más complejas con interfaces, type aliases y tipos avanzados como uniones, intersecciones y type guards. Esto permite escribir código más seguro, legible y escalable.</p>

      <section>
        <h2>Interfaces</h2>
        <p>Las interfaces definen la forma de un objeto, indicando qué propiedades y métodos debe tener:</p>
        <Code>{`
          interface Persona {
            nombre: string;
            edad: number;
            activo?: boolean; // propiedad opcional
          }

          const p: Persona = { nombre: 'Juan', edad: 28 };
        `}</Code>

        <p>Se pueden extender interfaces para reutilizar y combinar propiedades:</p>
        <Code>{`
          interface Empleado extends Persona {
            salario: number;
          }

          const e: Empleado = { nombre: 'Ana', edad: 30, salario: 5000 };
        `}</Code>

        <p>También se pueden usar interfaces para funciones:</p>
        <Code>{`
          interface Suma {
            (a: number, b: number): number;
          }

          const sumar: Suma = (x, y) => x + y;
        `}</Code>

        <p>Y para arrays de objetos:</p>
        <Code>{`
          interface Producto {
            id: number;
            nombre: string;
            precio: number;
          }

          const productos: Producto[] = [
            { id: 1, nombre: 'Manzana', precio: 1 },
            { id: 2, nombre: 'Pan', precio: 2 }
          ];
        `}</Code>

        <p><strong>Buenas prácticas:</strong> Siempre usar interfaces cuando quieras definir la forma de objetos complejos y permitir extensibilidad mediante <code>extends</code>.</p>
      </section>

      <section>
        <h2>Type Aliases</h2>
        <p>Permiten crear un nombre para un tipo, que puede ser primitivo, objeto, unión, intersección o incluso genérico:</p>
        <Code>{`
          type ID = string | number;
          let usuarioId: ID = 'abc123';
          usuarioId = 456;
        `}</Code>

        <p>Se pueden usar para objetos complejos:</p>
        <Code>{`
          type Producto = { id: number; nombre: string; precio: number };
          const p: Producto = { id: 1, nombre: 'Leche', precio: 2 };
        `}</Code>

        <p><strong>Diferencia con interfaces:</strong> Las interfaces se pueden extender y declarar varias veces; los type aliases no. Pero los type aliases permiten uniones e intersecciones.</p>
      </section>

      <section>
        <h2>Union Types (Tipos Unión)</h2>
        <p>Permiten que una variable o parámetro acepte más de un tipo:</p>
        <Code>{`
          let valor: string | number;
          valor = 'hola';
          valor = 10;
        `}</Code>

        <p>Se usan mucho en funciones que aceptan distintos tipos de argumentos:</p>
        <Code>{`
          function imprimir(valor: string | number) {
            console.log(valor);
          }

          imprimir('Hola');
          imprimir(100);
        `}</Code>
      </section>

      <section>
        <h2>Intersection Types (Tipos Intersección)</h2>
        <p>Permiten combinar varios tipos en uno solo, obligando a que tenga todas las propiedades:</p>
        <Code>{`
          type A = { a: number };
          type B = { b: string };
          type C = A & B;

          const obj: C = { a: 1, b: 'texto' };
        `}</Code>

        <p>Útil para combinar interfaces y crear objetos más complejos:</p>
        <Code>{`
          interface Persona { nombre: string; edad: number }
          interface Empleado { salario: number }

          type EmpleadoCompleto = Persona & Empleado;
          const emp: EmpleadoCompleto = { nombre: 'Ana', edad: 30, salario: 5000 };
        `}</Code>
      </section>

      <section>
        <h2>Type Guards (Protección de Tipos)</h2>
        <p>Permiten comprobar tipos en tiempo de ejecución y actuar en consecuencia:</p>
        <Code>{`
          function mostrar(valor: string | number) {
            if (typeof valor === 'string') {
              console.log('Es un string de longitud', valor.length);
            } else {
              console.log('Es un número', valor);
            }
          }

          mostrar('Hola'); // 'Es un string de longitud 4'
          mostrar(10);     // 'Es un número 10'
        `}</Code>

        <p>También se pueden usar operadores <code>instanceof</code> para objetos:</p>
        <Code>{`
          class Perro { ladrar() { console.log('Guau'); } }
          class Gato { maullar() { console.log('Miau'); } }

          function sonido(animal: Perro | Gato) {
            if (animal instanceof Perro) {
              animal.ladrar();
            } else {
              animal.maullar();
            }
          }
        `}</Code>
      </section>

      <section>
        <h2>Literal Types</h2>
        <p>Permiten restringir valores exactos que una variable puede tomar:</p>
        <Code>{`
          type Direccion = 'Norte' | 'Sur' | 'Este' | 'Oeste';
          let dir: Direccion = 'Norte';
          // dir = 'Centro'; // Error
        `}</Code>

        <p>Combinados con uniones y type aliases permiten definir parámetros altamente controlados:</p>
        <Code>{`
          type Respuesta = 'si' | 'no' | 1 | 0;
          let r: Respuesta = 'si';
          r = 0; // válido
          // r = 2; // Error
        `}</Code>
      </section>

      <section>
        <h2>Objetos complejos y anidación</h2>
        <p>Las interfaces y type aliases permiten definir objetos con propiedades anidadas:</p>
        <Code>{`
          interface Direccion {
            calle: string;
            ciudad: string;
            codigoPostal: string;
          }

          interface Persona {
            nombre: string;
            edad: number;
            direccion: Direccion;
          }

          const p: Persona = {
            nombre: 'Emanuel',
            edad: 25,
            direccion: { calle: '1ra Av', ciudad: 'Tegucigalpa', codigoPostal: '11101' }
          };
        `}</Code>
      </section>

      <section>
        <h2>Buenas prácticas</h2>
        <ul>
          <li>Usar interfaces para definir la forma de objetos y type aliases para combinaciones o uniones.</li>
          <li>Combinar union y intersection types según la necesidad de flexibilidad o restricción.</li>
          <li>Usar type guards siempre que una variable pueda ser más de un tipo.</li>
          <li>Evitar <code>any</code> en objetos complejos; preferir <code>unknown</code> con type guards.</li>
        </ul>
      </section>

      <section>
        <h2>Conclusión</h2>
        <p>Dominar interfaces y tipos avanzados es crucial para escribir código seguro y escalable en TypeScript. Permite definir estructuras complejas, combinar tipos, proteger variables en tiempo de ejecución y establecer reglas claras para la forma de los datos. Esto es la base antes de pasar a clases, genéricos y utilidades avanzadas.</p>
      </section>
    </>
  )
}