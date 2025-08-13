import Code from "../../components/Code"

type Position_ZIndex_CSSProps = {
  
}

export default function Position_ZIndex_CSS({}:Position_ZIndex_CSSProps) {
  return (
    <>
      <h1>Position y z-index</h1>
      <p>Esto es clave para controlar dónde aparecen los elementos, cómo se superponen y por qué a veces un modal o tooltip queda detrás de otra cosa.</p>
      <section>
        <h2>Valores de position y qué hacen.</h2>
        <section>
          <h3>static (por defecto)</h3>
          <ul>
            <li>El navegador coloca el elemento en el flujo normal.</li>
            <li>No responde a top/right/bottom/left.</li>
            <li>No crea un contexto especial por sí mismo.</li>
          </ul>
        </section>
        <section>
          <h3>relative</h3>
          <ul>
            <li>El elemento permanece en el flujo (el espacio que ocupa sigue presente).</li>
            <li>top/right/bottom/left lo desplazan relativamente a su posición normal (sin afectar el flujo de los demás).</li>
            <li>Útil para: mover ligeramente un elemento sin sacarlo del flujo; crear el punto de referencia para hijos absolute (si lo prefieres).</li>
          </ul>
          <Code>{`
            .box { position: relative; top: 10px; left: 5px; }
          `}</Code>
        </section>
        <section>
          <h3>absolute</h3>
          <ul>
            <li>Se saca del flujo: los demás elementos se comportan como si no existiera.</li>
            <li>Se posiciona respecto al bloque de contención: el ancestro más cercano con position distinto de static (ej. relative, absolute, fixed, sticky). Si no hay ninguno, se posiciona respecto al initial containing block (normalmente el {`<html>`} / viewport).</li>
            <li>Ideal para: tooltips, menús desplegables, posicionamiento libre dentro de un contenedor.</li>
          </ul>
          <Code>{`
            <div class="parent" style="position: relative;">
              <div class="child" style="position: absolute; top: 100%; left: 0;">submenu</div>
            </div>
          `}</Code>
        </section>
        <section>
          <h3>fixed</h3>
          <ul>
            <li>Se saca del flujo.</li>
            <li>Por defecto, se posiciona respecto al viewport: top: 0; right: 0; lo pega a la ventana y no se mueve al hacer scroll.</li>
            <li>IMPORTANTE: si un ancestro crea un containing block por transform/filter/perspective u otras propiedades, el fixed puede quedar relativo a ese ancestro en vez del viewport (ver más abajo).</li>
          </ul>
          <Code>{`
            .header { position: fixed; top: 0; left: 0; width: 100%; }
          `}</Code>
        </section>
        <section>
          <h3>sticky</h3>
          <ul>
            <li>Comportamiento híbrido: actúa como relative hasta que cumple el umbral (top, left, etc.), entonces se comporta como si estuviera fijo dentro del contenedor desplazable.</li>
            <li>Requisitos:
              <ul>
                <li>Necesitas un valor (ej. top: 0).</li>
                <li>Debe haber espacio para que "pegue" (el contenedor debe permitir scroll).</li>
                <li>El ancestro con overflow puede afectar su comportamiento (algunas configuraciones de overflow pueden impedir el pegado).</li>
              </ul>
            </li>
            <li>Muy útil para encabezados que se quedan en la parte superior al hacer scroll.</li>
          </ul>
          <Code>{`
            .nav { position: sticky; top: 0; }
          `}</Code>
        </section>
      </section>
      <section>
        <h2>top, right, bottom, left — cómo funcionan</h2>
        <ul>
          <li>Solo tienen efecto en elementos posicionados (position distinto de static).</li>
          <li>Interpretación:
            <ul>
              <li>top: 0 coloca la caja en la parte superior del containing block.</li>
              <li>left: 50% posiciona el borde izquierdo al 50% del ancho del containing block.</li>
            </ul>
          </li>
          <li>Con position: relative, estos valores desplazan desde la posición original.</li>
          <li>Con position: absolute o fixed, definen la posición respecto al containing block.</li>
        </ul>
      </section>
      <section>
        <h2>¿Qué es el containing block (bloque de contención)?</h2>
        <ul>
          <li>Es el rectángulo de referencia para calcular top/right/bottom/left.</li>
          <li>Reglas prácticas:
            <ul>
              <li>Para absolute: el ancestro más cercano que NO tenga position: static (es decir relative, absolute, fixed, sticky) define el containing block. Si no hay, se usa el initial containing block (viewport).</li>
              <li>Para fixed: por defecto el viewport es el containing block — excepto si un ancestro crea una nueva referencia (por ejemplo, si un ancestro tiene transform u otras propiedades que crean un contexto de contención).</li>
              <li>Para sticky: el contenedor con overflow/scroll que limita la posición es relevante — la “zona” en la que pegado ocurre es el contenedor desplazable.</li>
            </ul>
          </li>
        </ul>
      </section>
      <section>
        <h2>Impacto en el flujo del documento</h2>
        <ul>
          <li>static / relative: el elemento sigue ocupando su espacio en el flujo.</li>
          <li>absolute / fixed: el elemento se saca del flujo → no ocupa espacio; otros elementos se comportan como si no existiera.</li>
          <li>sticky: ocupa su espacio (como relative) hasta que se pega; cuando está pegado, visualmente puede sobreponerse a otros elementos.</li>
        </ul>
      </section>
      <section>
        <h2>z-index y stacking contexts (contextos de apilamiento)</h2>
        <section>
          <h3>¿Qué hace z-index?</h3>
          <ul>
            <li>Controla qué elemento aparece encima cuando elementos se superponen.</li>
            <li>Solo se aplica (de forma directa) a:
              <ul>
                <li>Elementos posicionados (position ≠ static) y a flex/grid items en muchos navegadores.</li>
              </ul>
            </li>
            <li>Valores: auto, integer (p. ej. 0, 1, 999), pueden ser negativos.</li>
          </ul>
        </section>
        <section>
          <h3>Concepto clave: Stacking context</h3>
          <ul>
            <li>Un stacking context es como una “caja” que contiene su propia pila de capas. Dentro de esa caja, los z-index se comparan; pero las cajas no compiten con cajas externas salvo por el orden del contexto padre.</li>
            <li>Si un elemento crea un nuevo stacking context, los z-index de sus hijos no saldrán por encima de elementos fuera del contexto aunque tengan valores altos.</li>
          </ul>
        </section>
        <section>
          <h3>Formas comunes de crear un stacking context</h3>
          <p>(usaré “comunes” — la especificación incluye condiciones adicionales; estos son los casos más frecuentes)</p>
          <ul>
            <li>El elemento raíz (html) crea uno.</li>
            <li>Cualquier elemento con position (no static) y z-index distinto de auto.</li>
            <li>Elementos con opacity {`<`} 1.</li>
            <li>Elementos con transform distinto de none.</li>
            <li>Elementos con filter distinto de none.</li>
            <li>Elementos con mix-blend-mode distinto de normal.</li>
            <li>Elementos con isolation: isolate.</li>
            <li>Elementos con will-change especificando propiedades que crearían un stacking context.</li>
            <li>Elementos con contain: paint (o ciertas formas de contain).</li>
          </ul>
          <p>Nota: hay más condiciones en la especificación; la idea importante: transform, opacity, filters y z-index explícito son causas muy comunes.</p>
        </section>
        <section>
          <h3>Ejemplo: por qué un z-index: 9999 no funciona</h3>
          <Code>{`
            <div class="parent" style="transform: translateZ(0); z-index: 1;">
              <div class="child" style="z-index: 9999; position: relative;">Quiero encima</div>
            </div>

            <div class="modal" style="position: fixed; z-index: 2;">Modal</div>
          `}</Code>
          <p>Aunque .child tenga z-index: 9999, si .parent creó un stacking context y .modal está en el contexto padre con z-index 2, el .modal puede aparecer encima del .child dependiendo del orden de los contextos. En resumen: los z-index compiten primero a nivel de stacking context.</p>
        </section>
        <section>
          <h3>Reglas prácticas de stacking / orden de apilamiento</h3>
          <ul>
            <li>Dentro de un mismo stacking context:
              <ol>
                <li>Fondo y borde del elemento que crea el contexto.</li>
                <li>Elementos con z-index negativos.</li>
                <li>Elementos en flujo (no posicionados).</li>
                <li>Elementos posicionados con z-index: auto o z-index: 0 (varía con el navegador).</li>
                <li>Elementos con z-index positivo en orden ascendente.</li>
              </ol>
            </li>
            <li>Si necesitas que algo esté siempre al frente (ej. modal), hazlo hijo directo de body o de un contenedor que no tenga transform/filter aplicado y dale un z-index alto en ese contexto.</li>
          </ul>
        </section>
      </section>
      <section>
        <h2>Casos prácticos y soluciones a problemas comunes</h2>
        <section>
          <h3>Problema A — Modal detrás del header</h3>
          <p>Causa típica: el header tiene position: relative + z-index: 1000 o el header está en un stacking context superior.</p>
          <p>Solución:</p>
          <ul>
            <li>Asegura que el modal esté a un nivel del DOM donde no quede “atrapado” por stacking contexts (por ejemplo, colócalo como hijo directo de {`<body>`}).</li>
            <li>O haz que el modal cree su propio stacking context con position: fixed; z-index: 9999; y evita ancestros con transform/filter.</li>
          </ul>
        </section>
        <section>
          <h3>Problema B — position: fixed comportándose como absolute</h3>
          <p>Causa típica: un ancestro tiene transform o filter que hace que el fixed se posicione respecto a ese ancestro.</p>
          <p>Solución:</p>
          <ul>
            <li>Mueve el elemento fuera del ancestro transformado (subirlo en el DOM), o elimina el transform del ancestro, o usa position: absolute con el ancestro como referencia.</li>
          </ul>
        </section>
        <section>
          <h3>Problema C — position: sticky que no “pega”</h3>
          <p>Causas comunes:</p>
          <ul>
            <li>No definiste top/left/etc.</li>
            <li>El contenedor padre tiene overflow: hidden/auto y el sticky no tiene espacio para funcionar como esperas.</li>
            <li>Uso dentro de elementos con display: table o comportamientos no soportados en navegadores antiguos.</li>
          </ul>
          <p>Solución:</p>
          <ul>
            <li>Define top: 0.</li>
            <li>Asegúrate que el contenedor que quieres que sea el área de pegado sea el correcto (el scroll vertical debe ocurrir en ese contenedor).</li>
            <li>Revisa compatibilidad en navegadores (Safari y algunas versiones tienen bugs).</li>
          </ul>
        </section>
      </section>
      <section>
        <h2>Ejemplos concretos</h2>
        <section>
          <h3>Tooltip con absolute y relative:</h3>
          <Code>{`
            <div class="item" style="position: relative;">
              Item
              <div class="tooltip" style="position: absolute; top: 100%; left: 0;">Tooltip</div>
            </div>
          `}</Code>
        </section>
        <section>
          <h3>Header fijo:</h3>
          <Code>{`
            .header {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              z-index: 1000;
            }
            .content { margin-top: 60px; } /* compensa la altura del header */
          `}</Code>
        </section>
        <section>
          <h3>Modal que siempre quede encima:</h3>
          <Code>{`
            /* Inserta este modal como hijo directo de <body> */
            .modal-overlay {
              position: fixed;
              inset: 0;               /* top:0; right:0; bottom:0; left:0; */
              background: rgba(0,0,0,0.6);
              z-index: 9999;
            }
            .modal {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 10000;
            }
          `}</Code>
        </section>
        <section>
          <h3>Sticky header:</h3>
          <Code>{`
            .table-header {
              position: sticky;
              top: 0;
              background: white;
            }
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Buenas prácticas y recomendaciones</h2>
        <ul>
          <li>Evita usar números gigantescos para z-index. Crea una escala centralizada con variables:
            <Code>{`
              :root {
                --z-base: 0;
                --z-dropdown: 100;
                --z-header: 200;
                --z-modal: 1000;
              }
              .modal { z-index: var(--z-modal); }
            `}</Code> 
          </li>
          <li>Mueve overlays/modales al nivel alto del DOM (body) para evitar problemas de stacking context.</li>
          <li>Usa position: relative en ancestros solo cuando necesites un containing block para absolute.</li>
          <li>Ten cuidado con transform, filter, opacity {`<`} 1 y will-change: útiles para rendimiento/animaciones, pero crean stacking contexts y pueden romper posicionamiento esperado.</li>
          <li>Para animaciones fluidas, prefiere transform sobre top/left (las primeras suelen ser manejadas por la GPU y son más suaves).</li>
        </ul>
      </section>
      <section>
        <h2></h2>
        <ul>
          <li>En DevTools (Chrome/Firefox) puedes:</li>
          <li>Para probar: asigna temporalmente background-color y outline para ver los bordes de los elementos y entender quién está encima.
            <ul>
              <li>Ver estilos computados (position, top, z-index, transform).</li>
              <li>En Chrome hay una sección “Layers / Stacking context” que muestra contextos de apilamiento.</li>
            </ul>
          </li>
          <li>Mueve el elemento en el DOM (ej. en console document.body.appendChild(modal)) para ver si el problema era el ancestro.</li>
          <li>Elimina transform o opacity en ancestros para verificar si crean contextos problemáticos.</li>
        </ul>
      </section>
    </>
  )
}