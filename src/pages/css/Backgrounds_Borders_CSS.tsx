import Code from "../../components/Code"

type Backgrounds_Borders_CSSProps = {
  
}

export default function Backgrounds_Borders_CSS({}:Backgrounds_Borders_CSSProps) {
  return (
    <>
      <h1>Fondos y bordes en CSS</h1>
      <section>
        <h2>Fondos en CSS (background)</h2>
        <p>Los fondos controlan cómo se pinta la parte detrás del contenido y del padding de un elemento.</p>
        <section>
          <h3>background-color</h3>
          <p>Define el color de fondo.</p>
          <ul>
            <li>Valores:
              <ul>
                <li>Colores por nombre (red, blue, transparent)</li>
                <li>Hexadecimal (#ff0000, #000)</li>
                <li>RGB / RGBA (rgb(255, 0, 0), rgba(255, 0, 0, 0.5))</li>
                <li>HSL / HSLA (hsl(0, 100%, 50%), hsla(0, 100%, 50%, 0.5))</li>
              </ul>
            </li>
          </ul>
          <Code>{`
            div {
              background-color: rgba(0, 0, 0, 0.8);
            }
          `}</Code>
        </section>
        <section>
          <h3>background-image</h3>
          <p>Permite usar imágenes como fondo.</p>
          <ul>
            <li>Valores:
              <ul>
                <li>url("imagen.png")</li>
                <li>Gradientes (linear-gradient, radial-gradient, conic-gradient)</li>
                <li>Ninguno (none)</li>
              </ul>
            </li>
          </ul>
          <Code>{`
            div {
              background-image: url("fondo.jpg");
            }
          `}</Code>
        </section>
        <section>
          <h3>background-repeat</h3>
          <p>Controla si la imagen se repite.</p>
          <ul>
            <li>Valores:
              <ul>
                <li>repeat (default) → Repite en ambos ejes.</li>
                <li>repeat-x → Solo en horizontal.</li>
                <li>repeat-y → Solo en vertical.</li>
                <li>no-repeat → No se repite.</li>
                <li>space → Repite dejando espacios uniformes.</li>
                <li>round → Ajusta el tamaño para encajar.</li>
              </ul>
            </li>
          </ul>
          <Code>{`
            div {
              background-repeat: no-repeat;
            }
          `}</Code>
        </section>
        <section>
          <h3>background-position</h3>
          <p>Posiciona la imagen de fondo.</p>
          <ul>
            <li>Valores:
              <ul>
                <li>Palabras clave: left, center, right, top, bottom</li>
                <li>Coordenadas: 50% 50%, 20px 10px</li>
              </ul>
            </li>
          </ul>
          <Code>{`
            div {
              background-position: center top;
            }
          `}</Code>
        </section>
        <section>
          <h3>background-size</h3>
          <p>Controla el tamaño del fondo.</p>
          <ul>
            <li>Valores:
              <ul>
                <li>auto (por defecto, mantiene proporciones originales)</li>
                <li>cover (cubre todo el área, recorta si es necesario)</li>
                <li>contain (muestra toda la imagen, deja espacios si es necesario)</li>
                <li>Medidas: 100px 200px, 50% 50%</li>
              </ul>
            </li>
          </ul>
          <Code>{`
            div {
              background-size: cover;
            }
          `}</Code>
        </section>
        <section>
          <h3>background-attachment</h3>
          <p>Controla si el fondo se desplaza con el contenido.</p>
          <ul>
            <li>Valores:
              <ul>
                <li>scroll (default, se mueve con el scroll)</li>
                <li>fixed (fondo fijo en la ventana)</li>
                <li>local (se mueve con el área de scroll del elemento)</li>
              </ul>
            </li>
          </ul>
          <Code>{`
            div {
              background-attachment: fixed;
            }
          `}</Code>
        </section>
        <section>
          <h3>background-clip</h3>
          <p>Define hasta dónde se pinta el fondo.</p>
          <ul>
            <li>Valores:
              <ul>
                <li>border-box (default, pinta debajo del borde)</li>
                <li>padding-box (solo debajo del padding)</li>
                <li>content-box (solo debajo del contenido)</li>
                <li>text (fondo recortado por el texto, necesita -webkit-background-clip para soporte en algunos navegadores)</li>
              </ul>
            </li>
          </ul>
          <Code>{`
            div {
              background-clip: content-box;
            }
          `}</Code>
        </section>
        <section>
          <h3>background-origin</h3>
          <p>Controla desde dónde se calcula la posición de la imagen.</p>
          <ul>
            <li>Valores:
              <ul>
                <li>border-box (desde el borde)</li>
                <li>padding-box (desde el padding)</li>
                <li>content-box (desde el contenido)</li>
              </ul>
            </li>
          </ul>
          <Code>{`
            div {
              background-origin: padding-box;
            }
          `}</Code>
        </section>
        <section>
          <h3>background (shorthand)</h3>
          <p>Combina todas las propiedades de fondo.</p>
          <Code>{`
            div {
              background: url("fondo.jpg") no-repeat center/cover black;
            }
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Bordes en CSS (border)</h2>
        <p>Los bordes enmarcan el elemento y pueden personalizarse en estilo, grosor y color.</p>
        <section>
          <h3>border-width</h3>
          <p>Controla el grosor del borde.</p>
          <ul>
            <li>Valores:
              <ul>
                <li>Palabras clave: thin, medium, thick</li>
                <li>Unidades: 1px, 0.5em, etc.</li>
                <li>Puede especificarse por lado: border-width: 2px 4px 6px 8px;</li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h3>border-style</h3>
          <p>Define el estilo de la línea.</p>
          <ul>
            <li>Valores:
              <ul>
                <li>none → Sin borde.</li>
                <li>solid → Línea sólida.</li>
                <li>dashed → Línea discontinua.</li>
                <li>dotted → Línea punteada.</li>
                <li>double → Línea doble.</li>
                <li>groove, ridge, inset, outset → Estilos 3D.</li>
                <li>hidden → Oculto pero reserva espacio.</li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h3>border-color</h3>
          <p>Define el color del borde.</p>
          <ul>
            <li>Igual que color, acepta hex, rgb, hsl, etc.</li>
            <li>Se puede definir por lado: border-color: red green blue yellow;</li>
          </ul>
        </section>
        <section>
          <h3>Bordes individuales</h3>
          <p>Puedes definir por lado:</p>
          <Code>{`
            border-top: 2px solid red;
            border-right: 3px dashed blue;
            border-bottom: 5px double green;
            border-left: 1px dotted orange;
          `}</Code>
        </section>
        <section>
          <h3>border-radius</h3>
          <p>Hace bordes redondeados.</p>
          <ul>
            <li>Valores:
              <ul>
                <li>10px → radio uniforme.</li>
                <li>50% → círculo (si es cuadrado).</li>
                <li>Dos valores → 20px 40px (horizontal y vertical).</li>
                <li>Cuatro valores → 10px 20px 30px 40px (cada esquina).</li>
              </ul>
            </li>
          </ul>
          <Code>{`
            div {
              border-radius: 10px;
            }
          `}</Code>
        </section>
        <section>
          <h3>border-image</h3>
          <p>Permite usar imágenes como borde.</p>
          <ul>
            <li>Sintaxis:
              <ul>
                <li>border-image-source: imagen</li>
                <li>border-image-slice: cómo cortar la imagen</li>
                <li>border-image-width</li>
                <li>border-image-outset</li>
                <li>border-image-repeat: stretch, repeat, round, space</li>
              </ul>
            </li>
          </ul>
          <Code>{`
            div {
              border: 10px solid transparent;
              border-image: url(borde.png) 30 round;
            }
          `}</Code>
        </section>
        <section>
          <p>Tip pro: Fondos y bordes pueden combinarse creativamente para hacer botones personalizados, marcos decorativos, y efectos parallax.</p>
        </section>
      </section>
    </>
  )
}