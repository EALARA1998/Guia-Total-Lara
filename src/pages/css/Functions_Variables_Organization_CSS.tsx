import Code from "../../components/Code"

type Functions_Variables_Organization_CSSProps = {
  
}

export default function Functions_Variables_Organization_CSS({}:Functions_Variables_Organization_CSSProps) {
  return (
    <>
      <h1>Funciones, variables y organización</h1>
      <section>
        <h2>Variables CSS (custom properties)</h2>
        <section>
          <h3>Concepto</h3>
          <ul>
            <li>Son propiedades definidas por ti que empiezan con -- y se usan con var().</li>
            <li>Se resuelven en tiempo de ejecución, son dinámicas y heredan.</li>
          </ul>
        </section>
        <section>
          <h3>Declaración y uso</h3>
          <Code>{`
            :root {
              --color-principal: #0b5cff;
              --espacio-1: 8px;
              --radius: 8px;
            }

            /* uso */
            .button {
              background: var(--color-principal);
              padding: var(--espacio-1) calc(var(--espacio-1) * 2);
              border-radius: var(--radius);
            }
          `}</Code>
        </section>
        <section>
          <h3>Scope y herencia</h3>
          <ul>
            <li>Si defines --x en :root es global.</li>
            <li>Si lo defines en .card {`{ --x: 10px }`}, solo .card y sus descendientes lo ven.</li>
            <li>Las variables heredan {`=>`} útil para theming por componentes.</li>
          </ul>
        </section>
        <section>
          <h3>Fallback</h3>
          <Code>{`
            color: var(--color-secundario, #333); /* si no existe, usa #333 */
          `}</Code>
        </section>
        <section>
          <h3>Cambiarlas con JavaScript (dynamic theming)</h3>
          <Code>{`
            // documentElement => :root
            document.documentElement.style.setProperty('--color-principal', '#e91e63');
          `}</Code>
        </section>
        <section>
          <h3>Animaciones y rendimiento</h3>
          <ul>
            <li>Las custom properties no son animables por sí mismas (no puedes transicionar --x), pero si una propiedad usa var() y esa propiedad es animable, cambiar la variable puede provocar la animación de la propiedad (p. ej. background-color con transition).</li>
            <li>Cambiar variables causa recálculo de estilos; evita hacerlo cada frame sin necesidad.</li>
          </ul>
        </section>
      </section>
      <section>
        <h2>Funciones CSS útiles (nativas)</h2>
        <section>
          <h3>calc()</h3>
          <p>Permite operaciones aritméticas mezclando unidades.</p>
          <Code>{`
            width: calc(100% - 2rem);
            padding: calc(var(--space) * 2);
          `}</Code>
        </section>
        <section>
          <h3>min(), max(), clamp()</h3>
          <ul>
            <li>min(a,b), max(a,b) seleccionan valores.</li>
            <li>clamp(min, preferred, max) es ideal para tipografía fluida.</li>
          </ul>
          <Code>{`
            font-size: clamp(1rem, 2.5vw, 1.5rem);
            width: min(50vw, 600px);
          `}</Code>
        </section>
        <section>
          <h3>env() / constant()</h3>
          <ul>
            <li>env(safe-area-inset-top) para safe areas en móviles con notch (iOS Safari).</li>
          </ul>
          <Code>{`
            padding-top: env(safe-area-inset-top);
          `}</Code>
        </section>
        <section>
          <h3>Funciones de color</h3>
          <ul>
            <li>rgb(), rgba(), hsl(), hsla() — uso estándar.</li>
            <li>color() / color-mix() — mezcla y espacios de color modernos (soporte aún en evolución; usar con fallback si es crítico).</li>
          </ul>
          <section>
            <h4>url(), linear-gradient(), radial-gradient(), conic-gradient()</h4>
            <p>Se usan en background-image u otras propiedades que aceptan imágenes.</p>
            <Code>{`
              background: linear-gradient(90deg, #fff, #eee);
            `}</Code>
          </section>
          <section>
            <h4>attr() (limitado)</h4>
            <p>Tradicionalmente solo para content. Su uso en valores y propiedades está en evolución y con soporte limitado.</p>
          </section>
        </section>
      </section>
      <section>
        <h2>Funciones y utilidades en Sass (u otros preprocesadores)</h2>
        <section>
          <h3>Variables vs custom properties</h3>
          <ul>
            <li>Sass variables ($color) se resuelven en build-time (ya no existen en el CSS final).</li>
            <li>CSS custom properties se resuelven en runtime (útiles para theming dinámico).</li>
          </ul>
        </section>
        <section>
          <h3>Mixins y funciones</h3>
          <Code>{`
            // _mixins.scss
            @mixin center() {
              display: flex;
              justify-content: center;
              align-items: center;
            }

            // uso
            .box { @include center(); }
          `}</Code>
          <Code>{`
            @function rem($px) {
              @return #{$px / 16}rem;
            }
          `}</Code>
        </section>
        <section>
          <h3>@use / @forward (Sass moderno)</h3>
          <ul>
            <li>Reemplazan a @import. Organiza variables, mixins y funciones en módulos reusables.</li>
          </ul>
        </section>
        <section>
          <h3>Maps, loops y placeholders</h3>
          <ul>
            <li>Mapas ($colors: (primary: #07c, secondary: #f04);) y bucles para generar clases.</li>
            <li>%placeholder {} + @extend para evitar duplicación.</li>
          </ul>
        </section>
      </section>
      <section>
        <h2>Theming y estrategias de variables</h2>
        <section>
          <h3>Enfoque simple con atributos</h3>
          <Code>{`
            :root { --bg: #fff; --text: #111; }
            :root[data-theme="dark"] { --bg: #111; --text: #eee; }

            body { background: var(--bg); color: var(--text); }
          `}</Code>
          <p>Toggle con JS: document.documentElement.setAttribute('data-theme','dark').</p>
          <section>
            <h4>prefers-color-scheme</h4>
            <Code>{`
              @media (prefers-color-scheme: dark) {
                :root { --bg: #111; --text: #eee; }
              }
            `}</Code>
          </section>
        </section>
        <section>
          <h3>Tokens semánticos vs tokens de implementación</h3>
          <ul>
            <li>Semánticos: --color-bg, --color-text (recomendado — abstrae la intención).</li>
            <li>Implementación: --blue-600, --space-4 (útil en design systems).</li>
          </ul>
          <p>Convierte tokens de diseño a variables CSS en build.</p>
        </section>
      </section>
      <section>
        <h2>Organización del código CSS / Sass (estructuras recomendadas)</h2>
        <section>
          <h3>Principios</h3>
          <ul>
            <li>Separar por intención: base, layout, components, utilities.</li>
            <li>Mantener archivos pequeños y cohesivos.</li>
            <li>Evitar reglas globales innecesarias.</li>
          </ul>
        </section>
        <section>
          <h3>Ejemplo de estructura de carpetas</h3>
          <Code>{`
            scss/
              vendors/
                _index.scss // @forward a los demas archiivos de la carpeta.
                _normalize.scss // @use
              base/
                _index.scss // @forward a los demas archiivos de la carpeta.
                _reset.scss // @use
                _typography.scss // @use
                _variables.scss // @use // variables globales (Sass) y/o import de CSS vars
              layout/
                _index.scss // @forward a los demas archiivos de la carpeta.
                _grid.scss // @use
                _header.scss // @use
                _footer.scss // @use
              components/
                _index.scss // @forward a los demas archiivos de la carpeta.
                _button.scss // @use
                _card.scss // @use
                _modal.scss // @use
              utilities/
                _index.scss // @forward a los demas archiivos de la carpeta.
                _helpers.scss // @use
                _spacing.scss // @use
              themes/
                _index.scss // @forward a los demas archiivos de la carpeta.
                _light.scss // @use
                _dark.scss // @use
              app.scss // @forward a los _index.scss de cada carpeta. // carga capas
          `}</Code>
        </section>
        <section>
          <h3>Patrón de importación (Sass moderno)</h3>
          <Code>{`
            // app.scss
            @use 'base/variables' as vars;
            @use 'base/typography';
            @use 'layout/grid';
            @use 'components/button';
            @use 'utilities/helpers';
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Metodologías de organización y naming</h2>
        <section>
          <h3>BEM (Block__Element--Modifier)</h3>
          <Code>{`
            <button class="btn btn--primary btn--large">
              <span class="btn__icon">…</span>
            </button>
          `}</Code>
          <p>Ventaja: claridad, predictibilidad.</p>
        </section>
        <section>
          <h3>SMACSS / OOCSS / ITCSS</h3>
          <ul>
            <li>SMACSS: categoriza reglas (base, layout, module, state, theme).</li>
            <li>OOCSS: composición (separa estructura y skin).</li>
            <li>ITCSS: capas invertidas (from generic to explicit) para minimizar especificidad.</li>
          </ul>
        </section>
        <section>
          <h3>Utilities / Atomic</h3>
          <ul>
            <li>Sistema de clases pequeñas (.mt-2, .text-center) — rápido y consistente (ej. Tailwind). Útil en proyectos grandes pero cambia mentalidad.</li>
          </ul>
        </section>
      </section>
      <section>
        <h2>Cascade Layers (@layer) — organización moderna del cascade</h2>
        <ul>
          <li>Permite declarar capas semánticas para controlar prioridad sin abusar de especificidad.</li>
        </ul>
        <Code>{`
          @layer reset, base, components, utilities;

          @layer reset {
            /* reset styles */
          }

          @layer base {
            body { font-family: system-ui; }
          }

          @layer components {
            .btn { /* ... */ }
          }

          @layer utilities {
            .sr-only { /* ... */ }
          }
        `}</Code>
        <p>Ventaja: puedes reordenar y evitar conflictos sin !important.</p>
      </section>
      <section>
        <h2>Tooling, linting y build (práctico)</h2>
        <section>
          <h3>Herramientas recomendadas</h3>
          <ul>
            <li>Preprocesador: Sass (con @use/@forward).</li>
            <li>PostCSS + Autoprefixer.</li>
            <li>Stylelint para reglas de estilo y consistencia.</li>
            <li>Prettier para formato (configurar para CSS/SCSS).</li>
            <li>PurgeCSS / Tailwind JIT para eliminar CSS no usado (reduce bundle).</li>
            <li>Source maps para debugging.</li>
          </ul>
        </section>
        <section>
          <h3>Testing y documentación</h3>
          <ul>
            <li>Storybook para componentes visuales.</li>
            <li>KSS / Living styleguide o documentación generada.</li>
            <li>Visual regression testing (Percy, Chromatic) para evitar regresiones visuales.</li>
          </ul>
        </section>
      </section>
      <section>
        <h2>Buenas prácticas y anti-patterns</h2>
        <section>
          <h3>Buenas prácticas</h3>
          <ul>
            <li>Usa variables semánticas (--color-primary) en vez de nombres hex directos en componentes.</li>
            <li>Mantén :root con tokens globales y sobreescribe en scope de componente si hace falta.</li>
            <li>Prefiere gap sobre margin para layouts modernamente.</li>
            <li>Coloca modales, overlays fuera de ancestros que tengan transform (evita stacking-context problemas).</li>
            <li>Centraliza breakpoints y gutters como variables.</li>
            <li>Documenta tokens y convenciones.</li>
          </ul>
        </section>
        <section>
          <h3>Anti-patterns</h3>
          <ul>
            <li>Mezclar reglas de presentación con JavaScript masivamente (mejor togglear clases/atributos).</li>
            <li>Abusar de !important.</li>
            <li>Usar IDs para estilos (especificidad alta y frágil).</li>
            <li>Hacer estilos globales desde componentes (rompe encapsulación).</li>
          </ul>
        </section>
      </section>
      <section>
        <h2>Ejemplos prácticos (resumen rápido)</h2>
        <section>
          <h3>Tema + toggle JS</h3>
          <Code>{`
            :root {
              --bg: #fff;
              --text: #111;
            }
            :root[data-theme="dark"] {
              --bg: #111;
              --text: #eee;
            }
            body { background: var(--bg); color: var(--text); }
          `}</Code>
          <Code>{`
            const toggle = () => {
              const el = document.documentElement;
              el.dataset.theme = el.dataset.theme === 'dark' ? 'light' : 'dark';
            };
          `}</Code>
        </section>
        <section>
          <h3>clamp() para tipografía</h3>
          <Code>{`
            h1 {
              font-size: clamp(1.5rem, 4vw, 3rem);
            }
          `}</Code>
        </section>
        <section>
          <h3>CSS vars + calc</h3>
          <Code>{`
            :root { --gutter: 24px; --columns: 12; }
            .main { padding: calc(var(--gutter) * 2); }
            .col { width: calc((100% - var(--gutter) * 2) / var(--columns) * 3); } /* 3 columnas */
          `}</Code>
        </section>
      </section>
    </>
  )
}