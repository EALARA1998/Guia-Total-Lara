import Code from "../../components/Code";

export default function Object_Literal_JS() {
  return (
    <>
      <h1>Objetos Literales</h1>
      <section>
        <h2>¿Qué es un objeto literal?</h2>
        <p>Un objeto literal es una forma directa de crear un objeto usando una sintaxis sencilla con llaves {`{}`}. Se compone de pares clave-valor.</p>
        <Code>{`
          const persona = {
            nombre: "Emanuel",
            edad: 25,
            profesion: "Desarrollador"
          };
        `}</Code>
      </section>
      <section>
        <h2>Estructura de un objeto literal</h2>
        <Code>{`
          const objeto = {
            clave: valor,
            clave2: valor2,
            ...
          };
        `}</Code>
        <p>Las claves (keys) son strings o símbolos (aunque sin comillas si son válidas como nombres).</p>
        <p>Los valores pueden ser cualquier tipo: número, string, booleano, función, otro objeto, etc.</p>
      </section>
      <section>
        <h2>Cómo acceder a sus propiedades</h2>
        <section>
          <h3>Notación de punto</h3>
          <Code>{`
            persona.nombre; // "Emanuel"
          `}</Code>
        </section>
        <section>
          <h3>Notación de corchetes</h3>
          <Code>{`
            persona["edad"]; // 25
          `}</Code>
        </section>
        <p>Esta forma es útil cuando:</p>
        <ul>
          <li>
            <p>La clave tiene espacios o caracteres especiales.</p>
          </li>
          <li>
            <p>La clave está en una variable.</p>
          </li>
        </ul>
        <Code>{`
          const clave = "profesion";
          persona[clave]; // "Desarrollador"
        `}</Code>
      </section>
      <section>
        <h2>Crear y modificar propiedades</h2>
        <Code>{`
          // Agregar propiedad
          persona.nacionalidad = "Hondureña";

          // Modificar propiedad
          persona.edad = 26;

          // Eliminar propiedad
          delete persona.profesion;
        `}</Code>
      </section>
      <section>
        <h2>Recorrer objetos</h2>
        <section>
          <h3>for...in</h3>
          <Code>{`
            for (let clave in persona) {
              console.log(clave, persona[clave]);
            }
          `}</Code>
        </section>
        <section>
          <h3>Object.keys(), Object.values(), Object.entries()</h3>
          <Code>{`
            Object.keys(persona);   // ["nombre", "edad", "nacionalidad"]
            Object.values(persona); // ["Emanuel", 26, "Hondureña"]
            Object.entries(persona); // [["nombre", "Emanuel"], ["edad", 26], ...]
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Métodos dentro de un objeto</h2>
        <p>Puedes agregar funciones como propiedades (métodos):</p>
        <Code>{`
          const persona = {
            nombre: "Emanuel",
            saludar: function () {
              console.log("Hola, soy " + this.nombre);
            }
          };

          persona.saludar(); // "Hola, soy Emanuel"
        `}</Code>
        <p>Desde ES6 puedes usar shorthand:</p>
        <Code>{`
          const persona = {
            nombre: "Emanuel",
            saludar() {
              console.log("Hola!");
            }
          };
        `}</Code>
      </section>
      <section>
        <h2>Objetos anidados</h2>
        <p>Los valores también pueden ser otros objetos o arrays:</p>
        <Code>{`
          const persona = {
            nombre: "Ana",
            direccion: {
              ciudad: "San Pedro Sula",
              colonia: "Villa Rica"
            },
            hobbies: ["leer", "viajar"]
          };

          persona.direccion.ciudad; // "San Pedro Sula"
        `}</Code>
      </section>
      <section>
        <h2>Claves dinámicas (computed property names)</h2>
        <p>Puedes usar variables como claves:</p>
        <Code>{`
          let propiedad = "correo";
          const usuario = {
            nombre: "Luis",
            [propiedad]: "luis@example.com"
          };
        `}</Code>
      </section>
      <section>
        <h2>Inmutabilidad con Object.freeze() y Object.seal()</h2>
        <p>Object.freeze(obj): No se pueden cambiar ni agregar ni eliminar propiedades.</p>
        <p>Object.seal(obj): Solo puedes cambiar valores existentes, no agregar ni eliminar.</p>
        <Code>{`
          Object.freeze(persona);
          persona.edad = 30; // ❌ no cambia
        `}</Code>
      </section>
      <section>
        <h2>Copia y fusión de objetos</h2>
        <section>
          <h3>Copia superficial</h3>
          <Code>{`
            const copia = { ...persona };
          `}</Code>
        </section>
        <section>
          <h3>Fusión</h3>
          <Code>{`
            const combinado = { ...obj1, ...obj2 };
          `}</Code>
        </section>
        <section>
          <h3>Object.assign()</h3>
          <Code>{`
            Object.assign({}, obj1, obj2);
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Comparación entre objetos</h2>
        <p>Los objetos se comparan por referencia, no por contenido:</p>
        <Code>{`
          const a = { nombre: "Ana" };
          const b = { nombre: "Ana" };

          a === b; // false (aunque parezcan iguales)
        `}</Code>
      </section>
      <section>
        <h2>Object literal shorthand (sintaxis corta)</h2>
        <p>Si el nombre de la clave es igual al de la variable:</p>
        <Code>{`
          const nombre = "Juan";
          const edad = 30;

          const persona = { nombre, edad }; // en vez de { nombre: nombre, edad: edad }
        `}</Code>
      </section>
      <section>
        <h2>Destructuring</h2>
        <Code>{`
          const producto1 = {
            nombre: "Tablet",
          }
          const { nombre } = producto1
          `}</Code>
        <section>
          <h3>Destructuring de una propiedad dentro de un objeto anidado</h3>
          <Code>{`
            const producto1 = {
              nombre: "Tablet",
              direccion: {
                calle: "7"
              }
            }
            const { nombre, direccion: { calle } } = producto1
            console.log(calle) // 7
          `}</Code>
        </section>
        <section>
          <h3>Destructuring de dos o mas objetos</h3>
          <Code>{`
            const producto1 = {
              nombre: "Tablet",
            }
            const producto2 = {
              nombre: "Desktop",
            }
            const { nombre } = producto1
            const { nombre: nombreProducto2 } = producto2
          `}</Code>
        </section>
      </section>
    </>
  )
}