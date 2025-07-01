import Code from "../../components/Code";

export default function Control_Structures_JS() {
  return (
    <>
      <h1>Estructuras de control</h1>
      <section>
        <h2>¿Qué son las estructuras de control?</h2>
        <p>Son instrucciones que permiten:</p>
        <ul>
          <li>
            <p>Ejecutar código condicionalmente.</p>
          </li>
          <li>
            <p>Ejecutar código repetidamente.</p>
          </li>
          <li>
            <p>Alterar el flujo normal del programa.</p>
          </li>
        </ul>
        <p>Se dividen en condicionales, bucles (loops) y salto de flujo.</p>
      </section>
      <section>
        <h2>Estructuras Condicionales</h2>
        <section>
          <h3>if, else if, else</h3>
          <Code>{`
            const edad = 18;

            if (edad >= 18) {
              console.log("Mayor de edad");
            } else if (edad >= 13) {
              console.log("Adolescente");
            } else {
              console.log("Niño");
            }
          `}</Code>
        </section>
        <section>
          <h3>switch</h3>
          <p>Útil cuando hay muchas condiciones sobre una misma variable.</p>
          <Code>{`
            const color = "rojo";

            switch (color) {
              case "rojo":
                console.log("Es rojo");
                break;
              case "azul":
                console.log("Es azul");
                break;
              default:
                console.log("Color desconocido");
            }
          `}</Code>
          <p>⚠️ No olvides el break para evitar que se ejecuten los siguientes casos.</p>
        </section>
        <section>
          <h3>Operador ternario (condición ? true : false)</h3>
          <p>Una forma compacta de if-else.</p>
          <Code>{`
            const esMayor = edad >= 18 ? "Sí" : "No";
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Estructuras de Repetición (Bucles)</h2>
        <section>
          <h3>for clásico</h3>
          <Code>{`
            for (let i = 0; i < 5; i++) {
              console.log(i);
            }
          `}</Code>
        </section>
        <section>
          <h3>while</h3>
          <p>Se ejecuta mientras la condición sea verdadera.</p>
          <Code>{`
            let i = 0;
            while (i < 5) {
              console.log(i);
              i++;
            }
          `}</Code>
        </section>
        <section>
          <h3>do...while</h3>
          <p>Se ejecuta al menos una vez, y luego mientras se cumpla la condición.</p>
          <Code>{`
            let i = 0;
            do {
              console.log(i);
              i++;
            } while (i < 5);
          `}</Code>
        </section>
        <section>
          <h3>for...of</h3>
          <p>Itera sobre valores de arrays, strings, etc.</p>
          <Code>{`
            const frutas = ["manzana", "banana"];

            for (const fruta of frutas) {
              console.log(fruta);
            }
          `}</Code>
        </section>
        <section>
          <h3>for...in</h3>
          <p>Itera sobre las claves (keys) de un objeto.</p>
          <Code>{`
            const persona = { nombre: "Ana", edad: 30 };

            for (const key in persona) {
              console.log(key, persona[key]);
            }
          `}</Code>
          <p>⚠️ No usar for...in con arrays.</p>
        </section>
      </section>
      <section>
        <h2>Control de flujo</h2>
        <section>
          <h3>break</h3>
          <p>Sale de un bucle prematuramente.</p>
          <Code>{`
            for (let i = 0; i < 10; i++) {
              if (i === 5) break;
              console.log(i); // Imprime del 0 al 4
            }
          `}</Code>
        </section>
        <section>
          <h3>continue</h3>
          <p>Salta una iteración del bucle.</p>
          <Code>{`
            for (let i = 0; i < 5; i++) {
              if (i === 2) continue;
              console.log(i); // Imprime 0, 1, 3, 4
            }
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Buenas prácticas</h2>
        <ul>
          <li>
            <p>Usa if para condiciones claras y simples</p>
          </li>
          <li>
            <p>Prefiere for...of para arrays y strings</p>
          </li>
          <li>
            <p>Usa switch solo si tienes múltiples valores de una misma variable</p>
          </li>
          <li>
            <p>Usa while cuando no sepas cuántas repeticiones necesitas</p>
          </li>
          <li>
            <p>No anides muchos if-else; es mejor usar return, ternario o switch</p>
          </li>
          <li>
            <p>Evita usar break y continue en exceso (puede complicar la lectura)</p>
          </li>
        </ul>
      </section>
    </>
  )
}