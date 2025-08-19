import Code from "../../components/Code"

type Advanced_Classes_Inheritance_TSProps = {
  
}

export default function Advanced_Classes_Inheritance_TS({}:Advanced_Classes_Inheritance_TSProps) {
  return (
    <>
      <h1>Clases Avanzadas y Herencia</h1>
      <p>TypeScript extiende las clases de JavaScript añadiendo tipado, modificadores de acceso, propiedades readonly, métodos abstractos, interfaces y herencia completa, lo que permite escribir código orientado a objetos más seguro y mantenible.</p>

      <section>
        <h2>Clases básicas</h2>
        <p>Una clase puede definirse con propiedades, constructor y métodos:</p>
        <Code>{`
          class Persona {
            nombre: string;
            edad: number;

            constructor(nombre: string, edad: number) {
              this.nombre = nombre;
              this.edad = edad;
            }

            saludar(): string {
              return \`Hola, soy \${this.nombre} y tengo \${this.edad} años\`;
            }
          }

          const p = new Persona('Emanuel', 25);
          console.log(p.saludar()); // Hola, soy Emanuel y tengo 25 años
        `}</Code>
      </section>

      <section>
        <h2>Modificadores de acceso</h2>
        <p>TypeScript soporta <code>public</code>, <code>private</code> y <code>protected</code>:</p>
        <Code>{`
          class Persona {
            public nombre: string;     // accesible desde fuera
            private dni: string;       // solo accesible dentro de la clase
            protected edad: number;    // accesible dentro y en subclases

            constructor(nombre: string, dni: string, edad: number) {
              this.nombre = nombre;
              this.dni = dni;
              this.edad = edad;
            }

            mostrarEdad(): number {
              return this.edad;
            }
          }

          const p = new Persona('Ana', '12345', 30);
          console.log(p.nombre);   // Ana
          // console.log(p.dni);   // Error
          console.log(p.mostrarEdad()); // 30
        `}</Code>
      </section>

      <section>
        <h2>Propiedades readonly</h2>
        <p>Permiten declarar propiedades que solo pueden asignarse en la declaración o constructor:</p>
        <Code>{`
          class Producto {
            readonly id: number;
            constructor(id: number) {
              this.id = id;
            }
          }

          const prod = new Producto(1);
          // prod.id = 2; // Error: solo lectura
        `}</Code>
      </section>

      <section>
        <h2>Métodos y propiedades estáticas</h2>
        <p>Pueden ser accedidos directamente desde la clase:</p>
        <Code>{`
          class Matematica {
            static PI: number = 3.1416;

            static areaCirculo(radio: number): number {
              return Matematica.PI * radio * radio;
            }
          }

          console.log(Matematica.PI);             // 3.1416
          console.log(Matematica.areaCirculo(2)); // 12.5664
        `}</Code>
      </section>

      <section>
        <h2>Herencia</h2>
        <p>Permite crear subclases que extienden funcionalidad de una clase base:</p>
        <Code>{`
          class Empleado extends Persona {
            salario: number;

            constructor(nombre: string, edad: number, salario: number) {
              super(nombre, edad); // llama al constructor de Persona
              this.salario = salario;
            }

            mostrarSalario(): number {
              return this.salario;
            }
          }

          const e = new Empleado('Juan', 28, 500);
          console.log(e.saludar());       // Hola, soy Juan y tengo 28 años
          console.log(e.mostrarSalario()); // 500
        `}</Code>
      </section>

      <section>
        <h2>Clases abstractas</h2>
        <p>Permiten definir una clase base que no puede instanciarse directamente, con métodos abstractos que deben implementarse en subclases:</p>
        <Code>{`
          abstract class Animal {
            constructor(public nombre: string) {}
            abstract hacerSonido(): void; // método abstracto
            mover(): void {
              console.log(\`\${this.nombre} se mueve\`);
            }
          }

          class Perro extends Animal {
            hacerSonido(): void {
              console.log('Guau!');
            }
          }

          const dog = new Perro('Firulais');
          dog.mover();       // Firulais se mueve
          dog.hacerSonido(); // Guau!
        `}</Code>
      </section>

      <section>
        <h2>Interfaces y clases</h2>
        <p>Las clases pueden implementar interfaces, asegurando la presencia de ciertos métodos y propiedades:</p>
        <Code>{`
          interface ITrabajador {
            trabajar(): void;
          }

          class Ingeniero implements ITrabajador {
            trabajar(): void {
              console.log('Diseñando sistemas');
            }
          }

          const ing = new Ingeniero();
          ing.trabajar(); // Diseñando sistemas
        `}</Code>
      </section>

      <section>
        <h2>Getter y Setter</h2>
        <p>Permiten controlar acceso a propiedades:</p>
        <Code>{`
          class Cuenta {
            private _saldo: number = 0;

            get saldo(): number {
              return this._saldo;
            }

            set saldo(valor: number) {
              if(valor >= 0) this._saldo = valor;
            }
          }

          const c = new Cuenta();
          c.saldo = 100;
          console.log(c.saldo); // 100
          c.saldo = -50;
          console.log(c.saldo); // 100
        `}</Code>
      </section>

      <section>
        <h2>Buenas prácticas</h2>
        <ul>
          <li>Usar modificadores de acceso para encapsular datos.</li>
          <li>Preferir propiedades readonly cuando los valores no deban cambiar.</li>
          <li>Usar clases abstractas para definir contratos y comportamiento base.</li>
          <li>Implementar interfaces para definir contratos claros y reutilizables.</li>
          <li>Evitar herencias profundas; preferir composición cuando sea posible.</li>
        </ul>
      </section>

      <section>
        <h2>Conclusión</h2>
        <p>Las clases avanzadas y herencia en TypeScript permiten un desarrollo orientado a objetos completo y seguro, combinando encapsulación, abstracción, herencia, interfaces y tipado estático. Esto mejora la escalabilidad y mantenibilidad de aplicaciones complejas.</p>
      </section>
    </>
  )
}