import Code from "../../components/Code"

type Box_Model_CSSProps = {
  
}

export default function Box_Model_CSS({}:Box_Model_CSSProps) {
  return (
    <>
      <h1>Modelo de caja (Box Model) en CSS</h1>
      <p>El modelo de caja es fundamental para entender cómo se calculan las dimensiones y el espacio que ocupa un elemento en la página. Todo elemento HTML se representa como una caja rectangular, y esta caja está compuesta por varias capas que definen su tamaño y separación.</p>
      <section>
        <h2>Partes del modelo de caja</h2>
        <p>Cada caja de elemento consta de estas capas (de adentro hacia afuera):</p>
        <Code>{`
        +---------------------------+
        |        Margin             |  ← espacio fuera del borde, separa cajas entre sí
        +---------------------------+
        |        Border             |  ← borde visible alrededor del padding y contenido
        +---------------------------+
        |        Padding            |  ← espacio interno entre borde y contenido
        +---------------------------+
        |        Content            |  ← área donde se muestra el contenido (texto, imágenes, etc)
        +---------------------------+
        `}</Code>
      </section>
      <section>
        <h2>Propiedades principales</h2>
        <section>
          <h3>width y height</h3>
          <p>Definen el tamaño del área de contenido (por defecto, no incluyen padding, border ni margin).</p>
        </section>
        <section>
          <h3>padding</h3>
          <p>Espacio interno entre el borde y el contenido.</p>
          <p>Se puede definir para cada lado:</p>
          <Code>{`
            padding-top, padding-right, padding-bottom, padding-left
          `}</Code>
        </section>
        <section>
          <h3>border</h3>
          <p>Define el borde visible alrededor del padding.</p>
          <p>Se compone de tres partes:</p>
          <ul>
            <li>border-width (grosor)</li>
            <li>border-style (línea, sólido, punteado, etc)</li>
            <li>border-color</li>
          </ul>
        </section>
        <section>
          <h3>margin</h3>
          <p>Espacio exterior entre el borde y otros elementos.</p>
          <p>También puede definirse por lado individual.</p>
        </section>
      </section>
      <section>
        <h2>box-sizing: content-box vs border-box</h2>
        <p>Por defecto, CSS usa:</p>
        <Code>{`
          box-sizing: content-box;
        `}</Code>
        <p>Esto significa que:</p>
        <ul>
          <li>width y height solo afectan al contenido.</li>
          <li>El tamaño total del elemento es: width + padding + border + margin</li>
        </ul>
        <section>
          <h3>Problema común:</h3>
          <p>Si defines un elemento con width: 200px y le pones padding: 20px, el ancho total visual será 240px (200 + 20 + 20).</p>
        </section>
        <section>
          <h3>Solución común: box-sizing: border-box</h3>
          <Code>{`
            box-sizing: border-box;
          `}</Code>
          <ul>
            <li>Aquí, width y height incluyen contenido + padding + border.</li>
            <li>El tamaño total es justo el valor que defines en width y height.</li>
            <li>Esto facilita el control del tamaño y es muy usado en layouts.</li>
          </ul>
        </section>
        <section>
          <h3>Ejemplo práctico:</h3>
          <Code>{`
            div {
              width: 300px;
              padding: 20px;
              border: 5px solid black;
              box-sizing: border-box;
            }
          `}</Code>
          <p>Aquí el div tendrá un ancho total de 300px, incluyendo contenido, padding y borde.</p>
        </section>
      </section>
      <section>
        <h2>Colapsado de márgenes (margin collapsing)</h2>
        <p>Cuando hay márgenes verticales (top/bottom) de elementos consecutivos, a veces se colapsan:</p>
        <ul>
          <li>El margen entre dos elementos adyacentes no es la suma, sino el mayor de los dos.</li>
          <li>Ejemplo:</li>
        </ul>
        <Code>{`
          p {
            margin-bottom: 20px;
          }
          h2 {
            margin-top: 15px;
          }
        `}</Code>
        <p>El espacio entre {`<p>`} y {`<h2>`} será 20px, no 35px.</p>
      </section>
      <section>
        <h2>Altura automática y contenido</h2>
        <ul>
          <li>Por defecto, el alto de un elemento bloque es el necesario para contener su contenido.</li>
          <li>Si pones height fijo, puede cortar contenido si este es mayor.</li>
          <li>Usa min-height para asegurar un mínimo sin limitar el crecimiento.</li>
        </ul>
      </section>
      <section>
        <h2>Visualización de cajas</h2>
        <p>Puedes visualizar el modelo de caja en la mayoría de navegadores con las herramientas de desarrollo (DevTools), para ver padding, borde y margin en colores.</p>
      </section>
      <section>
        <h2>Propiedades relacionadas</h2>
        <ul>
          <li>overflow: controla qué pasa si el contenido es más grande que el tamaño del área (visible, oculto, scroll).</li>
          <li>outline: línea externa al borde que no afecta al tamaño de la caja.</li>
          <li>box-shadow: sombra que se aplica a la caja.</li>
        </ul>
      </section>
      <section>
        <h2>Ejemplos útiles</h2>
        <section>
          <h3>Caja simple con espacio:</h3>
          <Code>{`
            .card {
              width: 400px;
              padding: 20px;
              border: 2px solid #ccc;
              margin: 30px auto;
              box-sizing: border-box;
            }
          `}</Code>
        </section>
        <section>
          <h3>Caja con solo margen y sin padding:</h3>
          <Code>{`
            .article {
              margin: 10px 0;
              border: none;
            }
          `}</Code>
        </section>
        <section>
          <h3>Buenas prácticas con el box model</h3>
          <ul>
            <li>Define globalmente box-sizing: border-box para facilitar el control del tamaño:</li>
            <Code>{`
              *,
              *::before,
              *::after {
                box-sizing: border-box;
              }
            `}</Code>
            <li>Usa márgenes para separar elementos, no padding externo.</li>
            <li>Controla colapsado de márgenes si ves que espacios verticales no coinciden.</li>
            <li>Usa min-height para mantener cajas visibles aunque el contenido falte.</li>
          </ul>
        </section>
      </section>
    </>
  )
}