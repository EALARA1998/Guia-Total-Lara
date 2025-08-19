import Code from "../../components/Code"

type Generics_TSProps = {
  
}

export default function Generics_TS({}:Generics_TSProps) {
  return (
    <>
      <h1>Genéricos en profundidad</h1>
      <p>
      Los <strong>genéricos</strong> son una forma de crear <em>código reutilizable y flexible</em>
      que funciona con múltiples tipos de datos sin perder el tipado fuerte. 
      Se representan con <code>{`T`}</code> (o cualquier otro identificador).
      </p>

      <section>
        <h2>Concepto básico</h2>
        <Code>{`
          // Sin genérico → pierde flexibilidad
          function identidadNumero(valor: number): number {
            return valor;
          }

          // Con genérico → adaptable a cualquier tipo
          function identidad<T>(valor: T): T {
            return valor;
          }

          console.log(identidad<string>("Hola"));
          console.log(identidad<number>(100));
        `}</Code>
      </section>

      <section>
        <h2>Genéricos en funciones</h2>
        <Code>{`
          function invertir<T>(items: T[]): T[] {
            return items.reverse();
          }

          console.log(invertir<number>([1,2,3])); // [3,2,1]
          console.log(invertir<string>(["a","b","c"])); // ["c","b","a"]
        `}</Code>
      </section>

      <section>
        <h2>Genéricos con interfaces</h2>
        <p>Permite que una interface sea flexible con tipos de datos.</p>
        <Code>{`
          interface Caja<T> {
            valor: T;
          }

          const cajaNumero: Caja<number> = { valor: 123 };
          const cajaTexto: Caja<string> = { valor: "Hola" };
        `}</Code>
      </section>

      <section>
        <h2>Genéricos en clases</h2>
        <Code>{`
          class Pila<T> {
            private elementos: T[] = [];

            push(e: T): void {
              this.elementos.push(e);
            }

            pop(): T | undefined {
              return this.elementos.pop();
            }
          }

          const pilaNum = new Pila<number>();
          pilaNum.push(10);
          console.log(pilaNum.pop());

          const pilaStr = new Pila<string>();
          pilaStr.push("hola");
        `}</Code>
      </section>

      <section>
        <h2>Restricciones en genéricos</h2>
        <p>
          Podemos restringir los tipos aceptados con <code>extends</code>.  
          Ejemplo: solo objetos con cierta propiedad.
        </p>
        <Code>{`
          interface ConNombre {
            nombre: string;
          }

          function mostrarNombre<T extends ConNombre>(obj: T): void {
            console.log(obj.nombre);
          }

          mostrarNombre({ nombre: "Ana", edad: 25 }); // ✅
          // mostrarNombre(123); ❌ Error
        `}</Code>
      </section>

      <section>
        <h2>Varios parámetros genéricos</h2>
        <p>Podemos usar más de un parámetro.</p>
        <Code>{`
          function combinar<T, U>(a: T, b: U): [T, U] {
            return [a, b];
          }

          const r = combinar<string, number>("Edad", 30);
          console.log(r); // ["Edad", 30]
        `}</Code>
      </section>

      <section>
        <h2>Genéricos con funciones flecha</h2>
        <Code>{`
          const identidad = <T>(valor: T): T => valor;

          console.log(identidad("Test"));
        `}</Code>
      </section>

      <section>
        <h2>Utilidades con genéricos</h2>
        <p>TypeScript ofrece tipos genéricos predefinidos:</p>
        <ul>
          <li><code>Array{`T`}</code> → lista de elementos.</li>
          <li><code>Promise{`T`}</code> → resultado asíncrono de tipo T.</li>
          <li><code>ReadonlyArray{`T`}</code> → array inmutable.</li>
          <li><code>Record{`K,V`}</code> → objeto con claves K y valores V.</li>
          <li><code>Partial{`T`}</code> → vuelve opcionales todas las props.</li>
          <li><code>Pick{`T,K`}</code> → selecciona props específicas.</li>
          <li><code>Omit{`T,K`}</code> → omite props específicas.</li>
        </ul>
      </section>

      <section>
        <h2>Genéricos y keyof</h2>
        <p>Podemos usar genéricos junto con <code>keyof</code> para manipular claves de un objeto.</p>
        <Code>{`
          function obtenerPropiedad<T, K extends keyof T>(obj: T, clave: K): T[K] {
            return obj[clave];
          }

          const persona = { nombre: "Ana", edad: 25 };
          console.log(obtenerPropiedad(persona, "nombre")); // "Ana"
        `}</Code>
      </section>

      <section>
        <h2>Conclusión</h2>
        <p>
          Los genéricos permiten escribir código reutilizable y seguro, adaptándose
          a distintos tipos de datos sin perder tipado fuerte. Son clave para librerías,
          estructuras de datos y APIs.
        </p>
      </section>
    </>
  )
}