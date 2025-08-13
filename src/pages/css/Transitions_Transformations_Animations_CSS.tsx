import Code from "../../components/Code"

type Transitions_Transformations_Animations_CSSProps = {
  
}

export default function Transitions_Transformations_Animations_CSS({}:Transitions_Transformations_Animations_CSSProps) {
  return (
    <>
      <h1>Transiciones, Transformaciones y Animaciones</h1>
      <section>
        <h2>Transiciones (Transitions)</h2>
        <p>Las transiciones permiten que los cambios en las propiedades CSS se realicen de forma suave y progresiva en lugar de ser inmediatos.</p>
        <section>
          <h3>Sintaxis principal:</h3>
          <Code>{`
            selector {
              transition: property duration timing-function delay;
            }
          `}</Code>
        </section>
        <section>
          <h3>Parámetros:</h3>
          <ul>
            <li>property → La propiedad que va a cambiar (width, color, background-color, all, etc.).</li>
            <li>duration → Tiempo que dura la transición (0.3s, 500ms, 2s, etc.).</li>
            <li>timing-function → Curva de velocidad del cambio.
              <ul>
                <li>ease → Comienza lento, acelera y desacelera (valor por defecto).</li>
                <li>linear → Velocidad constante.</li>
                <li>ease-in → Comienza lento y luego rápido.</li>
                <li>ease-out → Comienza rápido y termina lento.</li>
                <li>ease-in-out → Lento al principio y al final.</li>
                <li>cubic-bezier(x1, y1, x2, y2) → Curva personalizada.</li>
              </ul>
            </li>
            <li>delay → Tiempo que espera antes de iniciar la transición.</li>
          </ul>
        </section>
        <section>
          <h3>Ejemplo:</h3>
          <Code>{`
            button {
              background-color: red;
              transition: background-color 0.5s ease-in-out;
            }

            button:hover {
              background-color: blue;
            }
          `}</Code>
          <p>Cuando el usuario pase el mouse, el color cambiará suavemente.</p>
        </section>
        <section>
          <h3>Atajos útiles:</h3>
          <ul>
            <li>transition: all 0.3s ease; → Afecta todas las propiedades que cambien.</li>
            <li>transition-property → Define qué propiedades cambian.</li>
            <li>transition-duration → Tiempo.</li>
            <li>transition-timing-function → Velocidad.</li>
            <li>transition-delay → Retraso.</li>
          </ul>
        </section>
      </section>
      <section>
        <h2>Transformaciones (Transforms)</h2>
        <p>Permiten modificar el elemento en el espacio sin afectar al flujo normal del documento.</p>
        <p>No cambian el tamaño real en el layout, sino la representación visual.</p>
        <section>
          <h3>Propiedad: transform</h3>
        </section>
        <section>
          <h3>Funciones más comunes:</h3>
          <table>
            <thead>
              <tr>
                <th>Función</th>
                <th>Descripción</th>
                <th>Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>translate(x, y)</td>
                <td>Mueve el elemento en 2D.</td>
                <td>transform: translate(50px, 20px);</td>
              </tr>
              <tr>
                <td>translateX(n) / translateY(n)</td>
                <td>Mueve en un solo eje.</td>
                <td>translateX(100px)</td>
              </tr>
              <tr>
                <td>scale(x, y)</td>
                <td>Escala en tamaño.</td>
                <td>scale(2, 1.5)</td>
              </tr>
              <tr>
                <td>scaleX(n) / scaleY(n)</td>
                <td>Escala solo en un eje.</td>
                <td>scaleX(1.2)</td>
              </tr>
              <tr>
                <td>rotate(angle)</td>
                <td>Rota en grados o radianes.</td>
                <td>rotate(45deg)</td>
              </tr>
              <tr>
                <td>skew(x, y)</td>
                <td>Inclina el elemento.</td>
                <td>skew(20deg, 10deg)</td>
              </tr>
              <tr>
                <td>matrix(a,b,c,d,e,f)</td>
                <td>Transformación 2D avanzada.</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>En 3D:</h3>
          <ul>
            <li>rotateX(angle) → Gira sobre el eje X.</li>
            <li>rotateY(angle) → Gira sobre el eje Y.</li>
            <li>rotateZ(angle) → Gira sobre el eje Z.</li>
            <li>translateZ(n) → Mueve hacia adelante/atrás.</li>
            <li>scaleZ(n) → Escala en profundidad.</li>
            <li>perspective(n) → Agrega perspectiva.</li>
          </ul>
        </section>
        <section>
          <h3>Ejemplo de transformación combinada:</h3>
          <Code>{`
            div {
              transform: translateX(50px) rotate(20deg) scale(1.2);
            }
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Animaciones (Animations)</h2>
        <p>A diferencia de las transiciones, las animaciones permiten control total de los estados intermedios y pueden repetirse, pausarse o correr indefinidamente.</p>
        <section>
          <h3>Pasos para crear una animación:</h3>
          <section>
            <h4>Definir los fotogramas clave (@keyframes)</h4>
            <Code>{`
              @keyframes nombreAnimacion {
                0% { transform: translateX(0); background-color: red; }
                50% { transform: translateX(50px); background-color: yellow; }
                100% { transform: translateX(0); background-color: red; }
              }
            `}</Code>
          </section>
          <section>
            <h4>Aplicar la animación al elemento</h4>
            <Code>{`
              div {
                animation-name: nombreAnimacion;
                animation-duration: 2s;
                animation-timing-function: ease-in-out;
                animation-delay: 0s;
                animation-iteration-count: infinite; /* o un número */
                animation-direction: alternate; /* normal, reverse, alternate, alternate-reverse */
                animation-fill-mode: forwards; /* none, forwards, backwards, both */
                animation-play-state: running; /* running o paused */
              }
            `}</Code>
          </section>
        </section>
        <section>
          <h3>Propiedades de animación</h3>
          <ul>
            <li>animation-name → Nombre definido en @keyframes.</li>
            <li>animation-duration → Tiempo que dura un ciclo.</li>
            <li>animation-timing-function → Velocidad.</li>
            <li>animation-delay → Retraso.</li>
            <li>animation-iteration-count → Veces que se repite (infinite o número).</li>
            <li>animation-direction:
              <ul>
                <li>normal → De inicio a fin.</li>
                <li>reverse → De fin a inicio.</li>
                <li>alternate → Va y vuelve.</li>
                <li>alternate-reverse → Vuelve y va.</li>
              </ul>
            </li>
            <li>animation-fill-mode:
              <ul>
                <li>none → El elemento no conserva el estilo final.</li>
                <li>forwards → Conserva el estilo del último fotograma.</li>
                <li>backwards → Aplica el estilo del primer fotograma durante el delay.</li>
                <li>both → Combina forwards y backwards.</li>
              </ul>
            </li>
            <li>animation-play-state:
              <ul>
                <li>running → En ejecución.</li>
                <li>paused → Pausada.</li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h3>Ejemplo completo</h3>
          <Code>{`
            @keyframes moverYCambiarColor {
              0% { transform: translateX(0); background-color: red; }
              50% { transform: translateX(100px); background-color: yellow; }
              100% { transform: translateX(0); background-color: red; }
            }

            .caja {
              width: 100px;
              height: 100px;
              animation: moverYCambiarColor 3s ease-in-out infinite alternate;
            }
          `}</Code>
        </section>
      </section>
      <section>
        <h2></h2>
        <table>
          <thead>
            <tr>
              <th>Característica</th>
              <th>Transición</th>
              <th>Animación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Control de etapas</td>
              <td>Solo inicio y final</td>
              <td>Varios puntos intermedios</td>
            </tr>
            <tr>
              <td>Activación</td>
              <td>Requiere cambio de estado (hover, click, JS)</td>
              <td>Puede iniciar automáticamente</td>
            </tr>
            <tr>
              <td>Repeticiones</td>
              <td>No</td>
              <td>Sí (infinite o número)</td>
            </tr>
            <tr>
              <td>Complejidad</td>
              <td>Simple</td>
              <td>Compleja, más control</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>Buenas prácticas</h2>
        <ul>
          <li>Usa transiciones para micro-interacciones (hover, focus, etc.).</li>
          <li>Usa animaciones para secuencias complejas.</li>
          <li>No abuses de animaciones pesadas, afectan rendimiento.</li>
          <li>Usa will-change para optimizar cambios frecuentes.</li>
          <li>Prefiere transformaciones (transform, opacity) sobre cambios directos de top, left o width para un mejor rendimiento.</li>
        </ul>
      </section>
    </>
  )
}