import Code from "../../components/Code";

export default function Json_JS() {
  return (
    <>
      <h1>Json</h1>
      <section>
        <h2>¿Qué es JSON?</h2>
        <p>JSON (JavaScript Object Notation) es un formato de intercambio de datos ligero, legible por humanos y fácil de interpretar por máquinas. Se usa ampliamente para comunicar datos entre un servidor y una aplicación web, o entre distintos sistemas.</p>
      </section>
      <section>
        <h2>Estructura básica de JSON</h2>
        <p>JSON se basa en dos estructuras:</p>
        <ul>
          <li>
            <p>Objeto: colección de pares clave: valor delimitada por llaves {}.</p>
          </li>
          <li>
            <p>Arreglo (array): lista ordenada de valores, delimitada por corchetes [].</p>
          </li>
        </ul>
        <Code>{`
          {
            "nombre": "Juan",
            "edad": 30,
            "casado": false,
            "hijos": ["Ana", "Luis"],
            "direccion": {
              "calle": "Av. Siempre Viva",
              "numero": 742
            }
          }
        `}</Code>
      </section>
      <section>
        <h2>Reglas de sintaxis</h2>
        <ol>
          <li>
            <p>Claves deben ir entre comillas dobles " ".</p>
          </li>
          <li>
            <p>Los valores pueden ser:</p>
            <ul>
              <li>
                <p>Cadena (string)</p>
              </li>
              <li>
                <p>Número (number)</p>
              </li>
              <li>
                <p>Booleano (true, false)</p>
              </li>
              <li>
                <p>Nulo (null)</p>
              </li>
              <li>
                <p>Objeto {`({ })`}</p>
              </li>
              <li>
                <p>Arreglo ([ ])</p>
              </li>
            </ul>
          </li>
          <li>
            <p>No se permite:</p>
            <ul>
              <li>
                <p>Comentarios (// o /* */)</p>
              </li>
              <li>
                <p>Funciones</p>
              </li>
              <li>
                <p>Claves duplicadas en un mismo objeto</p>
              </li>
            </ul>
          </li>
        </ol>
      </section>
      <section>
        <h2>¿Para qué se usa JSON?</h2>
        <ul>
          <li>
            <p>En APIs REST para enviar y recibir datos.</p>
          </li>
          <li>
            <p>Configuración de aplicaciones (como package.json en Node.js).</p>
          </li>
          <li>
            <p>Comunicación entre microservicios.</p>
          </li>
          <li>
            <p>Almacenamiento de datos ligeros.</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Cómo trabajar con JSON</h2>
        <Code>{`
          const jsonString = '{"nombre":"Ana","edad":25}';
          const obj = JSON.parse(jsonString);  // Convierte JSON → objeto JS
          const nuevoJSON = JSON.stringify(obj);  // Convierte objeto JS → JSON
        `}</Code>
        <Code>{`
          import { readFile } from "fs/promises"

          const data = await readFile("./test.json", 'utf-8');
          const obj = JSON.parse(data)
          console.log(obj.nombre) 
        `}</Code>
      </section>
    </>
  )
}