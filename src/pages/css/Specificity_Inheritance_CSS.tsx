import Code from "../../components/Code"

type Specificity_Inheritance_CSSProps = {
  
}

export default function Specificity_Inheritance_CSS({}:Specificity_Inheritance_CSSProps) {
  return (
    <>
      <h1>Especificidad y Herencia en CSS</h1>
      <p>Estos dos conceptos son la base para entender cómo y por qué ciertas reglas CSS se aplican o no, y cómo se “transmiten” estilos entre elementos.</p>
      <section>
        <h2>Especificidad en CSS</h2>
        <p>La especificidad es un algoritmo que determina qué reglas CSS ganan cuando hay conflicto, es decir, cuando múltiples reglas afectan al mismo elemento y la misma propiedad.</p>
        <section>
          <h3>Cómo se calcula la especificidad</h3>
          <p>Se asigna un “peso” a cada selector según su tipo:</p>
          <table>
            <thead>
              <tr>
                <th>Selector</th>
                <th>Peso</th>
                <th>Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Inline styles</td>
                <td>1000</td>
                <td>{`<div style="color:red;">`}</td>
              </tr>
              <tr>
                <td>ID selector</td>
                <td>100</td>
                <td>#miID</td>
              </tr>
              <tr>
                <td>Class, attribute, pseudo-clase</td>
                <td>10</td>
                <td>.clase, [type="text"], :hover</td>
              </tr>
              <tr>
                <td>Elemento y pseudo-elemento</td>
                <td>1</td>
                <td>div, p, ::before</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Ejemplo:</h3>
          <Code>{`
            p { color: blue; }              /* peso 1 */
            .intro { color: green; }        /* peso 10 */
            #main { color: red; }           /* peso 100 */
          `}</Code>
          <p>Si un {`<p>`} tiene clase intro y está dentro de un elemento con id main, el color rojo (peso 100) gana.</p>
        </section>
        <section>
          <h3>Reglas importantes sobre especificidad</h3>
          <ul>
            <li>Inline styles siempre ganan.</li>
            <li>Si hay empate en especificidad, gana la regla que está declarada más abajo en el CSS.</li>
            <li>!important sobrescribe todo, incluso inline styles, pero no es recomendable abusar.</li>
          </ul>
        </section>
      </section>
      <section>
        <h2>Herencia en CSS</h2>
        <p>La herencia es la forma en que ciertos estilos se transmiten automáticamente de un elemento padre a sus hijos.</p>
        <section>
          <h3>Propiedades que sí se heredan</h3>
          <p>Normalmente, estas son propiedades relacionadas con texto y presentación:</p>
          <ul>
            <li>color</li>
            <li>font-family</li>
            <li>font-size</li>
            <li>font-style</li>
            <li>font-variant</li>
            <li>font-weight</li>
            <li>letter-spacing</li>
            <li>line-height</li>
            <li>list-style</li>
            <li>text-align</li>
            <li>text-indent</li>
            <li>text-shadow</li>
            <li>visibility</li>
            <li>word-spacing</li>
            <li>cursor</li>
            <li>quotes</li>
          </ul>
        </section>
        <section>
          <h3>Propiedades que no se heredan</h3>
          <p></p>
          <ul>
            <li>margin</li>
            <li>padding</li>
            <li>border</li>
            <li>width, height</li>
            <li>background</li>
            <li>display</li>
            <li>position</li>
            <li>float</li>
            <li>clear</li>
            <li>overflow</li>
            <li>box-shadow</li>
            <li>z-index</li>
          </ul>
        </section>
        <section>
          <h3>Cómo forzar herencia o evitarla</h3>
          <section>
            <h4>Puedes hacer que una propiedad se herede explícitamente con la palabra clave inherit:</h4>
            <Code>{`
              p {
                color: inherit;  /* toma el color del padre, aunque normalmente ya se hereda */
              }
            `}</Code>
          </section>
          <section>
            <h4>Para evitar herencia puedes usar valores iniciales o específicos:</h4>
            <Code>{`
              p {
                color: initial;  /* toma el valor inicial del navegador */
              }
            `}</Code>
          </section>
          <section>
            <h4>También existe el valor unset, que combina inherit o initial según la propiedad.</h4>
          </section>
        </section>
        <section>
          <h3>Relación entre Especificidad y Herencia</h3>
          <p>La herencia solo ocurre si no hay reglas con especificidad mayor que sobreescriban la propiedad en un hijo.</p>
          <Code>{`
            body { color: black; } /* heredable */
            p { color: red; }     /* específico para <p> */
          `}</Code>
          <p>Aquí, el {`<p>`} tendrá color rojo porque la regla directa con mayor especificidad lo sobrescribe.</p>
        </section>
        <section>
          <h3>Importancia práctica</h3>
          <ul>
            <li>Cuando no aplicas color a un elemento, este hereda el color de su padre.</li>
            <li>Cuando defines un estilo con un selector fuerte (ej: ID), puede sobreescribir lo que se hereda.</li>
            <li>Entender especificidad te evita dolores de cabeza con estilos que no aplican.</li>
            <li>La herencia permite que menos reglas CSS se repitan, haciendo el código más limpio.</li>
          </ul>
        </section>
        <section>
          <h3>Otras reglas y casos especiales</h3>
          <ul>
            <li>Pseudoclases y pseudo-elementos tienen especificidad igual a clase y elemento respectivamente.</li>
            <li>Selectores combinados suman sus valores. Ej:</li>
            <Code>{`
              ul#menu > li.item a:hover {
                /* peso = 100 (ID) + 10 (clase .item) + 10 (:hover) + 1 (ul) + 1 (li) + 1 (a) = 123 */
              }
            `}</Code>
          </ul>
        </section>
      </section>
    </>
  )
}