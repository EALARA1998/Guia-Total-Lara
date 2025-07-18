import Code from "../../components/Code";

export default function Custom_Hooks_React() {
  return (
    <>
      <h1>Custom Hooks</h1>
      <section>
        <h2>¿Qué es un Custom Hook en React?</h2>
        <p>Un Custom Hook es simplemente una función de JavaScript cuyo nombre comienza con use y que puede llamar a otros hooks de React dentro de ella. Su propósito principal es reutilizar lógica de estado o efectos entre componentes sin duplicar código.</p>
        <ul>
          <li>
            <p>Un Custom Hook es una abstracción: encapsulas lógica repetitiva o compleja para hacer tu código más limpio, modular y reutilizable.</p>
          </li>
        </ul>
      </section>
      <section>
        <h2></h2>
        <Code>{`
          // useContador.js
          import { useState } from 'react';

          function useContador(inicial = 0) {
            const [contador, setContador] = useState(inicial);

            const incrementar = () => setContador(c => c + 1);
            const decrementar = () => setContador(c => c - 1);
            const resetear = () => setContador(inicial);

            return { contador, incrementar, decrementar, resetear };
          }

          export default useContador;
        `}</Code>
        <p>Y luego lo usas en un componente:</p>
        <Code>{`
          import React from 'react';
          import useContador from './useContador';

          function Contador() {
            const { contador, incrementar, decrementar, resetear } = useContador(5);

            return (
              <div>
                <h1>{contador}</h1>
                <button onClick={incrementar}>+</button>
                <button onClick={decrementar}>-</button>
                <button onClick={resetear}>Reset</button>
              </div>
            );
          }
        `}</Code>
      </section>
      <section>
        <h2>¿Qué puede hacer un Custom Hook?</h2>
        <p>Puede usar otros hooks de React (useState, useEffect, useRef, etc.), y cualquier otra lógica JS.</p>
        <section>
          <h3>Ejemplos comunes:</h3>
          <ul>
            <li>
              <p>Manejar formularios: useForm</p>
            </li>
            <li>
              <p>Manejo de solicitudes HTTP: useFetch</p>
            </li>
            <li>
              <p>Eventos del navegador: useWindowSize, useScroll</p>
            </li>
            <li>
              <p>Autenticación: useAuth</p>
            </li>
            <li>
              <p>Validaciones: useValidation</p>
            </li>
            <li>
              <p>Timer o intervalos: useInterval</p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Reglas para Custom Hooks</h2>
          <p>Los Custom Hooks siguen las mismas reglas que cualquier otro hook:</p>
          <ul>
            <li>
              <p>Deben comenzar con use.</p>
            </li>
            <li>
              <p>Solo deben ser llamados en el nivel superior de una función componente o de otro custom hook (no dentro de condicionales o bucles).</p>
            </li>
            <li>
              <p>No deben ser llamados dentro de funciones normales (fuera de componentes o hooks).</p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Beneficios de los Custom Hooks</h2>
          <ul>
            <li>
              <p>Reutilización de lógica sin duplicación.</p>
            </li>
            <li>
              <p>Separación de preocupaciones: la UI y la lógica no están mezcladas.</p>
            </li>
            <li>
              <p>Testing más sencillo (puedes testear la lógica del hook sin montar componentes).</p>
            </li>
            <li>
              <p>Legibilidad y mantenibilidad: tu componente solo se enfoca en mostrar.</p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Estructura típica de un proyecto con Custom Hooks</h2>
          <Code>{`
            src/
            ├── hooks/
            │   ├── useContador.js
            │   ├── useForm.js
            │   └── useAuth.js
            ├── components/
            │   └── ...
          `}</Code>
        </section>
        <section>
          <h2>Testing de Custom Hooks</h2>
          <p>Puedes testear hooks usando librerías como @testing-library/react-hooks (aunque desde React 18 se recomienda @testing-library/react directamente).</p>
          <p>Ejemplo con renderHook:</p>
          <Code>{`
            import { renderHook, act } from '@testing-library/react';
            import useContador from './useContador';

            test('debe incrementar el contador', () => {
              const { result } = renderHook(() => useContador(0));
              
              act(() => {
                result.current.incrementar();
              });

              expect(result.current.contador).toBe(1);
            });
          `}</Code>
        </section>
        <section>
          <h2>Cuándo no usar Custom Hooks</h2>
          <ul>
            <li>
              <p>Cuando la lógica solo se usará una vez, y no aporta claridad dividirla.</p>
            </li>
            <li>
              <p>Si la lógica no involucra hooks, puede ser solo una función utilitaria.</p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Buenas prácticas</h2>
          <ol>
            <li>
              <p>Nombrar claramente: useXyz.</p>
            </li>
            <li>
              <p>Evita side-effects innecesarios dentro del hook.</p>
            </li>
            <li>
              <p>Documenta el propósito y uso del hook.</p>
            </li>
            <li>
              <p>Hazlo composable: si un hook depende de otros, que cada uno haga una sola cosa bien.</p>
            </li>
            <li>
              <p>No abuses: no todo debe ser un custom hook.</p>
            </li>
          </ol>
        </section>
        <section>
          <h2>Ejemplo más avanzado – useFetch</h2>
          <Code>{`
            import { useState, useEffect } from 'react';

            function useFetch(url) {
              const [data, setData] = useState(null);
              const [loading, setLoading] = useState(true);
              const [error, setError] = useState(null);

              useEffect(() => {
                let cancelado = false;

                setLoading(true);
                fetch(url)
                  .then(res => {
                    if (!res.ok) throw new Error('Error en la red');
                    return res.json();
                  })
                  .then(json => {
                    if (!cancelado) {
                      setData(json);
                      setLoading(false);
                    }
                  })
                  .catch(err => {
                    if (!cancelado) {
                      setError(err);
                      setLoading(false);
                    }
                  });

                return () => {
                  cancelado = true;
                };
              }, [url]);

              return { data, loading, error };
            }
          `}</Code>
        </section>
      </section>
    </>
  )
}