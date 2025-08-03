import Code from "../../components/Code"

type UseReducer_ReactProps = {
  
}

export default function UseReducer_React({}:UseReducer_ReactProps) {
  return (
    <>
      <h1>UseReducer</h1>
      <section>
        <h2>¿Qué es useReducer?</h2>
        <p>useReducer es un hook de React que se usa para manejar estados complejos o con múltiples transiciones.</p>
        <p>Es una alternativa a useState, y sigue el patrón de reducer que se usa también en Redux: un estado, una acción, y una función que decide cómo actualizar el estado.</p>
      </section>
      <section>
        <h2>¿Cuándo usar useReducer?</h2>
        <p>Usa useReducer cuando:</p>
        <ol>
          <li><p>El estado es más complejo que solo un valor (por ejemplo, un objeto con varias propiedades).</p></li>
          <li><p>Las acciones sobre el estado tienen lógica clara, como “añadir”, “eliminar”, “resetear”.</p></li>
          <li><p>Quieres tener el control del flujo de cambios del estado de forma más explícita.</p></li>
        </ol>
      </section>
      <section>
        <h2>Sintaxis básica</h2>
        <Code>{`
          const [state, dispatch] = useReducer(reducer, initialState);
        `}</Code>
        <ul>
          <li><p>state: el estado actual.</p></li>
          <li><p>dispatch: la función para enviar acciones.</p></li>
          <li><p>reducer: función que recibe el estado actual y una acción, y devuelve el nuevo estado.</p></li>
          <li><p>initialState: el estado inicial.</p></li>
        </ul>
      </section>
      <section>
        <h2>Ejemplo básico en TypeScript</h2>
        <p>Supongamos que tenemos un contador:</p>
        <section>
          <h3>Paso 1: Define el tipo del estado y las acciones</h3>
          <Code>{`
            type State = {
              count: number;
            };

            type Action =
              | { type: 'increment' }
              | { type: 'decrement' }
              | { type: 'reset' };
          `}</Code>
        </section>
        <section>
          <h3>Paso 2: Define el reducer</h3>
          <Code>{`
            const reducer = (state: State, action: Action): State => {
              switch (action.type) {
                case 'increment':
                  return { count: state.count + 1 };
                case 'decrement':
                  return { count: state.count - 1 };
                case 'reset':
                  return { count: 0 };
                default:
                  return state;
              }
            };
          `}</Code>
        </section>
        <section>
          <h3>Define el initialState</h3>
          <Code>{`
            export const initialState: State = { count: 0 };
          `}</Code>
        </section>
        <section>
          <h3>Paso 3: Usa useReducer en el componente</h3>
          <Code>{`
            import { useReducer } from 'react';
            import { reducer, initialState } from "./reducers/contador-reducer";

            export default function Contador(){

              const [state, dispatch] = useReducer(reducer, initialState);

              return (
                <div>
                  <p>Contador: {state.count}</p>
                  <button onClick={() => dispatch({ type: 'increment' })}>+</button>
                  <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
                  <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
                </div>
              );
            };
          `}</Code>
        </section>
      </section>
        <section>
          <h2>¿Qué beneficios tiene frente a useState?</h2>
          <p>Con useState:</p>
          <Code>{`
            const [count, setCount] = useState(0);
          `}</Code>
          <p>Esto es genial si solo manejas un número. Pero cuando tu estado es así:</p>
          <Code>{`
            {
              count: 0,
              loading: false,
              error: null
            }
          `}</Code>
          <p>Y tienes múltiples acciones que modifican distintos campos, useReducer te da un flujo de cambios más organizado.</p>
        </section>
        <section>
          <h2></h2>
          <Code>{`
            type FormState = {
              username: string;
              email: string;
            };

            type FormAction =
              | { type: 'change_username'; payload: { variable: string} }
              | { type: 'change_email'; payload: { variable: string} }
              | { type: 'reset' };

            const formReducer = (state: FormState, action: FormAction): FormState => {
              switch (action.type) {
                case 'change_username':
                  return { ...state, username: action.payload };
                case 'change_email':
                  return { ...state, email: action.payload };
                case 'reset':
                  return { username: '', email: '' };
                default:
                  return state;
              }
            };
          `}</Code>
          <p>Y el componente:</p>
          <Code>{`
            export default Formulario(){
            const [state, dispatch] = useReducer(formReducer, {
              username: '',
              email: '',
            });

            return (
              <div>
                <input
                  value={state.username}
                  onChange={(e) => dispatch({ type: 'change_username', payload: { variable: e.target.value} })}
                  placeholder="Nombre de usuario"
                />
                <input
                  value={state.email}
                  onChange={(e) => dispatch({ type: 'change_email', payload: { variable: e.target.value} })}
                  placeholder="Correo"
                />
                <button onClick={() => dispatch({ type: 'reset' })}>Resetear</button>
              </div>
            );
          };
          `}</Code>
        </section>
        <section>
          <h2>Resumen</h2>
          <table>
            <thead>
              <tr>
                <th>Elemento</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>useReducer</td>
                <td>Hook para manejar estados complejos.</td>
              </tr>
              <tr>
                <td>state</td>
                <td>El estado actual.</td>
              </tr>
              <tr>
                <td>dispatch</td>
                <td>Función para enviar acciones.</td>
              </tr>
              <tr>
                <td>reducer</td>
                <td>Función que decide cómo cambia el estado.</td>
              </tr>
              <tr>
                <td>action</td>
                <td>Objeto que describe qué hacer con el estado.</td>
              </tr>
            </tbody>
          </table>
        </section>
    </>
  )
}