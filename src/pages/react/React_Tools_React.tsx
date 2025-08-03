export default function React_Tools_React() {
  return (
    <>
      <h1>Herramientas de React</h1>
      <p>si estás desarrollando un proyecto con React, existen muchas herramientas y bibliotecas que puedes utilizar para mejorar tu flujo de trabajo, manejo del estado, estilos, rutas, pruebas y más.</p>
      <section>
        <h2>Herramientas de Configuración y Entorno</h2>
        <p>Estas te ayudan a iniciar, construir y mantener tu proyecto.</p>
        <section>
          <h3>Create React App (CRA)</h3>
          <ul>
            <li>
              <p>Ideal para empezar rápido.</p>
            </li>
            <li>
              <p>Incluye Webpack, Babel, ESLint, etc.</p>
            </li>
            <li>
              <p>Limitado para proyectos grandes (difícil de personalizar sin “eject”).</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Vite</h3>
          <ul>
            <li>
              <p>Alternativa moderna a CRA.</p>
            </li>
            <li>
              <p>Mucho más rápido (usando ESBuild).</p>
            </li>
            <li>
              <p>Soporta React con HMR (Hot Module Replacement).</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Next.js</h3>
          <ul>
            <li>
              <p>Framework completo sobre React.</p>
            </li>
            <li>
              <p>Soporte para SSR (server-side rendering), SSG, y API routes.</p>
            </li>
            <li>
              <p>Ideal para aplicaciones más grandes o que requieren SEO.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Parcel</h3>
          <ul>
            <li>
              <p>Zero-config bundler alternativo a Webpack.</p>
            </li>
            <li>
              <p>Simple y rápido para proyectos pequeños y medianos.</p>
            </li>
          </ul>
        </section>
      </section>
      <section>
        <h2>Enrutamiento</h2>
        <p>Para manejar múltiples páginas o vistas.</p>
        <section>
          <h3>React Router</h3>
          <ul>
            <li>
              <p>Biblioteca oficial de enrutamiento para React.</p>
            </li>
            <li>
              <p>Flexible y muy utilizada.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Next.js Routing</h3>
          <ul>
            <li>
              <p>Basado en el sistema de archivos (pages/).</p>
            </li>
            <li>
              <p>No necesita configuración explícita de rutas.</p>
            </li>
          </ul>
        </section>
      </section>
      <section>
        <h2>Manejo del Estado</h2>
        <p>Para compartir datos entre componentes.</p>
        <section>
          <h3>useState y useReducer (React core)</h3>
          <ul>
            <li>
              <p>Para estados locales simples o moderadamente complejos.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Context API</h3>
          <ul>
            <li>
              <p>Bueno para compartir datos globales (pero no ideal para alto rendimiento).</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Redux / Redux Toolkit</h3>
          <ul>
            <li>
              <p>Manejo de estado robusto, útil para grandes aplicaciones.</p>
            </li>
            <li>
              <p>Redux Toolkit reduce la verbosidad.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Zustand</h3>
          <ul>
            <li>
              <p>Más ligero y moderno que Redux.</p>
            </li>
            <li>
              <p>API muy simple y sin boilerplate.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Recoil / Jotai / MobX</h3>
          <ul>
            <li>
              <p>Alternativas reactivas y modernas con distintas filosofías.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>React Query / TanStack Query</h3>
          <ul>
            <li>
              <p>Para manejar el estado del servidor (fetching, caching, sincronización de datos).</p>
            </li>
          </ul>
        </section>
      </section>
      <section>
        <h2>Estilos y UI</h2>
        <p>Para dar estilo a tu app.</p>
        <section>
          <h3>CSS Modules / Sass</h3>
          <ul>
            <li>
              <p>Módulos de CSS con scope automático.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Styled Components / Emotion</h3>
          <ul>
            <li>
              <p>CSS-in-JS, ideal para componentes reutilizables y teming.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Tailwind CSS</h3>
          <ul>
            <li>
              <p>Framework de utilidades con clases predefinidas.</p>
            </li>
            <li>
              <p>Muy popular para productividad en diseño.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Chakra UI / Material UI / Ant Design</h3>
          <ul>
            <li>
              <p>Bibliotecas de componentes listas para usar.</p>
            </li>
            <li>
              <p>Buenas para apps con UI coherente y responsiva.</p>
            </li>
          </ul>
        </section>
      </section>
      <section>
        <h2>Testing</h2>
        <p>Para garantizar calidad y funcionamiento.</p>
        <section>
          <h3>Jest</h3>
          <ul>
            <li>
              <p>Framework de pruebas por defecto para React.</p>
            </li>
            <li>
              <p>Soporta mocks, snapshots, etc.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>React Testing Library</h3>
          <ul>
            <li>
              <p>Promueve pruebas basadas en comportamiento del usuario.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Cypress / Playwright</h3>
          <ul>
            <li>
              <p>Testing end-to-end con navegador real.</p>
            </li>
          </ul>
        </section>
      </section>
      <section>
        <h2>Herramientas de Desarrollo</h2>
        <p>Para mejorar tu experiencia como desarrollador.</p>
        <section>
          <h3>ESLint + Prettier</h3>
          <ul>
            <li>
              <p>Linter + formateador automático de código.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Husky + lint-staged</h3>
          <ul>
            <li>
              <p>Corre scripts (como tests o linter) antes de hacer commits.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>React DevTools</h3>
          <ul>
            <li>
              <p>Extensión para depurar el estado y los hooks en el navegador.</p>
            </li>
          </ul>
        </section>
      </section>
      <section>
        <h2>Backend & APIs</h2>
        <p>Opciones para conectarte a un backend.</p>
        <section>
          <h3>Axios / Fetch API</h3>
          <ul>
            <li>
              <p>Para realizar peticiones HTTP.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Firebase / Supabase</h3>
          <ul>
            <li>
              <p>BaaS (Backend as a Service) para auth, base de datos, etc.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>GraphQL + Apollo Client / URQL</h3>
          <ul>
            <li>
              <p>Cuando necesitas una API más flexible que REST.</p>
            </li>
          </ul>
        </section>
      </section>
      <section>
        <h2>Despliegue</h2>
        <p>Para subir tu app a producción.</p>
        <ul>
          <li>
            <p>Vercel (especial para Next.js)</p>
          </li>
          <li>
            <p>Netlify</p>
          </li>
          <li>
            <p>Render / Railway / Firebase Hosting</p>
          </li>
          <li>
            <p>GitHub Pages (solo para SPAs estáticas)</p>
          </li>
        </ul>
      </section>
    </>
  )
}