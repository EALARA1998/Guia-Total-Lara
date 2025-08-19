import Code from "../../components/Code"

type Error_Handling_JSProps = {
  
}

export default function Error_Handling_JS({}:Error_Handling_JSProps) {
  return (
    <>
      <h1>Errores y Manejo Avanzado</h1>
      <p>El manejo de errores en JavaScript permite detectar, capturar y controlar situaciones inesperadas en tiempo de ejecución. Comprender cómo funcionan los errores, cómo lanzarlos y cómo gestionarlos correctamente es fundamental para construir aplicaciones robustas y seguras. Además de los bloques básicos <code>try/catch/finally</code>, JavaScript ofrece patrones avanzados para errores asíncronos, errores personalizados y control fino de excepciones.</p>

      <section>
        <h2>Tipos de errores</h2>
        <p>JavaScript tiene varios tipos de errores nativos:</p>
        <Code>{`
          // Error genérico
          throw new Error('Mensaje de error');

          // Errores específicos
          throw new TypeError('Tipo incorrecto');
          throw new ReferenceError('Referencia no definida');
          throw new RangeError('Valor fuera de rango');
          throw new SyntaxError('Error de sintaxis');
          throw new EvalError('Error en eval()');
          throw new URIError('Error en URI');
        `}</Code>
        <p>Cada tipo tiene su propósito y propiedades como <code>name</code>, <code>message</code> y <code>stack</code> para depuración.</p>
      </section>

      <section>
        <h2>try, catch y finally</h2>
        <p>Bloques básicos para capturar errores y ejecutar lógica de limpieza:</p>
        <Code>{`
          try {
            // código que puede fallar
            const x = y; // y no está definido
          } catch(err) {
            console.error('Ocurrió un error:', err.message);
          } finally {
            console.log('Este bloque siempre se ejecuta');
          }
        `}</Code>
        <p>Notas: <code>catch</code> recibe el objeto de error, <code>finally</code> se ejecuta siempre, incluso si no hay error o si se hace un return dentro del try.</p>
      </section>

      <section>
        <h2>Lanzar errores con <code>throw</code></h2>
        <p>Puedes lanzar errores genéricos o personalizados:</p>
        <Code>{`
          // Error genérico
          throw new Error('Algo salió mal');

          // Error personalizado
          class MiError extends Error {
            constructor(msg, codigo){
              super(msg);
              this.name = 'MiError';
              this.code = codigo;
            }
          }

          throw new MiError('Error crítico', 500);
        `}</Code>
        <p>Esto permite capturar errores específicos con condicionales dentro del catch.</p>
      </section>

      <section>
        <h2>Errores asíncronos y Promises</h2>
        <p>Los errores en código asíncrono no se capturan con try/catch tradicional. Para Promises se usa <code>.catch</code> o <code>async/await</code>:</p>
        <Code>{`
          // Con Promises
          fetch('https://api.invalid')
            .then(res => res.json())
            .catch(err => console.error('Error fetch:', err));

          // Con async/await
          async function getData() {
            try {
              const res = await fetch('https://api.invalid');
              const data = await res.json();
            } catch(err) {
              console.error('Error async:', err);
            }
          }
        `}</Code>
        <p>Nota: siempre manejar errores en Promises para evitar <code>UnhandledPromiseRejection</code>.</p>
      </section>

      <section>
        <h2>Propiedades útiles del objeto Error</h2>
        <p>Cualquier objeto Error tiene propiedades importantes:</p>
        <Code>{`
          try {
            throw new TypeError('Tipo incorrecto');
          } catch(e) {
            console.log(e.name);    // "TypeError"
            console.log(e.message); // "Tipo incorrecto"
            console.log(e.stack);   // Pila de llamadas
          }
        `}</Code>
      </section>

      <section>
        <h2>Errores personalizados (Custom Errors)</h2>
        <p>Permiten definir lógica específica para distintos tipos de fallos:</p>
        <Code>{`
          class ValidationError extends Error {
            constructor(field, msg){
              super(msg);
              this.name = 'ValidationError';
              this.field = field;
            }
          }

          function validate(name){
            if(!name) throw new ValidationError('name', 'El nombre es requerido');
          }

          try {
            validate('');
          } catch(e){
            if(e instanceof ValidationError){
              console.error('Error de validación en', e.field);
            } else {
              console.error('Error genérico');
            }
          }
        `}</Code>
      </section>

      <section>
        <h2>Manejo avanzado con múltiples catch</h2>
        <p>Se puede distinguir entre tipos de errores usando condicionales o patrones:</p>
        <Code>{`
          try {
            JSON.parse('dato invalido');
          } catch(e){
            if(e instanceof SyntaxError){
              console.error('Error de sintaxis JSON');
            } else if(e instanceof TypeError){
              console.error('Error de tipo');
            } else {
              console.error('Error desconocido');
            }
          }
        `}</Code>
      </section>

      <section>
        <h2>Errores en callbacks</h2>
        <p>En callbacks tradicionales, try/catch no captura errores dentro del callback. Se debe manejar dentro de la función:</p>
        <Code>{`
          function asyncTask(callback){
            setTimeout(() => {
              try {
                callback();
              } catch(e) {
                console.error('Error en callback:', e);
              }
            }, 0);
          }

          asyncTask(() => { throw new Error('Fallo interno'); });
        `}</Code>
      </section>

      <section>
        <h2>Errores globales y window.onerror</h2>
        <p>En navegadores se pueden capturar errores no manejados:</p>
        <Code>{`
          window.onerror = function(message, source, lineno, colno, error){
            console.log('Error global:', message, 'en', source, lineno, colno);
          };

          // Lanzar error
          setTimeout(() => { throw new Error('Error no capturado'); }, 0);
        `}</Code>
        <p>También existe <code>window.onunhandledrejection</code> para Promises no manejadas.</p>
      </section>

      <section>
        <h2>Patrones de manejo profesional</h2>
        <ul>
          <li>Validación estricta de inputs y lanzar errores claros.</li>
          <li>Distinción de errores: genéricos vs específicos.</li>
          <li>Logging centralizado de errores para depuración y análisis.</li>
          <li>Captura de errores globales y de Promises para robustez.</li>
          <li>Uso de finally para limpieza de recursos (archivos, timers, conexiones).</li>
        </ul>
      </section>

      <section>
        <h2>Ejemplos prácticos</h2>
        <section>
          <h3>Validación de formulario con custom error</h3>
          <Code>{`
            class FormError extends Error {
              constructor(field, message){
                super(message);
                this.name = 'FormError';
                this.field = field;
              }
            }

            function validateEmail(email){
              if(!email.includes('@')) throw new FormError('email', 'Email inválido');
            }

            try {
              validateEmail('correo_invalido.com');
            } catch(e) {
              console.error(e.name, e.field, e.message);
            }
          `}</Code>
        </section>

        <section>
          <h3>Manejo de errores en async/await con fetch</h3>
          <Code>{`
            async function fetchUser(userId){
              try {
                const res = await fetch('https://api.invalid/users/' + userId);
                if(!res.ok) throw new Error('HTTP error ' + res.status);
                const data = await res.json();
                return data;
              } catch(e) {
                console.error('Fetch fallido:', e);
                throw e; // rethrow para manejo externo
              }
            }
          `}</Code>
        </section>

        <section>
          <h3>Centralizar logging de errores</h3>
          <Code>{`
            function logError(e){
              // Enviar a servidor, mostrar en consola, o alertar
              console.error('LOG:', e.name, e.message, e.stack);
            }

            try {
              throw new RangeError('Valor fuera de rango');
            } catch(e) {
              logError(e);
            }
          `}</Code>
        </section>
      </section>

      <section>
        <h2>Conclusión</h2>
        <p>El manejo avanzado de errores en JavaScript no solo consiste en capturar excepciones, sino en definir estrategias robustas para código síncrono y asíncrono, crear errores personalizados, distinguir tipos, registrar y limpiar recursos de manera profesional. Dominar estas técnicas reduce fallos en producción y mejora la confiabilidad de las aplicaciones.</p>
      </section>
    </>
  )
}