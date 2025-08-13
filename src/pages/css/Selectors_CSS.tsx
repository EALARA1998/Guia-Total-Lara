import Code from "../../components/Code"

type Selectors_CSSProps = {
  
}

export default function Selectors_CSS({}:Selectors_CSSProps) {
  return (
    <>
      <h1>Selectores en CSS</h1>
      <p>Los selectores son la forma en que le dices a CSS qué elementos HTML quieres afectar con tus reglas de estilo. Son la “dirección” que usa el navegador para encontrar elementos en el DOM y aplicarles estilos.</p>
      <section>
        <h2>Tipos de selectores</h2>
        <section>
          <h3>Selectores básicos</h3>
          <p>Son los más usados y fáciles de entender:</p>
          <section>
            <h4>Selector de etiqueta</h4>
            <p>Aplica estilos a todas las etiquetas del tipo indicado.</p>
            <Code>{`
              p { color: red; }
            `}</Code>
            <p>Esto pone en rojo todos los {`<p>`} del documento.</p>
          </section>
          <section>
            <h4>Selector de clase (.clase)</h4>
            <p>Aplica estilos a cualquier elemento con esa clase.</p>
            <Code>{`
              .destacado { font-weight: bold; }
            `}</Code>
          </section>
          <section>
            <h4>Selector de ID (#id)</h4>
            <p>Aplica estilos al elemento con ese ID (único en la página).</p>
            <Code>{`
              #principal { background-color: yellow; }
            `}</Code>
          </section>
          <section>
            <h4>Selector universal (*)</h4>
            <p>Aplica estilos a todos los elementos.</p>
            <Code>{`
              * { margin: 0; padding: 0; }
            `}</Code>
          </section>
        </section>
        <section>
          <h3>Selectores de agrupación</h3>
          <p>Te permiten aplicar las mismas reglas a varios elementos a la vez:</p>
          <Code>{`
            h1, h2, h3 {
              font-family: Arial, sans-serif;
            }
          `}</Code>
        </section>
        <section>
          <h3>Selectores de hijos y descendientes</h3>
          <p>Estos apuntan a elementos basados en jerarquía.</p>
          <table>
            <thead>
              <tr>
                <th>Selector</th>
                <th>Descripción</th>
                <th>Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A B</td>
                <td>Selecciona todos los elementos B dentro de A (descendientes en cualquier nivel).</td>
                <td>div p selecciona todos los {`<p>`} dentro de un {`<div>`}.</td>
              </tr>
              <tr>
                <td>A {`>`} B</td>
                <td>Selecciona solo los hijos directos de A.</td>
                <td>ul {`>`} li selecciona {`<li>`} que son hijos directos de {`<ul>`}.</td>
              </tr>
              <tr>
                <td>A + B</td>
                <td>Selecciona el elemento B que está inmediatamente después de A (hermano adyacente).</td>
                <td>h1 + p selecciona el {`<p>`} que está justo después de un {`<h1>`}.</td>
              </tr>
              <tr>
                <td>A ~ B</td>
                <td>Selecciona todos los hermanos B que vienen después de A en el mismo nivel.</td>
                <td>h1 ~ p selecciona todos los {`<p>`} que siguen a un {`<h1>`} en el mismo padre.</td>
              </tr>
            </tbody>
          </table>
          <p>Usos prácticos: menús desplegables, estilos de primer y último elemento, tooltips.</p>
        </section>
        <section>
          <h3>Selectores de atributo</h3>
          <p>Permiten seleccionar elementos según el atributo y su valor.</p>
          <table>
            <thead>
              <tr>
                <th>Selector</th>
                <th>Descripcion</th>
                <th>Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>[attr]</td>
                <td>Elementos que tienen ese atributo.</td>
                <td>[required] selecciona campos con el atributo required.</td>
              </tr>
              <tr>
                <td>[attr="valor"]</td>
                <td>Atributo con valor exacto.</td>
                <td>input[type="email"].</td>
              </tr>
              <tr>
                <td>[attr~="valor"]</td>
                <td>Atributo con lista de valores separados por espacio que incluye ese valor.</td>
                <td>[class~="activo"].</td>
              </tr>
              <tr>
                <td>`[attr</td>
                <td>="valor"]`</td>
                <td>Atributo que empieza por el valor exacto o seguido de un guion (-).</td>
              </tr>
              <tr>
                <td>[attr^="valor"]</td>
                <td>Atributo cuyo valor empieza con ese texto.</td>
                <td>a[href^="https"].</td>
              </tr>
              <tr>
                <td>[attr$="valor"]</td>
                <td>Atributo cuyo valor termina con ese texto.</td>
                <td>img[src$=".png"]</td>
              </tr>
              <tr>
                <td>[attr*="valor"]</td>
                <td>Atributo cuyo valor contiene ese texto.</td>
                <td>a[href*="google"].</td>
              </tr>
            </tbody>
          </table>
          <p>Usos prácticos:</p>
          <ul>
            <li>Estilizar enlaces externos (a[href^="http"])</li>
            <li>Cambiar iconos según extensión ([src$=".jpg"])</li>
            <li>Formularios con validaciones personalizadas.</li>
          </ul>
        </section>
        <section>
          <h3>Pseudoclases estructurales</h3>
          <p>Se basan en la posición del elemento dentro de su padre.</p>
          <table>
            <thead>
              <tr>
                <th>Selector</th>
                <th>Descripcion</th>
                <th>Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>:first-child</td>
                <td>Primer hijo de su padre.</td>
                <td>li:first-child.</td>
              </tr>
              <tr>
                <td>:last-child</td>
                <td>Último hijo de su padre.</td>
                <td>li:last-child.</td>
              </tr>
              <tr>
                <td>:nth-child(n)</td>
                <td>Selecciona el hijo número n (o patrón).</td>
                <td>li:nth-child(2), li:nth-child(odd), li:nth-child(3n).</td>
              </tr>
              <tr>
                <td>:nth-last-child(n)</td>
                <td>Igual que nth-child pero contando desde el final.</td>
                <td>li:nth-last-child(1).</td>
              </tr>
              <tr>
                <td>:only-child</td>
                <td>Elemento que es hijo único.</td>
                <td>p:only-child.</td>
              </tr>
            </tbody>
          </table>
          <p>Usos prácticos:</p>
          <ul>
            <li>Resaltar filas alternas (tr:nth-child(even)).</li>
            <li>Aplicar margen solo al último elemento de un contenedor.</li>
            <li>Dar estilo especial al primer o último ítem de un menú.</li>
          </ul>
        </section>
        <section>
          <h3>Pseudoclases de tipo</h3>
          <p>Se fijan en el tipo de elemento.</p>
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>:first-of-type</td>
                <td>Primer elemento de ese tipo dentro del padre.</td>
                <td>p:first-of-type.</td>
              </tr>
              <tr>
                <td>:last-of-type</td>
                <td>Último elemento de ese tipo.</td>
                <td>p:last-of-type</td>
              </tr>
              <tr>
                <td>:nth-of-type(n)</td>
                <td>El n-ésimo elemento de ese tipo.</td>
                <td>p:nth-of-type(2).</td>
              </tr>
              <tr>
                <td>:nth-last-of-type(n)</td>
                <td>Igual que anterior pero desde el final.</td>
                <td>p:nth-last-of-type(1).</td>
              </tr>
              <tr>
                <td>:only-of-type</td>
                <td>Elemento que es único de su tipo dentro del padre.</td>
                <td>h1:only-of-type.</td>
              </tr>
            </tbody>
          </table>
          <p>Usos prácticos:</p>
          <ul>
            <li>Formatos de títulos si hay más de uno en la misma sección.</li>
            <li>Dar estilo especial a la última imagen en una galería.</li>
          </ul>
        </section>
        <section>
          <h3>Pseudoclases de estado e interacción</h3>
          <p>Se activan según la interacción del usuario o el estado del elemento.</p>
          <table>
            <thead>
              <tr>
                <th>Selector</th>
                <th>Descripción</th>
                <th>Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>:hover</td>
                <td>Cuando el mouse pasa por encima.</td>
                <td>a:hover.</td>
              </tr>
              <tr>
                <td>:active</td>
                <td>Cuando el elemento está siendo clicado.</td>
                <td>button:active.</td>
              </tr>
              <tr>
                <td>:focus</td>
                <td>Cuando un campo está enfocado.</td>
                <td>input:focus.</td>
              </tr>
              <tr>
                <td>:visited</td>
                <td>Enlaces que el usuario ya visitó.</td>
                <td>a:visited.</td>
              </tr>
              <tr>
                <td>:checked</td>
                <td>Checkbox o radio seleccionados.</td>
                <td>input:checked.</td>
              </tr>
              <tr>
                <td>:disabled</td>
                <td>Elementos de formulario deshabilitados.</td>
                <td>input:disabled.</td>
              </tr>
              <tr>
                <td>:enabled</td>
                <td>Campos habilitados.</td>
                <td>input:enabled.</td>
              </tr>
              <tr>
                <td>:required</td>
                <td>Campos con atributo required.</td>
                <td>input:required.</td>
              </tr>
              <tr>
                <td>:optional</td>
                <td>Campos sin required.</td>
                <td>input:optional.</td>
              </tr>
              <tr>
                <td>:valid / :invalid</td>
                <td>Según validación HTML5.</td>
                <td>input:invalid.</td>
              </tr>
              <tr>
                <td>:read-only / :read-write</td>
                <td>Campos editables o no.</td>
                <td>textarea:read-only.</td>
              </tr>
            </tbody>
          </table>
          <p>Usos prácticos:</p>
          <ul>
            <li>Efectos hover y focus en formularios.</li>
            <li>Botones que cambian cuando están activos.</li>
            <li>Marcar inputs inválidos con borde rojo.</li>
          </ul>
        </section>
        <section>
          <h3>Pseudoelementos</h3>
          <p>Se usan para crear contenido virtual o aplicar estilo a partes específicas.</p>
          <table>
            <thead>
              <tr>
                <th>Selector</th>
                <th>Descripción</th>
                <th>Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>::before</td>
                <td>Inserta contenido antes del elemento.</td>
                <td>{`p::before { content: "★"; }`}.</td>
              </tr>
              <tr>
                <td>::after</td>
                <td>Inserta contenido después del elemento.</td>
                <td>{`p::after { content: ";"; }`}.</td>
              </tr>
              <tr>
                <td>::first-line</td>
                <td>Aplica estilo a la primera línea de texto.</td>
                <td>p::first-line.</td>
              </tr>
              <tr>
                <td>::first-letter</td>
                <td>Estiliza la primera letra.</td>
                <td>p::first-letter.</td>
              </tr>
              <tr>
                <td>::selection</td>
                <td>Estilo del texto seleccionado.</td>
                <td>{`::selection { background: yellow; }`}.</td>
              </tr>
              <tr>
                <td>::placeholder</td>
                <td>Estilo del placeholder en inputs.</td>
                <td>input::placeholder.</td>
              </tr>
              <tr>
                <td>::marker</td>
                <td>Estilo de viñetas de listas.</td>
                <td>li::marker.</td>
              </tr>
              <tr>
                <td>::backdrop</td>
                <td>Fondo de elementos a pantalla completa ({`<dialog>`}, fullscreen API).</td>
                <td>::backdrop.</td>
              </tr>
            </tbody>
          </table>
          <p>Usos prácticos:</p>
          <ul>
            <li>Íconos automáticos antes/después de enlaces.</li>
            <li>Decoraciones de texto.</li>
            <li>Personalizar marcadores de lista.</li>
          </ul>
        </section>
        <section>
          <h3></h3>
          <ul>
            <li>* → Selecciona todos los elementos.</li>
            <li>selector1, selector2 → Agrupa selectores para aplicar mismas reglas.</li>
            <li>:not(selector) → Excluye elementos que coinciden con el selector.</li>
            <li>:is(selector, selector2) → Selecciona si coincide con cualquiera de los selectores listados.</li>
            <li>:where(selector) → Igual que :is() pero con especificidad cero.</li>
            <li>:has(selector) → Selecciona un elemento si contiene otro que coincida (muy útil pero soporte parcial).</li>
          </ul>
          <p></p>
          <ul>
            <li>:not() para aplicar estilos a todo menos ciertos elementos.</li>
            <li>:has() para cambiar el estilo de un card si dentro tiene una imagen.</li>
            <li>:is() para simplificar listas largas de selectores.</li>
          </ul>
        </section>
      </section>
      <section>
        <h2>Especificidad</h2>
        <p>Cuando dos reglas aplican al mismo elemento, la especificidad decide cuál gana:</p>
        <ul>
          <li>Estilos inline (atributo style) → más fuertes.</li>
          <li>Selectores por ID.</li>
          <li>Selectores por clase, pseudoclases y atributos.</li>
          <li>Selectores por etiqueta y pseudoelementos.</li>
          <li>Si hay empate → el último en el CSS gana.</li>
        </ul>
        <p>Ejemplo:</p>
        <Code>{`
          p { color: blue; }        /* menos específico */
          #intro { color: red; }    /* más específico, gana */
        `}</Code>
      </section>
      <section>
        <h2>Buenas prácticas</h2>
        <ul>
          <li>No abuses de los IDs para estilos (prefiere clases, son más flexibles).</li>
          <li>Usa selectores cortos y claros para evitar conflictos.</li>
          <li>Combina pseudoclases y pseudoelementos para efectos complejos.</li>
          <li>Minimiza la especificidad para no tener que usar !important.</li>
        </ul>
      </section>
    </>
  )
}