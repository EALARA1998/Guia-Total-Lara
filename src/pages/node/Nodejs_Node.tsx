export default function Index_node() {
  return (
    <>
      <h1>Node.js</h1>
      <a href="https://nodejs.org/en">Node JS</a>
      <section>
        <h2>¿Qué es Node.js?</h2>
        <p>Node.js es un entorno de ejecución de JavaScript del lado del servidor. Esto significa que te permite ejecutar código JavaScript fuera del navegador, por ejemplo, en un servidor o en tu computadora.</p>
      </section>
      <section>
        <h2>¿Cómo funciona?</h2>
        <ul>
          <li>
            <p>Node.js usa el motor V8 de Google Chrome, que es el que interpreta y ejecuta JavaScript.</p>
          </li>
          <li>
            <p>A diferencia del navegador, que usa JavaScript para interactuar con el DOM (la página web), en Node.js lo usas para:</p>
            <ul>
              <li>
                <p>Leer y escribir archivos.</p>
              </li>
              <li>
                <p>Crear servidores web.</p>
              </li>
              <li>
                <p>Conectarte a bases de datos.</p>
              </li>
              <li>
                <p>Automatizar tareas.</p>
              </li>
              <li>
                <p>Construir APIs.</p>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section>
        <h2>¿Por qué es importante?</h2>
        <p>Antes de Node.js, JavaScript solo se usaba en el navegador. Node.js permitió usar JavaScript también en el backend (servidor), lo que dio lugar a aplicaciones completas en un solo lenguaje.</p>
      </section>
      <section>
        <h2>¿Como ejecutar scripts .js con node?</h2>
        <ol>
          <li>
            <p>Primero debemos crear un script .js.</p>
          </li>
          <li>
            <p>Luego desde la consola debemos escribir "node app.js" app siendo el nombre del script.</p>
          </li>
        </ol>
      </section>
      <section>
        <h2>¿Qué se puede hacer con Node.js?</h2>
        <ul>
          <li>
            <p>Crear servidores web.</p>
          </li>
          <li>
            <p>Construir APIs REST.</p>
          </li>
          <li>
            <p>Automatizar procesos (scripts).</p>
          </li>
          <li>
            <p>Trabajar con sockets (chat en tiempo real).</p>
          </li>
          <li>
            <p>Generar páginas con frameworks como Express.js, Next.js, etc.</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Ventajas</h2>
        <ul>
          <li>
            <p>Muy rápido gracias a V8.</p>
          </li>
          <li>
            <p>Usa JavaScript en todos lados.</p>
          </li>
          <li>
            <p>Gran ecosistema con npm (gestor de paquetes).</p>
          </li>
          <li>
            <p>Ideal para aplicaciones en tiempo real.</p>
          </li>
        </ul>
      </section>
    </>
  )
}