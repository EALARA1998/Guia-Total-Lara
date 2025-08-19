import Code from "../../components/Code";

export default function Arrays_JS() {
  return (
    <>
      <h1>Arrays (Arreglos / Listas)</h1>
      <section>
        <h2>¿Qué es un array?</h2>
        <p>Un array es un contenedor de datos ordenado que puede almacenar cualquier tipo de valor: números, strings, booleanos, objetos, incluso otros arrays (arrays multidimensionales).</p>
        <ul>
          <li>Los elementos se acceden por índice, empezando en 0.</li>
          <li>Los arrays son objetos en JavaScript, por lo que tienen propiedades y métodos.</li>
        </ul>
        <Code>{`
          let numeros = [1, 2, 3, 4, 5];
          let nombres = ["Ana", "Luis", "Emanuel"];
          let mixto = [1, "Hola", true, {nombre: "Ana"}];
        `}</Code>
      </section>
      <section>
        <h2>Propiedades importantes</h2>
        <section>
          <h3>length: devuelve la cantidad de elementos del array</h3>
          <Code>{`
            let arr = [1, 2, 3];
            console.log(arr.length); // 3
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Acceso y modificación</h2>
        <section>
          <h3>Acceso por índice:</h3>
          <Code>{`
            let arr = ["A", "B", "C"];
            console.log(arr[0]); // "A"
          `}</Code>
        </section>
        <section>
          <h3>Modificación:</h3>
          <Code>{`
            arr[1] = "Z"; // ["A", "Z", "C"]
          `}</Code>
        </section>
        <section>
          <h3>Agregar elementos directamente por índice:</h3>
          <Code>{`
            arr[3] = "D"; // ["A", "Z", "C", "D"]
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Creación de arrays</h2>
        <section>
          <h3>Literal:</h3>
          <Code>{`
            let arr = [1,2,3];
          `}</Code>
        </section>
        <section>
          <h3>Constructor Array():</h3>
          <Code>{`
            let arr = new Array(5); // array con 5 elementos vacíos
          `}</Code>
        </section>
        <section>
          <h3>Array.from():</h3>
          <Code>{`
            let arr = Array.from("Hola"); // ["H","o","l","a"]
          `}</Code>
        </section>
        <section>
          <h3>Array.of():</h3>
          <Code>{`
            let arr = Array.of(1,2,3); // [1,2,3]
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Métodos de manipulación (Mutables)</h2>
        <p>Estos métodos modifican el array original:</p>
        <table>
          <thead>
            <tr>
              <th>Método</th>
              <th>Descripción</th>
              <th>Ejemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>push()</td>
              <td>Agrega uno o varios elementos al final</td>
              <td>arr.push(6)</td>
            </tr>
            <tr>
              <td>pop()</td>
              <td>Elimina el último elemento y lo retorna</td>
              <td>arr.pop()</td>
            </tr>
            <tr>
              <td>unshift()</td>
              <td>Agrega elementos al inicio</td>
              <td>arr.unshift(0)</td>
            </tr>
            <tr>
              <td>shift()</td>
              <td>Elimina el primer elemento y lo retorna</td>
              <td>arr.shift()</td>
            </tr>
            <tr>
              <td>splice()</td>
              <td>Agrega/elimina elementos en cualquier posición</td>
              <td>arr.splice(1,2,"X")</td>
            </tr>
            <tr>
              <td>sort()</td>
              <td>Ordena elementos (alfabéticamente por defecto)</td>
              <td>arr.sort()</td>
            </tr>
            <tr>
              <td>reverse()</td>
              <td>Invierte el orden del array</td>
              <td>arr.reverse()</td>
            </tr>
            <tr>
              <td>fill()</td>
              <td>Llena elementos con un valor</td>
              <td>arr.fill(0,1,3)</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>Métodos de acceso y transformación (No mutables)</h2>
        <p>Estos métodos no cambian el array original, retornan uno nuevo:</p>
        <table>
          <thead>
            <tr>
              <th>Método</th>
              <th>Descripción</th>
              <th>Ejemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>slice()</td>
              <td>Extrae un sub-array sin modificar el original</td>
              <td>arr.slice(1,3)</td>
            </tr>
            <tr>
              <td>concat()</td>
              <td>Une arrays</td>
              <td>arr.concat([4,5])</td>
            </tr>
            <tr>
              <td>map()</td>
              <td>Aplica función a cada elemento, retorna nuevo</td>
              <td>{`arr.map(x => x*2)`}</td>
            </tr>
            <tr>
              <td>filter()</td>
              <td>Filtra elementos según condición</td>
              <td>{`arr.filter(x => x>2)`}</td>
            </tr>
            <tr>
              <td>reduce()</td>
              <td>Reduce array a un valor</td>
              <td>{`arr.reduce((acc,x)=>acc+x,0)`}</td>
            </tr>
            <tr>
              <td>forEach()</td>
              <td>Itera sobre cada elemento (no retorna array)</td>
              <td>{`arr.forEach(x=>console.log(x))`}</td>
            </tr>
            <tr>
              <td>find()</td>
              <td>Devuelve primer elemento que cumpla condición</td>
              <td>{`arr.find(x=>x>2)`}</td>
            </tr>
            <tr>
              <td>findIndex()</td>
              <td>Índice del primer elemento que cumpla</td>
              <td>{`arr.findIndex(x=>x>2)`}</td>
            </tr>
            <tr>
              <td>includes()</td>
              <td>Comprueba si contiene un valor</td>
              <td>arr.includes(3)</td>
            </tr>
            <tr>
              <td>join()</td>
              <td>Une elementos en string</td>
              <td>arr.join("-")</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>Iteración avanzada</h2>
        <section>
          <h3>for...of → recorre elementos directamente</h3>
          <Code>{`
            for(let valor of arr){
              console.log(valor);
            }
          `}</Code>
        </section>
        <section>
          <h3>for...in → recorre índices</h3>
          <Code>{`
            for(let i in arr){
              console.log(i, arr[i]);
            }
          `}</Code>
        </section>
        <section>
          <h3>forEach()</h3>
          <Code>{`
            arr.forEach((valor, index)=>console.log(index, valor));
          `}</Code>
        </section>
        <p>Métodos funcionales (map, filter, reduce) → permiten programación funcional elegante</p>
      </section>
      <section>
        <h2>Arrays multidimensionales</h2>
        <section>
          <h3>Arrays que contienen arrays:</h3>
          <Code>{`
            let matriz = [
              [1,2,3],
              [4,5,6],
              [7,8,9]
            ];
            console.log(matriz[1][2]); // 6
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Spread operator y destructuring</h2>
        <section>
          <h3>Spread para copiar arrays:</h3>
          <Code>{`
            let arr1 = [1,2,3];
            let arr2 = [...arr1,4,5]; // [1,2,3,4,5]
          `}</Code>
        </section>
        <section>
          <h3>Destructuring:</h3>
          <Code>{`
            let [a,b,c] = arr2; // a=1, b=2, c=3
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Buenas prácticas</h2>
        <ul>
          <li>Usar métodos no mutables siempre que sea posible (map, filter, slice) para evitar efectos secundarios.</li>
          <li>Prefiere const al declarar arrays si no planeas reasignar la referencia.</li>
          <li>Usar nombres descriptivos (usuarios, productos, numeros) en lugar de arr.</li>
          <li>Validar índice antes de acceder: if(arr[i] !== undefined).</li>
        </ul>
      </section>
      <section>
        <h2>Errores comunes</h2>
        <ul>
          <li>Confundir forEach con map (forEach no retorna un array).</li>
          <li>Usar sort() sin función de comparación (puede ordenar números de forma incorrecta).
            <Code>{`
              let nums = [10,2,30];
              nums.sort(); // [10, 2, 30] → incorrecto
              nums.sort((a,b)=>a-b); // [2,10,30] → correcto
            `}</Code>
          </li>
          <li>Modificar arrays mientras los recorres (puede causar errores en índices).</li>
        </ul>
      </section>
      <section>
        <h2>Resumen clave</h2>
        <table>
          <thead>
            <tr>
              <th>Categoría</th>
              <th>Métodos / Propiedades</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Propiedad</td>
              <td>length</td>
            </tr>
            <tr>
              <td>Mutables</td>
              <td>push, pop, shift, unshift, splice, sort, reverse, fill</td>
            </tr>
            <tr>
              <td>No mutables</td>
              <td>slice, concat, map, filter, reduce, find, findIndex, join, includes</td>
            </tr>
            <tr>
              <td>Iteración</td>
              <td>for, for...of, for...in, forEach</td>
            </tr>
            <tr>
              <td>Avanzado</td>
              <td>spread, destructuring, arrays multidimensionales</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>Buscar elementos</h2>
        <Code>{`
          numeros.includes(3); // true
          numeros.indexOf(4);  // 3
        `}</Code>
      </section>
      <section>
        <h2>Ordenar y revertir</h2>
        <Code>{`
          const letras = ["c", "a", "b"];
          letras.sort();    // ["a", "b", "c"]
          letras.reverse(); // ["c", "b", "a"]
        `}</Code>
        <p>Para números:</p>
        <Code>{`
          [10, 2, 30].sort((a, b) => a - b); // [2, 10, 30]
        `}</Code>
      </section>
      <section>
        <h2>Convertir entre string y array</h2>
        <Code>{`
          "hola mundo".split(" "); // ["hola", "mundo"]
          ["hola", "mundo"].join(" "); // "hola mundo"
        `}</Code>
      </section>
      <section>
        <h2>¿Qué es el spread operator (...)?</h2>
        <p>El spread operator se usa para expandir elementos de arrays u objetos en otro contexto.</p>
        <section>
          <h3>Copiar arrays</h3>
          <Code>{`
            const original = [1, 2, 3];
            const copia = [...original];
          `}</Code>
        </section>
        <section>
          <h3>Combinar arrays</h3>
          <Code>{`
            const a = [1, 2];
            const b = [3, 4];
            const combinados = [...a, ...b]; // [1, 2, 3, 4]
          `}</Code>
        </section>
        <section>
          <h3>Copiar objetos</h3>
          <Code>{`
            const persona = { nombre: "Ana", edad: 30 };
            const copia = { ...persona };
          `}</Code>
        </section>
        <section>
          <h3>Combinar objetos</h3>
          <Code>{`
            const base = { nombre: "Ana" };
            const extra = { edad: 30 };
            const combinado = { ...base, ...extra }; // { nombre: "Ana", edad: 30 }
          `}</Code>
          <p>⚠️ Si hay propiedades repetidas, la última sobreescribe.</p>
        </section>
      </section>
      <section>
        <h2>¿Qué es el rest operator (...)?</h2>
        <p>Aunque se ve igual (...), el rest operator recolecta múltiples elementos en una sola variable.</p>
        <section>
          <h3>En parámetros de funciones</h3>
          <Code>{`
            function sumar(...numeros) {
              return numeros.reduce((total, n) => total + n, 0);
            }

            sumar(1, 2, 3); // 6
          `}</Code>
        </section>
        <section>
          <h3>En destructuración</h3>
          <section>
            <h4>Arrays</h4>
            <Code>{`
              const [primero, ...resto] = [1, 2, 3, 4];
              // primero = 1
              // resto = [2, 3, 4]
            `}</Code>
          </section>
          <section>
            <h4>Objetos</h4>
            <Code>{`
              const { nombre, ...otros } = { nombre: "Ana", edad: 30, pais: "HN" };
              // nombre = "Ana"
              // otros = { edad: 30, pais: "HN" }
            `}</Code> 
          </section>
        </section>
      </section>
      <section>
        <h2>Metodos que No modifican el array original (no mutadores)</h2>
        <section>
          <h3>Métodos de búsqueda y verificación</h3>
          <section>
            <h4>includes()</h4>
            <p>Verifica si un valor existe en el array</p>
            <Code>{`
              [1, 2, 3].includes(2); // true
            `}</Code>
          </section>
          <section>
            <h4>indexOf()</h4>
            <p>Devuelve el índice del primer valor coincidente</p>
            <Code>{`
              [1, 2, 3].indexOf(2); // 1
            `}</Code>
          </section>
          <section>
            <h4>lastIndexOf()</h4>
            <p>Igual que indexOf, pero desde el final</p>
            <Code>{`
              [1, 2, 2, 3].lastIndexOf(2); // 2
            `}</Code>
          </section>
          <section>
            <h4>find()</h4>
            <p>Devuelve el primer elemento que cumple una condición</p>
            <Code>{`
              [1, 2, 3].find(x => x > 1); // 2
            `}</Code>
          </section>
          <section>
            <h4>findIndex()</h4>
            <p>Devuelve el índice del primer elemento que cumple una condición</p>
            <Code>{`
              [1, 2, 3].findIndex(x => x === 3); // 2
            `}</Code>
          </section>
          <section>
            <h4>some()</h4>
            <p>Verifica si algún elemento cumple una condición</p>
            <Code>{`
              [1, 2, 3].some(x => x > 2); // true
            `}</Code>
          </section>
          <section>
            <h4>every()</h4>
            <p>Verifica si todos los elementos cumplen una condición</p>
            <Code>{`
              [1, 2, 3].every(x => x > 0); // true
            `}</Code>
          </section>
        </section>
        <section>
          <h3>Métodos de transformación y copia</h3>
          <section>
            <h4>map()	</h4>
            <p>Crea un nuevo array aplicando una función a cada elemento</p>
            <Code>{`
              [1, 2].map(x => x * 2); // [2, 4]
            `}</Code>
          </section>
          <section>
            <h4>filter()	</h4>
            <p>Crea un nuevo array con los elementos que cumplen una condición</p>
            <Code>{`
              [1, 2, 3].filter(x => x > 1); // [2, 3]
            `}</Code>
          </section>
          <section>
            <h4>slice()	</h4>
            <p>Devuelve una copia parcial del array</p>
            <Code>{`
              [1, 2, 3].slice(0, 2); // [1, 2]
            `}</Code>
          </section>
          <section>
            <h4>concat()	</h4>
            <p>Une arrays sin modificar ninguno</p>
            <Code>{`
              [1, 2].concat([3, 4]); // [1, 2, 3, 4]
            `}</Code>
          </section>
          <section>
            <h4>flat()	</h4>
            <p>Devuelve un nuevo array con los elementos "aplanados"</p>
            <Code>{`
              [1, [2, 3]].flat(); // [1, 2, 3]
            `}</Code>
          </section>
          <section>
            <h4>flatMap()	</h4>
            <p>Igual que map() seguido de flat()</p>
            <Code>{`
              [1, 2].flatMap(x => [x, x * 2]); // [1, 2, 2, 4]
            `}</Code>
          </section>
          <section>
            <h4>toReversed() ✅</h4>
            <p>Devuelve una copia con los elementos invertidos (nuevo en ES2023)</p>
            <Code>{`
              [1, 2, 3].toReversed(); // [3, 2, 1]
            `}</Code>
          </section>
          <section>
            <h4>toSorted() ✅</h4>
            <p>Devuelve una copia ordenada (sin mutar el original) (nuevo en ES2023)</p>
            <Code>{`
              [3, 1, 2].toSorted(); // [1, 2, 3]
            `}</Code>
          </section>
          <section>
            <h4>toSpliced() ✅</h4>
            <p>Devuelve una copia con elementos agregados o eliminados (nuevo en ES2023)</p>
            <Code>{`
              [1, 2, 3].toSpliced(1, 1); // [1, 3]
            `}</Code>
          </section>
          <p>✅ Nota: toReversed, toSorted, y toSpliced son las versiones no mutadoras de reverse, sort y splice.</p>
        </section>
        <section>
          <h3>Métodos de reducción</h3>
          <section>
            <h4>reduce()</h4>
            <p>Reduce el array a un solo valor usando una función</p>
            <Code>{`
              [1, 2, 3].reduce((a, b) => a + b); // 6
            `}</Code>
          </section>
          <section>
            <h4>reduceRight()</h4>
            <p>Igual que reduce, pero de derecha a izquierda</p>
            <Code>{`
              [1, 2, 3].reduceRight((a, b) => a - b); // 0
            `}</Code>
          </section>
        </section>
        <section>
          <h3>Otros métodos útiles</h3>
          <section>
            <h4>join()</h4>
            <p>Une los elementos en un string</p>
            <Code>{`
              [1, 2, 3].join('-'); // "1-2-3"
            `}</Code>
          </section>
          <section>
            <h4>toString()</h4>
            <p>Convierte el array en string</p>
            <Code>{`
              [1, 2, 3].toString(); // "1,2,3"
            `}</Code>
          </section>
          <section>
            <h4>entries()</h4>
            <p>Devuelve un iterador con [índice, valor]</p>
            <Code>{`
              for (const [i, v] of [1, 2].entries()) {
                console.log(i, v); // 0 1 y luego 1 2
              }
            `}</Code>
          </section>
          <section>
            <h4>keys()</h4>
            <p>Devuelve un iterador con los índices</p>
            <Code>{`
              for (const i of [1, 2].keys()) {
                console.log(i); // 0, 1
              }
            `}</Code>
          </section>
          <section>
            <h4>values()</h4>
            <p>Devuelve un iterador con los valores</p>
            <Code>{`
              for (const val of [1, 2].values()) {
                console.log(val); // 1, 2
              }
            `}</Code>
          </section>
          <section>
            <h4>at()</h4>
            <p>Accede a un elemento por índice (acepta negativos)</p>
            <Code>{`
              [1, 2, 3].at(-1); // 3
            `}</Code>
          </section>
          <section>
            <h4>Array.from()</h4>
            <p>Crea un nuevo array desde otro iterable</p>
            <Code>{`
              Array.from('hola'); // ['h', 'o', 'l', 'a']
            `}</Code>
          </section>
          <section>
            <h4>Array.of()</h4>
            <p>Crea un nuevo array con los valores dados</p>
            <Code>{`
              Array.of(1, 2, 3); // [1, 2, 3]
            `}</Code>
          </section>
        </section>
      </section>
      <section>
        <h2>Métodos que SÍ modifican el array original (mutadores)</h2>
        <p>Solo para contraste, aquí algunos métodos mutadores:</p>
        <section>
          <h3>push()</h3>
          <p>Agrega elementos al final del array.</p>
          <Code>{`
            const arr = [1, 2];
            arr.push(3); // retorna 3 (nueva longitud)
            console.log(arr); // [1, 2, 3]
          `}</Code>
        </section>
        <section>
          <h3>pop()</h3>
          <p>Elimina el último elemento</p>
          <Code>{`
            const arr = [1, 2, 3];
            const eliminado = arr.pop(); // retorna 3
            console.log(arr); // [1, 2]
          `}</Code>
        </section>
        <section>
          <h3>shift()</h3>
          <p>Elimina el primer elemento.</p>
          <Code>{`
            const arr = [1, 2, 3];
            const eliminado = arr.shift(); // retorna 1
            console.log(arr); // [2, 3]
          `}</Code>
        </section>
        <section>
          <h3>unshift()</h3>
          <p>Agrega elementos al inicio.</p>
          <Code>{`
            const arr = [2, 3];
            arr.unshift(1); // retorna 3 (nueva longitud)
            console.log(arr); // [1, 2, 3]
          `}</Code>
        </section>
        <section>
          <h3>splice()</h3>
          <p>Agrega, elimina o reemplaza elementos en cualquier posición.</p>
          <Code>{`
            const arr = [1, 2, 3, 4];
            arr.splice(1, 2, 99); // elimina 2 y 3, agrega 99
            console.log(arr); // [1, 99, 4]
          `}</Code>
        </section>
        <section>
          <h3>sort()</h3>
          <p>Ordena el array en el lugar (modifica el original).</p>
          <Code>{`
            const arr = [3, 1, 2];
            arr.sort(); 
            console.log(arr); // [1, 2, 3]
          `}</Code>
          <p>¡OJO! Ordena como texto por defecto, usa arr.sort{`((a, b) => a - b)`} para números.</p>
        </section>
        <section>
          <h3>reverse()</h3>
          <p>Invierte los elementos del array.</p>
          <Code>{`
            const arr = [1, 2, 3];
            arr.reverse();
            console.log(arr); // [3, 2, 1]
          `}</Code>
        </section>
        <section>
          <h3>fill()</h3>
          <p>Rellena todo o parte del array con un valor.</p>
          <Code>{`
            const arr = [1, 2, 3, 4];
            arr.fill(0, 1, 3); // desde índice 1 hasta antes del 3
            console.log(arr); // [1, 0, 0, 4]
          `}</Code>
        </section>
        <section>
          <h3>copyWithin()</h3>
          <p>Copia parte del array dentro del mismo array.</p>
          <Code>{`
            const arr = [1, 2, 3, 4];
            arr.copyWithin(1, 2); // copia desde índice 2 a partir de la posición 1
            console.log(arr); // [1, 3, 4, 4]
          `}</Code>
        </section>
      </section>
    </>
  )
}