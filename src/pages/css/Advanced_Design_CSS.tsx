import Code from "../../components/Code"

type Advanced_Design_CSSProps = {
  
}

export default function Advanced_Design_CSS({}:Advanced_Design_CSSProps) {
  return (
    <>
      <h1>Layout avanzado (Flexbox, Grid y patrones comunes)</h1>
      <section>
        <h2>Concepto rápido</h2>
        <ul>
          <li>Flexbox: layout unidimensional — optimizado para alinear elementos en una fila o columna (una dimensión a la vez). Ideal para menús, barras, filas de cards, y distribución interna de componentes.</li>
          <li>Grid: layout bidimensional — maneja filas y columnas simultáneamente. Ideal para rejillas, layouts de página (cabecera/columna/contenido/pie), galerías complejas</li>
          <li>Combinarlos: usa Grid para la macroestructura (zonas) y Flexbox dentro de cada zona para los componentes.</li>
        </ul>
      </section>
      <section>
        <h2>Flexbox</h2>
        <section>
          <h3>Contenedor (parent)</h3>
          <Code>{`
            .container {
            display: flex;             /* inicia flexbox (fila por defecto) */
            flex-direction: row;       /* row | column | row-reverse | column-reverse */
            flex-wrap: wrap;           /* nowrap | wrap | wrap-reverse */
            justify-content: flex-start; /* main axis: flex-start | center | space-between | space-around | space-evenly | flex-end */
            align-items: stretch;      /* cross axis: stretch | flex-start | center | baseline | flex-end */
            align-content: stretch;    /* cuando hay varias líneas: flex-start | center | space-between | space-around | stretch */
            gap: 16px;                 /* espacio entre items (recomendado) */
          }
          `}</Code>
          <ul>
            <li>Main axis = eje principal (determinado por flex-direction).</li>
            <li>Cross axis = eje perpendicular.</li>
            <li>justify-content mueve items a lo largo del main axis.</li>
            <li>align-items alinea cada item a lo largo del cross axis.</li>
            <li>align-content gestiona el espacio entre líneas cuando hay múltiples líneas (solo cuando hay wrap).</li>
          </ul>
        </section>
        <section>
          <h3></h3>
          <Code>{`
            .item {
              flex: 1 1 200px;  /* flex-grow flex-shrink flex-basis */
              align-self: center; /* sobreescribe align-items para este item */
              order: 0;           /* reordena visualmente (cuidado con accesibilidad) */
            }
          `}</Code>
          <ul>
            <li>flex: 1 1 200px → puede crecer, puede encoger, base 200px.</li>
            <li>flex-basis controla el tamaño inicial.</li>
            <li>flex-grow determina cuánto crece relativo a otros.</li>
            <li>flex-shrink cuánto se encoge si falta espacio.</li>
          </ul>
        </section>
        <section>
          <h3>Ejemplo práctico: fila de cards responsiva</h3>
          <Code>{`
            .cards {
              display: flex;
              gap: 16px;
              flex-wrap: wrap;
            }
            .card {
              flex: 1 1 220px; /* mínimo ~220px, pero crece si hay espacio */
              min-width: 220px;
            }
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Grid</h2>
        <section>
          <h3>Contenedor Grid</h3>
          <Code>{`
            .grid {
              display: grid;
              grid-template-columns: 200px 1fr 300px; /* columnas explícitas */
              grid-template-rows: auto 1fr auto;       /* filas explícitas */
              gap: 16px;                               /* gap entre tracks */
              justify-items: stretch;   /* alinea items en cada celda horizontalmente */
              align-items: start;       /* alinea items verticalmente dentro de la celda */
            }
          `}</Code>
        </section>
        <section>
          <h3>Valores y funciones útiles</h3>
          <ul>
            <li>repeat() → repetir columnas: repeat(3, 1fr) o repeat(auto-fill, minmax(200px, 1fr)).</li>
            <li>minmax(min, max) → útil para responsive: minmax(200px, 1fr).</li>
            <li>fr → unidad flexible de Grid (fracciones del espacio disponible).</li>
            <li>auto-flow: dense → rellena huecos cuando sea posible (cuidado con el orden visual).</li>
            <li>grid-auto-rows/columns → define tamaño de tracks implícitos.</li>
            <li>grid-template-areas → nombre de áreas para crear layouts semánticos y fáciles de leer.</li>
          </ul>
        </section>
        <section>
          <h3>Ejemplo: galería responsive con auto-fill</h3>
          <Code>{`
            .gallery {
              display: grid;
              gap: 16px;
              grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            }
          `}</Code>
          <p>Con esto las celdas se adaptan rellenando filas con el número máximo de columnas que quepan.</p>
        </section>
        <section>
          <h3>Grid con areas (layout de página)</h3>
          <Code>{`
            .page {
              display: grid;
              grid-template-columns: 240px 1fr;
              grid-template-rows: auto 1fr auto;
              grid-template-areas:
                "header header"
                "sidebar main"
                "footer footer";
              gap: 16px;
            }
            .header { grid-area: header; }
            .sidebar { grid-area: sidebar; position: sticky; top: 1rem; } /* sidebar sticky */
            .main { grid-area: main; }
            .footer { grid-area: footer; }
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Técnicas avanzadas y utilidades</h2>
        <section>
          <h3>minmax() + auto-fit / auto-fill</h3>
          <ul>
            <li>repeat(auto-fill, minmax(200px, 1fr)) → crea tantas columnas de mínimo 200px como quepan.</li>
            <li>auto-fit colapsa columnas vacías (útil para centrar).</li>
          </ul>
        </section>
        <section>
          <h3>subgrid</h3>
          <ul>
            <li>Permite heredar la estructura del grid padre en el grid hijo (muy útil para alineación de filas/columnas en componentes anidados). (nota: soporte parcial en ciertos navegadores — pruébalo)</li>
          </ul>
        </section>
        <section>
          <h3>place-items / place-content / place-self</h3>
          <ul>
            <li>Abreviaturas para align-* y justify-*.</li>
          </ul>
          <Code>{`
            .grid { place-items: center; } /* centra contenido de cada celda */
          `}</Code>
        </section>
        <section>
          <h3>Auto-placement y grid-auto-flow</h3>
          <ul>
            <li>grid-auto-flow: row | column | dense controla cómo el grid coloca elementos sin área explícita.</li>
          </ul>
        </section>
      </section>
      <section>
        <h2>Patrones prácticos (códigos listos)</h2>
        <section>
          <h3>Holy grail (header / left / content / right / footer) con Grid</h3>
          <Code>{`
            .holy {
              display: grid;
              grid-template-columns: 200px 1fr 200px;
              grid-template-rows: auto 1fr auto;
              grid-template-areas:
                "header header header"
                "left main right"
                "footer footer footer";
              gap: 16px;
            }
            .left { grid-area: left; }
            .main { grid-area: main; }
            .right { grid-area: right; }
          `}</Code>
        </section>
        <section>
          <h3>Two-column con sidebar sticky</h3>
          <Code>{`
            .layout {
              display: grid;
              grid-template-columns: 300px 1fr;
              gap: 24px;
            }
            .sidebar { position: sticky; top: 1rem; align-self: start; }
          `}</Code>
        </section>
        <section>
          <h3>Cards responsivos con Grid</h3>
          <Code>{`
            .cards {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
              gap: 16px;
            }
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Responsive (media queries, fluid design y clamp())</h2>
        <section>
          <h3>Media queries</h3>
          <Code>{`
            @media (max-width: 768px) {
              .page { grid-template-columns: 1fr; grid-template-areas: "header" "main" "sidebar" "footer"; }
            }
          `}</Code>
        </section>
        <section>
          <h3>Técnicas fluidas</h3>
          <ul>
            <li>clamp(min, preferred, max) para tipografías y anchos:
              <Code>{`
                font-size: clamp(1rem, 2.5vw, 1.5rem);
              `}</Code>
            </li>
            <li>Usa minmax() y auto-fill/auto-fit para columnas fluidas.</li>
          </ul>
        </section>
        <section>
          <h3>Container Queries (concepto)</h3>
          <ul>
            <li>Permiten aplicar reglas según el tamaño del contenedor (no del viewport). Muy útil en componentes reutilizables (ej.: cambiar layout del card cuando su contenedor es estrecho). (Comprueba soporte en los navegadores que te interesen.)</li>
          </ul>
        </section>
      </section>
      <section>
        <h2>Orden visual vs orden del DOM (accesibilidad)</h2>
        <ul>
          <li>order (flex/grid) cambia el orden visual, pero el DOM sigue igual. Eso puede confundir el orden de tabulación y lectores de pantalla.</li>
          <li>Recomendación: evita reorganizar contenido crítico con order. Si cambias orden visualmente, verifica:
            <ul>
              <li>orden de foco (tabindex si es necesario),</li>
              <li>lectura por screen readers,</li>
              <li>consistencia semántica.</li>
            </ul>
          </li>
        </ul>
      </section>
      <section>
        <h2>Performance y animaciones</h2>
        <ul>
          <li>Evita animar propiedades que provocan reflow: width, height, margin, left/top (si puedes, usa transform y opacity).</li>
          <li>Para animaciones sobre layouts (por ejemplo, al abrir un panel), considera transform: translateX() en lugar de cambiar grid-template-columns o width.</li>
          <li>will-change puede ayudar, pero no abuses (memoria).</li>
        </ul>
      </section>
      <section>
        <h2>Debugging y herramientas prácticas</h2>
        <ul>
          <li>DevTools (Chrome/Firefox): inspeccionar grid/flex, mostrar líneas guía de grid, ver áreas nombradas.</li>
          <li>Añade temporales outline: 2px solid rgba(255,0,0,0.4) o background semitransparente para entender cajas.</li>
          <li>Prueba el comportamiento en distintos viewports (DevTools device toolbar).</li>
          <li>Usa gap en vez de márgenes entre items cuando usas Grid/Flex (más consistente).</li>
        </ul>
      </section>
      <section>
        <h2>Buenas prácticas y reglas rápidas</h2>
        <ul>
          <li>Usa gap en vez de margins para separar elementos en Grid/Flex.</li>
          <li>Prefiere minmax() + auto-fit/auto-fill para galerías responsivas.</li>
          <li>Grid para la macroestructura; Flex para componentes internos.</li>
          <li>Evita order excesivo; respeta accesibilidad.</li>
          <li>Centraliza variables de layout (breakpoints, gutters, z-index) con variables CSS.</li>
          <li>Prueba el layout en contenido real (texto real, imágenes reales) — no con “lorem ipsum” sólo.</li>
        </ul>
      </section>
    </>
  )
}