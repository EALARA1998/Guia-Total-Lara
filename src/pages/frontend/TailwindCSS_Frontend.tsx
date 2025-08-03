import Code from "../../components/Code"
import Section from "../../components/Section"
export default function TailwindCSS_Frontend() {
  return (
    <>
      <h1>Tailwind CSS</h1>
      <section>
        <h2>¿Qué es Tailwind CSS?</h2>
        <p>Tailwind CSS es un framework de CSS de utilidad que te permite construir interfaces modernas y personalizadas directamente en tu HTML, sin tener que escribir CSS desde cero. A diferencia de otros frameworks como Bootstrap que te dan componentes prediseñados, Tailwind te ofrece clases de utilidad que puedes combinar para construir tus propios diseños.</p>
        <p>Tailwind CSS es:</p>
        <ul>
          <li>
            <p>Un framework CSS basado en utilidades.</p>
          </li>
          <li>
            <p>No incluye componentes visuales predefinidos como botones o tarjetas.</p>
          </li>
          <li>
            <p>Te da clases pequeñas y reutilizables como flex, pt-4, text-center, bg-red-500, etc.</p>
          </li>
          <li>
            <p>Fue creado por Adam Wathan y es de código abierto.</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>¿Por qué usar Tailwind?</h2>
        <section>
          <h3>Ventajas:</h3>
          <ul>
            <li>
              <p>Productividad alta: Puedes diseñar sin salir de tu archivo HTML o JSX.</p>
            </li>
            <li>
              <p>Personalización total: No estás limitado a estilos predeterminados.</p>
            </li>
            <li>
              <p>CSS más limpio: Menos necesidad de escribir reglas CSS personalizadas.</p>
            </li>
            <li>
              <p>Modo JIT (Just-In-Time): Compila solo las clases que usas, haciendo que el archivo final sea liviano.</p>
            </li>
            <li>
              <p>Excelente integración con frameworks modernos: React, Vue, Svelte, Next.js, Laravel, etc.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Desventajas:</h3>
          <ul>
            <li>
              <p>Puede parecer caótico al principio (muchas clases en una línea).</p>
            </li>
            <li>
              <p>Requiere un poco de aprendizaje inicial.</p>
            </li>
            <li>
              <p>No es ideal para quien prefiera separar HTML y CSS.</p>
            </li>
          </ul>
        </section>
      </section>
      <section>
        <h2>Instalación</h2>
        <section>
          <h3>Forma rápida (CDN) – Solo para pruebas:</h3>
          <Code>{`
            <link href="https://cdn.tailwindcss.com" rel="stylesheet">
          `}</Code>
        </section>
        <section>
          <h3>Instalación recomendada (vía Node.js):</h3>
          <Code>{`
            npm install -D tailwindcss
            npx tailwindcss init
          `}</Code>
          <p>Esto genera un archivo tailwind.config.js, donde puedes personalizar tu configuración.</p>
        </section>
      </section>
      <section>
        <h2>Estructura básica de un proyecto Tailwind</h2>
        <Code>{`
          📁 my-project/
          ├── index.html
          ├── tailwind.config.js
          ├── postcss.config.js
          ├── src/
          │   └── input.css
          └── dist/
              └── output.css
        `}</Code>
        <section>
          <h3>Contenido de input.css:</h3>
          <Code>{`
            @tailwind base;
            @tailwind components;
            @tailwind utilities;
          `}</Code>
          <p>Luego, compilas usando:</p>
          <Code>{`
            npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Instalacion Nueva Vite</h2>
        <ul>
          <li>
            <p>Crear proyecto (Si no esta creado).</p>
            <Code>{`
              npm create vite@latest my-project
              cd my-project
            `}</Code>
          </li>
          <li>
            <p>Instalar Tailwind CSS</p>
            <Code>{`
              npm install tailwindcss @tailwindcss/vite
            `}</Code>
          </li>
          <li>
            <p>Configurar Vite plugin</p>
            <Code>{`
              // vite.config.ts
              import { defineConfig } from 'vite'
              import tailwindcss from '@tailwindcss/vite'
              export default defineConfig({
                plugins: [
                  tailwindcss(),
                ],
              })
            `}</Code>
          </li>
          <li>
            <p>Crear style.css dentro de carpeta src. e importar tailwindcss</p>
            <Code>{`
              📁 my-project/
              ├── index.html
              ├── src/
              │   └── style.css
            `}</Code>
            <Code>{`
              // style.css
              @import "tailwindcss";
            `}</Code>
          </li>
          <li>
            <p>Cargar en tu index.html el archivo style.css.</p>
            <Code>{`
              <!doctype html>
              <html>
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="/src/style.css" rel="stylesheet">
              </head>
              <body>
              </body>
              </html>
            `}</Code>
          </li>
          <li>
            <p>Agregar en archivos html, jsx o tsx clases propias de tailwind.</p>
            <Code>{`
              export default function App() {

              return (
                <>
                  <p className=" font-black">Hola</p>
                </>
              )
            `}</Code>
          </li>
          <li>
            <p>Por ultimo solo correr npm run dev en la consola.</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Ejemplos de clases comunes</h2>
        <Code>{`
          <div class="bg-blue-500 text-white p-4 rounded shadow-md">
            Hola Tailwind
          </div>  
        `}</Code>
        <section>
          <h3>Algunas clases útiles:</h3>
          <ul>
            <li>
              <p>Espaciado: p-4, m-2, px-6, py-1</p>
            </li>
            <li>
              <p>Colores: bg-red-500, text-green-700</p>
            </li>
            <li>
              <p>Flexbox y Grid: flex, items-center, justify-between, grid, gap-4</p>
            </li>
            <li>
              <p>Tipografía: text-xl, font-bold, uppercase</p>
            </li>
            <li>
              <p>Responsive: md:text-lg, lg:flex, sm:hidden</p>
            </li>
            <li>
              <p>Estado: hover:bg-blue-600, focus:outline-none</p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Personalización</h2>
          <p>En tailwind.config.js, puedes extender el tema:</p>
          <Code>{`
            module.exports = {
            theme: {
              extend: {
                colors: {
                  brand: '#1DA1F2',
                },
                spacing: {
                  '72': '18rem',
                },
              },
            },
          }
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Plugins útiles</h2>
        <ul>
          <li>
            <p>@tailwindcss/forms: Estiliza formularios.</p>
          </li>
          <li>
            <p>@tailwindcss/typography: Mejor formato para texto largo (ideal para blogs).</p>
          </li>
          <li>
            <p>@tailwindcss/aspect-ratio: Controla proporciones de elementos como videos.</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Recursos</h2>
        <a href="https://tailwindcss.com/docs/installation/using-vite">Documentacion oficial</a>
        <a href="https://github.com/tailwindlabs/tailwindcss">GitHub</a>
      </section>
    </>
  )
}