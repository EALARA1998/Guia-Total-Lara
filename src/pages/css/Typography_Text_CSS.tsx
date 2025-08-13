import Code from "../../components/Code"

type Typography_Text_CSSProps = {
  
}

export default function Typography_Text_CSS({}:Typography_Text_CSSProps) {
  return (
    <>
      <h1>Tipografía y Texto en CSS</h1>
      <p>La tipografía y el manejo de texto en CSS son esenciales para la legibilidad, estética y accesibilidad de un sitio web. Controlar cómo se ve y se comporta el texto implica conocer propiedades de fuentes, espaciados, alineaciones, decoraciones y efectos.</p>
      <section>
        <h2>Fuentes (font-*)</h2>
        <p>Las propiedades de fuentes determinan el tipo, tamaño, peso y estilo del texto.</p>
        <section>
          <h3>font-family</h3>
          <ul>
            <li>Define la familia tipográfica.</li>
            <li>Se recomienda usar varias opciones como fallback por si alguna no está disponible.</li>
            <li>Ejemplo:
              <Code>{`
                font-family: "Open Sans", Arial, sans-serif;
              `}</Code>
            </li>
            <li>Tipos de familias genéricas:
              <ul>
                <li>serif → Con remates (Times New Roman)</li>
                <li>sans-serif → Sin remates (Arial, Helvetica)</li>
                <li>monospace → Espaciado fijo (Courier)</li>
                <li>cursive → Simula escritura a mano</li>
                <li>fantasy → Estilos decorativos</li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h3>font-size</h3>
          <ul>
            <li>Define el tamaño de la fuente.</li>
            <li>Unidades más comunes:
              <ul>
                <li>Absolutas: px, pt, cm</li>
                <li>Relativas: em, rem, %, vw</li>
              </ul>
            </li>
            <li>Ejemplo:</li>
          </ul>
          <Code>{`
            font-size: 16px;   /* tamaño fijo */
            font-size: 1.2rem; /* relativo a la raíz */
          `}</Code>
        </section>
        <section>
          <h3>font-weight</h3>
            <ul>
              <li>Grosor de la letra.</li>
              <li>Valores:
                <ul>
                  <li>Palabras clave: normal, bold, lighter, bolder</li>
                  <li>Numéricos: 100 (fino) → 900 (muy grueso)</li>
                </ul>
              </li>
              <li>Ejemplo:</li>
            </ul>
            <Code>{`
              font-weight: 700;
            `}</Code>
        </section>
        <section>
          <h3>font-style</h3>
          <ul>
            <li>Estilo de la fuente.</li>
            <li>Valores:
              <ul>
                <li>normal</li>
                <li>italic</li>
                <li>oblique (similar a italic pero menos precisa)</li>
              </ul>
            </li>
            <li>Ejemplo:</li>
            <Code>{`
              font-style: italic;
            `}</Code>
          </ul>
        </section>
        <section>
          <h3>font-variant</h3>
          <ul>
            <li>Alterna entre letras normales y versalitas (small caps).</li>
            <li>Ejemplo:</li>
            <Code>{`
              font-variant: small-caps;
            `}</Code>
          </ul>
        </section>
        <section>
          <h3>font (shorthand)</h3>
          <ul>
            <li>Permite definir varias propiedades a la vez:</li>
          </ul>
          <Code>{`
            font: italic small-caps bold 16px/1.5 "Open Sans", sans-serif;
          `}</Code>
          <p>Orden: style → variant → weight → size/line-height → family</p>
        </section>
      </section>
      <section>
        <h2>Espaciado y Altura de Línea</h2>
        <section>
          <h3>line-height</h3>
          <ul>
            <li>Altura de la caja de línea.</li>
            <li>Mejora legibilidad.</li>
            <li>Ejemplo:</li>
          </ul>
          <Code>{`
            line-height: 1.5; /* relativo al tamaño de la fuente */
          `}</Code>
        </section>
        <section>
          <h3>letter-spacing</h3>
          <ul>
            <li>Espacio entre letras.</li>
            <li>Ejemplo:</li>
          </ul>
          <Code>{`
            letter-spacing: 0.05em;
          `}</Code>
        </section>
        <section>
          <h3>word-spacing</h3>
          <ul>
            <li>Espacio entre palabras.</li>
            <li>Ejemplo:</li>
          </ul>
          <Code>{`
            word-spacing: 0.1em;
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Alineación y Dirección del Texto</h2>
        <section>
          <h3>text-align</h3>
          <ul>
            <li>Alinea texto horizontalmente:
              <ul>
                <li>left, right, center, justify, start, end</li>
              </ul>
            </li>
            <li>Ejemplo:</li>
          </ul>
          <Code>{`
            text-align: justify;
          `}</Code>
        </section>
        <section>
          <h3>vertical-align</h3>
          <ul>
            <li>Alineación vertical dentro de una línea, útil en elementos inline o table-cell.</li>
            <li>Valores: baseline, middle, top, bottom</li>
          </ul>
          <Code>{`
            vertical-align: middle;
          `}</Code>
        </section>
        <section>
          <h3>direction y unicode-bidi</h3>
          <ul>
            <li>Controlan escritura de izquierda a derecha (ltr) o derecha a izquierda (rtl).</li>
          </ul>
          <Code>{`
            direction: rtl;
            unicode-bidi: bidi-override;
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Decoraciones y Transformaciones</h2>
        <section>
          <h3>text-decoration</h3>
          <ul>
            <li>Efectos en el texto:
              <ul>
                <li>underline (subrayado)</li>
                <li>overline (línea arriba)</li>
                <li>line-through (tachado)</li>
                <li>none</li>
              </ul>
            </li>
          </ul>
          <Code>{`
            text-decoration: underline dotted red;
          `}</Code>
        </section>
        <section>
          <h3>text-transform</h3>
          <ul>
            <li>Cambia el caso del texto:
              <ul>
                <li>uppercase (MAYÚSCULAS)</li>
                <li>lowercase (minúsculas)</li>
                <li>capitalize (Primera Letra en Mayúscula)</li>
              </ul>
            </li>
          </ul>
          <Code>{`
            text-transform: capitalize;
          `}</Code>
        </section>
        <section>
          <h3>text-shadow</h3>
          <ul>
            <li>Sombra en texto:</li>
          </ul>
          <Code>{`
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
          `}</Code>
          <p>Formato: offset-x offset-y blur color</p>
        </section>
      </section>
      <section>
        <h2>Control de Flujo del Texto</h2>
        <section>
          <h3>white-space</h3>
          <ul>
            <li>Controla cómo se manejan espacios y saltos de línea:
              <ul>
                <li>normal → Ajusta texto y quita espacios extra</li>
                <li>nowrap → Todo en una línea</li>
                <li>pre → Respeta espacios y saltos (como {`<pre>`})</li>
                <li>pre-wrap → Respeta espacios y ajusta líneas</li>
                <li>pre-line → Quita espacios extra pero respeta saltos</li>
              </ul>
            </li>
          </ul>
          <Code>{`
            white-space: pre-wrap;
          `}</Code>
        </section>
        <section>
          <h3>overflow-wrap / word-break</h3>
          <ul>
            <li>Permiten cortar palabras largas que no caben:</li>
          </ul>
          <Code>{`
            overflow-wrap: break-word;
            word-break: break-all;
          `}</Code>
        </section>
        <section>
          <h3>text-overflow</h3>
          <ul>
            <li>Controla el texto que sobresale:</li>
          </ul>
          <Code>{`
            text-overflow: ellipsis; /* agrega "..." */
          `}</Code>
          <p>Requiere overflow: hidden y white-space: nowrap.</p>
        </section>
      </section>
      <section>
        <h2>Fuentes Externas</h2>
        <section>
          <h3>Google Fonts</h3>
          <Code>{`
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
          `}</Code>
          <Code>{`
            body {
              font-family: 'Roboto', sans-serif;
            }
          `}</Code>
        </section>
        <section>
          <h3>Fuentes locales con @font-face</h3>
          <Code>{`
            @font-face {
              font-family: 'MiFuente';
              src: url('fonts/MiFuente.woff2') format('woff2'),
                  url('fonts/MiFuente.woff') format('woff');
            }
          `}</Code>
        </section>
        <section>
          <h3>Accesibilidad Tipográfica</h3>
          <ul>
            <li>Usa contrastes suficientes (WCAG recomienda ratio 4.5:1).</li>
            <li>No uses solo color para transmitir información.</li>
            <li>Tamaño de texto mínimo recomendado: 16px.</li>
          </ul>
        </section>
        <p>La tipografía no solo es estética, también afecta la usabilidad, legibilidad y cómo los usuarios perciben tu marca.</p>
      </section>
    </>
  )
}