import Code from "../../components/Code";

export default function Object_Literal_JS() {
  return (
    <>
      <h1>Objeto literal</h1>
      <section>
        <h2>Resumen rápido</h2>
        <p>Un <strong>objeto literal</strong> es la forma más directa de representar una estructura de datos con propiedades en JavaScript. Se escribe con llaves <code>{`{}`}</code> y almacena pares <em>clave: valor</em>. Los objetos son fundamentales: sirven para modelar datos, agrupar funciones (métodos) y representar entidades del dominio.</p>
        <Code>{`
          // ejemplo mínimo
          const persona = { nombre: "Ana", edad: 25 };
        `}</Code>
      </section>
      <section>
        <h2>Sintaxis básica</h2>
        <p>Crear un objeto literal y acceder a sus propiedades:</p>
        <Code>{`
          const coche = { marca: 'Toyota', modelo: 'Corolla', año: 2020 };
          console.log(coche.marca);        // 'Toyota'
          console.log(coche['modelo']);   // 'Corolla'
        `}</Code>
        <p>Notación de punto es más común y clara; notación de corchetes es necesaria para claves dinámicas o que contienen caracteres no válidos para la notación de punto.</p>
      </section>
      <section>
        <h2>Tipos de claves</h2>
        <ul>
          <li><strong>Strings y números</strong> (los números se convierten a string para la clave).</li>
          <li><strong>Symbols</strong> (claves únicas, no enumerables por defecto).</li>
          <li><strong>Claves computadas</strong> usando <code>[expr]</code> al crear el objeto.</li>
        </ul>
        <Code>{`
          const k = 'nivel';
          const obj = { [k]: 99, 1: 'uno' };
          console.log(obj.nivel); // 99
          console.log(obj['1']);  // 'uno'
        `}</Code>
      </section>
      <section>
        <h2>Valores válidos</h2>
        <p>Las propiedades pueden contener cualquier tipo: primitivos, objetos, funciones, arrays, otros objetos, etc.</p>
        <Code>{`
          const data = {
            id: 1,
            name: 'x',
            options: [true, false],
            meta: { created: Date.now() },
            compute() { return this.id + ':' + this.name; }
          };
        `}</Code>
      </section>
      <section>
        <h2>Agregar, modificar y eliminar propiedades</h2>
        <p>Los objetos son dinámicos:</p>
        <Code>{`
          const u = { name: 'Lu' };
          u.age = 30;           // agregar
          u.name = 'Luis';      // modificar
          delete u.age;         // eliminar propiedad
        `}</Code>
        <p>Evita usar <code>delete</code> dentro de bucles de alto rendimiento: borrarlo puede tener coste en engines JS. Para arrays, <code>splice</code> es mejor que <code>delete</code>.</p>
      </section>
      <section>
        <h2>Métodos y <code>this</code></h2>
        <p>Un método es una propiedad cuyo valor es una función. El comportamiento de <code>this</code> depende de cómo se invoque:</p>
        <Code>{`
          const perro = {
            nombre: 'Oso',
            ladrar() { console.log('Guau, soy ' + this.nombre); }
          };
          perro.ladrar(); // 'Guau, soy Oso'

          const f = perro.ladrar;
          f(); // this undefined (o global en non-strict) — pierde el contexto
        `}</Code>
        <p>Las <strong>arrow functions</strong> no crean su propio <code>this</code>, por lo que normalmente no se usan como métodos si necesitan el contexto del objeto.</p>
      </section>

      <section>
        <h2>Atajos sintácticos</h2>
        <ul>
          <li><strong>Shorthand de propiedades</strong>: cuando variable y clave comparten nombre.</li>
          <li><strong>Shorthand de métodos</strong>: omitir <code>function</code>.</li>
        </ul>
        <Code>{`
          const nombre = 'Ana';
          const edad = 30;
          const u = { nombre, edad, saludar() { return 'Hola ' + this.nombre; } };
        `}</Code>
      </section>

      <section>
        <h2>Getters y Setters (propiedades de acceso)</h2>
        <p>Permiten ejecutar lógica al leer o escribir una propiedad. Útiles para encapsular validaciones o valores derivados.</p>
        <Code>{`
          const persona = {
            nombre: 'Ana',
            apellido: 'Lopez',
            get nombreCompleto() { return this.nombre + ' ' + this.apellido; },
            set nombreCompleto(v) {
              const [n, a] = v.split(' ');
              this.nombre = n; this.apellido = a;
            }
          };
          console.log(persona.nombreCompleto); // 'Ana Lopez'
          persona.nombreCompleto = 'Luis Perez';
          console.log(persona.nombre); // 'Luis'
        `}</Code>
        <p>Evita side-effects inesperados en getters (no deberían lanzar errores por cosas comunes) y no hagas getters computacionalmente muy costosos si se acceden frecuentemente.</p>
      </section>

      <section>
        <h2>Descriptors de propiedades</h2>
        <p>Debajo de cada propiedad hay descriptores que controlan su comportamiento: <code>value</code>, <code>writable</code>, <code>enumerable</code>, <code>configurable</code>, o bien <code>get</code>/<code>set</code> para accesores.
        </p>
        <Code>{`
          Object.defineProperty(obj, 'x', {
            value: 42,
            writable: false,     // no puede reescribirse
            enumerable: false,   // no aparece en Object.keys
            configurable: false  // no puede borrarse ni cambiar descriptor
          });
        `}</Code>
        <p>Usa <code>Object.getOwnPropertyDescriptor(obj, 'prop')</code> para inspeccionar los flags.</p>
      </section>

      <section>
        <h2>Enumeración de propiedades y orden</h2>
        <p>Para iterar propiedades propias usa <code>Object.keys</code>, <code>Object.values</code> o <code>Object.entries</code>. <code>for...in</code> itera propiedades enumerables propias y heredadas (útil con <code>hasOwnProperty</code>).</p>
        <Code>{`
          const o = { 2: 'b', 1: 'a', z: 'z' };
          Object.keys(o); // ['1','2','z']  -> claves numéricas en orden ascendente, luego las strings por inserción
          for (const k in o) if (o.hasOwnProperty(k)) console.log(k, o[k]);
        `}</Code>
        <p>El orden de enumeración está definido: primero claves enteras en orden numérico, luego claves string por inserción, luego símbolos por inserción.</p>
      </section>

      <section>
        <h2>Symbols como claves</h2>
        <p>Un <code>Symbol</code> genera una clave única. Las propiedades con claves symbol no aparecen en <code>Object.keys</code> y son útiles para metadatos o para evitar colisiones con claves públicas.</p>
        <Code>{`
          const id = Symbol('id');
          const u = { name: 'A', [id]: 123 };
          Object.getOwnPropertySymbols(u); // [Symbol(id)]
        `}</Code>
      </section>

      <section>
        <h2>Prototipos y herencia</h2>
        <p>Cada objeto tiene un prototipo (cadena de prototipos). Cuando accedes a una propiedad, JS busca en el objeto y si no la encuentra, sube por la cadena.</p>
        <Code>{`
          const padre = { saludar() { return 'hola' } };
          const hijo = Object.create(padre);
          hijo.nombre = 'x';
          console.log(hijo.saludar()); // 'hola' (heredado)
        `}</Code>
        <p>Evita manipular <code>__proto__</code> frecuentemente: <code>Object.create</code> y clases son las formas claras de establecer prototipo.</p>
      </section>

      <section>
        <h2>Crear objetos sin prototipo</h2>
        <p>Para mapas de datos puros sin métodos heredados (útil para diccionarios), usa <code>Object.create(null)</code>.</p>
        <Code>{`
          const dict = Object.create(null);
          dict['toString'] = 'x'; // no sobrescribe Object.prototype.toString porque no hay prototipo
        `}</Code>
      </section>

      <section>
        <h2>Clonado y fusión (merge)</h2>
        <p><strong>Copia superficial</strong>:</p>
        <Code>{`
          const a = { x: 1, y: { z: 2 } };
          const copia = { ...a }; // shallow copy
          copia.y.z = 99; // afecta a a.y.z también
        `}</Code>
        <p><strong>Copia profunda</strong>: usa <code>structuredClone</code> (moderno), <code>JSON.parse(JSON.stringify(obj))</code> (pérdida de funciones/undefined/symbols), o librerías como lodash <code>cloneDeep</code>.
        </p>
        <Code>{`
          // fusión
          const o1 = { a: 1 }, o2 = { b: 2 };
          const merged = { ...o1, ...o2 }; // { a:1, b:2 }
          // Object.assign({}, o1, o2) similar pero muta el primer argumento
        `}</Code>
      </section>

      <section>
        <h2>Inmutabilidad y patrones funcionales</h2>
        <p>En aplicaciones modernas (React/Redux), es práctica común no mutar objetos originales: crea copias con spread o funciones inmutables para evitar efectos secundarios y facilitar el control de cambios.</p>
        <Code>{`
          // actualizar propiedad sin mutar
          const prev = { a: 1, b: 2 };
          const next = { ...prev, b: 3 }; // prev sin cambios
        `}</Code>
        <p>Para estructuras anidadas, usa utilidades (immer, produce) o técnicas de copia profunda controlada.</p>
      </section>

      <section>
        <h2>Object.defineProperty vs shorthand</h2>
        <p><code>defineProperty</code> permite definir flags finos; útil para crear APIs más robustas o propiedades no enumerables.</p>
        <Code>{`
          Object.defineProperty(obj, 'id', { value: 1, writable: false, enumerable: false });
        `}</Code>
      </section>

      <section>
        <h2>toJSON y serialización</h2>
        <p><code>JSON.stringify</code> omite funciones, <code>undefined</code> y símbolos. Define <code>toJSON</code> en un objeto para controlar cómo se serializa.</p>
        <Code>{`
          const o = { a: 1, toJSON() { return { a: '1' } } };
          JSON.stringify(o); // '{"a":"1"}'
        `}</Code>
        <p>Para parsear con transformación, usa el <code>reviver</code> en <code>JSON.parse</code>.</p>
      </section>

      <section>
        <h2>Propiedades computadas en literales y <code>__proto__</code></h2>
        <p>En un literal, una propiedad llamada exactamente <code>__proto__</code> tiene un comportamiento especial: puede establecer el prototipo del nuevo objeto. Evita usarlo accidentalmente; usa <code>Object.create</code> si necesitas controlar el prototipo.</p>
      </section>

      <section>
        <h2>Seguridad y validaciones</h2>
        <ul>
          <li>No confíes en objetos recibidos del usuario sin validación (inyección de prototipo, propiedades inesperadas).</li>
          <li>Valida y sanitiza antes de mezclar objetos en tu estado o en la base de datos.</li>
          <li>Usa <code>Object.create(null)</code> si quieres evitar ataques que exploten métodos del prototipo.</li>
        </ul>
      </section>

      <section>
        <h2>Buenas prácticas y recomendaciones</h2>
        <ul>
          <li>Usa objetos literales para representar datos simples y estructuras planas.</li>
          <li>Prefiere <code>Map</code> si necesitas claves no-string o rendimiento en operaciones de mapa dinámico.</li>
          <li>Evita mutar objetos compartidos; favorece patrones inmutables para evitar bugs sutiles.</li>
          <li>Usa <code>Object.freeze</code> para constantes de configuración, pero recuerda que es <em>shallow</em>.</li>
          <li>Para comprobar propiedad propia, usa <code>Object.prototype.hasOwnProperty.call(obj, key)</code> o <code>Reflect.has(obj, key)</code> según necesidad.</li>
          <li>Para examinar descriptores y metadatos: <code>Object.getOwnPropertyDescriptor</code> y <code>Object.getOwnPropertyDescriptors</code>.</li>
        </ul>
      </section>

      <section>
        <h2>Patrones comunes (con ejemplos cortos)</h2>
        <section>
          <h3>Factory function</h3>
          <Code>{`
            function createUser(name) {
              return { name, createdAt: Date.now() };
            }
          `}</Code>
        </section>
        <section>
          <h3>Constructor + prototipo (herencia clásica)</h3>
          <Code>{`
            function Person(name) { this.name = name }
            Person.prototype.greet = function() { return 'hi ' + this.name };
            const p = new Person('A');
          `}</Code>
        </section>
        <section>
          <h3>Revealing module (encapsular datos)</h3>
          <Code>{`
            const counter = (function(){
              let value = 0;
              return { inc() { value++ }, get() { return value } };
            }());
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Interoperabilidad con frameworks (ej. React)</h2>
        <p>En React, trata el estado como inmutable: crea nuevas referencias al actualizar objetos para que la reconciliación detecte cambios.</p>
        <Code>{`
          // useState
          const [state, setState] = useState({ a: 1, b: 2 });
          setState(prev => ({ ...prev, b: 3 }));
        `}</Code>
        <p>Para actualizaciones profundas, usa <code>useReducer</code> o librerías como <code>immer</code> para mantener código claro y rendimiento estable.</p>
      </section>
      <section>
        <h2>Herramientas útiles y utilidades</h2>
        <ul>
          <li><code>Object.keys/values/entries</code> para recorrer propiedades.</li>
          <li><code>Object.assign</code> y spread (<code>{`{...obj}`}</code>) para clonado superficial.</li>
          <li><code>Object.freeze</code>, <code>Object.seal</code>, <code>Object.preventExtensions</code> para controlar mutabilidad.</li>
          <li><code>Object.getOwnPropertyDescriptors</code> para clonar con descriptors: <code>Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))</code>.</li>
        </ul>
      </section>
      <section>
        <h2>Recorrer objetos</h2>
        <section>
          <section>
            <h3>for...in</h3>
            <Code>{`
              for (let clave in persona) {
                console.log(clave, persona[clave]);
                }
            `}</Code>
            <Code>{`
              for (const clave in persona) {
                console.log(clave, persona[clave]);
                }
            `}</Code>
          </section>
        </section>
        <section>
          <section>
            <h3>forEach</h3>
            <Code>{`
              Object.entries(persona).forEach(([clave, valor]) => {
                console.log(clave, valor);
              });
            `}</Code>
          </section>
        </section>
        <section>
          <section>
            <h3>Object.keys()</h3>
            <Code>{`
              Object.keys(persona);   // ["nombre", "edad", "nacionalidad"]
            `}</Code>
            <Code>{`
              const claves = Object.keys(persona);

              for (const clave of claves) {
                const valor = persona[clave];
                console.log(clave, valor);
              }
            `}</Code>
            <p>Es una de las formas más limpias y modernas.</p>
          </section>
        </section>
        <section>
          <section>
            <h3>Object.values()</h3>
            <Code>{`
              Object.values(persona); // ["Emanuel", 26, "Hondureña"]
              `}</Code>
            <Code>{`
              for (const valor of Object.values(persona)) {
                console.log(valor);
              }
              `}</Code>
          </section>
        </section>
        <section>
          <section>
            <h3>Object.entries()</h3>
            <Code>{`
              Object.entries(persona); // [["nombre", "Emanuel"], ["edad", 26], ...]
              `}</Code>
            <Code>{`
              for (const [clave, valor] of Object.entries(persona)) {
                console.log(clave, valor);
              }
            `}</Code>
          </section>
        </section>
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
        <h2>Comparación entre objetos</h2>
        <p>Los objetos se comparan por referencia, no por contenido:</p>
        <Code>{`
          const a = { nombre: "Ana" };
          const b = { nombre: "Ana" };

          a === b; // false (aunque parezcan iguales)
        `}</Code>
      </section>
      <section>
        <h2>Resumen final</h2>
        <p>Los objetos literales son la piedra angular de la programación en JavaScript. Dominar su sintaxis, descriptores, prototipos, patrones de inmutabilidad y serialización te permite diseñar APIs robustas, seguros y fáciles de mantener.</p>
      </section>
    </>
  )
}