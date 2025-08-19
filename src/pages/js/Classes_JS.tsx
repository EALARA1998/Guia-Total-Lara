import Code from "../../components/Code"

type Classes_JSProps = {
  
}

export default function Classes_JS({}:Classes_JSProps) {
  return (
    <>
      <h1>JavaScript — Classes</h1>
        <p>Las <strong>clases</strong> en JavaScript son una sintaxis moderna (azucar sintáctico) sobre el sistema de prototipos. Definen cómo construir objetos (instancias) con un conjunto de datos (propiedades) y comportamientos (métodos). Aunque parecen similares a las clases de otros lenguajes orientados a objetos, internamente siguen usando prototipos.</p>

      <section>
        <h2>Sintaxis básica</h2>
        <p>
          Declarar una clase y crear instancias con <code>new</code>.
        </p>
        <Code>{`
          class Persona {
            constructor(nombre, edad) {
              this.nombre = nombre;
              this.edad = edad;
            }

            saludar() {
              return \`Hola, soy \${this.nombre}\`;
            }
          }

          const p = new Persona('Ana', 30);
          console.log(p.saludar()); // Hola, soy Ana
        `}</Code>
        <p>Observa: los métodos declarados dentro del cuerpo de la clase se colocan en <code>Persona.prototype</code> (no en cada instancia), lo cual ahorra memoria. </p>
      </section>

      <section>
        <h2>Constructor y <code>new</code></h2>
        <p>El método especial <code>constructor</code> se ejecuta al crear la instancia.</p>
        <p>Llamar a la clase sin <code>new</code> provoca que no se cree la instancia correctamente (y en algunas versiones lanza error). Dentro del constructor puedes usar <code>new.target</code> para detectar si fue invocada con <code>new</code>.</p>
        <Code>{`
          class C {
            constructor(){
              if (!new.target) throw new Error('Use new C()');
            }
          }

          // const c = C(); // ReferenceError o comportamiento incorrecto
          const c = new C(); // correcto
        `}</Code>
      </section>

      <section>
        <h2>Métodos de instancia vs métodos del prototipo</h2>
        <p>Cuando defines un método en la clase, éste es no-enumerable y está en el prototipo:</p>
        <Code>{`
          class A {
            m() { return 1 }
          }
          const a = new A();
          console.log(a.m === A.prototype.m); // true
        `}</Code>
        <p> Ventaja: todos los objetos comparten la misma función. Si quieres que cada instancia tenga su propia copia (p. ej. para métodos ligados al <code>this</code>), puedes usar propiedades de clase (class fields) que asignan funciones por instancia.
        </p>
      </section>

      <section>
        <h2>Campos de clase (class fields)</h2>
        <p> Desde versiones recientes puedes declarar campos públicos y privados directamente en la clase fuera del constructor.</p>
        <Code>{`
          class Counter {
            count = 0;          // campo público (por instancia)
            #secret = 42;       // campo privado (por instancia, accesible solo dentro de la clase)

            increment() { this.count++ }
            getSecret() { return this.#secret }
          }

          const c = new Counter();
          console.log(c.count);      // 0
          // console.log(c.#secret); // SyntaxError: private field
        `}</Code>
        <p>Notas:
          <ul>
            <li>Los campos públicos se asignan por instancia, después de ejecutar el constructor.</li>
            <li>Los campos privados usan la sintaxis <code>#name</code> y están realmente encapsulados.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2>Métodos estáticos y campos estáticos</h2>
        <p>
          Usa <code>static</code> para definir funciones o datos asociados a la clase (no a la instancia).
        </p>
        <Code>{`
          class Helper {
            static version = '1.0';
            static log(msg){ console.log('[Helper]', msg) }
          }

          console.log(Helper.version); // '1.0'
          Helper.log('hola');
        `}</Code>
        <p> Los métodos estáticos son útiles para utilidades relacionadas con la clase o para fábrica de instancias (<code>Factory</code> pattern).</p>
      </section>

      <section>
        <h2>Métodos privados y públicos</h2>
        <p>Además de campos privados (<code>#x</code>), puedes declarar métodos privados:</p>
        <Code>{`
          class Greeter {
            #format(name) { return \`Hola, \${name.toUpperCase()}\` }
            greet(name) { return this.#format(name) }
          }

          const g = new Greeter();
          console.log(g.greet('Ana')); // Hola, ANA
          // g.#format('Ana') // SyntaxError`}
        </Code>
        <p>Antes de los campos privados se usaban WeakMap o convenciones (<code>_private</code>) para ocultar datos.</p>
      </section>

      <section>
        <h2>Herencia: <code>extends</code> y <code>super</code></h2>
        <p>Puedes crear subclases con <code>extends</code>. En el constructor de la subclase debes llamar <code>super(...)</code> antes de usar <code>this</code>.</p>
        <Code>{`
          class Animal {
            constructor(nombre){ this.nombre = nombre }
            speak(){ return \`\${this.nombre} hace ruido\` }
          }

          class Dog extends Animal {
            constructor(nombre, raza){
              super(nombre);
              this.raza = raza;
            }
            speak(){
              return \`\${this.nombre} ladra\`;
            }
          }

          const d = new Dog('Rex', 'Labrador');
          console.log(d.speak()); // Rex ladra
        `}</Code>
        <p><code>super</code> también puede usarse para invocar métodos del prototipo base:</p>
        <Code>{`
          class A { m() { return 'a' }}
          class B extends A { m() { return super.m() + 'b' }}
          new B().m(); // 'ab'
        `}</Code>
      </section>

      <section>
        <h2>Subclassing de objetos nativos (Array, Error, etc.)</h2>
        <p>Subclasificar objetos nativos es posible, pero tiene detalles:</p>
        <Code>{`
          class MyArray extends Array { last() { return this[this.length-1] }}
          const arr = new MyArray(1,2,3);
          console.log(arr.last()); // 3

          class MyError extends Error {
            constructor(msg){
              super(msg);
              this.name = 'MyError';
            }
          }
          throw new MyError('Falló');
        `}</Code>
        <p>Atención: en entornos antiguos o con transpilers puede ser necesario ajustar prototipos manualmente para que instanceof funcione bien. En navegadores modernos y Node moderno esto suele funcionar correctamente.</p>
      </section>

      <section>
        <h2>Class expressions y hoisting</h2>
        <p>Las clases no se "hoistean" como las funciones. Están sujetas a TDZ (Temporal Dead Zone) igual que <code>let</code>/<code>const</code>. Usar una clase antes de su declaración lanza <code>ReferenceError</code>.</p>
        <Code>{`
          // ReferenceError
          // const a = new C();
          class C {}

          // Class expression
          const D = class {
            method(){ return 'x' }
          };
        `}</Code>
      </section>

      <section>
        <h2>Getters y setters en clases</h2>
        <p>Puedes declarar accesores dentro del cuerpo de la clase.</p>
        <Code>{`
          class Rect {
            constructor(w,h){ this.w = w; this.h = h }
            get area(){ return this.w * this.h }
            set width(v){ this.w = v }
          }
          const r = new Rect(2,3);
          console.log(r.area); // 6
          r.width = 5;
          console.log(r.area); // 15
        `}</Code>
      </section>

      <section>
        <h2>Iterables y símbolos especiales</h2>
        <p>Implementar <code>[Symbol.iterator]</code> permite usar <code>for...of</code> sobre instancias.</p>
        <Code>{`
          class Range {
            constructor(from, to){ this.from = from; this.to = to }
            *[Symbol.iterator](){
              for(let i = this.from; i <= this.to; i++) yield i;
            }
          }
          for (const n of new Range(1,3)) console.log(n); // 1,2,3
        `}</Code>
        <p>Otros símbolos útiles: <code>Symbol.toStringTag</code>, <code>Symbol.hasInstance</code>, etc.</p>
      </section>

      <section>
        <h2>Private data patterns (antes de #fields)</h2>
        <p>Antes del soporte nativo para campos privados, se usaban patrones con WeakMap o closures:</p>
        <Code>{`
          // WeakMap private
          const _secret = new WeakMap();
          class S {
            constructor(v){ _secret.set(this, v) }
            getSecret(){ return _secret.get(this) }
          }
        `}</Code>
        <p>Aunque ahora #fields es preferible por claridad y soporte nativo, el patrón WeakMap sigue útil cuando necesitas compatibilidad con entornos muy antiguos.</p>
      </section>

      <section>
        <h2>Métodos enlazados (arrow methods) y binding</h2>
        <p>Los handlers que se pasan a callbacks suelen necesitar binding de <code>this</code>. Dos enfoques comunes:</p>
        <Code>{`
          class C1 {
            method(){ console.log(this.x) }
          }

          // 1) bind en constructor
          class C2 {
            constructor(){ this.method = this.method.bind(this) }
            method(){ console.log(this.x) }
          }

          // 2) arrow field (cada instancia recibe su propia función)
          class C3 {
            method = () => console.log(this.x);
          }
        `}</Code>
        <p>Nota: las funciones definidas como class fields (arrow) consumen más memoria por instancia porque se crean para cada objeto; los métodos en el prototipo son compartidos.</p>
      </section>

      <section>
        <h2>Mixins y composición</h2>
        <p>En lugar de herencia profunda, la composición suele ser preferible. Un mixin es una función que añade comportamiento a una clase.</p>
        <Code>{`
          const Eatable = Base => class extends Base {
            eat(){ return 'yum' }
          };
          class Animal {}
          class Cat extends Eatable(Animal) {}
          console.log(new Cat().eat()); // 'yum'
        `}</Code>
        <p>Composición (delegar en otros objetos) es generalmente más fácil de razonar y probar.</p>
      </section>

      <section>
        <h2>Patrones comunes</h2>
        <ul>
          <li><strong>Factory</strong>: función que crea objetos; útil si no necesitas herencia.</li>
          <li><strong>Singleton</strong>: clase con única instancia (controla en export o en la clase).</li>
          <li><strong>Builder</strong>: para construir objetos complejos paso a paso.</li>
        </ul>
      </section>

      <section>
        <h2>Serialización y clases</h2>
        <p>JSON no preserva la clase: <code>JSON.stringify</code> → <code>JSON.parse</code> devuelve objetos planos; reconstruye instancias con fábrica o <code>reviver</code>.</p>
        <Code>{`
          class Point { constructor(x,y){ this.x=x; this.y=y } }
          const p = new Point(1,2);
          const str = JSON.stringify(p); // '{"x":1,"y":2}'
          const obj = JSON.parse(str); // Plain object, no Point prototype
          const p2 = Object.assign(new Point(), obj); // reconstruye instancia
        `}</Code>
      </section>

      <section>
        <h2>Compatibilidad y transpilers</h2>
        <p>Las clases ES6 están ampliamente soportadas en navegadores modernos y Node.js. Sin embargo, características recientes (campos privados, static blocks) pueden necesitar transpiler (Babel) o un target moderno.</p>
      </section>

      <section>
        <h2>Rendimiento y memoria</h2>
        <ul>
          <li>Métodos en el prototipo son compartidos y más eficientes en memoria.</li>
          <li>Campos inicializados por instancia (incluyendo arrow methods) consumen memoria por objeto.</li>
          <li>Prefiere el prototipo para funciones pesadas o en colecciones grandes de instancias.</li>
        </ul>
      </section>

      <section>
        <h2>Errores y trampas comunes</h2>
        <ul>
          <li>Olvidar llamar <code>super()</code> en subclase antes de usar <code>this</code>.</li>
          <li>Intentar acceder a campos privados desde fuera de la clase (SyntaxError).</li>
          <li>Usar <code>class</code> con expectaciones de hoisting (no funcionan como funciones declaradas).</li>
          <li>Métodos en class fields son recreados por instancia (mayor gasto si hay muchas instancias).</li>
          <li>Transpilers antiguos pueden necesitar ajustes para subclassing de nativos (Error, Array).</li>
        </ul>
      </section>

      <section>
        <h2>Ejemplos prácticos</h2>
        <section>
          <h3>Clase iterable</h3>
          <Code>{`
            class Range {
              constructor(from, to){ this.from = from; this.to = to }
              *[Symbol.iterator](){
                for (let i = this.from; i <= this.to; i++) yield i;
              }
            }
            for (const i of new Range(1,3)) console.log(i); // 1,2,3
          `}</Code>
        </section>
        <section>
          <h3>Subclass de Error</h3>
          <Code>{`
            class ValidationError extends Error {
              constructor(msg){
                super(msg);
                this.name = 'ValidationError';
              }
            }
            throw new ValidationError('Dato inválido');
          `}</Code>
        </section>

        <section>
          <h3>Campo privado + método async</h3>
          <Code>{`
            class SecretFetcher {
              #token;
              constructor(token){ this.#token = token }
              async fetchData(url){
                const r = await fetch(url, { headers: { Authorization: this.#token } });
                return r.json();
              }
            }
          `}</Code>
        </section>

        <section>
          <h3>Static initialization block</h3>
          <Code>{`
            class Config {
              static host;
              static {
                // lógica de inicialización compleja al cargar la clase
                this.host = process?.env?.HOST ?? 'localhost';
              }
            }
          `}</Code>
        </section>
      </section>

      <section>
        <h2>Conclusión</h2>
        <p>Las clases son una herramienta poderosa: ofrecen una sintaxis clara para crear objetos y modelar comportamientos. Entender la diferencia entre la sintaxis de clases y el modelo prototípico subyacente te ayudará a elegir patrones correctos, optimizar memoria y evitar errores sutiles.</p>
      </section>
    </>
  )
}