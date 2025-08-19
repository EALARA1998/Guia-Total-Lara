import Code from "../../components/Code"

type Classes_OOP_TSProps = {
  
}

export default function Classes_OOP_TS({}:Classes_OOP_TSProps) {
  return (
    <>
      <h1>Clases y Programación Orientada a Objetos</h1>
      <p>TypeScript soporta Programación Orientada a Objetos (POO) completa, incluyendo clases, herencia, encapsulamiento, modificadores de acceso, propiedades y métodos estáticos. Esto permite escribir código más organizado, modular y fácil de mantener.</p>

      <section>
        <h2>Clases básicas</h2>
        <p>Una clase define un objeto con propiedades y métodos:</p>
        <Code>{`
          class Persona {
            nombre: string;
            edad: number;

            constructor(nombre: string, edad: number) {
              this.nombre = nombre;
              this.edad = edad;
            }

            saludar(): void {
              console.log(\`Hola, mi nombre es \${this.nombre} y tengo \${this.edad} años\`);
            }
          }

          const p = new Persona('Emanuel', 25);
          p.saludar();
        `}</Code>

        <p><strong>Buenas prácticas:</strong> Usar el constructor para inicializar propiedades y métodos para comportamientos.</p>
      </section>

      <section>
        <h2>Modificadores de acceso</h2>
        <p>TypeScript soporta <code>public</code>, <code>private</code> y <code>protected</code>:</p>

        <Code>{`
          class Persona {
            public nombre: string;       // accesible desde cualquier lugar
            private edad: number;        // solo accesible dentro de la clase
            protected email: string;     // accesible en la clase y subclases

            constructor(nombre: string, edad: number, email: string) {
              this.nombre = nombre;
              this.edad = edad;
              this.email = email;
            }

            mostrarEdad(): void {
              console.log(this.edad);
            }
          }

          const p = new Persona('Ana', 30, 'ana@mail.com');
          console.log(p.nombre); // funciona
          // console.log(p.edad); // Error: privado
          // console.log(p.email); // Error: protegido
        `}</Code>

        <p><strong>Tip:</strong> Usa <code>private</code> y <code>protected</code> para encapsular datos y mantener la integridad del objeto.</p>
      </section>

      <section>
        <h2>Propiedades y métodos estáticos</h2>
        <p>Los miembros estáticos pertenecen a la clase, no a la instancia:</p>
        <Code>{`
          class Calculadora {
            static PI: number = 3.1416;

            static areaCirculo(radio: number): number {
              return Calculadora.PI * radio * radio;
            }
          }

          console.log(Calculadora.PI);
          console.log(Calculadora.areaCirculo(5));
        `}</Code>
      </section>

      <section>
        <h2>Herencia</h2>
        <p>Una clase puede heredar de otra usando <code>extends</code>:</p>
        <Code>{`
          class Empleado extends Persona {
            salario: number;

            constructor(nombre: string, edad: number, email: string, salario: number) {
              super(nombre, edad, email);
              this.salario = salario;
            }

            mostrarSalario(): void {
              console.log(\`Salario: \$\${this.salario}\`);
            }
          }

          const e = new Empleado('Carlos', 35, 'carlos@mail.com', 5000);
          e.saludar();          // método heredado
          e.mostrarSalario();   // método propio
        `}</Code>
      </section>

      <section>
        <h2>Getters y Setters</h2>
        <p>Permiten controlar el acceso a propiedades privadas:</p>
        <Code>{`
          class Persona {
            private _edad: number;

            constructor(edad: number) {
              this._edad = edad;
            }

            get edad(): number {
              return this._edad;
            }

            set edad(valor: number) {
              if (valor < 0) throw new Error('Edad no puede ser negativa');
              this._edad = valor;
            }
          }

          const p = new Persona(25);
          console.log(p.edad); // 25
          p.edad = 30;         // modifica correctamente
          // p.edad = -5;      // Error
        `}</Code>
      </section>

      <section>
        <h2>Clases abstractas</h2>
        <p>Las clases abstractas no pueden instanciarse directamente, y sirven como base para otras clases:</p>
        <Code>{`
          abstract class Animal {
            abstract hacerSonido(): void;

            mover(): void {
              console.log('Se mueve');
            }
          }

          class Perro extends Animal {
            hacerSonido(): void {
              console.log('Guau');
            }
          }

          const perro = new Perro();
          perro.mover();
          perro.hacerSonido();
        `}</Code>
      </section>

      <section>
        <h2>Interfaces en clases</h2>
        <p>Las interfaces pueden usarse para garantizar que una clase implemente ciertos métodos o propiedades:</p>
        <Code>{`
          interface Volador {
            volar(): void;
          }

          class Pajaro implements Volador {
            volar(): void {
              console.log('El pájaro está volando');
            }
          }

          const p = new Pajaro();
          p.volar();
        `}</Code>
      </section>

      <section>
        <h2>Clases genéricas</h2>
        <p>Las clases también pueden ser genéricas para trabajar con distintos tipos:</p>
        <Code>{`
          class Caja<T> {
            contenido: T;

            constructor(valor: T) {
              this.contenido = valor;
            }

            mostrar(): void {
              console.log(this.contenido);
            }
          }

          const cajaNumero = new Caja<number>(10);
          const cajaTexto = new Caja<string>('Hola');
          cajaNumero.mostrar(); // 10
          cajaTexto.mostrar();  // Hola
        `}</Code>
      </section>

      <section>
        <h2>Buenas prácticas</h2>
        <ul>
          <li>Usar <code>private</code> y <code>protected</code> para encapsular propiedades sensibles.</li>
          <li>Usar <code>readonly</code> para propiedades que no deben modificarse.</li>
          <li>Preferir constructores para inicializar objetos.</li>
          <li>Usar clases abstractas para definir plantillas y evitar duplicación.</li>
          <li>Implementar interfaces para asegurar consistencia en métodos y propiedades.</li>
          <li>Evitar lógica compleja dentro de los constructores; delegar a métodos privados si es necesario.</li>
        </ul>
      </section>

      <section>
        <h2>Conclusión</h2>
        <p>El uso de clases en TypeScript permite aplicar POO completa, con encapsulamiento, herencia, polimorfismo y genéricos. Esto hace que el código sea más organizado, reutilizable y fácil de mantener, especialmente en proyectos grandes y escalables.</p>
      </section>
    </>
  )
}