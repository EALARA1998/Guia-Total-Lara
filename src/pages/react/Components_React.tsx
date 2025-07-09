import Code from "../../components/Code"

export default function Components_React() {
  return (
    <>
      <h1>Componentes en React</h1>
      <section>
        <h2>¿Qué es un componente en React?</h2>
        <p>Un componente en React es como una pieza reutilizable de una interfaz de usuario (UI).</p>
      </section>
      <section>
        <h2>¿Por qué existen los componentes?</h2>
        <ol>
          <li>
            <p>Dividir una interfaz compleja en partes pequeñas y manejables.</p>
          </li>
          <li>
            <p>Reutilizar código (no tener que escribir lo mismo varias veces).</p>
          </li>
          <li>
            <p>Separar responsabilidades (cada componente tiene su función).</p>
          </li>
          <li>
            <p>Hacer más fácil el mantenimiento y escalado del código.</p>
          </li>
        </ol>
      </section>
      <section>
        <h2>Tipos de componentes en React</h2>
        <section>
          <h3>Componentes de función (Function Components) ✅ Recomendado</h3>
          <p>Es la forma moderna y preferida de escribir componentes.</p>
          <Code>{`
            function Saludo() {
              return <h1>¡Hola, mundo!</h1>;
            }
          `}</Code>
          <p>O con una arrow function:</p>
          <Code>{`
            const Saludo = () => {
              return <h1>¡Hola, mundo!</h1>;
            };
          `}</Code>
        </section>
        <section>
          <h3>Componentes de clase (Class Components) ❌ Menos usados hoy en día</h3>
          <p>Se usaban antes de los hooks. Hoy casi siempre se usan los de función.</p>
          <Code>{`
            import React, { Component } from 'react';
            
            class Saludo extends Component {
              render() {
                return <h1>¡Hola, mundo!</h1>;
              }
            }
          `}</Code>
        </section>
      </section>
      <section>
        <h2>¿Cómo se usa un componente?</h2>
        <p>Un componente se invoca como una etiqueta HTML, pero con nombre en mayúscula:</p>
        <Code>{`
          function App() {
            return (
              <div>
                <Saludo />
              </div>
            );
          }
        `}</Code>
      </section>
      <section>
        <h2>Props: Pasar información a componentes</h2>
        <p>Puedes pasar datos a un componente usando props (propiedades):</p>
        <Code>{`
          const Saludo = (props) => {
            return <h1>Hola, {props.nombre}!</h1>;
          };

          // Uso:
          <Saludo nombre="Emanuel" />
        `}</Code>
      </section>
      <section>
        <h2>Componentes pueden tener lógica</h2>
        <p>Puedes usar JavaScript dentro del componente:</p>
        <Code>{`
          const Saludo = (props) => {
            const hora = new Date().getHours();
            const mensaje = hora < 12 ? 'Buenos días' : 'Buenas tardes';

            return <h1>{mensaje}, {props.nombre}!</h1>;
          };
        `}</Code>
      </section>
      <section>
        <h2>Componentes con estado (useState)</h2>
        <p>Los componentes pueden tener estado interno para guardar y manejar datos que cambian:</p>
        <Code>{`
          import { useState } from 'react';

          const Contador = () => {
            const [numero, setNumero] = useState(0);

            return (
              <div>
                <p>Has hecho clic {numero} veces</p>
                <button onClick={() => setNumero(numero + 1)}>Incrementar</button>
              </div>
            );
          };
        `}</Code>
      </section>
      <section>
        <h2>Componentes anidados</h2>
        <p>Un componente puede incluir otros componentes:</p>
        <Code>{`
          const Cabecera = () => <h1>Mi página</h1>;
          const Pie = () => <footer>Gracias por visitar</footer>;

          const App = () => (
            <div>
              <Cabecera />
              <p>Contenido principal</p>
              <Pie />
            </div>
          );
        `}</Code>
      </section>
    </>
  )
}