import Code from "../../components/Code";

export default function Json_JS() {
  return (
    <>
      <h1>JSON y Serialización Avanzada</h1>
      <p>JSON (JavaScript Object Notation) es un formato estándar para representar datos como texto. JavaScript proporciona <code>JSON.stringify</code> y <code>JSON.parse</code> para convertir objetos a JSON y viceversa. La serialización avanzada incluye control sobre qué propiedades se incluyen, cómo se transforman los datos, manejo de ciclos y compatibilidad con instancias de clase.</p>

      <section>
        <h2>JSON.stringify básico</h2>
        <p>Convierte un objeto a una cadena JSON.</p>
        <Code>{`
          const obj = { nombre: 'Ana', edad: 30 };
          const str = JSON.stringify(obj);
          console.log(str); // '{"nombre":"Ana","edad":30}'
        `}</Code>
      </section>

      <section>
        <h2>JSON.parse básico</h2>
        <p>Convierte una cadena JSON en un objeto JavaScript.</p>
        <Code>{`
          const str = '{"nombre":"Ana","edad":30}';
          const obj = JSON.parse(str);
          console.log(obj.nombre); // Ana
        `}</Code>
      </section>

      <section>
        <h2>Replacer y filtrado de propiedades</h2>
        <p><code>JSON.stringify</code> permite un segundo parámetro <code>replacer</code> para filtrar o modificar valores durante la serialización.</p>
        <Code>{`
          const obj = { nombre: 'Ana', edad: 30, password: '1234' };
          const str = JSON.stringify(obj, ['nombre','edad']);
          console.log(str); // '{"nombre":"Ana","edad":30}'

          // Replacer como función
          const str2 = JSON.stringify(obj, (key, value) => key === 'password' ? undefined : value);
          console.log(str2); // '{"nombre":"Ana","edad":30}'
        `}</Code>
      </section>

      <section>
        <h2>Formateo y espacios</h2>
        <p>JSON.stringify acepta un tercer parámetro para agregar indentación y legibilidad.</p>
        <Code>{`
          const obj = { nombre: 'Ana', edad: 30 };
          const str = JSON.stringify(obj, null, 2); // 2 espacios
          console.log(str);
          /*
          {
            "nombre": "Ana",
            "edad": 30
          }
          */
        `}</Code>
      </section>

      <section>
        <h2>Reviver en JSON.parse</h2>
        <p><code>JSON.parse</code> permite un segundo parámetro <code>reviver</code> para transformar valores al reconstruir el objeto.</p>
        <Code>{`
          const str = '{"nombre":"Ana","edad":"30"}';
          const obj = JSON.parse(str, (key, value) => key === 'edad' ? Number(value) : value);
          console.log(obj.edad); // 30 (number)
        `}</Code>
      </section>

      <section>
        <h2>Manejo de ciclos (objetos circulares)</h2>
        <p>JSON.stringify falla con referencias circulares. Patrones comunes para manejarlo:</p>
        <Code>{`
          const obj = { nombre: 'Ana' };
          obj.self = obj;

          // Uso de WeakSet para evitar ciclos
          function safeStringify(obj){
            const seen = new WeakSet();
            return JSON.stringify(obj, (key, value) => {
              if(typeof value === 'object' && value !== null){
                if(seen.has(value)) return '[Circular]';
                seen.add(value);
              }
              return value;
            });
          }

          console.log(safeStringify(obj)); // '{"nombre":"Ana","self":"[Circular]"}'
        `}</Code>
      </section>

      <section>
        <h2>Compatibilidad con clases</h2>
        <p>JSON no preserva el prototipo de instancias. Al parsear, se obtiene un objeto plano, no una instancia de clase. Se pueden usar reviver o fábricas para reconstruir instancias.</p>
        <Code>{`
          class Persona {
            constructor(nombre, edad){
              this.nombre = nombre;
              this.edad = edad;
            }
            saludar(){ return \`Hola, soy \${this.nombre}\`; }
          }

          const p = new Persona('Ana', 30);
          const str = JSON.stringify(p);
          const obj = JSON.parse(str); // objeto plano, sin métodos

          // Reconstruir instancia
          const p2 = Object.assign(new Persona(), obj);
          console.log(p2.saludar()); // Hola, soy Ana
        `}</Code>
      </section>

      <section>
        <h2>toJSON</h2>
        <p>Clases pueden definir un método <code>toJSON</code> que se ejecuta automáticamente durante <code>JSON.stringify</code>.</p>
        <Code>{`
          class Persona {
            constructor(nombre, edad){ this.nombre = nombre; this.edad = edad; }
            toJSON(){ return { nombre: this.nombre }; } // excluye edad
          }
          const p = new Persona('Ana', 30);
          console.log(JSON.stringify(p)); // '{"nombre":"Ana"}'
        `}</Code>
      </section>

      <section>
        <h2>Fechas y objetos especiales</h2>
        <p>Al serializar <code>Date</code>, se convierte en ISO string. Para reconstruir usar reviver.</p>
        <Code>{`
          const obj = { fecha: new Date() };
          const str = JSON.stringify(obj);
          const obj2 = JSON.parse(str, (key, value) => key === 'fecha' ? new Date(value) : value);
          console.log(obj2.fecha instanceof Date); // true
        `}</Code>
      </section>

      <section>
        <h2>Manejo de errores</h2>
        <p>JSON.stringify puede lanzar <code>TypeError</code> si hay referencias circulares no controladas o propiedades no serializables (como funciones).</p>
        <Code>{`
          const obj = { fn: () => {} };
          // console.log(JSON.stringify(obj)); // '{}', las funciones se omiten
        `}</Code>
      </section>

      <section>
        <h2>Serialización avanzada y patrones</h2>
        <ul>
          <li><strong>Exclusión selectiva</strong>: usar replacer o toJSON para controlar qué propiedades se incluyen.</li>
          <li><strong>Transformación de datos</strong>: convertir tipos durante parseo con reviver.</li>
          <li><strong>Manejo de ciclos</strong>: WeakSet o librerías especializadas para evitar errores.</li>
          <li><strong>Compatibilidad con clases</strong>: reconstruir instancias usando Object.assign o fábricas.</li>
          <li><strong>Optimización</strong>: eliminar propiedades innecesarias antes de stringify para ahorrar tamaño.</li>
        </ul>
      </section>

      <section>
        <h2>Ejemplos prácticos</h2>
        <section>
          <h3>Serialización de objetos con métodos</h3>
          <Code>{`
            class Persona {
              constructor(nombre){ this.nombre = nombre; }
              saludar(){ return \`Hola \${this.nombre}\`; }
              toJSON(){ return { nombre: this.nombre }; }
            }
            const p = new Persona('Luis');
            const str = JSON.stringify(p); // '{"nombre":"Luis"}'
          `}</Code>
        </section>

        <section>
          <h3>Manejo de fechas</h3>
          <Code>{`
            const obj = { inicio: new Date() };
            const str = JSON.stringify(obj);
            const parsed = JSON.parse(str, (k,v) => k==='inicio'?new Date(v):v);
            console.log(parsed.inicio instanceof Date); // true
          `}</Code>
        </section>

        <section>
          <h3>Objetos circulares</h3>
          <Code>{`
            const a = {};
            const b = { a };
            a.b = b;
            console.log(JSON.stringify(a, (k,v) => {
              if(k==='b') return '[Circular]';
              return v;
            }));
          `}</Code>
        </section>
      </section>

      <section>
        <h2>Conclusión</h2>
        <p>JSON y la serialización avanzada en JavaScript permiten controlar qué se guarda, cómo se transforma y cómo se reconstruye. Usando <code>replacer</code>, <code>reviver</code>, <code>toJSON</code> y técnicas para ciclos y clases, se puede construir un flujo seguro y robusto para persistencia de datos, comunicación entre servicios y almacenamiento local.</p>
      </section>
    </>
  )
}