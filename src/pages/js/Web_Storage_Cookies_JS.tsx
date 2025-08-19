import Code from "../../components/Code"

type Web_Storage_Cookies_JSProps = {
  
}

export default function Web_Storage_Cookies_JS({}:Web_Storage_Cookies_JSProps) {
  return (
    <>
      <h1>Web Storage y Cookies</h1>
      <p>El almacenamiento en el navegador permite guardar datos del usuario en el lado del cliente. Existen varias opciones: <strong>localStorage</strong>, <strong>sessionStorage</strong>, <strong>cookies</strong> y <strong>IndexedDB</strong>. Cada una tiene diferentes capacidades, duración, seguridad y usos. Conocerlas a fondo es clave para gestionar sesiones, preferencias, caching y datos persistentes en aplicaciones web.</p>

      <section>
        <h2>localStorage</h2>
        <p>Almacena datos de manera persistente, incluso si el navegador se cierra. Es una API de clave-valor simple, sincronizada, accesible a través del objeto <code>window.localStorage</code>.</p>
        <Code>{`
          // Guardar datos
          localStorage.setItem('usuario', 'Emanuel');
          localStorage.setItem('edad', '25');

          // Leer datos
          console.log(localStorage.getItem('usuario')); // Emanuel

          // Eliminar un dato
          localStorage.removeItem('edad');

          // Limpiar todo
          localStorage.clear();

          // Número de items y claves
          console.log(localStorage.length);
          console.log(localStorage.key(0)); // nombre de la primera clave
        `}</Code>
        <p>Notas: 
          <ul>
            <li>Almacenamiento limitado (~5-10 MB según navegador).</li>
            <li>Sólo soporta cadenas de texto, otros tipos deben serializarse con <code>JSON.stringify</code>.</li>
            <li>Accesible desde cualquier pestaña del mismo dominio.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2>sessionStorage</h2>
        <p>Similar a <code>localStorage</code>, pero los datos se eliminan al cerrar la pestaña o ventana. Útil para información temporal de sesión.</p>
        <Code>{`
          // Guardar datos de sesión
          sessionStorage.setItem('token', 'abc123');

          // Leer
          console.log(sessionStorage.getItem('token')); // abc123

          // Eliminar y limpiar
          sessionStorage.removeItem('token');
          sessionStorage.clear();
        `}</Code>
        <p>Notas:
          <ul>
            <li>Datos limitados (~5 MB).</li>
            <li>Compartimento aislado por pestaña, no se comparte entre ventanas incluso del mismo dominio.</li>
            <li>Acceso mediante API síncrona similar a localStorage.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>Las cookies permiten almacenar pequeños fragmentos de información (hasta ~4 KB) que pueden ser enviados al servidor en cada solicitud HTTP. Son útiles para sesiones, autenticación y preferencias.</p>
        <Code>{`
          // Crear cookie
          document.cookie = "usuario=Emanuel; path=/; max-age=3600; secure; samesite=strict";

          // Leer cookies
          console.log(document.cookie); // "usuario=Emanuel"

          // Modificar cookie (reescribir con mismo nombre)
          document.cookie = "usuario=Ana; path=/";

          // Eliminar cookie
          document.cookie = "usuario=; path=/; max-age=0";
        `}</Code>
        <p>Notas:
          <ul>
            <li><code>path</code>: define la ruta donde la cookie es válida.</li>
            <li><code>domain</code>: dominio donde la cookie es accesible.</li>
            <li><code>max-age</code> o <code>expires</code>: duración de la cookie.</li>
            <li><code>secure</code>: sólo se envía por HTTPS.</li>
            <li><code>samesite</code>: controla envío en requests cross-site (Lax, Strict, None).</li>
            <li>Cookies son visibles tanto para cliente como servidor, cuidado con datos sensibles.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2>Comparativa localStorage, sessionStorage y cookies</h2>
        <Code>{`
          // Tabla conceptual:
          // Almacenamiento     | Persistencia     | Tamaño aprox | Envío al servidor | API
          // ------------------|----------------|-------------|-----------------|----
          // localStorage       | Persistente     | 5-10 MB     | No               | Sí
          // sessionStorage     | Sesión (pestaña)| 5 MB        | No               | Sí
          // Cookies            | Fecha definida  | 4 KB        | Sí               | Sí
        `}</Code>
      </section>

      <section>
        <h2>Almacenamiento de objetos complejos</h2>
        <p>localStorage y sessionStorage sólo soportan strings, pero podemos guardar objetos con <code>JSON.stringify</code> y recuperar con <code>JSON.parse</code>.</p>
        <Code>{`
          const usuario = { nombre: 'Emanuel', edad: 25 };
          localStorage.setItem('usuario', JSON.stringify(usuario));

          const usuarioRecuperado = JSON.parse(localStorage.getItem('usuario'));
          console.log(usuarioRecuperado.nombre); // Emanuel
        `}</Code>
      </section>

      <section>
        <h2>Eventos de almacenamiento</h2>
        <p>Podemos escuchar cambios en el almacenamiento entre pestañas del mismo dominio con el evento <code>storage</code>.</p>
        <Code>{`
          window.addEventListener('storage', (e) => {
            console.log('Clave modificada:', e.key);
            console.log('Valor anterior:', e.oldValue);
            console.log('Valor nuevo:', e.newValue);
            console.log('StorageArea:', e.storageArea); // localStorage o sessionStorage
          });

          // Desde otra pestaña
          localStorage.setItem('tema', 'oscuro');
        `}</Code>
        <p>Notas: <code>storage</code> no se dispara en la misma pestaña que realizó el cambio, solo en otras pestañas del mismo dominio.</p>
      </section>

      <section>
        <h2>IndexedDB (introducción)</h2>
        <p>IndexedDB es una base de datos NoSQL dentro del navegador, con soporte para objetos complejos, transacciones y grandes volúmenes de datos. Es asincrónica y más potente que Web Storage.</p>
        <Code>{`
          const request = indexedDB.open('miDB', 1);

          request.onupgradeneeded = (event) => {
            const db = event.target.result;
            db.createObjectStore('usuarios', { keyPath: 'id', autoIncrement: true });
          };

          request.onsuccess = (event) => {
            const db = event.target.result;
            const tx = db.transaction('usuarios', 'readwrite');
            const store = tx.objectStore('usuarios');
            store.add({ nombre: 'Emanuel', edad: 25 });
            tx.oncomplete = () => console.log('Transacción completada');
          };
        `}</Code>
        <p>Notas:
          <ul>
            <li>Ideal para almacenar grandes cantidades de datos estructurados.</li>
            <li>Soporta índices y búsquedas complejas.</li>
            <li>Asincrónica y basada en eventos.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2>Seguridad y buenas prácticas</h2>
        <p>Evitar almacenar información sensible en localStorage o sessionStorage, porque es accesible desde JavaScript y vulnerable a XSS. Para cookies sensibles, usar <code>HttpOnly</code> y <code>Secure</code>. Validar siempre datos al leerlos y limitar su tamaño para no afectar rendimiento.</p>
      </section>

      <section>
        <h2>Resumen avanzado</h2>
        <p>Web Storage y Cookies permiten manejar datos del cliente de diferentes formas: localStorage para persistencia larga, sessionStorage para sesión temporal, cookies para comunicación con servidor y IndexedDB para grandes volúmenes y estructuras complejas. Comprender sus diferencias, limitaciones y seguridad es esencial para construir aplicaciones web confiables y eficientes.</p>
      </section>
    </>
  )
}