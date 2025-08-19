import Code from "../../components/Code"

type Advanced_Functions_Types_TSProps = {
  
}

export default function Advanced_Functions_Types_TS({}:Advanced_Functions_Types_TSProps) {
  return (
    <>
      <h1>Funciones Avanzadas y Tipos de Función</h1>
      <p>En TypeScript, las funciones pueden ser tipadas de manera precisa, incluyendo parámetros opcionales, por defecto, rest, sobrecarga y genéricos. Esto mejora la seguridad y autocompletado en el código.</p>

      <section>
        <h2>Tipos de parámetros</h2>
        <p>Se puede especificar el tipo de cada parámetro:</p>
        <Code>{`
          function sumar(a: number, b: number): number {
            return a + b;
          }

          const resultado: number = sumar(5, 10);
        `}</Code>

        <p>Parámetros opcionales se indican con <code>?</code>:</p>
        <Code>{`
          function saludar(nombre: string, saludo?: string): string {
            return \`\${saludo || 'Hola'}, \${nombre}\`;
          }

          saludar('Emanuel');       // "Hola, Emanuel"
          saludar('Emanuel', 'Hi'); // "Hi, Emanuel"
        `}</Code>

        <p>Parámetros por defecto:</p>
        <Code>{`
          function multiplicar(a: number, b: number = 2): number {
            return a * b;
          }

          multiplicar(5);    // 10
          multiplicar(5, 3); // 15
        `}</Code>
      </section>

      <section>
        <h2>Rest parameters</h2>
        <p>Permite recibir un número indefinido de argumentos:</p>
        <Code>{`
          function sumarTodos(...numeros: number[]): number {
            return numeros.reduce((acc, n) => acc + n, 0);
          }

          sumarTodos(1,2,3,4); // 10
        `}</Code>
      </section>

      <section>
        <h2>Funciones anónimas y arrow functions</h2>
        <p>Se pueden tipar variables que contienen funciones:</p>
        <Code>{`
          const resta: (a: number, b: number) => number = (x, y) => x - y;

          // Tipado automático
          const multiplicar = (a: number, b: number) => a * b;
        `}</Code>
      </section>

      <section>
        <h2>Funciones como tipos</h2>
        <p>Se pueden definir tipos específicos para funciones:</p>
        <Code>{`
          type Operacion = (a: number, b: number) => number;

          const suma: Operacion = (x, y) => x + y;
          const resta: Operacion = (x, y) => x - y;
        `}</Code>

        <p>Esto permite crear APIs flexibles y consistentes.</p>
      </section>

      <section>
        <h2>Función sobrecargada (Overloads)</h2>
        <p>Permite definir múltiples firmas para una función:</p>
        <Code>{`
          function combinar(a: string, b: string): string;
          function combinar(a: number, b: number): number;
          function combinar(a: any, b: any): any {
            return a + b;
          }

          combinar(1, 2);       // 3
          combinar('Hola, ', 'Mundo'); // 'Hola, Mundo'
        `}</Code>

        <p>Útil cuando la función puede recibir distintos tipos de argumentos y se desea tipado estricto.</p>
      </section>

      <section>
        <h2>Funciones genéricas</h2>
        <p>Permiten que la función trabaje con cualquier tipo, manteniendo seguridad de tipos:</p>
        <Code>{`
          function identidad<T>(valor: T): T {
            return valor;
          }

          const num = identidad<number>(10);
          const texto = identidad('Hola');
        `}</Code>
      </section>

      <section>
        <h2>Callbacks y funciones como parámetros</h2>
        <p>Se pueden tipar funciones que reciben otras funciones como parámetros:</p>
        <Code>{`
          function procesarArray<T>(arr: T[], callback: (item: T) => void) {
            arr.forEach(callback);
          }

          procesarArray([1,2,3], n => console.log(n * 2));
        `}</Code>
      </section>

      <section>
        <h2>Funciones que retornan funciones</h2>
        <p>Se pueden tipar funciones que devuelven otras funciones:</p>
        <Code>{`
          function crearMultiplicador(factor: number): (n: number) => number {
            return (n) => n * factor;
          }

          const doble = crearMultiplicador(2);
          console.log(doble(5)); // 10
        `}</Code>
      </section>

      <section>
        <h2>Buenas prácticas</h2>
        <ul>
          <li>Usar tipos explícitos para parámetros y retorno.</li>
          <li>Preferir arrow functions para callbacks y funciones anónimas.</li>
          <li>Usar funciones genéricas para reutilización segura.</li>
          <li>Evitar <code>any</code> como tipo de parámetro o retorno.</li>
          <li>Utilizar sobrecarga de funciones para casos donde la función puede aceptar múltiples tipos.</li>
        </ul>
      </section>

      <section>
        <h2>Conclusión</h2>
        <p>Dominar las funciones avanzadas y los tipos de función en TypeScript permite escribir código más seguro, modular y reutilizable, aprovechando al máximo el tipado estático y mejorando la autocompletación y la mantenibilidad del proyecto.</p>
      </section>
    </>
  )
}