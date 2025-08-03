import Code from "../../components/Code";

export default function NombrePagina() {
  return (
    <>
      <h1>Vite</h1>
      <p>Vite, una herramienta moderna para el desarrollo frontend que ha ganado mucha popularidad por su rendimiento y simplicidad.</p>
      <section>
        <h2>¿Qué es Vite?</h2>
        <p>Vite (pronunciado /vit/, del francés "rápido") es un bundler y dev server de próxima generación creado por Evan You (el creador de Vue.js). Está diseñado para proporcionar un entorno de desarrollo rápido, especialmente para proyectos modernos con frameworks como Vue, React, Svelte, etc.</p>
      </section>
      <section>
        <h2>Características principales</h2>
        <section>
          <h3>Arranque rápido del servidor de desarrollo</h3>
          <ul>
            <li>
              <p>Vite usa ES Modules en el navegador durante el desarrollo.</p>
            </li>
            <li>
              <p>Esto elimina la necesidad de hacer bundling de toda la aplicación antes de empezar a desarrollar.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Hot Module Replacement (HMR) ultrarrápido</h3>
          <ul>
            <li>
              <p>Solo recarga los módulos que han cambiado, sin recargar toda la página.</p>
            </li>
            <li>
              <p>Esto es mucho más rápido que en bundlers tradicionales como Webpack.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Compilación para producción con Rollup</h3>
          <ul>
            <li>
              <p>Para producción, Vite usa Rollup, un bundler optimizado para generar paquetes eficientes.</p>
            </li>
            <li>
              <p>Vite aprovecha plugins y configuraciones Rollup fácilmente.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Soporte de plugins</h3>
          <ul>
            <li>
              <p>Compatible con plugins de Rollup y su propio ecosistema de plugins Vite.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Framework-agnostic, pero con soporte nativo para:</h3>
          <ul>
            <li>
              <p>Vue (oficial)</p>
            </li>
            <li>
              <p>React (oficial)</p>
            </li>
            <li>
              <p>Svelte</p>
            </li>
            <li>
              <p>Lit</p>
            </li>
            <li>
              <p>Solid</p>
            </li>
            <li>
              <p>Puedes extenderlo para cualquier framework.</p>
            </li>
          </ul>
        </section>
      </section>
      <section>
        <h2>¿Cómo funciona internamente?</h2>
        <section>
          <h3>En desarrollo:</h3>
          <ul>
            <li>
              <p>Sirve los archivos directamente usando native ESM.</p>
            </li>
            <li>
              <p>Compila bajo demanda solo los módulos que se usan.</p>
            </li>
            <li>
              <p>Usa esbuild (escrito en Go) para transpilar y analizar código extremadamente rápido.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>En producción:</h3>
          <ul>
            <li>
              <p>Usa Rollup para empaquetar todos los módulos.</p>
            </li>
            <li>
              <p>Optimiza recursos: JS, CSS, imágenes, etc.</p>
            </li>
          </ul>
        </section>
      </section>
      <section>
        <h2>Instalación básica</h2>
        <Code>{`
          npm create vite@latest
        `}</Code>
        <p>O usando Yarn:</p>
        <Code>{`
          yarn create vite
        `}</Code>
        <p>Luego eliges el framework y plantilla (React, Vue, Vanilla, etc).</p>
        <section>
          <h3>React</h3>
          <p>Usa el comando oficial para iniciar un proyecto:</p>
          <Code>{`
            npm create vite@latest my-react-app -- --template react
          `}</Code>
          <Code>{`
            cd my-react-app
            npm install
            npm run dev
          `}</Code>
          <section>
            <h4>Estructura típica de proyecto</h4>
            <Code>{`
              my-react-app/
              ├── index.html
              ├── package.json
              ├── vite.config.js
              ├── src/
              │   ├── main.jsx
              │   ├── App.jsx
              │   └── assets/
              └── public/
            `}</Code>
          </section>
          <section>
            <h4>Archivos clave</h4>
            <section>
              <h5>main.jsx</h5>
              <p>Es el punto de entrada principal:</p>
              <Code>{`
                import React from 'react'
                import ReactDOM from 'react-dom/client'
                import App from './App'
                import './index.css'

                ReactDOM.createRoot(document.getElementById('root')).render(
                  <React.StrictMode>
                    <App />
                  </React.StrictMode>,
                )
              `}</Code>
            </section>
            <section>
              <h5>vite.config.js</h5>
              <Code>{`
                import { defineConfig } from 'vite'
                import react from '@vitejs/plugin-react'

                // https://vitejs.dev/config/
                export default defineConfig({
                  plugins: [react()],
                })
              `}</Code>
            </section>
            <p>El plugin @vitejs/plugin-react incluye soporte para Fast Refresh, JSX, y otras optimizaciones.</p>
          </section>
        </section>
      </section>
      <section>
        <h2>Estructura típica de proyecto</h2>
        <Code>{`
          my-app/
          ├─ index.html
          ├─ vite.config.js
          ├─ src/
          │  ├─ main.js
          │  └─ App.vue (si usas Vue)
          └─ public/
        `}</Code>
      </section>
      <section>
        <h2>Configuración (vite.config.js)</h2>
        <p>Ejemplo básico:</p>
        <Code>{`
          import { defineConfig } from 'vite'
          import vue from '@vitejs/plugin-vue'

          export default defineConfig({
            plugins: [vue()],
            server: {
              port: 3000,
              open: true
            }
          })
        `}</Code>
      </section>
    </>
  )
}