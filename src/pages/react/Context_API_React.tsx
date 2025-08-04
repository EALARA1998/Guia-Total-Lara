import Code from "../../components/Code"

export default function Context_API_React() {
  return (
    <>
      <h1>Context API</h1>
      <section>
        <h2>¿Qué es la Context API?</h2>
        <p>La Context API es una funcionalidad de React que permite compartir datos (como estados, funciones, configuraciones, etc.) entre múltiples componentes sin tener que pasarlos manualmente por props (prop-drilling).</p>
        <p>En otras palabras, Context es una especie de "almacén global" que cualquier componente puede leer o modificar sin importar cuán profundo esté en el árbol de componentes.</p>
      </section>
      <section>
        <h2>¿Cuándo usar Context API?</h2>
        <p>Usa Context API cuando:</p>
        <ul>
          <li><p>Necesitas compartir estado entre muchos componentes (por ejemplo: usuario logueado, tema, idioma).</p></li>
          <li><p>Quieres evitar pasar props manualmente por varios niveles de componentes.</p></li>
          <li><p>Quieres centralizar estados y funciones (por ejemplo, junto con useReducer para manejar una lógica global).</p></li>
        </ul>
        <p>Evita usar Context para:</p>
        <ul>
          <li><p>Estados que solo afectan a un componente o dos cercanos.</p></li>
          <li><p>Datos que cambian muy frecuentemente (como cada segundo), porque re-renderiza todos los componentes que lo usan.</p></li>
        </ul>
      </section>
      <section>
        <h2>¿Cómo funciona Context API? (con TypeScript)</h2>
        <section>
          <h3>Paso 1: Crea el Contexto</h3>
          <Code>{`
            import { createContext } from "react";

            type MiContextoTipo = {
              nombre: string;
              cambiarNombre: (nuevoNombre: string) => void;
            };

            export const MiContexto = createContext<MiContextoTipo | undefined>(undefined);
          `}</Code>
        </section>
        <section>
          <h3>Paso 2: Crea el Provider</h3>
          <Code>{`
            import { useState } from "react";
            import { MiContexto } from "./MiContexto";

            export const MiProvider = ({ children }: { children: React.ReactNode }) => {
              const [nombre, setNombre] = useState("Emanuel");

              const cambiarNombre = (nuevoNombre: string) => {
                setNombre(nuevoNombre);
              };

              return (
                <MiContexto.Provider value={{ nombre, cambiarNombre }}>
                  {children}
                </MiContexto.Provider>
              );
            };
          `}</Code>
        </section>
        <section>
          <h3>Paso 3: Envolver tu app.tsx con el Provider</h3>
          <Code>{`
            import { StrictMode } from 'react'
            import { createRoot } from 'react-dom/client'
            import './index.css'
            import App from './App.tsx'
            import MiProvider from './contexts/MiProvider.tsx'

            createRoot(document.getElementById('root')!).render(
              <StrictMode>
                <MiProvider>
                  <App />
                </MiProvider>
              </StrictMode>,
            )
          `}</Code>
        </section>
        <section>
          <h3>Paso 4: Usa el contexto en componentes</h3>
          <Code>{`
            import { useContext } from "react";
            import { MiContexto } from "./MiContexto";

            const Componente = () => {
              const contexto = useContext(MiContexto);

              if (!contexto) throw new Error("Componente debe estar dentro del Provider");

              return (
                <div>
                  <p>Nombre actual: {contexto.nombre}</p>
                  <button onClick={() => contexto.cambiarNombre("Laura")}>Cambiar</button>
                </div>
              );
            };
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Usar Context + useReducer juntos (¡combinación poderosa!)</h2>
        <section>
          <h3>1. Crea el estado, acciones y reducer</h3>
          <Code>{`
            // types.ts
            export type Activity = {
              id: string;
              title: string;
            };

            export type State = {
              activities: Activity[];
            };

            export type Action =
              | { type: "add"; payload: Activity }
              | { type: "remove"; payload: string };

            export const initialState: State = {
              activities: [],
            };

            export const reducer = (state: State, action: Action): State => {
              switch (action.type) {
                case "add":
                  return { ...state, activities: [...state.activities, action.payload] };
                case "remove":
                  return {
                    ...state,
                    activities: state.activities.filter((a) => a.id !== action.payload),
                  };
                default:
                  return state;
              }
            };
          `}</Code>
        </section>
        <section>
          <h3>2. Crea el Contexto y Provider</h3>
          <Code>{`
            import { createContext, useReducer, ReactNode, useContext } from "react";
            import { State, Action, reducer, initialState } from "./types";

            type ContextType = {
              state: State;
              dispatch: React.Dispatch<Action>;
            };

            const ActivityContext = createContext<ContextType | undefined>(undefined);

            export const ActivityProvider = ({ children }: { children: ReactNode }) => {
              const [state, dispatch] = useReducer(reducer, initialState);

              return (
                <ActivityContext.Provider value={{ state, dispatch }}>
                  {children}
                </ActivityContext.Provider>
              );
            };

            // Custom hook para usar el contexto
            export const useActivity = () => {
              const context = useContext(ActivityContext);
              if (!context) {
                throw new Error("useActivity debe usarse dentro de un <ActivityProvider>");
              }
              return context;
            };
          `}</Code>
        </section>
        <section>
          <h3>Paso 3: Envolver tu app.tsx con el Provider</h3>
          <Code>{`
            import { StrictMode } from 'react'
            import { createRoot } from 'react-dom/client'
            import './index.css'
            import App from './App.tsx'
            import ActivityProvider from './contexts/ActivityProvider.tsx'

            createRoot(document.getElementById('root')!).render(
              <StrictMode>
                <ActivityProvider>
                  <App />
                </ActivityProvider>
              </StrictMode>,
            )
          `}</Code>
        </section>
        <section>
          <h3>3. Usar en un componente</h3>
          <Code>{`
            import { useActivity } from "./ActivityContext";

            const ListaActividades = () => {
              const { state, dispatch } = useActivity();

              return (
                <div>
                  {state.activities.map((a) => (
                    <div key={a.id}>
                      {a.title}
                      <button onClick={() => dispatch({ type: "remove", payload: a.id })}>
                        Eliminar
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() =>
                      dispatch({
                        type: "add",
                        payload: { id: crypto.randomUUID(), title: "Nueva Actividad" },
                      })
                    }
                  >
                    Añadir
                  </button>
                </div>
              );
            };
          `}</Code>
        </section>
      </section>
      <section>
        <h2>¿Que pasa si hay diferentes ContextAPI?</h2>
        <p>Si tienes varios contextos (ContextAPI), lo correcto y común es anidar los providers envolviendo tu {`<App />`}, sí, todos estarían envolviendo a App, pero no en paralelo, sino uno dentro de otro.</p>
        <section>
          <h3>Ejemplo con varios contextos</h3>
          <Code>{`
            import React from "react";
            import ReactDOM from "react-dom/client";
            import App from "./App";

            import FirstProvider from "./context/FirstContext";
            import SecondProvider from "./context/SecondContext";
            import ThirdProvider from "./context/ThirdContext";

            ReactDOM.createRoot(document.getElementById("root")!).render(
              <React.StrictMode>
                <ThirdProvider>
                  <SecondProvider>
                    <FirstProvider>
                      <App />
                    </FirstProvider>
                  </SecondProvider>
                </ThirdProvider>
              </React.StrictMode>
            );
          `}</Code>
        </section>
        <section>
          <h3>Buenas prácticas</h3>
          <section>
            <h4>Crear un componente AppProviders para evitar tanto anidamiento visual:</h4>
            <Code>{`
              export default function AppProviders({ children }: { children: React.ReactNode }) {
              return (
                <ThirdProvider>
                  <SecondProvider>
                    <FirstProvider>
                      {children}
                    </FirstProvider>
                  </SecondProvider>
                </ThirdProvider>
              );
            }
            `}</Code>
            <p>Y luego en main.tsx:</p>
            <Code>{`
              import AppProviders from "./context/AppProviders";

              <React.StrictMode>
                <AppProviders>
                  <App />
                </AppProviders>
              </React.StrictMode>
            `}</Code>
          </section>
        </section>
      </section>
      <section>
        <h2>Ventajas del patrón Context + useReducer</h2>
        <table>
          <thead>
            <tr>
              <th>Ventaja</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Centraliza el estado</td>
              <td>Manejas todo desde un solo lugar.</td>
            </tr>
            <tr>
              <td>Escalable</td>
              <td>Agregar nuevos tipos de acciones o propiedades es fácil.</td>
            </tr>
            <tr>
              <td>Sin prop-drilling</td>
              <td>No necesitas pasar props por múltiples niveles.</td>
            </tr>
            <tr>
              <td>Con TypeScript</td>
              <td>Tienes tipos claros para estado, acciones y contextos.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  )
}