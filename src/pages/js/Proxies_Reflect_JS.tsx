import Code from "../../components/Code"

type Proxies_Reflect_JSProps = {
  
}

export default function Proxies_Reflect_JS({}:Proxies_Reflect_JSProps) {
  return (
    <>
      <h1>Proxies y Reflect</h1>
      <p>Los <strong>Proxies</strong> en JavaScript permiten interceptar y redefinir operaciones fundamentales sobre objetos, como lectura, escritura, eliminación de propiedades o llamadas a funciones. <strong>Reflect</strong> es un objeto global que proporciona métodos para realizar operaciones estándar sobre objetos de manera programática, útiles junto con Proxies para mantener comportamiento base mientras se interceptan acciones.</p>

      <section>
        <h2>Sintaxis básica de Proxy</h2>
        <p>Un Proxy se crea pasando un objeto objetivo y un handler que define los traps (interceptores) para operaciones específicas.</p>
        <Code>{`
          const target = { nombre: 'Ana', edad: 30 };
          const handler = {
            get(obj, prop){
              console.log('Accediendo a', prop);
              return obj[prop];
            },
            set(obj, prop, value){
              console.log('Asignando', prop, 'a', value);
              obj[prop] = value;
              return true;
            }
          };
          const proxy = new Proxy(target, handler);

          console.log(proxy.nombre); // Accediendo a nombre \n Ana
          proxy.edad = 31;           // Asignando edad a 31
        `}</Code>
      </section>

      <section>
        <h2>Traps más comunes</h2>
        <p>Algunos de los traps más usados:</p>
        <ul>
          <li><code>get(target, prop, receiver)</code> — intercepta lectura de propiedad.</li>
          <li><code>set(target, prop, value, receiver)</code> — intercepta escritura.</li>
          <li><code>has(target, prop)</code> — intercepta <code>in</code>.</li>
          <li><code>deleteProperty(target, prop)</code> — intercepta <code>delete obj[prop]</code>.</li>
          <li><code>ownKeys(target)</code> — intercepta <code>Object.keys</code>, <code>Object.getOwnPropertyNames</code>.</li>
          <li><code>apply(target, thisArg, args)</code> — intercepta llamadas a funciones.</li>
          <li><code>construct(target, args, newTarget)</code> — intercepta uso de <code>new</code>.</li>
        </ul>
        <Code>{`
          const obj = { x: 10 };
          const proxy = new Proxy(obj, {
            has(target, prop) { 
              console.log('Checking', prop);
              return prop in target;
            },
            deleteProperty(target, prop) {
              console.log('Deleting', prop);
              return delete target[prop];
            }
          });

          'x' in proxy; // Checking x
          delete proxy.x; // Deleting x
        `}</Code>
      </section>

      <section>
        <h2>Reflect</h2>
        <p>Reflect expone métodos que realizan las operaciones estándar de JavaScript, con la misma semántica que las operaciones nativas. Útil para combinar con Proxies y delegar comportamiento.</p>
        <Code>{`
          const obj = { a: 1 };
          Reflect.get(obj, 'a');           // 1
          Reflect.set(obj, 'b', 2);       // true
          Reflect.has(obj, 'a');          // true
          Reflect.deleteProperty(obj, 'a'); // true
        `}</Code>
      </section>

      <section>
        <h2>Uso de Reflect dentro de traps</h2>
        <p>Cuando interceptas operaciones con un Proxy, puedes usar Reflect para preservar el comportamiento base mientras agregas lógica adicional:</p>
        <Code>{`
          const user = { name: 'Ana', age: 25 };
          const proxy = new Proxy(user, {
            get(target, prop){
              console.log('Leyendo propiedad:', prop);
              return Reflect.get(target, prop);
            },
            set(target, prop, value){
              if(prop === 'age' && value < 0) throw new Error('Edad inválida');
              return Reflect.set(target, prop, value);
            }
          });

          console.log(proxy.name); // Leyendo propiedad: name \n Ana
          proxy.age = 30;          // correcto
          // proxy.age = -5;       // Error: Edad inválida
        `}</Code>
      </section>

      <section>
        <h2>Proxies para validación</h2>
        <p>Los proxies son útiles para validar datos antes de ser asignados:</p>
        <Code>{`
          function createValidator(target, schema){
            return new Proxy(target, {
              set(obj, prop, value){
                if(schema[prop] && !schema[prop](value)){
                  throw new Error('Valor inválido para ' + prop);
                }
                return Reflect.set(obj, prop, value);
              }
            });
          }

          const user = createValidator({}, {
            age: v => typeof v === 'number' && v >= 0,
            name: v => typeof v === 'string'
          });

          user.age = 25;  // correcto
          // user.age = -1; // Error: Valor inválido para age
        `}</Code>
      </section>

      <section>
        <h2>Proxies para logging y debugging</h2>
        <p>Se pueden usar para interceptar y registrar todas las operaciones sobre un objeto:</p>
        <Code>{`
          const obj = { a: 1, b: 2 };
          const proxy = new Proxy(obj, {
            get(target, prop){ console.log('GET', prop); return Reflect.get(target, prop); },
            set(target, prop, value){ console.log('SET', prop, value); return Reflect.set(target, prop, value); },
            deleteProperty(target, prop){ console.log('DELETE', prop); return Reflect.deleteProperty(target, prop); }
          });

          proxy.a;       // GET a
          proxy.b = 5;   // SET b 5
          delete proxy.a; // DELETE a
        `}</Code>
      </section>

      <section>
        <h2>Proxies para objetos dinámicos o virtuales</h2>
        <p>Proxies pueden simular objetos dinámicos que calculan valores bajo demanda o representan datos virtuales:</p>
        <Code>{`
          const virtualArray = new Proxy([], {
            get(target, prop){
              if(!isNaN(prop)) return Number(prop) * 2; // cada índice devuelve valor calculado
              return target[prop];
            }
          });

          console.log(virtualArray[0]); // 0
          console.log(virtualArray[5]); // 10
        `}</Code>
      </section>

      <section>
        <h2>Evitar trampas comunes</h2>
        <ul>
          <li>Usar Reflect para mantener consistencia del objeto original.</li>
          <li>Cuidado con traps recursivos que llaman a sí mismos indirectamente.</li>
          <li>Evitar modificar propiedades internas críticas (como <code>constructor</code>) a menos que sea intencional.</li>
          <li>Proxies no interceptan propiedades privadas declaradas con <code>#</code>.</li>
        </ul>
      </section>

      <section>
        <h2>Ejemplos avanzados</h2>
        <section>
          <h3>Proxies para observables</h3>
          <Code>{`
            function observable(obj, callback){
              return new Proxy(obj, {
                set(target, prop, value){
                  const old = target[prop];
                  const result = Reflect.set(target, prop, value);
                  callback(prop, old, value);
                  return result;
                }
              });
            }

            const user = observable({ name: 'Ana', age: 30 }, (prop, old, value) => {
              console.log(\`Propiedad \${prop} cambió de \${old} a \${value}\`);
            });

            user.name = 'Luis'; // Propiedad name cambió de Ana a Luis
          `}</Code>
        </section>

        <section>
          <h3>Proxy para funciones (trap apply)</h3>
          <Code>{`
            function sum(a, b){ return a + b; }
            const proxySum = new Proxy(sum, {
              apply(target, thisArg, args){
                console.log('Llamando sum con', args);
                return Reflect.apply(target, thisArg, args);
              }
            });

            console.log(proxySum(2,3)); // Llamando sum con [2,3] \n 5
          `}</Code>
        </section>

        <section>
          <h3>Proxy para constructores (trap construct)</h3>
          <Code>{`
            class Person {
              constructor(name){ this.name = name; }
            }

            const ProxyPerson = new Proxy(Person, {
              construct(target, args){
                console.log('Creando persona con', args[0]);
                return Reflect.construct(target, args);
              }
            });

            const p = new ProxyPerson('Ana'); // Creando persona con Ana
            console.log(p.name); // Ana
          `}</Code>
        </section>
      </section>

      <section>
        <h2>Conclusión</h2>
        <p>Proxies y Reflect ofrecen un nivel avanzado de metaprogramación en JavaScript, permitiendo interceptar, validar, modificar y extender el comportamiento de objetos y funciones de manera controlada. Su uso correcto permite logging, validación, objetos virtuales y programación reactiva, mientras que Reflect asegura que las operaciones base del objeto sigan funcionando de forma consistente.</p>
      </section>
    </>
  )
}