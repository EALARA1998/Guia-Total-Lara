import Code from "../../components/Code";

export default function Arrays_JS() {
  return (
    <>
      <h1>Arrays</h1>
      <section>
        <h2>¿Qué es un array?</h2>
        <p>Un array (arreglo) es una colección ordenada de elementos, que pueden ser de cualquier tipo (números, strings, objetos, funciones, etc.).</p>
        <Code>{`
          const frutas = ["manzana", "banana", "pera"];
        `}</Code>
      </section>
      <section>
        <h2>Cómo declarar arrays</h2>
        <Code>{`
          const numeros = [1, 2, 3, 4];         // Forma literal (recomendada)
          const vacio = new Array();           // También válido, pero menos común
          const mixto = [1, "hola", true];     // Puede contener distintos tipos
        `}</Code>
      </section>
      <section>
        <h2>Acceder a elementos</h2>
        <Code>{`
          numeros[0]; // 1 (los arrays comienzan en índice 0)
          numeros[2]; // 3
        `}</Code>
      </section>
      <section>
        <h2>Modificar elementos</h2>
        <Code>{`
          numeros[1] = 20; // Cambia el valor del índice 1 a 20
        `}</Code>
      </section>
      <section>
        <h2>Propiedad .length</h2>
        <Code>{`
          numeros.length; // Cantidad de elementos del array
        `}</Code>
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
        <h2>Desestructuración de arrays</h2>
        <p>Extraer elementos directamente:</p>
        <Code>{`
          const [a, b, c] = [1, 2, 3];
        `}</Code>
        <p>Con rest operator:</p>
        <Code>{`
          const [primero, ...resto] = [1, 2, 3, 4];
          // primero = 1, resto = [2, 3, 4]
        `}</Code>
      </section>
      <section>
        <h2>Arrays multidimensionales</h2>
        <Code>{`
          const matriz = [
            [1, 2],
            [3, 4]
          ];

          matriz[1][0]; // 3
        `}</Code>
      </section>
      <section>
        <h2>Spread operator con arrays</h2>
        <Code>{`
          const a = [1, 2];
          const b = [...a, 3, 4]; // [1, 2, 3, 4]
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
        <h2>Buenas prácticas con arrays</h2>
        <p>Usa const si no vas a reasignar el array completo.</p>
        <p>Usa métodos como map, filter, reduce para mantener código funcional.</p>
        <p>No uses for si puedes resolverlo con forEach o map.</p>
        <p>Cuidado con modificar arrays originales (algunos métodos lo hacen, como sort, splice, etc).</p>
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