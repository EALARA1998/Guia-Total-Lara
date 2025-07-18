import Code from "../../components/Code";

export default function Fundamentals_Git() {
  return (
    <>
      <h1>Fundamentos Git y Github</h1>
      <section>
        <h2>¿Qué es Git?</h2>
        <p>Git es un sistema de control de versiones distribuido. Permite:</p>
        <ul>
          <li>
            <p>Rastrear los cambios de tu código.</p>
          </li>
          <li>
            <p>Colaborar con otros desarrolladores.</p>
          </li>
          <li>
            <p>Volver a versiones anteriores.</p>
          </li>
          <li>
            <p>Crear ramas para probar nuevas funcionalidades sin romper el código principal.</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>¿Qué es GitHub?</h2>
        <p>GitHub es una plataforma en la nube para alojar repositorios Git y facilitar la colaboración. Ofrece:</p>
        <ul>
          <li>
            <p>Repositorios públicos y privados.</p>
          </li>
          <li>
            <p>Pull Requests, Issues y Actions.</p>
          </li>
          <li>
            <p>Wikis, gestión de ramas y más.</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Configuración inicial de Git</h2>
        <Code>{`
          git config --global user.name "Tu Nombre"
          git config --global user.email "tu@email.com"
          git config --global init.defaultBranch main
        `}</Code>
        <p>Ver configuración:</p>
        <Code>{`
          git config --list
        `}</Code>
      </section>
      <section>
        <h2>Crear un repositorio local</h2>
        <Code>{`
          git init
        `}</Code>
        <p>Esto crea una carpeta .git/ donde Git guarda el historial.</p>
      </section>
      <section>
        <h2>Flujo básico de trabajo con Git</h2>
        <Code>{`
          git status        # Ver archivos modificados
          git add archivo.js    # Añadir archivo al staging
          git add .             # Añadir todo
          git commit -m "mensaje"  # Confirmar cambios
          git log           # Ver historial de commits
        `}</Code>
      </section>
      <section>
        <h2>Ramas (Branches)</h2>
        <section>
          <h3>Crear y cambiar de rama:</h3>
          <Code>{`
            git branch nueva-rama
            git checkout nueva-rama
          `}</Code>
        </section>
        <section>
          <h3>Crear y cambiar de una sola vez:</h3>
          <Code>{`
            git checkout -b nueva-rama
          `}</Code>
        </section>
        <section>
          <h3>Fusionar ramas:</h3>
          <Code>{`
            git checkout main
            git merge nueva-rama
          `}</Code>
        </section>
        <section>
          <h3>Borrar rama:</h3>
          <Code>{`
            git branch -d nueva-rama
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Conectar a GitHub</h2>
        <section>
          <h3>Crear un repositorio en GitHub y luego conectar:</h3>
          <Code>{`
            git remote add origin https://github.com/usuario/repositorio.git
            git push -u origin main
          `}</Code>
          <p>Si es nuevo, necesitas:</p>
          <Code>{`
            git push -u origin main
          `}</Code>
        </section>
        <section>
          <h3>Clonar un repositorio existente:</h3>
          <Code>{`
            git clone https://github.com/usuario/repositorio.git
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Subir cambios a GitHub</h2>
        <Code>{`
          git add .
          git commit -m "Descripción"
          git push origin rama
        `}</Code>
      </section>
      <section>
        <h2>Traer cambios desde GitHub</h2>
        <Code>{`
          git pull origin main
        `}</Code>
      </section>
      <section>
        <h2>Pull Requests (en GitHub)</h2>
        <ul>
          <li>
            <p>Crea una rama nueva para la funcionalidad.</p>
          </li>
          <li>
            <p>Sube cambios con git push origin nombre-rama.</p>
          </li>
          <li>
            <p>En GitHub, abre un Pull Request.</p>
          </li>
          <li>
            <p>Alguien lo revisa y lo aprueba para unirlo a main.</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Comandos útiles</h2>
        <table>
          <thead>
            <tr>
              <th>Comando</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>git diff</td>
              <td>Ver cambios no confirmados</td>
            </tr>
            <tr>
              <td>git log --oneline --graph</td>
              <td>Ver historial con ramas</td>
            </tr>
            <tr>
              <td>git stash</td>
              <td>Guardar cambios sin hacer commit</td>
            </tr>
            <tr>
              <td>git stash pop</td>
              <td>Restaurar cambios guardados</td>
            </tr>
            <tr>
              <td>git reset --hard HEAD</td>
              <td>Volver al último commit</td>
            </tr>
            <tr>
              <td>{`git revert <id>`}</td>
              <td>Revertir un commit específico</td>
            </tr>
            <tr>
              <td>git rm archivo.js</td>
              <td>Eliminar archivo del proyecto y del control de versiones</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>.gitignore</h2>
        <p>Ignora archivos que no quieres subir (como node_modules, .env, etc.)</p>
        <p>Ejemplo:</p>
        <Code>{`
          node_modules/
          .env
          dist/
        `}</Code>
      </section>
      <section>
        <h2>Buenas prácticas</h2>
        <ul>
          <li>
            <p>Commits claros: feat: añade botón de login, fix: corrige error de validación.</p>
          </li>
          <li>
            <p>Usa ramas por funcionalidad: feature/login, bugfix/login-error.</p>
          </li>
          <li>
            <p>Haz pull antes de push para evitar conflictos.</p>
          </li>
          <li>
            <p>Usa .gitignore correctamente.</p>
          </li>
          <li>
            <p>Nunca subas archivos sensibles (.env, contraseñas).</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>GitHub para colaboración</h2>
        <ul>
          <li>
            <p>Issues: seguimiento de errores o ideas.</p>
          </li>
          <li>
            <p>Projects: tableros tipo Trello.</p>
          </li>
          <li>
            <p>Actions: automatización de pruebas o despliegues.</p>
          </li>
          <li>
            <p>Forks: copias de otros proyectos para hacer cambios y proponer mejoras.</p>
          </li>
          <li>
            <p>README.md: para describir el proyecto (usa Markdown).</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Puedes usar GitHub para publicar sitios estáticos gratis.</h2>
        <p></p>
        <ul>
          <li>
            <p>Sube los archivos HTML/CSS/JS.</p>
          </li>
          <li>
            <p>{`Ve a Settings > Pages > Source.`}</p>
          </li>
          <li>
            <p>Selecciona la rama (main) y carpeta (/root o /docs).</p>
          </li>
          <li>
            <p>GitHub genera una URL para tu sitio.</p>
          </li>
        </ul>
      </section>
    </>
  )
}