import Code from "../../components/Code"

type Regular_Expressions_JSProps = {
  
}

export default function Regular_Expressions_JS({}:Regular_Expressions_JSProps) {
  return (
    <>
      <h1>JavaScript — Regular Expressions Avanzadas</h1>
      <p>Las expresiones regulares (<strong>RegEx</strong>) son patrones utilizados para buscar, validar o manipular texto de manera eficiente. En JavaScript se crean con la sintaxis literal <code>/patrón/flags</code> o con <code>RegExp</code>. Dominar las expresiones regulares avanzadas permite procesar cadenas complejas, validar formularios, parsear datos y reemplazar contenido de manera poderosa.</p>

      <section>
        <h2>Sintaxis básica</h2>
        <p>Se puede crear un RegEx con literal o constructor:</p>
        <Code>{`
          const regex1 = /abc/i; // i: case-insensitive
          const regex2 = new RegExp('abc', 'i');
          
          console.log(regex1.test('ABC')); // true
        `}</Code>
        <p>Flags comunes: <code>i</code> (insensible a mayúsculas), <code>g</code> (global), <code>m</code> (multilínea), <code>s</code> (dotAll), <code>u</code> (Unicode), <code>y</code> (sticky).</p>
      </section>

      <section>
        <h2>Metacaracteres y clases de caracteres</h2>
        <p>Los metacaracteres permiten definir patrones complejos:</p>
        <Code>{`
          const regex = /[a-zA-Z0-9_]/; // cualquier letra, número o guion bajo
          const regex2 = /\d/;           // dígito
          const regex3 = /\D/;           // no dígito
          const regex4 = /\w/;           // palabra (letra, número, _)
          const regex5 = /\W/;           // no palabra
          const regex6 = /\s/;           // espacio, tab, newline
          const regex7 = /\S/;           // no espacio
          const regex8 = /./;            // cualquier caracter excepto newline (con s flag permite newline)
        `}</Code>
        <p>Los cuantificadores controlan la repetición: {`* (0+), + (1+), ? (0 o 1), {n}, {n,}, {n,m}`}.</p>
      </section>

      <section>
        <h2>Grupos y capturas</h2>
        <p>Los paréntesis crean grupos de captura y permiten referenciar partes de la coincidencia.</p>
        <Code>{`
          const regex = /(\d{4})-(\d{2})-(\d{2})/;
          const match = '2025-08-18'.match(regex);
          console.log(match[0]); // "2025-08-18"
          console.log(match[1]); // "2025" -> año
          console.log(match[2]); // "08" -> mes
          console.log(match[3]); // "18" -> día
        `}</Code>
        <p>Grupos no capturantes: <code>(?:…)</code> evita almacenar el contenido pero permite aplicar cuantificadores.</p>
      </section>

      <section>
        <h2>Lookahead y Lookbehind</h2>
        <p>Permiten validar contexto sin capturarlo. Existen positivos y negativos.</p>
        <Code>{`
          // Positive lookahead (?=)
          const regex1 = /\\d(?=px)/; // encuentra dígito seguido de "px"
          console.log('10px'.match(regex1)); // ["0"]

          // Negative lookahead (?!)
          const regex2 = /\\d(?!px)/; // dígito no seguido de "px"
          console.log('10em'.match(regex2)); // ["0"]

          // Positive lookbehind (?<=)
          const regex3 = /(?<=\$)\\d+/; // dígito precedido de $
          console.log('$100'.match(regex3)); // ["100"]

          // Negative lookbehind (?<!)
          const regex4 = /(?<!\$)\\d+/; // dígito no precedido de $
          console.log('100'.match(regex4)); // ["100"]
        `}</Code>
      </section>

      <section>
        <h2>Reemplazos avanzados</h2>
        <p>El método <code>string.replace</code> puede usar RegEx y funciones de reemplazo:</p>
        <Code>{`
          const str = "Juan, Ana, Pedro";
          // Reemplazo simple
          console.log(str.replace(/Ana/, 'Maria')); // "Juan, Maria, Pedro"

          // Reemplazo con función
          console.log(str.replace(/(\w+)/g, (match, p1, offset) => p1.toUpperCase()));
          // "JUAN, ANA, PEDRO"

          // Rearmar fecha
          const fecha = '2025-08-18';
          console.log(fecha.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$3/$2/$1')); // 18/08/2025
        `}</Code>
        <p>Se pueden usar referencias numéricas ($1, $2…) o nombres de grupos ($&, $`, $', {`$<nombre>`}).</p>
      </section>

      <section>
        <h2>Flags avanzadas</h2>
        <p>Flags menos comunes permiten control fino:</p>
        <Code>{`
          // s: dotAll permite que . capture newline
          const regex = /foo.bar/s;
          console.log(regex.test('foo\\nbar')); // true

          // u: Unicode, interpreta correctamente puntos de código superiores a 0xFFFF
          const regex2 = /\\p{Script=Greek}/u;
          console.log('α'.match(regex2)); // ["α"]

          // y: sticky, busca coincidencia desde posición actual exacta
          const regex3 = /abc/y;
          regex3.lastIndex = 1;
          console.log(regex3.exec('zabc')); // null (no coincide en index 1)
        `}</Code>
      </section>

      <section>
        <h2>Iteración con RegEx</h2>
        <p>El método <code>RegExp.exec</code> combinado con <code>g</code> permite iterar todas las coincidencias:</p>
        <Code>{`
          const regex = /\\w+/g;
          const str = "Hola mundo JS";
          let match;
          while(match = regex.exec(str)){
            console.log(match[0], match.index);
          }
          // "Hola" 0
          // "mundo" 5
          // "JS" 11
        `}</Code>
      </section>

      <section>
        <h2>RegExp como objeto y propiedades</h2>
        <p>Un RegExp tiene propiedades útiles:</p>
        <Code>{`
          const regex = /\d+/g;
          console.log(regex.source); // "\\d+"
          console.log(regex.flags);  // "g"
          console.log(regex.sticky); // false
          console.log(regex.unicode); // false
        `}</Code>
      </section>

      <section>
        <h2>Expresiones regulares avanzadas con Unicode</h2>
        <p>JavaScript moderno soporta <code>Unicode property escapes</code>:</p>
        <Code>{`
          // Letras de cualquier idioma
          const regex = /\\p{L}+/gu;
          console.log('Hola Γεια 你好'.match(regex)); // ["Hola","Γεια","你好"]

          // Números
          const regex2 = /\\p{N}+/gu;
          console.log('123 ٤٥٦'.match(regex2)); // ["123","٤٥٦"]
        `}</Code>
      </section>

      <section>
        <h2>Errores y trampas comunes</h2>
        <ul>
          <li>Olvidar flag <code>g</code> cuando se espera múltiples coincidencias con <code>exec</code>.</li>
          <li>No escapar caracteres especiales: <code>.*+?^${}()|[]\\</code>.</li>
          <li>Lookbehind no soportado en entornos antiguos (Node {`<`} 10, navegadores antiguos).</li>
          <li>Unicode sin flag <code>u</code> puede producir resultados inesperados.</li>
          <li>Reemplazos con grupos deben usar correctamente $1, $2 o nombres de grupo.</li>
        </ul>
      </section>

      <section>
        <h2>Patrones de uso avanzados</h2>
        <ul>
          <li>Validación de emails complejos con lookahead y lookbehind.</li>
          <li>Extracción de URLs de texto.</li>
          <li>Reformateo de fechas o números con capturas y reemplazo.</li>
          <li>Tokenización de texto para analizadores o lenguajes simples.</li>
          <li>Escaneo de logs o archivos grandes usando RegEx global con exec.</li>
        </ul>
      </section>

      <section>
        <h2>Ejemplos prácticos</h2>
        <section>
          <h3>Validar email con lookahead y lookbehind</h3>
          <Code>{`
            const emailRegex = /(?<=\\s|^)[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}(?=\\s|$)/g;
            console.log('Contacta a test@example.com o admin@mail.org'.match(emailRegex));
            // ["test@example.com","admin@mail.org"]
          `}</Code>
        </section>

        <section>
          <h3>Extraer hashtags de texto</h3>
          <Code>{`
            const text = "Hoy #JavaScript y #RegEx son divertidos";
            const hashtags = text.match(/#\\w+/g);
            console.log(hashtags); // ["#JavaScript","#RegEx"]
          `}</Code>
        </section>

        <section>
          <h3>Reformatear fecha AAAA-MM-DD a DD/MM/AAAA</h3>
          <Code>{`
            const fecha = '2025-08-18';
            const nuevaFecha = fecha.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$3/$2/$1');
            console.log(nuevaFecha); // 18/08/2025
          `}</Code>
        </section>
      </section>

      <section>
        <h2>Conclusión</h2>
        <p>Las expresiones regulares avanzadas en JavaScript son una herramienta extremadamente poderosa para procesar texto. Con dominio de grupos, lookahead/lookbehind, flags avanzadas, Unicode y métodos de reemplazo, se pueden resolver problemas complejos de validación, extracción y transformación de datos de forma eficiente y profesional.</p>
      </section>
    </>
  )
}