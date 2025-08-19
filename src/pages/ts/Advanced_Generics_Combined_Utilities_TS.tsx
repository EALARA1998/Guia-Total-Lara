import Code from "../../components/Code"

type Advanced_Generics_Combined_Utilities_TSProps = {
  
}

export default function Advanced_Generics_Combined_Utilities_TS({}:Advanced_Generics_Combined_Utilities_TSProps) {
  return (
    <>
      <h1>Genéricos Avanzados y Utilidades Combinadas</h1>
      <p>Los genéricos permiten crear funciones, clases e interfaces que funcionan con diferentes tipos sin perder seguridad de tipado. Combinarlos con utilidades avanzadas de TypeScript permite construir estructuras complejas, seguras y reutilizables.</p>

      <section>
        <h2>Genéricos básicos</h2>
        <p>Se definen con <code>&lt;T&gt;</code> para indicar un tipo variable:</p>
        <Code>{`
          function identidad<T>(valor: T): T {
            return valor;
          }

          const num = identidad<number>(42);       // 42
          const texto = identidad<string>('Hola'); // 'Hola'
        `}</Code>
      </section>

      <section>
        <h2>Genéricos en interfaces y tipos</h2>
        <p>Se pueden usar genéricos para definir estructuras de datos flexibles:</p>
        <Code>{`
          interface Caja<T> {
            contenido: T;
          }

          const cajaNumero: Caja<number> = { contenido: 123 };
          const cajaTexto: Caja<string> = { contenido: 'Hola' };
        `}</Code>
      </section>

      <section>
        <h2>Genéricos en clases</h2>
        <p>Permiten crear clases reutilizables para distintos tipos:</p>
        <Code>{`
          class Almacen<T> {
            private items: T[] = [];

            agregar(item: T) {
              this.items.push(item);
            }

            obtener(): T[] {
              return this.items;
            }
          }

          const almacenNum = new Almacen<number>();
          almacenNum.agregar(10);
          console.log(almacenNum.obtener()); // [10]

          const almacenTexto = new Almacen<string>();
          almacenTexto.agregar('Hola');
          console.log(almacenTexto.obtener()); // ['Hola']
        `}</Code>
      </section>

      <section>
        <h2>Constraints (restricciones)</h2>
        <p>Se pueden restringir los tipos que un genérico acepta:</p>
        <Code>{`
          interface TieneLongitud {
            length: number;
          }

          function mostrarLongitud<T extends TieneLongitud>(item: T): number {
            return item.length;
          }

          console.log(mostrarLongitud('Hola')); // 4
          console.log(mostrarLongitud([1,2,3])); // 3
          // console.log(mostrarLongitud(10)); // Error
        `}</Code>
      </section>

      <section>
        <h2>Genéricos con valores por defecto</h2>
        <p>Se puede definir un tipo genérico por defecto:</p>
        <Code>{`
          function crearArray<T = string>(elemento: T, cantidad: number): T[] {
            return Array(cantidad).fill(elemento);
          }

          const arr1 = crearArray('Hola', 3); // ['Hola','Hola','Hola']
          const arr2 = crearArray<number>(5, 2); // [5,5]
        `}</Code>
      </section>

      <section>
        <h2>Infer dentro de Conditional Types</h2>
        <p>Se puede extraer un tipo dentro de otro tipo condicional:</p>
        <Code>{`
          type ElementoArray<T> = T extends (infer U)[] ? U : T;

          type A = ElementoArray<number[]>; // number
          type B = ElementoArray<string>;   // string
        `}</Code>
      </section>

      <section>
        <h2>Combinación con utilidades avanzadas</h2>
        <p>Genéricos se pueden combinar con <code>Partial</code>, <code>Readonly</code>, <code>Pick</code>, <code>Omit</code> y otros:</p>
        <Code>{`
          interface Persona {
            nombre: string;
            edad: number;
            email: string;
          }

          function actualizarPersona<T extends Persona>(persona: T, cambios: Partial<T>): T {
            return { ...persona, ...cambios };
          }

          const p: Persona = { nombre: 'Ana', edad: 30, email: 'a@mail.com' };
          const pActualizada = actualizarPersona(p, { edad: 31 });
          console.log(pActualizada); // { nombre: 'Ana', edad: 31, email: 'a@mail.com' }
        `}</Code>
      </section>

      <section>
        <h2>Genéricos múltiples</h2>
        <p>Se pueden definir funciones o clases con más de un genérico:</p>
        <Code>{`
          function emparejar<K, V>(clave: K, valor: V): [K, V] {
            return [clave, valor];
          }

          const par = emparejar<string, number>('edad', 30);
          console.log(par); // ['edad', 30]
        `}</Code>
      </section>

      <section>
        <h2>Buenas prácticas</h2>
        <ul>
          <li>Usar genéricos para estructuras de datos y funciones reutilizables.</li>
          <li>Agregar constraints para restringir tipos y mejorar seguridad.</li>
          <li>Combinar genéricos con utilidades avanzadas para manipular tipos complejos.</li>
          <li>Evitar usar genéricos sin sentido, siempre que el tipo variable aporte valor.</li>
          <li>Documentar claramente qué representa cada genérico en funciones y clases.</li>
        </ul>
      </section>

      <section>
        <h2>Conclusión</h2>
        <p>Los genéricos avanzados y su combinación con utilidades TypeScript permiten crear funciones, clases e interfaces altamente reutilizables y seguras. Son fundamentales para manejar tipos dinámicos, estructuras complejas y garantizar la escalabilidad en proyectos grandes.</p>
      </section>
    </>
  )
}