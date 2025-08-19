import Code from "../../components/Code"

type Decorators_TSProps = {
  
}

export default function Decorators_TS({}:Decorators_TSProps) {
  return (
    <>
      <h1>Decoradores</h1>
      <p>Los decoradores son funciones especiales que se aplican a clases, métodos, propiedades o parámetros para modificar su comportamiento o añadir metadatos. Son ampliamente usados en frameworks como Angular o NestJS.</p>

      <section>
        <h2>Habilitar decoradores</h2>
        <p>Para usar decoradores, se debe activar la opción <code>experimentalDecorators</code> en <code>tsconfig.json</code>:</p>
        <Code>{`
          {
            "compilerOptions": {
              "target": "ES6",
              "experimentalDecorators": true
            }
          }
        `}</Code>
      </section>

      <section>
        <h2>Decoradores de clase</h2>
        <p>Se aplican a la declaración de una clase y reciben el constructor como argumento:</p>
        <Code>{`
          function Sellable(constructor: Function) {
            constructor.prototype.vendido = false;
            constructor.prototype.vender = function() {
              this.vendido = true;
              console.log('Producto vendido');
            };
          }

          @Sellable
          class Producto {
            constructor(public nombre: string) {}
          }

          const p = new Producto('Camiseta');
          (p as any).vender(); // Producto vendido
          console.log((p as any).vendido); // true
        `}</Code>
      </section>

      <section>
        <h2>Decoradores de propiedad</h2>
        <p>Se aplican a propiedades de la clase y reciben el target y el nombre de la propiedad:</p>
        <Code>{`
          function Capitalizar(target: any, propertyKey: string) {
            let valor = target[propertyKey];

            const getter = () => valor;
            const setter = (nuevoValor: string) => {
              valor = nuevoValor.toUpperCase();
            };

            Object.defineProperty(target, propertyKey, { get: getter, set: setter });
          }

          class Usuario {
            @Capitalizar
            nombre: string = '';
          }

          const u = new Usuario();
          u.nombre = 'ana';
          console.log(u.nombre); // 'ANA'
        `}</Code>
      </section>

      <section>
        <h2>Decoradores de método</h2>
        <p>Se aplican a métodos de una clase y reciben target, nombre del método y descriptor:</p>
        <Code>{`
          function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function(...args: any[]) {
              console.log(\`Llamando a \${propertyKey} con:\`, args);
              return metodoOriginal.apply(this, args);
            };
          }

          class Calculadora {
            @Log
            sumar(a: number, b: number) {
              return a + b;
            }
          }

          const calc = new Calculadora();
          console.log(calc.sumar(2, 3)); 
          // Llamando a sumar con: [2,3]
          // 5
        `}</Code>
      </section>

      <section>
        <h2>Decoradores de parámetro</h2>
        <p>Se aplican a parámetros de métodos y reciben target, nombre del método y posición del parámetro:</p>
        <Code>{`
          function Requerido(target: any, propertyKey: string, parameterIndex: number) {
            console.log(\`Parámetro \${parameterIndex} de \${propertyKey} es requerido\`);
          }

          class UsuarioService {
            saludar(@Requerido nombre: string) {
              console.log(\`Hola, \${nombre}\`);
            }
          }

          const s = new UsuarioService();
          s.saludar('Emanuel'); // Parámetro 0 de saludar es requerido
        `}</Code>
      </section>

      <section>
        <h2>Decoradores combinados</h2>
        <p>Se pueden combinar varios decoradores en una clase:</p>
        <Code>{`
          @Sellable
          class ProductoDecorado {
            @Capitalizar
            nombre: string = '';

            @Log
            vender() {
              console.log('Vendido!');
            }
          }

          const prod = new ProductoDecorado();
          prod.nombre = 'camisa';
          prod.vender();
          console.log(prod.nombre); // 'CAMISA'
        `}</Code>
      </section>

      <section>
        <h2>Buenas prácticas</h2>
        <ul>
          <li>Usar decoradores para añadir funcionalidad transversal (logging, validaciones, metadatos).</li>
          <li>No abusar de decoradores para lógica compleja, mantener el código limpio.</li>
          <li>Documentar bien cada decorador para evitar confusión en equipos grandes.</li>
          <li>Usar tipos explícitos para parámetros y métodos dentro del decorador.</li>
          <li>Combinar con genéricos para crear decoradores reutilizables.</li>
        </ul>
      </section>

      <section>
        <h2>Conclusión</h2>
        <p>Los decoradores en TypeScript permiten modificar o añadir comportamientos a clases, propiedades, métodos y parámetros de manera declarativa. Son muy útiles para logging, validaciones, transformación de datos y metaprogramación, especialmente en frameworks modernos.</p>
      </section>
    </>
  )
}