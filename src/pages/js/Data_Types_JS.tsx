import Code from "../../components/Code";

export default function Data_Types_JS() {
  return (
    <>
      <h1>Tipo de datos</h1>
      <section>
        <h2>¿Qué es un tipo de dato?</h2>
        <p>Un tipo de dato define el tipo de valor que puede contener una variable, como números, textos, listas, etc.</p>
      </section>
      <section>
        <h2>Tipos de datos en JavaScript</h2>
        <p>JavaScript tiene 8 tipos de datos, divididos en dos grandes grupos:</p>
        <section>
          <h3>Primitivos (valores simples, inmutables)</h3>
          <p>Estos son los más básicos. No tienen métodos, no son objetos.</p>
          <table>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Ejemplo</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>number</td>
                <td>42, 3.14</td>
                <td>Números, enteros y decimales</td>
              </tr>
              <tr>
                <td>string</td>
                <td>"hola", 'mundo'</td>
                <td>Texto (entre comillas)</td>
              </tr>
              <tr>
                <td>boolean</td>
                <td>true, false</td>
                <td>Verdadero o falso</td>
              </tr>
              <tr>
                <td>null</td>
                <td>null</td>
                <td>Intencionalmente vacío</td>
              </tr>
              <tr>
                <td>undefined</td>
                <td>undefined</td>
                <td>No se ha asignado valor</td>
              </tr>
              <tr>
                <td>bigint</td>
                <td>123n</td>
                <td>Números enteros muy grandes</td>
              </tr>
              <tr>
                <td>symbol</td>
                <td>Symbol("id")</td>
                <td>Valor único e inmutable</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>No primitivos (objetos)</h3>
          <p>Estos tipos pueden tener propiedades y métodos.</p>
          <table>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Ejemplo</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>object</td>
                <td>{`nombre: "Ana"`}</td>
                <td>Colección de pares clave-valor</td>
              </tr>
              <tr>
                <td>array</td>
                <td>[1, 2, 3]</td>
                <td>Lista ordenada (también es un objeto)</td>
              </tr>
              <tr>
                <td>function</td>
                <td>function() {`{}`}</td>
                <td>Función ejecutable (también es un objeto)</td>
              </tr>
              <tr>
                <td>date</td>
                <td>new Date()</td>
                <td>Objeto de fecha y hora</td>
              </tr>
              <tr>
                <td>regex</td>
                <td>/abc/</td>
                <td>Expresiones regulares</td>
              </tr>
            </tbody>
          </table>
          <p>Técnicamente, array, function, date y regex son subtipos de object.</p>
        </section>
      </section>
      <section>
        <h2>¿Cómo saber el tipo de una variable?</h2>
        <p>Usa typeof:</p>
        <Code>{`
          typeof 5;            // "number"
          typeof "hola";       // "string"
          typeof true;         // "boolean"
          typeof undefined;    // "undefined"
          typeof null;         // ❗ "object" (bug histórico)
          typeof {};           // "object"
          typeof [];           // "object"
          typeof function() {}; // "function"
        `}</Code>
        <p>Para saber si es un array:</p>
        <Code>{`
          Array.isArray([1, 2, 3]); // true
        `}</Code>
      </section>
      <section>
        <h2>Detalles importantes</h2>
        <section>
          <h3>null vs undefined</h3>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>null</th>
                <th>undefined</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tipo</td>
                <td>"object" (histórico)</td>
                <td>"undefined"</td>
              </tr>
              <tr>
                <td>Uso</td>
                <td>Valor vacío intencional</td>
                <td>Valor no asignado</td>
              </tr>
              <tr>
                <td>Ejemplo</td>
                <td>let x = null;</td>
                <td>let x; // x es undefined</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>string puede usar tres formas</h3>
          <Code>{`
            let a = "texto";
            let b = 'otro texto';
            let c = \`template string: \${a}\`;
          `}</Code>
        </section>
        <section>
          <h3>bigint</h3>
          <Code>{`
            let numeroGrande = 9007199254740991n;
          `}</Code>
          <p>Se usa para enteros muy grandes que exceden los límites de number.</p>
        </section>
        <section>
          <h3>symbol</h3>
          <p>Se usa para crear identificadores únicos.</p>
          <Code>{`
            let id = Symbol("id");
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Tipado dinámico</h2>
        <p>JavaScript es de tipado dinámico, lo que significa que:</p>
        <ul>
          <li>
            <p>Las variables pueden cambiar de tipo en tiempo de ejecución.</p>
          </li>
          <li>
            <p>No se necesita declarar el tipo de dato.</p>
          </li>
        </ul>
        <Code>{`
          let x = 10;
          x = "ahora soy texto"; // válido
        `}</Code>
      </section>
      <section>
        <h2>Conversión de tipos</h2>
        <p>JavaScript convierte tipos automáticamente en ciertas situaciones:</p>
        <Code>{`
          "5" + 1    // "51" (convierte a string)
          "5" - 1    // 4   (convierte a number)
          true + 1   // 2
          false + 1  // 1
          null + 1   // 1
          undefined + 1 // NaN
        `}</Code>
        <p>Esto puede causar errores, así que usa === y controla bien los tipos.</p>
      </section>
    </>
  )
}