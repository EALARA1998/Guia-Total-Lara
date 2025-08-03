import Code from "../../components/Code";

export default function React_Hooks_React() {
  return (
    <>
      <h1>React Hooks</h1>
      <section>
        <h2>Hooks</h2>
        <p>Los React Hooks son una de las herramientas más poderosas e importantes en React moderno. Permiten usar estado, ciclo de vida y otras funcionalidades en componentes funcionales (sin clases).</p>
        <section>
          <h3>Tipos de hooks</h3>
          <p>Hay tres tipos de hooks:</p>
          <ul>
            <li>
              <p>Hooks básicos (más usados)</p>
            </li>
            <li>
              <p>Hooks adicionales (menos comunes)</p>
            </li>
            <li>
              <p>Custom Hooks (tú los creas)</p>
            </li>
          </ul>
        </section>
      </section>
      <section>
        <h2>Hooks Básicos</h2>
        <section>
          <h3>useState</h3>
          <p>Permite tener estado en un componente funcional.</p>
          <Code>{`
            const [contador, setContador] = useState(0);
          `}</Code>
          <ul>
            <li>
              <p>Actualiza con setContador()</p>
            </li>
            <li>
              <p>Cada cambio re-renderiza el componente</p>
            </li>
          </ul>
          <section>
            <h4>Generics</h4>
            <p>En React con TypeScript, puedes usar generics con useState para darle al hook un tipo explícito. Esto te ayuda a tener autocompletado, validación de tipos, y un código más claro y seguro.</p>
            <Code>{`
              const [order, setOrder] = useState<OrderItem[]>([]);
            `}</Code>
          </section>
        </section>
        <section>
          <h3>useEffect</h3>
          <p>Permite realizar efectos secundarios, como llamadas a APIs, subscripciones, o cambios en el DOM.</p>
          <p>Al ejecutarse automaticamente cuando el componente esta listo, es un buen lugar para colocar codigo para consultar una API o LocalStorage.</p>
          <p>Debido a que le podemos pasar una dependencia y estar escuchando por los cambios que sucedan en una variable, puede actualizar el componente cuando ese cambio suceda.</p>
          <p>Dependiendo del valor que pasemos en el array de dependencias (o no pasemos nada) el hook de useEffect hara algo diferente.</p>
          <Code>{`
            useEffect(() => {
              console.log("Componente montado o actualizado");

              return () => {
                console.log("Cleanup: antes de desmontar o actualizar");
              };
            }, [dependencias]);
          `}</Code>
          <ul>
            <li>
              <p>Se ejecuta después del render</p>
            </li>
            <li>
              <p>El array de dependencias controla cuándo se ejecuta</p>
              <ul>
                <li>
                  <p>[]: solo una vez (al montar)</p>
                </li>
                <li>
                  <p>[x]: cada vez que x cambie</p>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h3>useContext</h3>
          <p>Permite leer valores de un contexto React (context API).</p>
          <Code>{`
            const tema = useContext(ThemeContext);
          `}</Code>
          <ul>
            <li>
              <p>Requiere un Context.Provider envolviendo tu componente</p>
            </li>
            <li>
              <p>Ideal para temas, autenticación, global state, etc.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>useRef</h3>
          <p>Guarda un valor mutable que no causa re-render. Útil para referencias a elementos o valores temporales.</p>
          <Code>{`
            const inputRef = useRef();

            <input ref={inputRef} />
          `}</Code>
          <Code>{`
            const contador = useRef(0); // se conserva entre renders, pero no actualiza el DOM
          `}</Code>
        </section>
        <section>
          <h3>useMemo</h3>
          <p>Memoriza un valor calculado para evitar cálculos innecesarios.</p>
          <Code>{`
            const total = useMemo(() => {
              return productos.reduce((acc, p) => acc + p.precio, 0);
            }, [productos]);
          `}</Code>
          <p>Evita recalcular si productos no cambia.</p>
        </section>
        <section>
          <h3>useCallback</h3>
          <p>Memoriza una función para que no se vuelva a crear en cada render.</p>
          <Code>{`
            const handleClick = useCallback(() => {
              console.log("Click");
            }, []);
          `}</Code>
          <p>Útil para evitar renders innecesarios de hijos que reciben funciones como prop.</p>
        </section>
      </section>
      <section>
        <h2>Hooks adicionales (avanzados o específicos)</h2>
        <section>
          <h3>useReducer</h3>
          <p>Alternativa a useState para estados complejos o con lógica de actualización:</p>
          <Code>{`
            const [state, dispatch] = useReducer(reducer, initialState);
          `}</Code>
          <p>Ideal para formularios, carritos, toggles múltiples, etc.</p>
        </section>
        <section>
          <h3>useLayoutEffect</h3>
          <p>Como useEffect, pero se ejecuta antes de pintar en pantalla (bloquea renderizado).</p>
          <Code>{`
            useLayoutEffect(() => {
              // cambios directos al DOM aquí
            }, []);
          `}</Code>
          <p>Solo úsalo si necesitas medir o modificar el layout.</p>
        </section>
        <section>
          <h3>useImperativeHandle</h3>
          <p>Permite personalizar qué se expone al usar ref en componentes personalizados.</p>
          <Code>{`
            useImperativeHandle(ref, () => ({
              foco: () => inputRef.current.focus()
            }));
          `}</Code>
          <p>Solo se usa con forwardRef.</p>
        </section>
        <section>
          <h3>useDebugValue</h3>
          <p>Para mostrar valores personalizados en React DevTools.</p>
          <Code>{`
            useDebugValue(valor);
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Custom Hooks (hooks personalizados)</h2>
        <p>Puedes crear tus propios hooks para reutilizar lógica con use al inicio:</p>
        <Code>{`
          function useContador(inicial = 0) {
            const [valor, setValor] = useState(inicial);
            const incrementar = () => setValor(v => v + 1);

            return { valor, incrementar };
          }
        `}</Code>
        <Code>{`
          const { valor, incrementar } = useContador(5);
        `}</Code>
      </section>
      <section>
        <h2>Reglas de los Hooks (muy importantes)</h2>
        <ul>
          <li>
            <p>Solo se llaman en la parte superior del componente (no dentro de condicionales, bucles o funciones internas).</p>
          </li>
          <li>
            <p>Solo se usan en componentes funcionales o custom hooks.</p>
          </li>
          <li>
            <p>Siempre comienzan con use.</p>
          </li>
        </ul>
        <Code>{`
          // ❌ Mal:
          if (condicion) {
            useState(); // ⚠️ NO
          }

          // ✅ Bien:
          const [estado, setEstado] = useState();
        `}</Code>
      </section>
    </>
  )
}