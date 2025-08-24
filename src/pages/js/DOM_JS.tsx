import Code from "../../components/Code";

export default function DOM_JS() {
  return (
    <>
      <h1>DOM (Document Object Model)</h1>
      <p>El DOM (Document Object Model) es una interfaz que representa los documentos HTML y XML como un árbol de nodos. Cada elemento, atributo y texto se convierte en un nodo que puede ser manipulado mediante JavaScript. Esto permite crear, modificar o eliminar elementos y reaccionar a eventos dinámicamente.</p>

      <section>
        <h2>Estructura del DOM</h2>
        <p>El DOM es jerárquico: el documento HTML completo es el nodo raíz <code>document</code>. Cada etiqueta HTML es un nodo <code>Element</code>, los textos son nodos <code>Text</code> y los comentarios son nodos <code>Comment</code>.</p>
        <Code>{`
          console.log(document);       // Nodo raíz
          console.log(document.body);  // Nodo <body>
          console.log(document.head);  // Nodo <head>
        `}</Code>
        <p>El DOM se organiza como un árbol, lo que permite navegar entre nodos padres, hijos y hermanos.</p>
      </section>

      <section>
        <h2>Seleccionar elementos</h2>
        <p>Existen múltiples métodos para seleccionar nodos:</p>
        <Code>{`
          // Por ID
          const header = document.getElementById('header');

          // Por clase
          const items = document.getElementsByClassName('item'); // HTMLCollection

          // Por etiqueta
          const paragraphs = document.getElementsByTagName('p'); // HTMLCollection

          // Query selector (más flexible)
          const firstItem = document.querySelector('.item'); // primer coincidencia
          const allItems = document.querySelectorAll('.item'); // NodeList
        `}</Code>
        <p>Notas: <code>getElementBy*</code> devuelve HTMLCollection "viva", <code>querySelectorAll</code> devuelve NodeList estática. Ambos se pueden iterar, pero no son arrays nativos.</p>
      </section>

      <section>
        <h2>Navegar por el DOM</h2>
        <p>Los nodos tienen propiedades para moverse por el árbol:</p>
        <Code>{`
          const list = document.querySelector('ul');
          console.log(list.parentNode);   // Nodo padre
          console.log(list.children);     // HTMLCollection de hijos directos
          console.log(list.firstChild);   // Primer nodo hijo (puede ser texto)
          console.log(list.firstElementChild); // Primer elemento hijo
          console.log(list.nextSibling);  // Hermano siguiente (cualquier nodo)
          console.log(list.nextElementSibling); // Hermano siguiente que es elemento
        `}</Code>
      </section>

      <section>
        <h2>Modificar contenido</h2>
        <p>Se puede cambiar texto, HTML interno y atributos de los elementos.</p>
        <Code>{`
          const div = document.querySelector('#myDiv');

          // Texto simple
          div.textContent = 'Hola Mundo';

          // HTML interno (puede incluir etiquetas)
          div.innerHTML = '<strong>Hola Mundo</strong>';

          // Modificar atributos
          div.setAttribute('id', 'nuevoID');
          console.log(div.getAttribute('id'));
          div.removeAttribute('id');
        `}</Code>
      </section>

      <section>
        <h2>Modificar estilos</h2>
        <p>Se pueden cambiar estilos CSS directamente desde JavaScript:</p>
        <Code>{`
          const box = document.querySelector('.box');

          // Estilo individual
          box.style.backgroundColor = 'red';
          box.style.width = '100px';

          // Clases CSS
          box.classList.add('active');
          box.classList.remove('hidden');
          box.classList.toggle('highlight'); // agrega si no existe, quita si existe
        `}</Code>
      </section>

      <section>
        <h2>Crear y eliminar elementos</h2>
        <p>JavaScript permite generar nodos dinámicamente y agregarlos al DOM.</p>
        <Code>{`
          // Crear elemento
          const li = document.createElement('li');
          li.textContent = 'Nuevo ítem';

          // Agregar al DOM
          const ul = document.querySelector('ul');
          ul.appendChild(li); // al final
          ul.insertBefore(li, ul.firstChild); // al inicio

          // Eliminar elemento
          ul.removeChild(li);
          li.remove(); // forma moderna
        `}</Code>
      </section>

      <section>
        <h2>Manejo de eventos</h2>
        <p>Los eventos permiten ejecutar código en respuesta a interacciones del usuario o cambios del DOM.</p>
        <Code>{`
          const btn = document.querySelector('#btn');
          const input = document.querySelector('#input');

          // Listener clásico
          btn.addEventListener('click', function() {
            alert('Clic detectado');
          });

          // Con arrow function
          input.addEventListener('input', (e) => {
            console.log('Valor:', e.target.value);
          });

          // Listener único
          btn.addEventListener('click', () => console.log('Solo una vez'), { once: true });
        `}</Code>
      </section>

      <section>
        <h2>Delegación de eventos</h2>
        <p>Para manejar eventos en elementos dinámicos, se usa delegación, capturando el evento en un ancestro común:</p>
        <Code>{`
          const ul = document.querySelector('ul');
          ul.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
              console.log('Clic en ítem:', e.target.textContent);
            }
          });
        `}</Code>
      </section>

      <section>
        <h2>Propiedades importantes del DOM</h2>
        <ul>
          <li><code>innerHTML</code>: contenido HTML de un nodo.</li>
          <li><code>textContent</code>: texto puro de un nodo.</li>
          <li><code>value</code>: valor de inputs, selects y textareas.</li>
          <li><code>style</code>: acceso a estilos en línea.</li>
          <li><code>classList</code>: manipular clases CSS.</li>
          <li><code>parentNode / children / nextElementSibling / previousElementSibling</code>: navegar nodos.</li>
          <li><code>dataset</code>: acceder a atributos <code>data-*</code>.</li>
          <li><code>attributes</code>: colección de atributos.</li>
        </ul>
      </section>

      <section>
        <h2>Document fragments y rendimiento</h2>
        <p>Para insertar muchos elementos sin recalcular el DOM constantemente, se usa <code>DocumentFragment</code>:</p>
        <Code>{`
          const fragment = document.createDocumentFragment();
          for (let i = 0; i < 100; i++) {
            const li = document.createElement('li');
            li.textContent = 'Item ' + i;
            fragment.appendChild(li);
          }
          document.querySelector('ul').appendChild(fragment); // inserción única
        `}</Code>
        <p>Esto mejora rendimiento al evitar múltiples reflows y repaints.</p>
      </section>

      <section>
        <h2>Formularios y validación</h2>
        <p>Se pueden leer valores y controlar envío de formularios:</p>
        <Code>{`
          const form = document.querySelector('form');
          form.addEventListener('submit', (e) => {
            e.preventDefault(); // evita enviar
            const name = form.querySelector('input[name="name"]').value;
            console.log('Nombre:', name);
          });
        `}</Code>
      </section>

      <section>
        <h2>Eventos del ciclo de vida del DOM</h2>
        <p>Algunas propiedades importantes:</p>
        <ul>
          <li><code>DOMContentLoaded</code>: se dispara cuando el HTML está cargado y parseado.</li>
          <li><code>load</code>: cuando todo el DOM y recursos (imágenes, scripts) están listos.</li>
          <li><code>beforeunload / unload</code>: antes de cerrar la página.</li>
        </ul>
      </section>

      <section>
        <h2>Compatibilidad y notas importantes</h2>
        <p>El DOM es ampliamente soportado en navegadores modernos. Algunos métodos más recientes como <code>closest()</code> o <code>remove()</code> no existen en IE11, pero existen polyfills. Se recomienda manipular elementos existentes, evitar innerHTML con datos externos (riesgo XSS) y usar fragmentos o clones para eficiencia.</p>
      </section>

      <section>
        <h2>Conclusión</h2>
        <p>Dominar el DOM permite crear interfaces dinámicas, leer y modificar contenido, reaccionar a eventos y optimizar rendimiento. Combinado con fetch/AJAX, es la base de aplicaciones web modernas y SPA. Entender cómo navegar el árbol de nodos, seleccionar elementos, manipular atributos y manejar eventos es fundamental para cualquier desarrollador web.</p>
      </section>
    </>
  )
}
