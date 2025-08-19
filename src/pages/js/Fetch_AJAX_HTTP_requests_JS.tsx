import Code from "../../components/Code"

type Fetch_AJAX_HTTP_requests_JSProps = {
  
}

export default function Fetch_AJAX_HTTP_requests_JS({}:Fetch_AJAX_HTTP_requests_JSProps) {
  return (
    <>
      <h1>JavaScript — Fetch y solicitudes HTTP</h1>
      <p>En JavaScript, interactuar con servidores se hace principalmente mediante solicitudes HTTP. Tradicionalmente se usaba AJAX con XMLHttpRequest, pero hoy se prefiere <code>fetch</code>, que devuelve Promises y se integra con Async/Await para manejar asincronía de forma más clara y legible.</p>

      <section>
        <h2>Introducción a Fetch</h2>
        <p>Fetch es una API moderna para hacer solicitudes HTTP. Retorna una Promise que se resuelve con un objeto Response que contiene la respuesta del servidor.</p>
        <Code>{`
          fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
        `}</Code>
        <p>Notas importantes: <code>fetch</code> no rechaza la Promise por errores HTTP (404, 500). Solo rechaza por problemas de red o CORS. Para manejar códigos de estado se debe revisar <code>response.ok</code> o <code>response.status</code>.</p>
      </section>

      <section>
        <h2>Manejo de estados HTTP</h2>
        <p>Se recomienda comprobar el estado de la respuesta antes de procesar los datos:</p>
        <Code>{`
          fetch('https://api.example.com/data')
            .then(response => {
              if (!response.ok) throw new Error('HTTP error ' + response.status);
              return response.json();
            })
            .then(data => console.log(data))
            .catch(err => console.error(err));
        `}</Code>
        <p>Esto permite distinguir entre errores de red y errores del servidor.</p>
      </section>

      <section>
        <h2>Uso con Async/Await</h2>
        <p>Async/Await simplifica la lectura de código asincrónico, permitiendo escribirlo como si fuera síncrono:</p>
        <Code>{`
          async function getData() {
            try {
              const response = await fetch('https://api.example.com/data');
              if (!response.ok) throw new Error('HTTP error ' + response.status);
              const data = await response.json();
              console.log(data);
            } catch (error) {
              console.error(error);
            }
          }

          getData();
        `}</Code>
        <p>Beneficio: el flujo de ejecución es más lineal y más fácil de depurar que con múltiples .then().</p>
      </section>

      <section>
        <h2>Métodos HTTP y configuración</h2>
        <p>Fetch soporta todos los métodos HTTP y permite configurar cabeceras, cuerpo, modo, credenciales, etc.</p>
        <Code>{`
          fetch('https://api.example.com/data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer token123'
            },
            body: JSON.stringify({ name: 'Ana', age: 30 }),
            credentials: 'include', // enviar cookies si aplica
            mode: 'cors' // cors, no-cors, same-origin
          })
            .then(res => res.json())
            .then(data => console.log(data));
        `}</Code>
        <p>Notas:
          <ul>
            <li><code>headers</code>: permite definir cabeceras HTTP personalizadas.</li>
            <li><code>body</code>: debe ser string o FormData/Blob si se envía contenido.</li>
            <li><code>credentials</code>: controla envío de cookies.</li>
            <li><code>mode</code>: controla restricciones CORS y orígenes.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2>Enviar formularios con FormData</h2>
        <p>Para enviar datos de formularios, especialmente archivos:</p>
        <Code>{`
          const form = new FormData();
          form.append('name', 'Ana');
          form.append('avatar', fileInput.files[0]);

          fetch('https://api.example.com/upload', {
            method: 'POST',
            body: form
          })
          .then(res => res.json())
          .then(data => console.log(data));
        `}</Code>
        <p>FormData maneja automáticamente el tipo de contenido <code>multipart/form-data</code>.</p>
      </section>

      <section>
        <h2>Manejo de errores avanzado</h2>
        <p>Además de revisar <code>response.ok</code>, es recomendable manejar distintos tipos de errores:</p>
        <Code>{`
          async function fetchWithErrors() {
            try {
              const res = await fetch('https://api.example.com/data');
              if (!res.ok) {
                if (res.status === 404) throw new Error('No encontrado');
                if (res.status === 500) throw new Error('Error del servidor');
                throw new Error('HTTP error ' + res.status);
              }
              const data = await res.json();
              console.log(data);
            } catch (err) {
              if (err.name === 'TypeError') {
                console.error('Error de red o CORS', err);
              } else {
                console.error(err.message);
              }
            }
          }
        `}</Code>
        <p>Esto permite diferenciar entre errores de red, CORS y errores de respuesta HTTP.</p>
      </section>

      <section>
        <h2>AbortController y cancelar solicitudes</h2>
        <p>Se puede cancelar una solicitud fetch usando <code>AbortController</code>:</p>
        <Code>{`
          const controller = new AbortController();
          const signal = controller.signal;

          fetch('https://api.example.com/data', { signal })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => {
              if (err.name === 'AbortError') console.log('Solicitud cancelada');
              else console.error(err);
            });

          // cancelar después de 2 segundos
          setTimeout(() => controller.abort(), 2000);
        `}</Code>
        <p>Útil para abortar solicitudes largas o limpiar fetch en componentes React antes de desmontar.</p>
      </section>

      <section>
        <h2>Timeouts personalizados</h2>
        <p>Fetch no soporta timeout nativo, pero se puede implementar combinando <code>AbortController</code> y <code>setTimeout</code>:</p>
        <Code>{`
          async function fetchWithTimeout(url, ms) {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), ms);
            try {
              const res = await fetch(url, { signal: controller.signal });
              clearTimeout(timeout);
              if (!res.ok) throw new Error('HTTP error ' + res.status);
              return await res.json();
            } catch (err) {
              if (err.name === 'AbortError') throw new Error('Timeout');
              throw err;
            }
          }

          fetchWithTimeout('https://api.example.com/data', 3000)
            .then(console.log)
            .catch(console.error);
        `}</Code>
      </section>

      <section>
        <h2>Comparación con XMLHttpRequest (AJAX clásico)</h2>
        <p>Fetch es más moderno y basado en Promises, mientras que XMLHttpRequest requiere callbacks y eventos. Ejemplo clásico:</p>
        <Code>{`
          const xhr = new XMLHttpRequest();
          xhr.open('GET', 'https://api.example.com/data');
          xhr.onload = () => {
            if (xhr.status === 200) console.log(JSON.parse(xhr.responseText));
            else console.error('Error HTTP', xhr.status);
          };
          xhr.onerror = () => console.error('Error de red');
          xhr.send();
        `}</Code>
        <p>Ventaja de fetch: código más limpio, compatible con Async/Await y fácil manejo de JSON.</p>
      </section>

      <section>
        <h2>Patrones comunes</h2>
        <ul>
          <li><strong>Wrapper/fetch helper:</strong> crear una función central que gestione cabeceras, token y errores.</li>
          <li><strong>Retries:</strong> reintentar solicitudes fallidas con backoff exponencial.</li>
          <li><strong>Cancelación de fetch:</strong> especialmente útil en SPA o componentes React que se desmontan.</li>
          <li><strong>Manejo de JSON:</strong> siempre validar que la respuesta sea JSON antes de parsear.</li>
        </ul>
      </section>

      <section>
        <h2>Conclusión</h2>
        <p>Fetch es la forma moderna de interactuar con servidores en JavaScript. Con Promises y Async/Await se puede escribir código legible, manejar errores HTTP y de red, cancelar solicitudes, enviar datos complejos y formularios, y crear patrones robustos para aplicaciones modernas. Entender sus características y limitaciones es clave para trabajar con APIs de forma confiable y eficiente.</p>
      </section>
    </>
  )
}