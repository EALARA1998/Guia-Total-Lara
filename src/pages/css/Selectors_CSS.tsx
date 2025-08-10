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
          <h3>Selectores de descendencia y relación</h3>
          <p>Sirven para seleccionar elementos según su posición en el árbol del DOM.</p>
          <section>
            <h4>Descendiente (espacio) → cualquier nivel dentro</h4>
            <Code>{`
              div p { color: blue; } /* <p> dentro de <div> */
            `}</Code>
          </section>
          <section>
            <h4>Hijo directo ({`>`})</h4>
            <p>Selecciona todos los elementos B que son hijos directos de un elemento A.</p>
            <Code>{`
              ul > li { list-style: none; }
            `}</Code>
          </section>
          <section>
            <h4>Hermano adyacente (+)</h4>
            <p>En CSS, el "hermano general" (~) es un combinador que selecciona el primer elemento que comparten el mismo padre y vienen después de un elemento específico.</p>
            <Code>{`
              h1 + p { margin-top: 0; }
            `}</Code>
          </section>
          <section>
            <h4>Hermano general (~)</h4>
            <p>En CSS, el "hermano general" (~) es un combinador que selecciona elementos que comparten el mismo padre y vienen después de un elemento específico, sin importar si están inmediatamente uno tras otro o no.</p>
            <Code>{`
              h1 ~ p { color: gray; }
            `}</Code>
          </section>
        </section>
        <section>
          <h3>Selectores de atributo</h3>
          <p>Te permiten seleccionar elementos según atributos y sus valores.</p>
          <section>
            <h4>Por presencia del atributo:</h4>
            <Code>{`
              [disabled] { opacity: 0.5; }
            `}</Code>
          </section>
          <section>
            <h4>Por valor exacto:</h4>
            <Code>{`
              [type="text"] { border: 1px solid #ccc; }
            `}</Code>
          </section>
          <section>
            <h4>Por valor que contiene una palabra:</h4>
            <Code>{`
              [class~="activo"] { color: green; }
            `}</Code>
          </section>
          <section>
            <h4>Por valor que comienza con algo:</h4>
            <Code>{`
              [lang|="en"] { font-style: italic; }
            `}</Code>
          </section>
          <section>
            <h4>Por valor que empieza con caracteres específicos:</h4>
            <Code>{`
              [href^="https://"] { color: blue; }
            `}</Code>
          </section>
          <section>
            <h4>Por valor que termina con algo:</h4>
            <Code>{`
              [src$=".jpg"] { border: 2px solid red; }
            `}</Code>
          </section>
          <section>
            <h4>Por valor que contiene una subcadena:</h4>
            <Code>{`
              [title*="importante"] { font-weight: bold; }
            `}</Code>
          </section>
        </section>
        <section>
          <h3>Pseudoclases</h3>
          <p>Sirven para aplicar estilos en estados específicos de un elemento.</p>
          <section>
            <h4>Interacción del usuario:</h4>
            <Code>{`
              a:hover { color: red; }
              a:active { color: green; }
              input:focus { outline: 2px solid blue; }
            `}</Code>
          </section>
          <section>
            <h4>Posición en el DOM:</h4>
            <Code>{`
              li:first-child { font-weight: bold; }
              li:last-child { font-style: italic; }
              li:nth-child(2) { color: orange; }
            `}</Code>
          </section>
          <section>
            <h4>Estado del elemento:</h4>
            <Code>{`
              input:checked { background-color: yellow; }
              input:disabled { opacity: 0.3; }
            `}</Code>
          </section>
        </section>
        <section>
          <h3>Pseudoelementos</h3>
          <p>Te permiten seleccionar y estilizar partes específicas de un elemento.</p>
          <section>
            <h4>::before y ::after — para añadir contenido virtual:</h4>
            <Code>{`
              p::before { content: "💡 "; }
              p::after { content: " ✅"; }
            `}</Code>
          </section>
          <section>
            <h4>::first-line — primera línea del texto:</h4>
            <Code>{`
              p::first-line { font-weight: bold; }
            `}</Code>
          </section>
          <section>
            <h4>::first-letter — primera letra del texto:</h4>
            <Code>{`
              p::first-letter { font-size: 2rem; }
            `}</Code>
          </section>
        </section>
      </section>
      <section>
        <h2>Especificidad</h2>
        <p>Cuando dos reglas aplican al mismo elemento, la especificidad decide cuál gana:</p>
        <ul>
          <li><p>Estilos inline (atributo style) → más fuertes.</p></li>
          <li><p>Selectores por ID.</p></li>
          <li><p>Selectores por clase, pseudoclases y atributos.</p></li>
          <li><p>Selectores por etiqueta y pseudoelementos.</p></li>
          <li><p>Si hay empate → el último en el CSS gana.</p></li>
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