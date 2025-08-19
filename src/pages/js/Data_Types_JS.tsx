import Code from "../../components/Code";

export default function Data_Types_JS() {
  return (
    <>
      <h1>Tipo de datos</h1>
      <section>
        <h2>Dos grandes familias</h2>
        <section>
          <h3>Primitivos (simples, inmutables):</h3>
          <p>number, string, boolean, null, undefined, symbol, bigint.</p>
        </section>
        <section>
          <h3>De referencia (objetos, mutables):</h3>
          <p>todo lo demás (object, array, function, map, set, date, etc.).</p>
        </section>
          <p>“Inmutable” = si “cambias” un string o un número, en realidad creas otro valor nuevo.</p>
          <p>“De referencia” = las variables guardan una referencia al objeto. Copiar la variable no copia el objeto, solo la referencia.</p>
      </section>
      <section>
        <h2>Primitivos</h2>
        <section>
          <h3>number (números con decimales)</h3>
          <ul>
            <li>JS usa un formato de coma flotante (a veces habrá pequeñísimas imprecisiones).
              <Code>{`
                0.1 + 0.2            // 0.30000000000000004
                (0.1 + 0.2).toFixed(2) // "0.30"
              `}</Code>
            </li>
            <li>Cosas especiales: Infinity, -Infinity, NaN (no es un número válido), y también existe -0.</li>
            <li>Conversión rápida:
              <Code>{`
                Number("42")     // 42
                parseInt("101", 2) // 5 (binario)
                parseFloat("3.14") // 3.14
                Number.isNaN(NaN)  // true
              `}</Code>
            </li>
            <li>Formateo:
              <Code>{`
                (1234.567).toFixed(2)     // "1234.57"
                (255).toString(16)        // "ff" (hex)
              `}</Code>
            </li>
          </ul>
        </section>
        <section>
          <h3>string (texto)</h3>
          <ul>
            <li>Son inmutables y miden su longitud en unidades UTF-16 (un emoji puede contar como 2).</li>
            <li>Declaración:
              <Code>{`
                'Hola'; "Hola"; \`Hola \${nombre}\` // template literals (multilínea e interpolación)
              `}</Code>
            </li>
            <li>Métodos útiles (devuelven nuevos strings):
              <Code>{`
                "JavaScript".includes("Script") // true
                "JavaScript".slice(0,4)         // "Java"
                "hola mundo".toUpperCase()      // "HOLA MUNDO"
                "abc abc".replace("abc","x")    // "x abc"
                " a  ".trim()                   // "a"
              `}</Code>
            </li>
            <li>Para contar “caracteres reales” (emojis, etc.):
              <Code>{`
                [..."💖"].length // 1
              `}</Code>
            </li>
          </ul>
        </section>
        <section>
          <h3>boolean (verdadero/falso)</h3>
          <ul>
            <li>Solo true o false.</li>
            <li>Para convertir “a booleano”:
              <Code>{`
                !!"texto"   // true
                !!""        // false
              `}</Code>
            </li>
            <li>Falsy (se comportan como falso): false, 0, -0, 0n, "", null, undefined, NaN. Todo lo demás es truthy.</li>
          </ul>
        </section>
        <section>
          <h3>null y 2.5 undefined</h3>
          <ul>
            <li>undefined: algo no tiene valor (ej., variable declarada sin asignar).</li>
            <li>null: ausencia intencional de valor (tú decides poner null).</li>
            <li>Operadores amigos:
              <Code>{`
                const x = 0;
                x || 10   // 10 (porque 0 es falsy)
                x ?? 10   // 0  (nullish coalescing: solo reemplaza null/undefined)

                const obj = null;
                obj?.prop // undefined (no explota aunque obj sea null/undefined)
              `}</Code>
            </li>
          </ul>
        </section>
        <section>
          <h3>symbol (identificadores únicos)</h3>
          <ul>
            <li>Sirven como claves únicas de propiedades para evitar choques de nombres.
              <Code>{`
                const id = Symbol("id");
                const user = { nombre: "Ana", [id]: 123 };
                user[id] // 123 (no sale en for...in ni Object.keys)
              `}</Code>
            </li>
          </ul>
        </section>
        <section>
          <h3>bigint (enteros enormes)</h3>
          <ul>
            <li>Para enteros más grandes que lo que soporta number.
              <Code>{`
                const a = 9007199254740993n; // BigInt
                a + 2n        // ok
                // a + 2      // ❌ no mezclar BigInt con number directamente
                5n / 2n       // 2n (divide truncando)
              `}</Code>
            </li>
          </ul>
        </section>
      </section>
      <section>
        <h2>No primitivos</h2>
        <section>
          <h3>Objeto literal</h3>
          <ul>
            <li>Estructura “clave → valor”.
              <Code>{`
                const persona = { nombre: "Ana", edad: 25 };
                persona.nombre       // "Ana"
                persona["edad"]      // 25
              `}</Code>
            </li>
            <li>Copia superficial (ojo con anidados):
              <Code>{`
                const copia = { ...persona }; // spread
              `}</Code>
            </li>
            <li>“Congelar” para evitar cambios:
              <Code>{`
                Object.freeze(persona); // superficial
              `}</Code>
            </li>
          </ul>
        </section>
        <section>
          <h3>Arrays (listas ordenadas)</h3>
          <ul>
            <li>Tienen índices desde 0 y una propiedad length.
              <Code>{`
                const nums = [1,2,3];
                nums.push(4);     // [1,2,3,4]
                nums.pop();       // [1,2,3]
                nums.includes(2); // true
                nums.slice(1,3);  // [2,3] (no toca el original)
              `}</Code>
            </li>
            <li>Métodos estrella (no mutan el original, salvo que se indique):
              <Code>{`
                [1,2,3].map(x => x*2)             // [2,4,6]
                [1,2,3,4].filter(x => x%2===0)    // [2,4]
                [1,2,3].reduce((a,x)=>a+x,0)      // 6
                [10,2,30].sort()                  // ["10","2","30"] ❌ orden lexicográfico
                [10,2,30].sort((a,b)=>a-b)        // [2,10,30] ✅
                [1,2,3].find(x=>x>1)              // 2
                [1,2,3].every(x=>x>0)             // true
                [1,2,3].some(x=>x>2)              // true
              `}</Code>
            </li>
            <p>Tip: para evitar “sorpresas”, prefiere no mutar el array original (usa map, filter, slice, etc.).</p>
          </ul>
        </section>
        <section>
          <h3>Funciones (código reutilizable)</h3>
          <ul>
            <li>Son valores y objetos a la vez.
              <Code>{`
                function saludar(nombre){ return \`Hola \${nombre}\`; }
                const despedir = (nombre) => \`Chao \${nombre}\`;
              `}</Code>
            </li>
            <li>Arrow functions: this no cambia (toman el this “de afuera”), no tienen arguments, y no sirven como constructor con new.</li>
          </ul>
        </section>
        <section>
          <h3>Map y Set (colecciones modernas)</h3>
          <ul>
            <li>Map: diccionario donde las claves pueden ser cualquier cosa (incluidos objetos).
              <Code>{`
                const m = new Map();
                const clave = { id: 1 };
                m.set(clave, "valor");
                m.get(clave); // "valor"
                m.has(clave); // true
              `}</Code>
            </li>
            <li>Set: conjunto sin duplicados.
              <Code>{`
                const s = new Set([1,1,2,3]); // {1,2,3}
                s.add(2);  // sigue {1,2,3}
                s.has(3);  // true
                [...s];    // [1,2,3]
              `}</Code>
            </li>
          </ul>
          <p>Cuándo usar: Map/Set para datos y consultas más claras/rápidas; Object/Array para estructuras simples.</p>
        </section>
        <section>
          <h3>Date (fechas y horas)</h3>
          <Code>{`
            const d = new Date();
            d.getFullYear();     // año local
            d.toISOString();     // "2025-08-18T02:30:00.000Z" (UTC)
          `}</Code>
          <p>Nota: Date usa tu zona horaria por defecto; toISOString siempre va en UTC.</p>
        </section>
        <section>
          <h3>RegExp (expresiones regulares)</h3>
          <ul>
            <li>Para buscar/patronear texto.
              <Code>{`
                const re = /\w+@\w+\.\w+/i;
                re.test("a@b.com");     // true
                "correo a@b.com".match(/\w+@\w+\.\w+/g) // ["a@b.com"]
              `}</Code>
            </li>
            <li>Flags comunes: i (ignora may/min), g (global), m (multilínea).</li>
          </ul>
        </section>
        <section>
          <h3>Error (manejo de errores)</h3>
          <Code>{`
            try {
              throw new Error("Algo salió mal");
            } catch (e) {
              console.error(e.message);
            } finally {
              // se ejecuta siempre
            }
          `}</Code>
        </section>
        <section>
          <h3>Binarios (cuando toque)</h3>
          <ul>
            <li>Para trabajo de bajo nivel: ArrayBuffer, Uint8Array, etc. Útil en archivos binarios, imágenes, WebGL/Canvas, cripto.</li>
          </ul>
        </section>
      </section>
      <section>
        <h2>¿De qué tipo es algo? (checks prácticos)</h2>
        <Code>{`
          typeof 123          // "number"
          typeof "hola"       // "string"
          typeof true         // "boolean"
          typeof undefined    // "undefined"
          typeof Symbol()     // "symbol"
          typeof 10n          // "bigint"
          typeof {}           // "object"
          typeof []           // "object"  ← Array también dice "object"
          typeof (()=>{})     // "function"
        `}</Code>
        <ul>
          <li>Peculiaridad histórica:
            <Code>{`
              typeof null         // "object"  ← sí, es raro, acostúmbrate
            `}</Code>
          </li>
          <li>Checks cotidianos:
            <Code>{`
              Array.isArray(x)    // ¿es array?
              x === null          // ¿es null?
              x != null           // ¿NO es null NI undefined? (truco útil)
            `}</Code>
          </li>
          <li>¿Objeto “plano”?
            <Code>{`
              x && typeof x === "object" && x.constructor === Object
            `}</Code>
          </li>
        </ul>
      </section>
      <section>
        <h2>Igualdad y comparación</h2>
        <ul>
          <li>Estricta: === y !== (la buena práctica casi siempre).
            <Code>{`
              "5" === 5   // false
            `}</Code>
          </li>
          <li>No estricta: == y != (conversión automática; evita a menos que sepas lo que haces).
            <Code>{`
              "5" == 5    // true (convierte "5" a número)
              null == undefined // true (único caso “especial” entre ellos)
            `}</Code>
          </li>
          <li>Object.is (para casos finos):
            <Code>{`
              Object.is(NaN, NaN) // true (con === da false)
              Object.is(0, -0)    // false (con === da true)
            `}</Code>
          </li>
        </ul>
      </section>
      <section>
        <h2>Conversión y “coerción”</h2>
        <ul>
          <li>A número:
            <Code>{`
              Number("42")     // 42
              +"42"            // 42 (unario +)
              Number("")       // 0
              Number("foo")    // NaN
            `}</Code>
          </li>
          <li>A string:
            <Code>{`
              String(123)      // "123"
              (255).toString(16) // "ff"
            `}</Code>
          </li>
          <li>A boolean:
            <Code>{`
              Boolean("")      // false
              Boolean("0")     // true
              !!"hola"         // true
            `}</Code>
          </li>
          <li>Valores por defecto:
            <Code>{`
              // || reemplaza si el valor es falsy (0, "", false, etc.)
              const paginas = entrada || 10;

              // ?? solo reemplaza si es null o undefined (recomendado)
              const paginas2 = entrada ?? 10;
            `}</Code>
          </li>
        </ul>
      </section>
      <section>
        <h2>JSON (guardar/enviar datos)</h2>
        <ul>
          <li>Serializar (objeto → texto):
            <Code>{`
              JSON.stringify({ a: 1, b: 2 }, null, 2)
              // '{
              //   "a": 1,
              //   "b": 2
              // }'
            `}</Code>
          </li>
          <li>Parsear (texto → objeto):
            <Code>{`
              JSON.parse('{"a":1}')
            `}</Code>
          </li>
        </ul>
        <p>Limitaciones: JSON no guarda funciones, undefined, symbol; Date se convierte a texto; no soporta referencias circulares.</p>
      </section>
      <section>
        <h2>Copias: superficial vs profunda</h2>
        <ul>
          <li>Superficial (shallow): copia de primer nivel; lo anidado sigue compartido.
            <Code>{`
              const a = { u: { x: 1 } };
              const b = { ...a };   // o Object.assign({}, a)
              b.u.x = 2;
              a.u.x        // 2 (¡compartían la referencia!)
            `}</Code>
          </li>
          <li>Profunda (deep): clona todo lo anidado.
            <Code>{`
              // Opción moderna (cuando está disponible):
              const c = structuredClone(a);

              // Opción “JSON” (pierde funciones/fechas/symbol y falla con ciclos):
              const d = JSON.parse(JSON.stringify(a));
            `}</Code>
          </li>
        </ul>
      </section>
      <section>
        <h2>Iteración y “array-like”</h2>
        <ul>
          <li>for...of recorre valores (ideal para arrays, strings, Map/Set):
            <Code>{`
              for (const letra of "hola") console.log(letra);
            `}</Code>
          </li>
          <li>for...in recorre claves (incluye heredadas; menos recomendable para arrays).</li>
          <li>Array-like (parecen arrays pero no lo son: tienen length y posiciones):
            <Code>{`
              const nodos = document.querySelectorAll("div"); // NodeList
              Array.from(nodos) // lo convierte a array real
            `}</Code>
          </li>
        </ul>
      </section>
      <section>
        <h2>Consejos prácticos</h2>
        <ul>
          <li>Para números: usa Number.isFinite, Number.isNaN y un comparador en sort.</li>
          <li>Para arrays: Array.isArray y métodos no mutables (map, filter, slice).</li>
          <li>Para defaults que no rompan con 0, "" o false: usa ?? en lugar de ||.</li>
          <li>Evita == y prefiere ===.</li>
          <li>Para clonado profundo general: structuredClone (cuando exista).</li>
          <li>Evita new Number/String/Boolean; usa los primitivos simples.</li>
        </ul>
      </section>
      <section>
        <h2>Resumen</h2>
        <ul>
          <li>¿Es array? → Array.isArray(v)</li>
          <li>¿Número finito real? → Number.isFinite(v)</li>
          <li>¿NaN real? → Number.isNaN(v)</li>
          <li>Comparar -0 / NaN? → Object.is(a, b)</li>
          <li>Default sin romper 0/""/false → v ?? defecto</li>
          <li>Clonado profundo → structuredClone(v)</li>
        </ul>
      </section>
    </>
  )
}