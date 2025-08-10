import Code from "../../components/Code"

type Colors_Units_Measurements_CSSProps = {
  
}

export default function Colors_Units_Measurements_CSS({}:Colors_Units_Measurements_CSSProps) {
  return (
    <>
      <h1>Colores, unidades y medidas en CSS</h1>
      <section>
        <h2>Colores en CSS</h2>
        <p>CSS permite usar colores de muchas formas distintas. Esto es fundamental para controlar la apariencia visual.</p>
        <section>
          <h3>Formas de especificar colores:</h3>
          <section>
            <h4>Nombres de color (Keywords)</h4>
            <p>Son palabras clave predefinidas por CSS. Ejemplos:</p>
            <Code>{`
              color: red;
              color: blue;
              color: orange;
              color: black;
              color: transparent; /* color transparente */
            `}</Code>
            <p>Hay más de 140 nombres estándar (como aqua, salmon, teal).</p>
          </section>
          <section>
            <h4>Códigos Hexadecimales (#RRGGBB)</h4>
            <section>
              <h5>Un código hexadecimal que define el rojo, verde y azul en dos dígitos cada uno (de 00 a FF).</h5>
              <p>Ejemplo:</p>
              <Code>{`
                color: #ff0000; /* rojo */
                color: #00ff00; /* verde */
                color: #0000ff; /* azul */
              `}</Code>
            </section>
            <section>
              <h5>También se permite la forma corta #RGB que expande cada dígito:</h5>
              <Code>{`
                color: #f00; /* equivale a #ff0000 */
              `}</Code>
            </section>
          </section>
          <section>
            <h4>RGB y RGBA</h4>
            <section>
              <h5>rgb(r, g, b) donde r,g,b van de 0 a 255</h5>
              <Code>{`
                color: rgb(255, 0, 0); /* rojo */
              `}</Code>
            </section>
            <section>
              <h5>rgba(r, g, b, a) añade canal alfa para transparencia (de 0 a 1)</h5>
              <Code>{`
                color: rgba(255, 0, 0, 0.5); /* rojo semitransparente */
              `}</Code>
            </section>
          </section>
          <section>
            <h4>HSL y HSLA</h4>
            <section>
              <h5>Basado en matiz, saturación y luminosidad</h5>
              <Code>{`
                color: hsl(0, 100%, 50%); /* rojo */
                color: hsla(0, 100%, 50%, 0.5); /* rojo semi-transparente */
              `}</Code>
              <ul>
                <li>h (hue/matiz): 0 a 360 (ángulo)</li>
                <li>s (saturation/saturación): 0% a 100%</li>
                <li>l (lightness/luminosidad): 0% (negro) a 100% (blanco)</li>
              </ul>
            </section>
          </section>
          <section>
            <h4>currentColor</h4>
            <section>
              <h5>Hereda el valor de la propiedad color actual del elemento.</h5>
              <Code>{`
                border-color: currentColor;
              `}</Code>
            </section>
          </section>
          <section>
            <h4>Transparencia con transparent</h4>
            <p>Color totalmente transparente.</p>
            <Code>{`
              background-color: transparent;
            `}</Code>
          </section>
        </section>
      </section>
      <section>
        <h2>Unidades en CSS</h2>
        <p>Las unidades determinan cómo medir propiedades como ancho, alto, márgenes, fuentes, etc.</p>
        <section>
          <h3>Unidades absolutas</h3>
          <p>Medidas fijas, no dependen del contexto ni del dispositivo:</p>
          <table>
            <thead>
              <tr>
                <th>Unidad</th>
                <th>Descripción</th>
                <th>Uso común</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>px</td>
                <td>Píxeles</td>
                <td>Medida más común para pantallas</td>
              </tr>
              <tr>
                <td>pt</td>
                <td>Puntos (1pt = 1/72 pulg)</td>
                <td>Impresión, documentos</td>
              </tr>
              <tr>
                <td>cm</td>
                <td>Centímetros</td>
                <td>Impresión, a veces en web</td>
              </tr>
              <tr>
                <td>mm</td>
                <td>Milímetros</td>
                <td>Impresión</td>
              </tr>
              <tr>
                <td>in</td>
                <td>Pulgadas</td>
                <td>Impresión</td>
              </tr>
              <tr>
                <td>pc</td>
                <td>Picas (1pc = 12pt)</td>
                <td>Impresión</td>
              </tr>
            </tbody>
          </table>
          <p>Nota: Para web, px es la unidad más usada porque es más predecible.</p>
        </section>
        <section>
          <h3>Unidades relativas</h3>
          <p>Dependen del contexto (pantalla, elemento padre, fuente, ventana).</p>
          <table>
            <thead>
              <tr>
                <th>Unidad</th>
                <th>Descripción</th>
                <th>Contexto de referencia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>%</td>
                <td>Porcentaje</td>
                <td>Relativo al tamaño del elemento padre</td>
              </tr>
              <tr>
                <td>em</td>
                <td>Relativo al tamaño de la fuente del elemento actual</td>
                <td>Si font-size: 16px, 1em = 16px</td>
              </tr>
              <tr>
                <td>rem</td>
                <td>Relativo al tamaño de la fuente raíz {`(<html>)`}</td>
                <td>Si raíz es 16px, 1rem = 16px</td>
              </tr>
              <tr>
                <td>vw</td>
                <td>Porcentaje del ancho de la ventana de visualización</td>
                <td>1vw = 1% del ancho viewport</td>
              </tr>
              <tr>
                <td>vh</td>
                <td>Porcentaje de la altura de la ventana de visualización</td>
                <td>1vh = 1% del alto viewport</td>
              </tr>
              <tr>
                <td>vmin</td>
                <td>El menor entre vw y vh</td>
                <td>Útil para dimensiones responsivas</td>
              </tr>
              <tr>
                <td>vmax</td>
                <td>El mayor entre vw y vh</td>
                <td>Útil para dimensiones responsivas</td>
              </tr>
            </tbody>
          </table>
          <p>Ejemplos de uso</p>
          <Code>{`
            div {
              width: 50%;      /* Mitad del contenedor padre */
              font-size: 1.5em; /* 1.5 veces la fuente del padre */
              padding: 2rem;    /* 2 veces la fuente raíz */
              height: 10vh;     /* 10% de la altura de la ventana */
            }
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Funciones útiles para cálculos</h2>
        <section>
          <h3>calc()</h3>
          <p>Permite hacer operaciones aritméticas dentro de CSS.</p>
          <Code>{`
            width: calc(100% - 50px);
            margin-left: calc(2rem + 10px);
          `}</Code>
          <p>Nota: La expresión debe tener espacios entre operadores.</p>
        </section>
        <section>
          <h3>min(), max() y clamp()</h3>
          <section>
            <h4>min() → toma el valor mínimo de los parámetros.</h4>
            <Code>{`
              width: min(50vw, 300px);
            `}</Code>
          </section>
          <section>
            <h4>max() → toma el valor máximo.</h4>
            <Code>{`
              font-size: max(1rem, 2vw);
            `}</Code>
          </section>
          <section>
            <h4>clamp() → limita un valor dentro de un rango.</h4>
            <Code>{`
              font-size: clamp(1rem, 2vw, 3rem);
            `}</Code>
          </section>
        </section>
      </section>
      <section>
        <h2>Transparencia y opacidad</h2>
        <section>
          <h3>opacity: controla la opacidad del elemento y sus hijos (valor de 0 a 1).</h3>
          <Code>{`
            opacity: 0.5; /* semitransparente */
          `}</Code>
        </section>
        <section>
          <h3>Usar colores RGBA o HSLA para transparencia en colores específicos sin afectar hijos.</h3>
        </section>
      </section>
      <section>
        <h2>Colores personalizados con variables CSS</h2>
        <p>Puedes crear variables para colores y reutilizarlos:</p>
        <Code>{`
          :root {
            --color-principal: #3498db;
            --color-fondo: #f0f0f0;
          }

          body {
            background-color: var(--color-fondo);
            color: var(--color-principal);
          }
        `}</Code>
      </section>
      <section>
        <h2>Soporte y compatibilidad</h2>
        <ul>
          <li>Los colores RGB, HEX y nombres son compatibles en todos los navegadores.</li>
          <li>HSL y variables CSS tienen soporte en navegadores modernos.</li>
          <li>calc() y funciones min/max/clamp tienen buen soporte moderno pero menos en navegadores antiguos.</li>
        </ul>
      </section>
      <section>
        <h2>Buenas prácticas</h2>
        <ul>
          <li>Usa unidades relativas para diseños responsivos (em, rem, vw, vh).</li>
          <li>Evita usar solo px para fuentes, usa rem para que escalen con el usuario.</li>
          <li>Usa variables CSS para mantener consistencia en paletas de colores.</li>
          <li>Usa clamp() para tipografía flexible con límites mínimo y máximo.</li>
        </ul>
      </section>
    </>
  )
}