import Code from "../../components/Code";

export default function Npm_Node() {
  return (
    <>
      <h1>NPM</h1>
      <section>
        <h2>¿Qué es npm?</h2>
        <p>npm significa Node Package Manager (Administrador de Paquetes de Node).</p>
        <p>Es una herramienta que se instala automáticamente cuando instalas Node.js y sirve para:</p>
        <ul>
          <li>
            <p>Instalar paquetes (librerías) de JavaScript.</p>
          </li>
          <li>
            <p>Gestionar las dependencias de tus proyectos.</p>
          </li>
          <li>
            <p>Ejecutar scripts y comandos relacionados al proyecto.</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>¿Qué es un paquete?</h2>
        <p>Un paquete (o "módulo") es simplemente una biblioteca de código que alguien más creó y publicó para que otros puedan usarla.</p>
        <p>Por ejemplo:</p>
        <ul>
          <li>
            <p>express → para crear servidores.</p>
          </li>
          <li>
            <p>axios → para hacer peticiones HTTP.</p>
          </li>
          <li>
            <p>dotenv → para manejar variables de entorno.</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>¿Qué es package.json?</h2>
        <p>Es un archivo que describe tu proyecto y lista sus dependencias. npm lo crea con:</p>
        <Code>{`
          npm init
        `}</Code>
        <p>Este archivo guarda:</p>
        <ul>
          <li>
            <p>Nombre del proyecto.</p>
          </li>
          <li>
            <p>Scripts.</p>
          </li>
          <li>
            <p>Dependencias instaladas.</p>
          </li>
          <li>
            <p>Versión del proyecto.</p>
          </li>
        </ul>
        <p>Ejemplo:</p>
        <Code>{`
          {
            "name": "mi-app",
            "version": "1.0.0",
            "dependencies": {
              "express": "^4.18.2"
            }
          }
        `}</Code>
      </section>
      <section>
        <h2></h2>
        <table>
          <thead>
            <tr>
              <th>Comando</th>
              <th>Qué hace</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>npm init</td>
              <td>Crea un package.json</td>
            </tr>
            <tr>
              <td>npm install nombre-paquete</td>
              <td>Instala un paquete</td>
            </tr>
            <tr>
              <td>npm install</td>
              <td>Instala todas las dependencias listadas</td>
            </tr>
            <tr>
              <td>npm uninstall nombre-paquete</td>
              <td>Elimina un paquete</td>
            </tr>
            <tr>
              <td>npm run nombre-script</td>
              <td>Ejecuta un script definido</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  )
}