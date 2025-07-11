import Code from "../../components/Code";

export default function Operators_JS() {
  return (
    <>
      <h1>Operadores</h1>
      <section>
        <h2>Operadores Aritméticos</h2>
        <p>Se usan para hacer operaciones matemáticas.</p>
        <table>
          <thead>
            <tr>
              <th>Operador</th>
              <th>Nombre</th>
              <th>Ejemplo</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>+</td>
              <td>Suma</td>
              <td>5 + 2</td>
              <td>7</td>
            </tr>
            <tr>
              <td>-</td>
              <td>Resta</td>
              <td>5 - 2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>*</td>
              <td>Multiplicacion</td>
              <td>5 * 2</td>
              <td>10</td>
            </tr>
            <tr>
              <td>/</td>
              <td>Division</td>
              <td>5 / 2</td>
              <td>2.5</td>
            </tr>
            <tr>
              <td>%</td>
              <td>Módulo</td>
              <td>5 % 2</td>
              <td>1</td>
            </tr>
            <tr>
              <td>**</td>
              <td>Potencia</td>
              <td>2 ** 3</td>
              <td>8</td>
            </tr>
            <tr>
              <td>++</td>
              <td>Incremento</td>
              <td>i++</td>
              <td>suma 1</td>
            </tr>
            <tr>
              <td>--</td>
              <td>Decremento</td>
              <td>i--</td>
              <td>resta 1</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>Operadores de Asignación</h2>
        <p>Sirven para asignar valores a variables.</p>
        <table>
          <thead>
            <tr>
              <th>Operador</th>
              <th>Significado</th>
              <th>Ejemplo</th>
              <th>Equivalente a</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>=</td>
              <td>Asignacion simple</td>
              <td>x = 10</td>
              <td></td>
            </tr>
            <tr>
              <td>+=</td>
              <td>Suma y asigna</td>
              <td>x += 5</td>
              <td>x = x + 5</td>
            </tr>
            <tr>
              <td>-=</td>
              <td>Resta y asigna</td>
              <td>x -= 5</td>
              <td>x = x - 5</td>
            </tr>
            <tr>
              <td>*=</td>
              <td>Multiplicacion y asigna</td>
              <td>x *= 5</td>
              <td>x = x * 5</td>
            </tr>
            <tr>
              <td>/=</td>
              <td>Divide y asigna</td>
              <td>x /= 5</td>
              <td>x = x / 5</td>
            </tr>
            <tr>
              <td>%=</td>
              <td>Modulo y asigna</td>
              <td>x %= 5</td>
              <td>x = x % 5</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>Operadores de Comparación</h2>
        <p>Se usan para comparar valores y devuelven true o false.</p>
        <table>
          <thead>
            <tr>
              <th>Operador</th>
              <th>Significado</th>
              <th>Ejemplo</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>==</td>
              <td>igual (valor)</td>
              <td>5 == "5"</td>
              <td>true</td>
            </tr>
            <tr>
              <td>!=</td>
              <td>Diferente (valor)</td>
              <td>5 != "5"</td>
              <td>false</td>
            </tr>
            <tr>
              <td>===</td>
              <td>Estrictamente igual</td>
              <td>5 === "5"</td>
              <td>false</td>
            </tr>
            <tr>
              <td>!==</td>
              <td>Estrictamente diferente</td>
              <td>5 !== "5"</td>
              <td>true</td>
            </tr>
            <tr>
              <td>{`>`}</td>
              <td>Mayor que</td>
              <td>{`5 > 3`}</td>
              <td>true</td>
            </tr>
            <tr>
              <td>{`<`}</td>
              <td>Menor que</td>
              <td>{`5 < 3`}</td>
              <td>false</td>
            </tr>
            <tr>
              <td>{`>=`}</td>
              <td>Mayor o igual</td>
              <td>{`5 >= 5`}</td>
              <td>true</td>
            </tr>
            <tr>
              <td>{`<=`}</td>
              <td>Menor o igual</td>
              <td>{`5 <= 3`}</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
        <p>Siempre prefiere === sobre == para evitar errores de tipo.</p>
      </section>
      <section>
        <h2></h2>
        <p></p>
        <table>
          <thead>
            <tr>
              <th>Operador</th>
              <th>Nombre</th>
              <th>Ejemplo	</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&&</td>
              <td>AND (y)</td>
              <td>true && false</td>
              <td>false</td>
            </tr>
            <tr>
              <td>||</td>
              <td>OR (or)</td>
              <td>true || false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>!</td>
              <td>NOT (no)</td>
              <td>!true</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>Operador Ternario (? :)</h2>
        <p>Una forma corta de escribir un if.</p>
        <Code>{`
          let edad = 18;
          let acceso = edad >= 18 ? "Permitido" : "Denegado";
        `}</Code>
      </section>
      <section>
        <h2>Operadores de Tipo</h2>
        <table>
          <thead>
            <tr>
              <th>Operador</th>
              <th>Descripción</th>
              <th>Ejemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>typeof</td>
              <td>Retorna el tipo de una variable</td>
              <td>typeof 5 → 'number'</td>
            </tr>
            <tr>
              <td>instanceof</td>
              <td>Verifica si un objeto es instancia de una clase</td>
              <td>[] instanceof Array → true</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>Operador de Nullish Coalescing (??)</h2>
        <p>Devuelve el valor de la derecha solo si el de la izquierda es null o undefined.</p>
        <Code>{`
          let nombre = null;
          let valor = nombre ?? "Invitado"; // "Invitado"
        `}</Code>
      </section>
      <section>
        <h2>Operador de Encadenamiento Opcional (?.)</h2>
        <p>Evita errores cuando accedes a propiedades de objetos que podrían ser null o undefined.</p>
        <Code>{`
          let usuario = null;
          console.log(usuario?.nombre); // undefined (sin error)
        `}</Code>
      </section>
      <section>
        <h2>Operadores Bit a Bit (bitwise)</h2>
        <p>Más avanzados, operan a nivel de bits:</p>
        <table>
          <thead>
            <tr>
              <th>Operador</th>
              <th>Descripción</th>
              <th>Ejemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&</td>
              <td>AND</td>
              <td>5 & 3</td>
            </tr>
            <tr>
              <td>|</td>
              <td>OR</td>
              <td>5 | 3</td>
            </tr>
            <tr>
              <td>^</td>
              <td>XOR</td>
              <td>5 ^ 3</td>
            </tr>
            <tr>
              <td>~</td>
              <td>NOT</td>
              <td>~5</td>
            </tr>
            <tr>
              <td>{`<<`}</td>
              <td>Desplaza a la izquierda</td>
              <td></td>
            </tr>
            <tr>
              <td>{`>>`}</td>
              <td>Desplaza a la derecha</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>Evaluaciones de cortocircuito &&</h2>
        <p>Las evaluaciones de cortocircuito en JavaScript son una forma rápida y eficiente de evaluar expresiones lógicas sin ejecutar más código del necesario.</p>
        <section>
          <h3>¿Qué significa "cortocircuito"?</h3>
          <p>JavaScript evalúa expresiones de izquierda a derecha y detiene (corta) la evaluación tan pronto como el resultado se puede determinar.</p>
        </section>
        <section>
          <h3>¿Dónde ocurre el cortocircuito?</h3>
          <p>En los operadores lógicos:</p>
          <section>
            <h4>&& (AND lógico)</h4>
            <Code>{`
              condición1 && condición2
            `}</Code>
            <ul>
              <li>
                <p>Si condición1 es falsy, no evalúa condición2</p>
              </li>
              <li>
                <p>Devuelve el primer falsy, o el último valor si todos son truthy</p>
              </li>
            </ul>
            <Code>{`
              false && console.log("Esto nunca se imprime");
            `}</Code>
            <Code>{`
              const user = null;
              const nombre = user && user.nombre; // devuelve null, no rompe
            `}</Code>
          </section>
          <section>
            <h4>|| (OR lógico)</h4>
            <Code>{`
              condición1 || condición2
            `}</Code>
            <ul>
              <li>
                <p>Si condición1 es truthy, no evalúa condición2</p>
              </li>
              <li>
                <p>Devuelve el primer truthy, o el último valor si todos son falsy</p>
              </li>
            </ul>
            <Code>{`
              true || console.log("Esto nunca se imprime");
            `}</Code>
            <Code>{`
              const nombre = usuario.nombre || "Invitado";
            `}</Code>
            <p>Esto se usa comúnmente para asignar valores por defecto.</p>
          </section>
          <section>
            <h4>?? (Nullish Coalescing Operator)</h4>
            <Code>{`
              valor1 ?? valor2
            `}</Code>
            <ul>
              <li>
                <p>Devuelve valor1 solo si no es null ni undefined</p>
              </li>
              <li>
                <p>A diferencia de ||, 0, "", false no activan el segundo valor</p>
              </li>
            </ul>
            <Code>{`
              const x = null ?? "por defecto"; // "por defecto"
              const y = 0 ?? 100;              // 0 (porque no es null ni undefined)
            `}</Code>
          </section>
          <section>
            <h4>Ejemplos comunes</h4>
            <section>
              <h5>Render condicional en React:</h5>
              <Code>{`
                {usuario && <p>Hola, {usuario.nombre}</p>}
              `}</Code>
              <p>Si usuario es null o undefined, no se intenta renderizar.</p>
            </section>
            <section>
              <h5>Valor por defecto:</h5>
              <Code>{`
                const nombre = input || "Sin nombre";
              `}</Code>
            </section>
            <section>
              <h5>Asignación condicional:</h5>
              <Code>{`
                estaAutenticado && ejecutarLogout();
              `}</Code>
            </section>
          </section>
          <section>
            <h4>¿Qué valores son falsy en JavaScript?</h4>
            <p>Son los que hacen que una condición falle:</p>
            <Code>{`
              false
              0
              ""
              null
              undefined
              NaN
            `}</Code>
            <p>Todos los demás son truthy (por ejemplo: "0", [], {}, true, "hola"…).</p>
          </section>
        </section>
      </section>
    </>
  )
}