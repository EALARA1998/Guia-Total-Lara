import Code from "../../components/Code"

type Interfaces_Classes_TSProps = {
  
}

export default function Interfaces_Classes_TS({}:Interfaces_Classes_TSProps) {
  return (
    <>
      <h1>Interfaces y Clases en profundidad</h1>
      <p>En TypeScript, <strong>interfaces</strong> y <strong>clases</strong> son fundamentales para la <em>programación orientada a objetos (POO)</em> y para estructurar código complejo. Permiten tipar contratos, definir comportamientos y organizar la lógica de manera clara.</p>

      <section>
        <h2>Interfaces</h2>
        <p>Una <strong>interface</strong> define la forma de un objeto, especificando las propiedades y métodos que debe tener. No genera código en JavaScript, solo sirve en tiempo de compilación.</p>
        <Code>{`
          interface Usuario {
            id: number;
            nombre: string;
            email?: string; // opcional
          }

          const u: Usuario = { id: 1, nombre: "Ana" };
        `}</Code>
      </section>

      <section>
        <h2>Propiedades opcionales y de solo lectura</h2>
        <p>Podemos marcar propiedades opcionales con <code>?</code> y de solo lectura con <code>readonly</code>.</p>
        <Code>{`
          interface Producto {
            readonly id: number;
            nombre: string;
            precio?: number;
          }

          const p: Producto = { id: 10, nombre: "Laptop" };
          // p.id = 20; ❌ Error, es readonly
        `}</Code>
      </section>

      <section>
        <h2>Métodos en interfaces</h2>
        <Code>{`
          interface Animal {
            nombre: string;
            hacerSonido(): void;
          }

          const perro: Animal = {
            nombre: "Fido",
            hacerSonido() {
              console.log("Guau!");
            }
          };
        `}</Code>
      </section>

      <section>
        <h2>Extender interfaces</h2>
        <p>Se pueden combinar varias interfaces:</p>
        <Code>{`
          interface Persona {
            nombre: string;
          }

          interface Empleado extends Persona {
            id: number;
          }

          const e: Empleado = { nombre: "Carlos", id: 123 };
        `}</Code>
      </section>

      <section>
        <h2>Interfaces con índices dinámicos</h2>
        <p>Para objetos con claves desconocidas pero con un tipo definido:</p>
        <Code>{`
          interface Diccionario {
            [clave: string]: string;
          }

          const colores: Diccionario = {
            rojo: "#ff0000",
            azul: "#0000ff"
          };
        `}</Code>
      </section>

      <section>
        <h2>Diferencia entre type e interface</h2>
        <ul>
          <li><strong>interface</strong>: puede extenderse (herencia múltiple), se usa más para objetos y clases.</li>
          <li><strong>type</strong>: más flexible (permite unir tipos primitivos, condicionales, etc.).</li>
        </ul>
        <Code>{`
          type ID = string | number; // no se puede con interface
        `}</Code>
      </section>

      <hr />

      <section>
        <h2>Clases en TypeScript</h2>
        <p>Una <strong>clase</strong> define un plano para crear objetos, incluyendo atributos y métodos.</p>
        <Code>{`
          class Persona {
            nombre: string;

            constructor(nombre: string) {
              this.nombre = nombre;
            }

            saludar() {
              console.log("Hola, soy " + this.nombre);
            }
          }

          const p = new Persona("Lucía");
          p.saludar(); // "Hola, soy Lucía"
        `}</Code>
      </section>

      <section>
        <h2>Modificadores de acceso</h2>
        <ul>
          <li><code>public</code> (default) → accesible desde cualquier lugar.</li>
          <li><code>private</code> → solo accesible dentro de la clase.</li>
          <li><code>protected</code> → accesible dentro de la clase y subclases.</li>
          <li><code>readonly</code> → solo se asigna en el constructor.</li>
        </ul>
        <Code>{`
          class Cuenta {
            private saldo: number;
            readonly id: number;

            constructor(id: number, saldo: number) {
              this.id = id;
              this.saldo = saldo;
            }

            depositar(monto: number) {
              this.saldo += monto;
            }

            verSaldo() {
              return this.saldo;
            }
          }
        `}</Code>
      </section>

      <section>
        <h2>Herencia</h2>
        <p>Una clase puede extender otra con <code>extends</code>:</p>
        <Code>{`
          class Animal {
            constructor(public nombre: string) {}

            mover() {
              console.log(this.nombre + " se mueve");
            }
          }

          class Perro extends Animal {
            ladrar() {
              console.log("Guau!");
            }
          }

          const perro = new Perro("Fido");
          perro.mover();
          perro.ladrar();
        `}</Code>
      </section>

      <section>
        <h2>Clases abstractas</h2>
        <p>No se pueden instanciar directamente. Sirven de base para otras clases.</p>
        <Code>{`
          abstract class Figura {
            abstract area(): number;
          }

          class Circulo extends Figura {
            constructor(public radio: number) { super(); }
            area() {
              return Math.PI * this.radio ** 2;
            }
          }

          const c = new Circulo(10);
          console.log(c.area());
        `}</Code>
      </section>

      <section>
        <h2>Implementar interfaces en clases</h2>
        <p>Una clase puede usar <code>implements</code> para seguir el contrato de una interface.</p>
        <Code>{`
          interface Volador {
            volar(): void;
          }

          class Avion implements Volador {
            volar() {
              console.log("El avión despega");
            }
          }
        `}</Code>
      </section>

      <section>
        <h2>Propiedades y métodos estáticos</h2>
        <p>Se definen en la clase, no en la instancia.</p>
        <Code>{`
          class Utilidad {
            static PI = 3.1416;

            static sumar(a: number, b: number): number {
              return a + b;
            }
          }

          console.log(Utilidad.PI);
          console.log(Utilidad.sumar(2, 3));
        `}</Code>
      </section>

      <section>
        <h2>Getters y setters</h2>
        <p>Controlan acceso a propiedades.</p>
        <Code>{`
          class Usuario {
            private _email: string = "";

            get email(): string {
              return this._email;
            }

            set email(valor: string) {
              if (!valor.includes("@")) throw new Error("Email inválido");
              this._email = valor;
            }
          }

          const u = new Usuario();
          u.email = "test@mail.com";
          console.log(u.email);
        `}</Code>
      </section>

      <section>
        <h2>Conclusión</h2>
        <p>
          Las <strong>interfaces</strong> definen contratos de objetos o clases,
          mientras que las <strong>clases</strong> implementan lógica y herencia.
          En conjunto, permiten aplicar principios de POO como abstracción, herencia
          y encapsulación, aumentando la robustez del código.
        </p>
      </section>
    </>
  )
}