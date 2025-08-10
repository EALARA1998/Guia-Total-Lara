import Code from "../../components/Code"

type Display_Flow_CSSProps = {
  
}

export default function Display_Flow_CSS({}:Display_Flow_CSSProps) {
  return (
    <>
      <h1>Display y Flujo en CSS</h1>
      <p>Este tema es clave para entender cómo los elementos se posicionan y muestran en la página.</p>
      <section>
        <h2>Propiedad display</h2>
        <p>Determina cómo se renderiza un elemento y cómo afecta al flujo del documento.</p>
        <section> 
          <h3>Valores básicos de display</h3>
          <table>
            <thead>
              <tr>
                <th>Valor</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>block</td>
                <td>Elemento de bloque. Ocupa todo el ancho disponible, inicia en una nueva línea.</td>
              </tr>
              <tr>
                <td>inline</td>
                <td>Elemento en línea. Solo ocupa el ancho necesario, no inicia nueva línea, respeta el flujo.</td>
              </tr>
              <tr>
                <td>inline-block</td>
                <td>Similar a inline, pero puedes aplicar ancho y alto.</td>
              </tr>
              <tr>
                <td>none</td>
                <td>El elemento no se muestra ni ocupa espacio (se oculta).</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Detalles</h3>
          <section>
            <h4>block</h4>
            <p>Ejemplos: {`<div>, <p>, <h1>`}.</p>
            <p>Ocupa toda la línea horizontal y fuerza salto de línea.</p>
          </section>
          <section>
            <h4>inline</h4>
            <p>Ejemplos: {`<span>, <a>, <strong>`}.</p>
            <p>No interrumpe el flujo, se coloca junto a otros en línea.</p>
          </section>
          <section>
            <h4>inline-block</h4>
            <p>Como inline pero permite controlar ancho, alto, margenes y padding.</p>
            <p>Útil para elementos que deben estar en línea pero con tamaño definido.</p>
          </section>
        </section>
      </section>
      <section>
        <h2>Display con valores modernos y de layout</h2>
        <section>
          <h3>flex</h3>
          <p>Flexbox (Flexible Box Layout) es un modelo de diseño que distribuye espacio dentro de un contenedor flexible, alineando y distribuyendo sus ítems (elementos hijos) de forma eficiente, adaptándose bien a diferentes tamaños de pantalla.</p>
          <section>
            <h4>Contenedor flex</h4>
            <p>Para empezar, defines un contenedor como flex:</p>
            <Code>{`
              .container {
                display: flex;
              }
            `}</Code>
            <p>Esto hace que todos los hijos directos sean flex items.</p>
          </section>
          <section>
            <h4>Dirección del eje principal (flex-direction)</h4>
            <p>Determina si los elementos se distribuyen en fila o columna.</p>
            <Code>{`
              .container {
                flex-direction: row;    /* fila horizontal (default) */
                flex-direction: row-reverse;  /* fila horizontal invertida */
                flex-direction: column; /* columna vertical */
                flex-direction: column-reverse; /* columna invertida */
              }
            `}</Code>
          </section>
          <section>
            <h4>Alineación y justificación</h4>
            <ul>
              <li>Eje principal (main axis): dirección definida por flex-direction.</li>
              <li>Eje transversal (cross axis): perpendicular al eje principal.</li>
            </ul>
            <section>
              <h5>justify-content</h5>
              <p>Controla cómo se distribuyen los ítems en el eje principal (horizontal si row).</p>
              <p>Opciones comunes:</p>
              <ul>
                <li>flex-start (default): ítems pegados al inicio.</li>
                <li>flex-end: ítems pegados al final.</li>
                <li>center: ítems centrados.</li>
                <li>space-between: espacio igual entre ítems.</li>
                <li>space-around: espacio alrededor de cada ítem.</li>
                <li>space-evenly: espacio igual entre ítems y bordes.</li>
              </ul>
            </section>
            <section>
              <h5>align-items</h5>
              <p>Controla la alineación en el eje transversal (vertical si row).</p>
              <p>Opciones:</p>
              <ul>
                <li>stretch (default): ítems se estiran para llenar.</li>
                <li>flex-start: alineación arriba.</li>
                <li>flex-end: alineación abajo.</li>
                <li>center: centrados.</li>
                <li>baseline: alineados por la línea base del texto.</li>
              </ul>
            </section>
            <section>
              <h5>align-content</h5>
              <p>Funciona cuando hay varias líneas de ítems (por ejemplo, con flex-wrap: wrap), y alinea todas las líneas en el eje transversal.</p>
            </section>
          </section>
          <section>
            <h4>Flex-wrap</h4>
            <p>Por defecto, los ítems intentan caber en una sola línea (nowrap).</p>
            <Code>{`
              .container {
                flex-wrap: nowrap;  /* default, todo en una línea */
                flex-wrap: wrap;    /* permite que se dividan en varias líneas */
                flex-wrap: wrap-reverse; /* líneas invertidas */
              }
            `}</Code>
          </section>
          <section>
            <h4>Control individual de los ítems</h4>
            <p>En cada ítem, puedes controlar su comportamiento con:</p>
            <ul>
              <li>flex-grow: cuánto puede crecer un ítem para llenar espacio disponible.</li>
              <li>flex-shrink: cuánto puede reducirse si falta espacio.</li>
              <li>flex-basis: tamaño base del ítem antes de crecer o encoger.</li>
            </ul>
            <p>Ejemplo:</p>
            <Code>{`
              .item {
                flex-grow: 1;   /* puede crecer para llenar espacio */
                flex-shrink: 1; /* puede encoger si hace falta */
                flex-basis: 100px; /* tamaño base */
              }
            `}</Code>
            <p>La propiedad flex es un atajo que combina estas tres:</p>
            <Code>{`
              flex: 1 1 100px;
            `}</Code>
          </section>
          <section>
            <h4>Orden de los ítems</h4>
            <p>Puedes cambiar el orden visual con:</p>
            <Code>{`
              .item {
                order: 2; /* valores más bajos aparecen antes */
              }
            `}</Code>
            <p>El valor por defecto es 0.</p>
          </section>
          <section>
            <h4>Alineación individual</h4>
            <p>Con align-self puedes sobreescribir la alineación de un ítem individual en el eje transversal.</p>
            <Code>{`
              .item {
                align-self: flex-start;
              }
            `}</Code>
          </section>
          <section>
            <h4>Ejemplo simple</h4>
            <Code>{`
              .container {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
              }

              .item {
                flex: 1 1 150px;
                margin: 5px;
              }
            `}</Code>
          </section>
          <section>
            <h4></h4>
            <table>
              <thead>
                <tr>
                  <th>Propiedad (contenedor)</th>
                  <th>Función</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>display: flex</td>
                  <td>Activa Flexbox</td>
                </tr>
                <tr>
                  <td>flex-direction</td>
                  <td>Dirección de los ítems</td>
                </tr>
                <tr>
                  <td>justify-content</td>
                  <td>Distribución en eje principal</td>
                </tr>
                <tr>
                  <td>align-items</td>
                  <td>Alineación en eje transversal</td>
                </tr>
                <tr>
                  <td>flex-wrap</td>
                  <td>Permitir que los ítems hagan wrap</td>
                </tr>
                <tr>
                  <td>align-content</td>
                  <td>Alineación de líneas cuando hay varias</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Propiedad (ítem)</th>
                  <th>Función</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>flex-grow</td>
                  <td>Crecer para ocupar espacio extra</td>
                </tr>
                <tr>
                  <td>flex-shrink</td>
                  <td>Encoger si falta espacio</td>
                </tr>
                <tr>
                  <td>flex-basis</td>
                  <td>Tamaño base antes de crecer o encoger</td>
                </tr>
                <tr>
                  <td>flex</td>
                  <td>Atajo para los tres anteriores</td>
                </tr>
                <tr>
                  <td>order</td>
                  <td>Cambiar orden visual</td>
                </tr>
                <tr>
                  <td>align-self</td>
                  <td>Alineación individual</td>
                </tr>
              </tbody>
            </table>
          </section>
          <search>
            <h4>¿Cuándo usar Flexbox?</h4>
            <ul>
              <li>Para layouts lineales (barra de navegación, listas horizontales o verticales).</li>
              <li>Cuando necesitas control dinámico del espacio entre elementos.</li>
              <li>Para componentes pequeños o estructuras internas.</li>
              <li>Cuando quieres que los elementos se adapten fluidamente.</li>
            </ul>
          </search>
        </section>
        <section>
          <h3>grid</h3>
          <p>Grid es un sistema de diseño bidimensional para la web que permite distribuir elementos en filas y columnas, creando estructuras complejas de manera sencilla y con control total. A diferencia de Flexbox, que es principalmente unidimensional (filas o columnas), Grid trabaja con filas y columnas a la vez.</p>
          <section>
            <h4>Contenedor Grid</h4>
            <p>Para empezar a usarlo, defines un contenedor como grid con:</p>
            <Code>{`
              .container {
                display: grid;
              }
            `}</Code>
            <p>Esto convierte a todos los elementos hijos directos en ítems de grid.</p>
          </section>
          <section>
            <h4>Definir filas y columnas</h4>
            <ul>
              <li>grid-template-columns: define las columnas.</li>
              <li>grid-template-rows: define las filas.</li>
              <p>Ejemplo:</p>
              <Code>{`
                .container {
                  display: grid;
                  grid-template-columns: 100px 200px 1fr;
                  grid-template-rows: 50px auto 100px;
                }
              `}</Code>
              <li>Aquí tienes 3 columnas: 100px, 200px y una que ocupa el resto del espacio disponible (1fr).</li>
              <li>Tres filas: 50px, tamaño automático según contenido, y 100px.</li>
            </ul>
          </section>
          <section>
            <h4>Unidad fr</h4>
            <ul>
              <li>fr significa fraction o fracción del espacio disponible.</li>
              <li>Ejemplo: grid-template-columns: 1fr 2fr; divide el ancho en 3 partes; la segunda columna tendrá el doble de ancho que la primera.</li>
            </ul>
          </section>
          <section>
            <h4>Espaciado (Gaps)</h4>
            <ul>
              <li>gap: define el espacio entre filas y columnas.</li>
              <li>También tienes row-gap y column-gap para controlar filas y columnas por separado.</li>
            </ul>
            <Code>{`
              .container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 20px;
              }
            `}</Code>
          </section>
          <section>
            <h4>Colocar elementos (grid items)</h4>
            <p>Puedes controlar dónde colocas cada elemento usando:</p>
            <ul>
              <li>grid-column-start, grid-column-end</li>
              <li>grid-row-start, grid-row-end</li>
            </ul>
            <p>Ejemplo:</p>
            <Code>{`
              .item1 {
                grid-column: 1 / 3; /* ocupa columnas 1 y 2 */
                grid-row: 2 / 4;    /* ocupa filas 2 y 3 */
              }
            `}</Code>
            <p>También puedes usar la forma corta:</p>
            <Code>{`
              grid-column: 1 / span 2; /* empieza en columna 1 y abarca 2 columnas */
            `}</Code>
          </section>
          <section>
            <h4>Lineas y áreas nombradas</h4>
            <section>
              <h5>Puedes nombrar líneas para facilitar la colocación:</h5>
              <Code>{`
                .container {
                  display: grid;
                  grid-template-columns: [start] 1fr [center] 2fr [end];
                }
              `}</Code>
            </section>
            <section>
              <h5>También puedes definir áreas de grid para nombrar zonas:</h5>
              <Code>{`
                .container {
                  display: grid;
                  grid-template-areas:
                    "header header"
                    "sidebar main"
                    "footer footer";
                }

                .header { grid-area: header; }
                .sidebar { grid-area: sidebar; }
                .main { grid-area: main; }
                .footer { grid-area: footer; }
              `}</Code> 
            </section>
            <section>
              <h4>Auto-placement (auto-flow)</h4>
              <p>Por defecto, los elementos se colocan en orden en filas, pero puedes cambiar el flujo a columnas con:</p>
              <Code>{`
                .container {
                  grid-auto-flow: column;
                }
              `}</Code>
            </section>
            <section>
              <h4>Tamaños automáticos y minmax()</h4>
              <ul>
                <li>auto: tamaño basado en contenido.</li>
                <li>minmax(min, max): define un rango flexible.</li>
              </ul>
              <p>Ejemplo:</p>
              <Code>{`
                grid-template-columns: repeat(3, minmax(100px, 1fr));
              `}</Code>
              <p>Esto crea 3 columnas que nunca serán menores a 100px y pueden crecer hasta 1 fracción del espacio disponible.</p>
            </section>
            <section>
              <h4>Función repeat()</h4>
              <p>Para repetir definiciones fácilmente:</p>
              <Code>{`
                grid-template-columns: repeat(4, 1fr);
              `}</Code>
              <p>Esto crea 4 columnas iguales.</p>
            </section>
            <section>
              <h4>Ejemplo completo</h4>
              <Code>{`
                .container {
                  display: grid;
                  grid-template-columns: 150px 1fr 1fr;
                  grid-template-rows: auto 300px;
                  gap: 15px;
                  grid-template-areas:
                    "sidebar header header"
                    "sidebar main main";
                }

                .sidebar { grid-area: sidebar; }
                .header { grid-area: header; }
                .main { grid-area: main; }
              `}</Code>
            </section>
          </section>
          <section>
            <h4>Ventajas de Grid sobre Flexbox</h4>
            <ul>
              <li>Trabaja con filas y columnas a la vez.</li>
              <li>Permite diseños más complejos sin trucos.</li>
              <li>Control exacto del tamaño y posición.</li>
              <li>Ideal para layouts globales o grandes secciones.</li>
            </ul>
          </section>
        </section>
        <section>
          <h3>Otros valores interesantes</h3>
          <ul>
            <li>table, table-row, table-cell → para replicar comportamiento de tablas.</li>
            <li>list-item → para listas {`(<li>)`}.</li>
            <li>run-in (no muy usado).</li>
            <li>contents → elimina el contenedor pero mantiene hijos visibles (útil para accesibilidad o estilos).</li>
          </ul>
        </section>
      </section>
      <section>
        <h2>Flujo normal del documento</h2>
        <p>Por defecto, los elementos están en un flujo normal:</p>
        <ul>
          <li>Los elementos block apilan uno debajo del otro verticalmente.</li>
          <li>Los elementos inline fluyen horizontalmente en línea con otros elementos en línea.</li>
        </ul>
      </section>
      <section>
        <h2>Elementos flotantes (float)</h2>
        <ul>
          <li>float permite sacar elementos del flujo normal y “flotarlos” a la izquierda o derecha.</li>
          <li>Se usa para crear layouts antes de Flexbox/Grid.</li>
          <li>Ejemplo:</li>
          <Code>{`
            .img {
              float: left;
              margin-right: 10px;
            }
          `}</Code>
          <li>Problemas: puede causar que el contenedor padre colapse (no reconoce altura de hijos flotados).</li>
          <li>Se soluciona con clearfix o con overflow: auto en el contenedor.</li>
        </ul>
      </section>
      <section>
        <h2>Clearfix para limpiar floats</h2>
        <Code>{`
          .clearfix::after {
            content: "";
            display: block;
            clear: both;
          }
        `}</Code>
        <p>Esto fuerza al contenedor a reconocer la altura de elementos flotantes dentro.</p>
      </section>
      <section>
        <h2>Display inline vs inline-block diferencias</h2>
        <table>
          <thead>
            <tr>
              <th>Característica</th>
              <th>inline</th>
              <th>inline-block</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Puede definir ancho/alto</td>
              <td>No</td>
              <td>Si</td>
            </tr>
            <tr>
              <td>Salto de línea</td>
              <td>No</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Margen y padding</td>
              <td>Limitado (vertical no funciona bien)</td>
              <td>Funciona completo</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>Propiedad visibility</h2>
        <p>No es parte de display pero relacionada:</p>
        <ul>
          <li>visible → elemento visible (por defecto)</li>
          <li>hidden → oculto pero ocupa espacio</li>
          <li>collapse → colapsa (en tablas)</li>
        </ul>
      </section>
      <section>
        <h2>Relación con position y flujo</h2>
        <ul>
          <li>Elementos con position: static o relative forman parte del flujo.</li>
          <li>absolute y fixed se sacan del flujo.</li>
        </ul>
      </section>
      <section>
        <h2>Resumen visual</h2>
        <table>
          <thead>
            <tr>
              <th>display value</th>
              <th>Comportamiento</th>
              <th>Saltos de línea</th>
              <th>Ancho y alto aplicables</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>block</td>
              <td>Bloque, ocupa toda la línea</td>
              <td>Si</td>
              <td>Si</td>
            </tr>
            <tr>
              <td>inline</td>
              <td>En línea, solo ocupa espacio necesario</td>
              <td>No</td>
              <td>No (solo margen horizontal)</td>
            </tr>
            <tr>
              <td>inline-block</td>
              <td>En línea con tamaño controlable</td>
              <td>No</td>
              <td>Si</td>
            </tr>
            <tr>
              <td>none</td>
              <td>No se muestra ni ocupa espacio</td>
              <td>N/A</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>flex</td>
              <td>Contenedor flexible (fila/columna)</td>
              <td>Depende del contenido</td>
              <td>Si</td>
            </tr>
            <tr>
              <td>grid</td>
              <td>Contenedor de cuadrícula</td>
              <td>Depende del contenido</td>
              <td>Si</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>Buenas prácticas</h2>
        <ul>
          <li>Prefiere Flexbox o Grid para layouts modernos en lugar de floats.</li>
          <li>Usa inline-block cuando quieras elementos en línea con tamaño definido.</li>
          <li>Evita usar display:none si necesitas animar o mostrar/ocultar suavemente; usa visibility o opacity con transiciones.</li>
          <li>Ten cuidado con el flujo cuando uses floats para no romper el diseño.</li>
        </ul>
      </section>
    </>
  )
}