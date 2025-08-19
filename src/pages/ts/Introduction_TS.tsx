import Code from "../../components/Code"

type Introduction_TSProps = {
  
}

export default function Introduction_TS({}:Introduction_TSProps) {
  return (
    <>
      <h1>TypeScript — Introducción</h1>
      <p>TypeScript es un superset de JavaScript que añade <strong>tipado estático opcional</strong>. Esto significa que podemos declarar los tipos de variables, funciones, objetos y otros elementos, y el compilador verificará que se usen correctamente, reduciendo errores en tiempo de ejecución y mejorando la mantenibilidad del código.</p>

      <section>
        <h2>¿Por qué usar TypeScript?</h2>
        <p>Las principales ventajas de TypeScript son:</p>
        <ul>
          <li><strong>Detección temprana de errores:</strong> muchos errores que ocurrirían en tiempo de ejecución se detectan al compilar.</li>
          <li><strong>Autocompletado y documentación:</strong> los editores como VS Code pueden sugerir propiedades, métodos y tipos gracias al tipado.</li>
          <li><strong>Mantenibilidad:</strong> proyectos grandes se vuelven más claros y menos propensos a errores.</li>
          <li><strong>Compatibilidad con JavaScript:</strong> todo código JS válido es TS válido, lo que permite migraciones graduales.</li>
        </ul>
      </section>

      <section>
        <h2>Instalación</h2>
        <p>TypeScript se puede instalar globalmente o localmente en un proyecto:</p>
        <Code>{`
          // Instalación global
          npm install -g typescript

          // Instalación local en proyecto
          npm install --save-dev typescript
        `}</Code>
      </section>

      <section>
        <h2>Compilación y ejecución</h2>
        <p>TypeScript debe compilarse a JavaScript antes de ejecutarse:</p>
        <Code>{`
          // Compilar un archivo TS a JS
          tsc archivo.ts

          // Ejecutar con Node.js
          node archivo.js
        `}</Code>
        <p>Se puede compilar automáticamente con:</p>
        <Code>{`
          tsc archivo.ts --watch
        `}</Code>
      </section>

      <section>
        <h2>Configuración del proyecto</h2>
        <p>El archivo <code>tsconfig.json</code> permite definir opciones de compilación y organización:</p>
        <Code>{`
          tsc --init
        `}</Code>
        <p>Ejemplo de configuración básica:</p>
        <Code>{`
          {
            "compilerOptions": {
              "target": "ES6",          // Versión de JS resultante
              "module": "commonjs",     // Sistema de módulos
              "strict": true,           // Activar todas las verificaciones estrictas
              "esModuleInterop": true,  // Compatibilidad con módulos comunes
              "outDir": "./dist",       // Carpeta de salida
              "rootDir": "./src"        // Carpeta de origen
            }
          }
        `}</Code>
      </section>

      <section>
        <h2>Buenas prácticas en la introducción a TypeScript</h2>
        <ul>
          <li>Usar siempre <code>strict</code> activado para evitar errores silenciosos.</li>
          <li>Comenzar declarando tipos en variables y funciones, aunque TS pueda inferirlos.</li>
          <li>Separar el código en módulos y carpetas organizadas desde el inicio.</li>
          <li>Configurar <code>tsconfig.json</code> según las necesidades del proyecto.</li>
        </ul>
      </section>

      <section>
        <h2>Conclusión</h2>
        <p>La introducción a TypeScript sienta las bases para aprovechar el tipado estático, mejorar la seguridad y escalabilidad de nuestros proyectos. Antes de pasar a los tipos básicos, es fundamental entender cómo instalar, configurar y compilar TypeScript correctamente.</p>
      </section>
    </>
  )
}