import Code from "../../components/Code";

export default function Basic_Types_Annotations_TS() {
  return (
    <>
      <h1>Tipos Básicos y Anotaciones</h1>
      <p>Los tipos básicos son la base del tipado en TypeScript. Permiten declarar el tipo de variables, parámetros de funciones, objetos, arrays, tuplas y más. Esto ayuda a detectar errores en tiempo de compilación, mejora la legibilidad del código y facilita el autocompletado en editores como VS Code.</p>

      <section>
        <h2>Tipos primitivos</h2>
        <p>Los tipos primitivos son los más básicos en TypeScript y equivalen a los de JavaScript, pero con tipado explícito:</p>
        <Code>{`
          let nombre: string = 'Emanuel'; // Texto
          let edad: number = 25;          // Números
          let activo: boolean = true;     // Booleanos
          let nulo: null = null;          // Null
          let indefinido: undefined = undefined; // Undefined
        `}</Code>

        <p><strong>Inferencia automática de tipos:</strong> TypeScript puede inferir tipos sin anotación explícita:</p>
        <Code>{`
          let ciudad = 'Tegucigalpa'; // string inferido
          let temperatura = 28;        // number inferido
          let encendido = false;       // boolean inferido
        `}</Code>

        <p><strong>Buenas prácticas:</strong></p>
        <ul>
          <li>Siempre que sea posible, usa tipos explícitos para mejorar la claridad.</li>
          <li>Evita usar <code>var</code>, prefiere <code>let</code> o <code>const</code>.</li>
        </ul>
      </section>

      <section>
        <h2>Tipos especiales</h2>
        <p>TypeScript tiene tipos que sirven para casos particulares:</p>

        <h3>any</h3>
        <p>Permite asignar cualquier tipo de valor a una variable. Desactiva la verificación de tipos, por lo que se recomienda usarlo solo en migraciones o casos muy específicos:</p>
        <Code>{`
          let cualquiera: any = 42;
          cualquiera = 'hola';
          cualquiera = true;
        `}</Code>

        <h3>unknown</h3>
        <p>Más seguro que <code>any</code>, requiere comprobar el tipo antes de usarlo:</p>
        <Code>{`
          let desconocido: unknown = 'hola';
          if (typeof desconocido === 'string') {
            console.log(desconocido.length); // Seguro
          }
        `}</Code>

        <h3>void</h3>
        <p>Usado en funciones que no retornan ningún valor:</p>
        <Code>{`
          function saludar(): void {
            console.log('Hola');
          }
        `}</Code>

        <h3>never</h3>
        <p>Indica valores que nunca ocurren, útil para funciones que siempre lanzan errores o loops infinitos:</p>
        <Code>{`
          function lanzarError(): never {
            throw new Error('Esto nunca retorna');
          }

          function loopInfinito(): never {
            while(true) {}
          }
        `}</Code>

        <h3>null y undefined</h3>
        <p>Representan ausencia de valor. Se recomienda usar <code>strictNullChecks</code> en <code>tsconfig.json</code>:</p>
        <Code>{`
          let nulo: null = null;
          let indefinido: undefined = undefined;

          let valorOpcional: string | null = null; // Union para valores opcionales
        `}</Code>
      </section>

      <section>
        <h2>Arrays y tuplas</h2>
        <p>TypeScript permite declarar arrays con tipos y tuplas con orden y tipos fijos:</p>

        <h3>Arrays</h3>
        <Code>{`
          let numeros: number[] = [1, 2, 3];
          let palabras: Array<string> = ['a','b','c'];

          // Arrays de cualquier tipo
          let mixto: (string | number)[] = ['hola', 10, 'mundo'];
        `}</Code>

        <h3>Tuplas</h3>
        <p>Permiten definir un array con tipos fijos en un orden específico:</p>
        <Code>{`
          let tupla: [string, number] = ['edad', 30];
          // tupla = [30, 'edad']; // Error: orden incorrecto

          // Tuplas con elementos opcionales
          let datos: [string, number?, boolean?] = ['Ana'];
          datos = ['Ana', 25, true];
        `}</Code>
      </section>

      <section>
        <h2>Enumeraciones (Enums)</h2>
        <p>Los enums permiten definir un conjunto de valores con nombre, lo que hace el código más legible:</p>

        <h3>Enums numéricos</h3>
        <Code>{`
          enum Color { Rojo, Verde, Azul }
          let c: Color = Color.Verde; // 1
          console.log(Color[c]); // 'Verde'
        `}</Code>

        <h3>Enums con valores explícitos</h3>
        <Code>{`
          enum Status { Activo = 1, Inactivo = 0 }
          let s: Status = Status.Activo;
        `}</Code>

        <h3>Enums de strings</h3>
        <Code>{`
          enum Direccion { Norte = 'N', Sur = 'S', Este = 'E', Oeste = 'O' }
          let d: Direccion = Direccion.Norte;
        `}</Code>
      </section>

      <section>
        <h2>Tipos literales y uniones</h2>
        <p>Permiten restringir valores exactos o combinar tipos:</p>

        <h3>Tipos literales</h3>
        <Code>{`
          type Direccion = 'Norte' | 'Sur' | 'Este' | 'Oeste';
          let dir: Direccion = 'Norte';
          // dir = 'Centro'; // Error
        `}</Code>

        <h3>Uniones</h3>
        <Code>{`
          let valor: string | number;
          valor = 'hola';
          valor = 10;
        `}</Code>

        <h3>Combinación</h3>
        <Code>{`
          type Respuesta = 'si' | 'no' | 1 | 0;
          let r: Respuesta = 'si';
          r = 0; // válido
        `}</Code>
      </section>

      <section>
        <h2>Type Assertions</h2>
        <p>Permiten indicar al compilador que un valor tiene un tipo específico. Útiles cuando TypeScript no puede inferirlo:</p>
        <Code>{`
          let algo: unknown = 'texto';
          let largo: number = (algo as string).length;

          // alternativa usando sintaxis antigua
          let largo2: number = (<string>algo).length;
        `}</Code>

        <p><strong>Advertencia:</strong> Usar solo cuando se está seguro del tipo real, de lo contrario puede generar errores en tiempo de ejecución.</p>
      </section>

      <section>
        <h2>Buenas prácticas</h2>
        <ul>
          <li>Usar siempre <code>strict</code> activado en <code>tsconfig.json</code>.</li>
          <li>Declarar tipos explícitamente cuando sea posible.</li>
          <li>Evitar <code>any</code> salvo casos específicos.</li>
          <li>Combinar uniones y literales para valores opcionales o restringidos.</li>
          <li>Usar type assertions con precaución.</li>
        </ul>
      </section>

      <section>
        <h2>Conclusión</h2>
        <p>Los tipos básicos y anotaciones en TypeScript constituyen la base de todo proyecto. Dominar variables, arrays, tuplas, enums, uniones y type assertions es fundamental antes de avanzar a interfaces, clases, generics y tipos avanzados.</p>
      </section>
    </>
  )
}