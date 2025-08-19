import Code from "../../components/Code";

export default function Operators_JS() {
  return (
    <>
      <h1>Operadores</h1>
      <section>
        <h2>Qué son</h2>
        <p>Un operador es un símbolo que indica a JavaScript que debe realizar una operación sobre uno o más valores (operandos).</p>
        <p>Los operadores se pueden clasificar según el número de operandos que usan y su función.</p>
      </section>
      <section>
        <h2>Tipos de operadores</h2>
        <section>
          <h3>Aritméticos</h3>
          <p>Realizan operaciones matemáticas básicas.</p>
          <table>
            <thead>
              <tr>
                <th>Operador</th>
                <th>Descripción</th>
                <th>Ejemplo</th>
                <th>Resultado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>+</td>
                <td>Suma / concatenación</td>
                <td>5 + 3</td>
                <td>8</td>
              </tr>
              <tr>
                <td>-</td>
                <td>Resta</td>
                <td>10 - 4</td>
                <td>6</td>
              </tr>
              <tr>
                <td>*</td>
                <td>Multiplicación</td>
                <td>2 * 3</td>
                <td>6</td>
              </tr>
              <tr>
                <td>/</td>
                <td>División</td>
                <td>10 / 2</td>
                <td>5</td>
              </tr>
              <tr>
                <td>%</td>
                <td>Módulo (residuo)</td>
                <td>10 % 3</td>
                <td>1</td>
              </tr>
              <tr>
                <td>**</td>
                <td>Exponente</td>
                <td>2 ** 3</td>
                <td>8</td>
              </tr>
            </tbody>
          </table>
          <p>Nota: El operador + sirve para concatenar strings si uno de los operandos es texto:</p>
          <Code>{`
            let resultado = "Hola " + "Mundo"; // "Hola Mundo"
          `}</Code>
        </section>
        <section>
          <h3>Asignación</h3>
          <p>Asignan valores a variables.</p>
          <table>
            <thead>
              <tr>
                <th>Operador</th>
                <th>Ejemplo</th>
                <th>Equivalente</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>=</td>
                <td>a = 5</td>
                <td>a = 5</td>
              </tr>
              <tr>
                <td>+=</td>
                <td>a += 2</td>
                <td>a = a + 2</td>
              </tr>
              <tr>
                <td>-=</td>
                <td>a -= 3</td>
                <td>a = a - 3</td>
              </tr>
              <tr>
                <td>*=</td>
                <td>a *= 4</td>
                <td>a = a * 4</td>
              </tr>
              <tr>
                <td>/=</td>
                <td>a /= 2</td>
                <td>a = a / 2</td>
              </tr>
              <tr>
                <td>%=</td>
                <td>a %= 3</td>
                <td>a = a % 3</td>
              </tr>
              <tr>
                <td>**=</td>
                <td>a **= 2</td>
                <td>a = a ** 2</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Comparación</h3>
          <p>Devuelven booleanos (true o false) según la relación entre los valores.</p>
          <table>
            <thead>
              <tr>
                <th>Operador</th>
                <th>Ejemplo</th>
                <th>Resultado</th>
                <th>Nota</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>==</td>
                <td>5 == "5"</td>
                <td>true</td>
                <td>Compara valores, convierte tipos implícitamente</td>
              </tr>
              <tr>
                <td>===</td>
                <td>5 === "5"</td>
                <td>false</td>
                <td>Comparación estricta, compara valor y tipo</td>
              </tr>
              <tr>
                <td>!=</td>
                <td>5 != "5"</td>
                <td>false</td>
                <td>Compara valores (no estricta)</td>
              </tr>
              <tr>
                <td>!==</td>
                <td>5 !== "5"</td>
                <td>true</td>
                <td>Compara valor y tipo</td>
              </tr>
              <tr>
                <td>{`>`}</td>
                <td>{`  5 > 3`}</td>
                <td>true</td>
                <td>Mayor que</td>
              </tr>
              <tr>
                <td>{`<`}</td>
                <td>{`2 < 7`}</td>
                <td>true</td>
                <td>Menor que</td>
              </tr>
              <tr>
                <td>{`>=`}</td>
                <td>{`5 >= 5`}</td>
                <td>true</td>
                <td>Mayor o igual</td>
              </tr>
              <tr>
                <td>{`<=`}</td>
                <td>{`4 <= 5`}</td>
                <td>true</td>
                <td>Menor o igual</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Lógicos</h3>
          <p>Se usan para combinar condiciones, siempre devuelven booleanos.</p>
          <table>
            <thead>
              <tr>
                <th>Operador</th>
                <th>Ejemplo</th>
                <th>Resultado</th>
                <th>Nota</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&&</td>
                <td>true && false</td>
                <td>false</td>
                <td>AND: ambos deben ser true</td>
              </tr>
              <tr>
                <td>`</td>
                <td></td>
                <td>`</td>
                <td>true</td>
              </tr>
              <tr>
                <td>!</td>
                <td>!true</td>
                <td>false</td>
                <td>NOT: invierte valor</td>
              </tr>
            </tbody>
          </table>
          <section>
            <h4>Ejemplo práctico:</h4>
            <Code>{`
              let edad = 20;
              let carnet = true;
              if(edad >= 18 && carnet) {
                console.log("Puede conducir");
              }
            `}</Code>
          </section>
        </section>
        <section>
          <h3>Incremento y decremento</h3>
          <ul>
            <li>++ → suma 1</li>
            <li>-- → resta 1</li>
          </ul>
          <Code>{`
            let a = 5;
            a++; // 6
            a--; // 5
          `}</Code>
          <section>
            <h4>Formas:</h4>
            <ul>
              <li>Prefijo ++a → incrementa antes de usar la variable</li>
              <li>Postfijo a++ → usa la variable y luego incrementa</li>
            </ul>
            <Code>{`
              let x = 5;
              console.log(++x); // 6
              console.log(x++); // 6 (después x=7)
            `}</Code>
          </section>
        </section>
        <section>
          <h3>Operadores de cadena</h3>
          <section>
            <h4>Concatenación: + o +=</h4>
            <Code>{`
              let saludo = "Hola";
              saludo += " Mundo"; // "Hola Mundo"
            `}</Code>
          </section>
          <section>
            <h4>Template literals (ES6):</h4>
            <Code>{`
              let nombre = "Emanuel";
              let mensaje = \`Hola \${nombre}, bienvenido!\`; // Interpolación de variables
            `}</Code>
          </section>
        </section>
        <section>
          <h3>Operadores de tipo</h3>
          <section>
            <h4>typeof → devuelve el tipo del dato</h4>
            <Code>{`
              typeof 5; // "number"
              typeof "Hola"; // "string"
            `}</Code>
          </section>
          <section>
            <h4>instanceof → comprueba si un objeto es instancia de una clase</h4>
            <Code>{`
              let fecha = new Date();
              fecha instanceof Date; // true
            `}</Code>
          </section>
        </section>
        <section>
          <h3>Operadores ternarios</h3>
          <section>
            <h4>Forma corta de if-else:</h4>
            <Code>{`
              let edad = 18;
              let puedeVotar = edad >= 18 ? "Sí" : "No";
            `}</Code>
          </section>
        </section>
        <section>
          <h3>Operadores de desestructuración y spread</h3>
          <section>
            <h4>Spread (...) → copia o expande elementos de array/objeto</h4>
            <Code>{`
              let arr1 = [1,2];
              let arr2 = [...arr1,3,4]; // [1,2,3,4]
            `}</Code>
          </section>
          <section>
            <h4>Destructuring → extrae elementos de array u objeto</h4>
            <Code>{`
              let [a,b] = arr2; // a=1, b=2
              let {nombre, edad} = {nombre:"Ana", edad:25};
            `}</Code>
          </section>
        </section>
        <section>
          <h3>Operadores nullish y de coalescencia</h3>
          <section>
            <h4>?? → devuelve valor derecho si izquierdo es null o undefined</h4>
            <Code>{`
              let a;
              let b = a ?? 10; // 10
            `}</Code>
          </section>
          <section>
            <h4>?. → optional chaining: evita errores si propiedad no existe</h4>
            <Code>{`
              let obj = { persona: { nombre: "Ana" } };
              console.log(obj.persona?.apellido); // undefined, no error
            `}</Code>
          </section>
        </section>
      </section>
      <section>
        <h2>Precedencia de operadores</h2>
        <p>JavaScript tiene reglas que determinan el orden en que se ejecutan los operadores.</p>
        <p>Ejemplo:</p>
        <Code>{`
          let resultado = 2 + 3 * 4; // 14, porque * tiene mayor precedencia que +
        `}</Code>
        <section>
          <h3>Regla general:</h3>
          <ol>
            <li>Paréntesis ()</li>
            <li>Exponenciación **</li>
            <li>Multiplicación / División / Módulo * / %</li>
            <li>Suma / Resta + -</li>
            <li>Comparación {`> < >= <=`}</li>
            <li>Igualdad == === != !==</li>
            <li>Lógicos &&</li>
            <li>Lógicos ||</li>
            <li>Asignación = += -= ...</li>
          </ol>
        </section>
      </section>
      <section>
        <h2>Buenas prácticas</h2>
        <ul>
          <li>Usar siempre === y !== para evitar conversiones automáticas de tipo.</li>
          <li>Agrupar operaciones complejas con paréntesis para claridad.</li>
          <li>Evitar mezclar tipos distintos en operaciones aritméticas.</li>
          <li>Preferir template literals en lugar de concatenación con +.</li>
          <li>Usar operadores ternarios para condicionales simples, no complejas.</li>
        </ul>
      </section>
      <section>
        <h2>Errores comunes</h2>
        <ul>
          <li>Confundir == con === y obtener resultados inesperados.</li>
          <li>Incremento/descremento prefijo vs postfijo:
            <Code>{`
              let x = 5;
              console.log(x++); // 5, después x=6
              console.log(++x); // 7
            `}</Code>
          </li>
          <li>Mezclar strings y números con + accidentalmente:
            <Code>{`
              "5" + 3; // "53" (concatenación)  
            `}</Code>
          </li>
          <li>Olvidar precedencia de operadores y obtener resultados incorrectos.</li>
        </ul>
      </section>
      <section>
        <h2>Truthy y Falsy y operadores relacionados</h2>
        <section>
          <h3>Qué son “truthy” y “falsy”</h3>
          <ul>
            <li>Truthy: cualquier valor que, al evaluarse en un contexto booleano (if, while, &&, ||), se considera true.</li>
            <li>Falsy: cualquier valor que se considera false en un contexto booleano.</li>
          </ul>
        </section>
        <section>
          <h3>Valores Falsy en JavaScript</h3>
          <p>Solo 6 valores son falsy:</p>
          <Code>{`
            false      // booleano falso
            0          // número cero
            -0         // negativo cero
            ""         // string vacío
            null       // ausencia de valor
            undefined  // variable no inicializada
            NaN        // Not a Number
          `}</Code>
          <p>Todo lo demás es truthy:</p>
          <Code>{`
            true, "Hola", 1, -1, [], {}, function(){}, "0" → todos son truthy
          `}</Code>
        </section>
        <section>
          <h3>Operadores que trabajan con truthy/falsy</h3>
          <section>
            <h4>OR lógico (||)</h4>
            <section>
              <h5>Devuelve el primer valor truthy o el último valor si todos son falsy.</h5>
              <Code>{`
                let a = 0;
                let b = "Hola";
                let c = a || b; // "Hola"
              `}</Code>
            </section>
            <section>
              <h5>Útil para asignar valores por defecto:</h5>
              <Code>{`
                let nombre = usuarioNombre || "Invitado"; // si usuarioNombre es falsy, usar "Invitado"
              `}</Code>
            </section>
          </section>
          <section>
            <h4>AND lógico (&&)</h4>
            <section>
              <h5>Devuelve el primer valor falsy o el último valor si todos son truthy.</h5>
              <Code>{`
                let a = "Hola";
                let b = 0;
                let c = a && b; // 0
                let d = "Hola" && "Mundo"; // "Mundo"
              `}</Code>
            </section>
            <section>
              <h5>Útil para ejecutar algo solo si todas las condiciones son truthy:</h5>
              <Code>{`
                usuario && usuario.nombre && console.log(usuario.nombre);
              `}</Code>
            </section>
          </section>
          <section>
            <h4>Nullish coalescing (??)</h4>
            <section>
              <h5>Devuelve el valor de la derecha solo si el de la izquierda es null o undefined (diferente de falsy general):</h5>
              <Code>{`
                let a = 0;
                let b = a ?? 10; // 0 → porque 0 no es null ni undefined
                let c = null ?? 10; // 10
              `}</Code>
            </section>
          </section>
          <section>
            <h4>NOT lógico (!)</h4>
            <section>
              <h5>Invierte un valor a booleano:</h5>
              <Code>{`
                !true;  // false
                !0;     // true
                !!0;    // false → doble negación convierte a booleano
              `}</Code>
            </section>
            <section>
              <h5>Útil para convertir cualquier valor a booleano explícitamente:</h5>
              <Code>{`
                let valor = "Hola";
                let esVerdadero = !!valor; // true
              `}</Code>
            </section>
          </section>
        </section>
        <section>
          <h3>Ejemplos prácticos</h3>
          <Code>{`
            let nombre = ""; // falsy
            let saludo = nombre || "Invitado"; // "Invitado"

            let usuario = {edad: 25};
            let edad = usuario && usuario.edad; // 25

            let puntuacion = 0;
            let puntaje = puntuacion ?? 10; // 0, porque 0 no es null/undefined

            if(!nombre){
              console.log("No hay nombre"); // se ejecuta
            }
          `}</Code>
        </section>
        <section>
          <h3>Diferencia entre || y ??</h3>
          <ul>
            <li>|| considera todos los falsy (0, "", false)</li>
            <li>?? solo considera null o undefined
              <Code>{`
                let a = 0;
                console.log(a || 10); // 10 → 0 es falsy
                console.log(a ?? 10); // 0 → 0 no es null ni undefined
              `}</Code>
            </li>
          </ul>
        </section>
        <section>
          <h3>Buenas prácticas</h3>
          <ul>
            <li>Usar ?? cuando quieras valores por defecto sin que 0, false o "" sean reemplazados.</li>
            <li>Usar || cuando cualquier falsy sea inaceptable.</li>
            <li>Doble negación !! es útil para normalizar cualquier valor a booleano.</li>
            <li>Evitar confundir falsy con null/undefined cuando uses operadores por defecto.</li>
          </ul>
        </section>
      </section>
    </>
  )
}