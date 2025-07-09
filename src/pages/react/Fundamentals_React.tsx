import Code from "../../components/Code";

export default function Fundamentals_React() {
  return (
    <>
      <h1>Fundamentos de React</h1>
      <section>
        <h2>¿Que son los archivos .jsx y .tsx?</h2>
        <p>Los archivos .jsx y .tsx son tipos de archivos usados en el desarrollo web con React, una biblioteca de JavaScript para construir interfaces de usuario. Ambos permiten escribir JSX, una sintaxis que combina JavaScript con HTML.</p>
        <section>
          <h3>.jsx (JavaScript XML)</h3>
          <ul>
            <li>
              <p>Extensión: .jsx</p>
            </li>
            <li>
              <p>Uso: Archivos de JavaScript que contienen JSX.</p>
            </li>
            <li>
              <p>JSX permite escribir código HTML directamente dentro del JavaScript, lo cual hace que crear componentes de interfaz sea más natural.</p>
            </li>
          </ul>
          <Code>{`
            function Saludo() {
              return <h1>Hola, mundo</h1>;
            }
          `}</Code>
        </section>
        <section>
          <h3>.tsx (TypeScript XML)</h3>
          <ul>
            <li>
              <p>Extensión: .tsx</p>
            </li>
            <li>
              <p>Uso: Archivos de TypeScript que contienen JSX.</p>
            </li>
            <li>
              <p>TypeScript es un superset de JavaScript que agrega tipado estático.</p>
            </li>
            <li>
              <p>Usar .tsx te permite combinar las ventajas del tipado estricto de TypeScript con la sintaxis JSX.</p>
            </li>
          </ul>
          <Code>{`
            type Props = { nombre: string };

            function Saludo({ nombre }: Props) {
              return <h1>Hola, {nombre}</h1>;
            }
          `}</Code>
        </section>
        <section>
          <h3>Diferencias clave</h3>
          <table>
            <thead>
              <tr>
                <th>Característica</th>
                <th>.jsx</th>
                <th>.tsx</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lenguaje base	</td>
                <td>JavaScript</td>
                <td>TypeScript</td>
              </tr>
              <tr>
                <td>Tipado</td>
                <td>No (dinámico)	</td>
                <td>Sí (estático)</td>
              </tr>
              <tr>
                <td>JSX</td>
                <td>Sí</td>
                <td>Si</td>
              </tr>
              <tr>
                <td>Ventaja principal	</td>
                <td>Simplicidad</td>
                <td>Seguridad de tipos y mejor escalabilidad</td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </>
  )
}