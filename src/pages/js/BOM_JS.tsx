import Code from "../../components/Code"

type BOM_JSProps = {
  
}

export default function BOM_JS({}:BOM_JSProps) {
  return (
    <>
      <h1>JavaScript — Browser Object Model (BOM) Avanzado</h1>
      <p>El <strong>Browser Object Model (BOM)</strong> permite interactuar con el navegador más allá del contenido de la página. Incluye objetos como <code>window</code>, <code>navigator</code>, <code>location</code>, <code>history</code>, <code>screen</code>, temporizadores y APIs modernas como geolocalización, portapapeles y orientación de pantalla. Entender el BOM es clave para crear aplicaciones dinámicas, controlar ventanas, interactuar con el entorno del usuario y manejar eventos globales.</p>

      <section>
        <h2>Objeto <code>window</code></h2>
        <p><code>window</code> representa la ventana del navegador y es el objeto global. Variables y funciones globales son propiedades de <code>window</code>. Permite acceder a objetos del BOM, controlar la ventana, abrir y cerrar pestañas, y manejar eventos globales.</p>
        <Code>{`
          console.log(window.innerWidth, window.innerHeight); // dimensiones visibles
          console.log(window.outerWidth, window.outerHeight); // dimensiones de la ventana completa

          // Abrir y cerrar ventanas
          const nuevaVentana = window.open('https://example.com', '_blank', 'width=600,height=400');
          nuevaVentana.close(); 

          // Scroll
          window.scrollTo(0, 500); // mueve al pixel 500 en Y
          window.scrollBy(0, 50);  // desplaza 50px relativo
        `}</Code>
        <p>Otros objetos importantes dentro de <code>window</code> incluyen <code>document</code> (DOM), <code>navigator</code>, <code>location</code>, <code>history</code>, <code>screen</code> y temporizadores.</p>
      </section>

      <section>
        <h2>Objeto <code>navigator</code></h2>
        <p>Proporciona información sobre el navegador y el sistema operativo, permite acceder a APIs modernas como geolocalización, service workers y clipboard.</p>
        <Code>{`
          console.log(navigator.userAgent);    // cadena con información del navegador
          console.log(navigator.platform);     // sistema operativo
          console.log(navigator.language);     // idioma preferido
          console.log(navigator.onLine);       // true si hay conexión

          // Geolocalización
          navigator.geolocation.getCurrentPosition(
            pos => console.log(pos.coords.latitude, pos.coords.longitude),
            err => console.error('Error geolocalización:', err)
          );

          // Service workers
          if (navigator.serviceWorker) {
            navigator.serviceWorker.register('/sw.js').then(reg => console.log('SW registrado', reg));
          }
        `}</Code>
      </section>

      <section>
        <h2>Objeto <code>location</code></h2>
        <p>Permite leer y modificar la URL, y controlar redirecciones y recargas.</p>
        <Code>{`
          console.log(location.href);     // URL completa
          console.log(location.hostname); // dominio
          console.log(location.pathname); // ruta
          console.log(location.search);   // query string
          console.log(location.hash);     // fragmento (#id)

          // Navegación
          location.href = 'https://example.com';
          location.reload();
          location.replace('https://example.com'); // reemplaza historial
        `}</Code>
      </section>

      <section>
        <h2>Objeto <code>history</code></h2>
        <p>Controla el historial del navegador y permite crear aplicaciones SPA sin recargar la página.</p>
        <Code>{`
          history.back();
          history.forward();
          history.go(-2);

          // Manipulación de estado
          history.pushState({page: 1}, 'Título', '?page=1');
          history.replaceState({page: 2}, 'Título', '?page=2');

          window.onpopstate = (event) => console.log('Estado cambiado:', event.state);
        `}</Code>
      </section>

      <section>
        <h2>Objeto <code>screen</code> y orientación</h2>
        <p>Proporciona información sobre la pantalla y su orientación, útil para diseños responsivos.</p>
        <Code>{`
          console.log(screen.width, screen.height);
          console.log(screen.availWidth, screen.availHeight);
          console.log(screen.colorDepth, screen.pixelDepth);

          // Orientación de pantalla (portrait/landscape)
          console.log(screen.orientation.type);
          screen.orientation.lock('portrait').then(() => console.log('Bloqueado en portrait'));
        `}</Code>
      </section>

      <section>
        <h2>Temporizadores</h2>
        <p>Permiten ejecutar código con retrasos o intervalos.</p>
        <Code>{`
          const timeoutId = setTimeout(() => console.log('Ejecutado después de 2s'), 2000);
          const intervalId = setInterval(() => console.log('Cada segundo'), 1000);

          clearTimeout(timeoutId);
          clearInterval(intervalId);
        `}</Code>
        <p>En entornos modernos se usan también <code>requestAnimationFrame</code> para animaciones suaves y <code>setImmediate</code> en Node.</p>
        <Code>{`
          function animar(time){
            console.log('Frame:', time);
            requestAnimationFrame(animar);
          }
          requestAnimationFrame(animar);
        `}</Code>
      </section>

      <section>
        <h2>Diálogos y popups</h2>
        <p>El BOM permite mostrar ventanas modales, alertas, confirmaciones y prompts, así como crear ventanas emergentes.</p>
        <Code>{`
          alert('Mensaje de alerta');
          const ok = confirm('¿Deseas continuar?');
          const nombre = prompt('Ingresa tu nombre');

          // Abrir ventana emergente
          const popup = window.open('https://example.com', 'popup', 'width=400,height=300');
        `}</Code>
      </section>

      <section>
        <h2>Clipboard API</h2>
        <p>Permite interactuar con el portapapeles del sistema.</p>
        <Code>{`
          // Copiar texto
          navigator.clipboard.writeText('Hola Clipboard').then(() => console.log('Texto copiado'));

          // Leer texto
          navigator.clipboard.readText().then(text => console.log('Texto leído:', text));
        `}</Code>
      </section>

      <section>
        <h2>Eventos globales del BOM</h2>
        <p>Eventos relacionados con la ventana, foco, tamaño y carga.</p>
        <Code>{`
          window.addEventListener('resize', () => console.log('Nuevo tamaño:', window.innerWidth, window.innerHeight));
          window.addEventListener('scroll', () => console.log('Scroll Y:', window.scrollY));
          window.addEventListener('beforeunload', e => { e.preventDefault(); e.returnValue=''; });
          window.addEventListener('focus', () => console.log('Ventana enfocada'));
          window.addEventListener('blur', () => console.log('Ventana fuera de foco'));
          window.addEventListener('load', () => console.log('Página cargada completamente'));
        `}</Code>
      </section>

      <section>
        <h2>Seguridad y compatibilidad</h2>
        <p>No todos los métodos y objetos del BOM están disponibles en todos los navegadores. Algunas funciones como popups y acceso al portapapeles requieren interacción del usuario y permisos. Es importante manejar errores y usar feature detection antes de invocar APIs.</p>
        <Code>{`
          if (navigator.clipboard) {
            navigator.clipboard.writeText('Texto seguro').catch(err => console.error('Error Clipboard:', err));
          }
        `}</Code>
      </section>

      <section>
        <h2>Resumen avanzado</h2>
        <p>El BOM es esencial para controlar la ventana, navegar por el historial, obtener información del navegador y la pantalla, manejar temporizadores y eventos globales, interactuar con geolocalización y portapapeles, y crear experiencias interactivas. Combinado con DOM y APIs modernas, permite construir aplicaciones web completas, SPA y aplicaciones responsivas y dinámicas.</p>
      </section>
    </>
  )
}