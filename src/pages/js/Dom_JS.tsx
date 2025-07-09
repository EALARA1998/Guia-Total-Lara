import Code from "../../components/Code";

export default function DOM_JS() {
  return (
    <>
      <h1>DOM (Document Object Model) y Eventos en el Navegador</h1>
      <section>
        <h2>¿Qué es el DOM?</h2>
        <p>El DOM (Document Object Model) es la representación en forma de árbol de todos los elementos HTML de una página.</p>
        <p>Cada etiqueta HTML se convierte en un nodo que puedes manipular con JavaScript.</p>
        <p>Si estás viendo un documento HTML, el navegador crea un objeto llamado document que te permite acceder y modificar cualquier parte de la página.</p>
      </section>
      <section>
        <h2></h2>
        <p></p>
        <table>
          <thead>
            <tr>
              <th>Método</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>getElementById(id)	</td>
              <td>Selecciona por id</td>
            </tr>
            <tr>
              <td>getElementsByClassName()	</td>
              <td>Selecciona por clase (HTMLCollection)</td>
            </tr>
            <tr>
              <td>getElementsByTagName()	</td>
              <td>Selecciona por etiqueta (HTMLCollection)</td>
            </tr>
            <tr>
              <td>querySelector(selector)	</td>
              <td>Selecciona el primer que coincida con el selector CSS</td>
              <Code>{`
                const element = document.querySelector('#id')
                const element = document.querySelector('.class')
              `}</Code>
            </tr>
            <tr>
              <td>querySelectorAll(selector)	</td>
              <td>Selecciona todos los que coincidan (NodeList)</td>
            </tr>
          </tbody>
        </table>
        <Code>{`
          const titulo = document.getElementById("titulo");
          const parrafos = document.querySelectorAll("p");
        `}</Code>
      </section>
      <section>
        <h2>Manipular contenido</h2>
        <section>
          <h3>Cambiar texto o HTML</h3>
          <Code>{`
            elemento.textContent = "Nuevo texto";
            elemento.innerHTML = "<strong>Texto con HTML</strong>";
          `}</Code>
        </section>
        <section>
          <h3>✅ Cambiar atributos</h3>
          <Code>{`
            elemento.setAttribute("src", "imagen.jpg");
            elemento.getAttribute("src");
            elemento.removeAttribute("class");
          `}</Code>
        </section>
        <section>
          <h3>✅ Cambiar clases</h3>
          <Code>{`
            elemento.classList.add("activo");
            elemento.classList.remove("oculto");
            elemento.classList.toggle("activo");
          `}</Code>
        </section>
        <section>
          <h3>✅ Cambiar estilos</h3>
          <Code>{`
            elemento.style.color = "red";
            elemento.style.backgroundColor = "yellow";
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Crear y eliminar elementos</h2>
        <section>
          <h3>Crear</h3>
          <Code>{`
            const nuevo = document.createElement("p");
            nuevo.textContent = "Soy nuevo!";
            document.body.appendChild(nuevo);
          `}</Code>
        </section>
        <section>
          <h3>Eliminar</h3>
          <Code>{`
            elemento.remove(); // o
            padre.removeChild(hijo);
          `}</Code>
        </section>
      </section>
      <section>
        <h2>Eventos del navegador</h2>
        <p>Los eventos permiten ejecutar código cuando el usuario interactúa con la página (clics, teclas, scroll, etc.).</p>
        <section>
          <h3>Escuchar eventos: addEventListener()</h3>
          <Code>{`
            boton.addEventListener("click", () => {
              alert("Haz hecho clic!");
            });
          `}</Code>
        </section>
        <section>
          <h3></h3>
          <table>
            <thead>
              <tr>
                <th>Evento</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>click</td>
                <td>Cuando haces clic</td>
              </tr>
              <tr>
                <td>dblclick</td>
                <td>Doble clic</td>
              </tr>
              <tr>
                <td>mouseover</td>
                <td>Cursor entra en el elemento</td>
              </tr>
              <tr>
                <td>mouseout</td>
                <td>Cursor sale del elemento</td>
              </tr>
              <tr>
                <td>keydown</td>
                <td>Al presionar una tecla</td>
              </tr>
              <tr>
                <td>keyup</td>
                <td>Al soltar una tecla</td>
              </tr>
              <tr>
                <td>input</td>
                <td>Cuando cambia el valor de un input</td>
              </tr>
              <tr>
                <td>submit</td>
                <td>Al enviar un formulario</td>
              </tr>
              <tr>
                <td>change</td>
                <td>Cuando se cambia un select, checkbox...</td>
              </tr>
              <tr>
                <td>scroll</td>
                <td>Cuando haces scroll</td>
              </tr>
              <tr>
                <td>load</td>
                <td>Cuando se termina de cargar la página</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Eventos con funciones externas</h3>
          <Code>{`
            function saludar() {
              console.log("Hola");
            }

            boton.addEventListener("click", saludar);
          `}</Code>
        </section>
        <section>
          <h3>El objeto event</h3>
          <p>Cada vez que ocurre un evento, se puede acceder al objeto event con detalles del evento.</p>
          <Code>{`
            input.addEventListener("input", function(e) {
              console.log(e.target.value); // Lo que el usuario está escribiendo
            });
          `}</Code>
        </section>
        <section>
          <h3>Formularios y submit</h3>
          <Code>{`
            formulario.addEventListener("submit", function(e) {
              e.preventDefault(); // Evita recargar la página
              console.log("Formulario enviado");
            });
          `}</Code>
        </section>
        <section>
          <h3>Delegación de eventos</h3>
          <p>Técnica donde escuchas eventos en un contenedor, no en cada hijo:</p>
          <Code>{`
            document.body.addEventListener("click", (e) => {
              if (e.target.matches("button.borrar")) {
                e.target.remove();
              }
            });
          `}</Code>
        </section>
        <section>
          <h3>Eventos una sola vez</h3>
          <Code>{`
            boton.addEventListener("click", () => {
              console.log("Solo una vez");
            }, { once: true });
          `}</Code>
        </section>
        <section>
          <h3>Eventos con this</h3>
          <Code>{`
            const btn = document.querySelector("button");

            btn.addEventListener("click", function () {
              console.log(this); // El botón
            });
          `}</Code>
          <p>⚠️ Si usas arrow function, this NO hace referencia al elemento HTML.</p>
        </section>
      </section>
      <section>
        <h2>Buenas prácticas DOM + eventos</h2>
        <ul>
          <li>
            <p>Usa querySelector y querySelectorAll con selectores CSS</p>
          </li>
          <li>
            <p>Usa addEventListener en lugar de atributos HTML como onclick</p>
          </li>
          <li>
            <p>Siempre que puedas, usa delegación de eventos para elementos dinámicos</p>
          </li>
          <li>
            <p>Evita manipular el DOM dentro de bucles grandes (usa fragmentos)</p>
          </li>
        </ul>
      </section>
    </>
  )
}