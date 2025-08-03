import Code from "../../components/Code";

export default function Strings_JS() {
  return (
    <>
      <h1>Strings</h1>
      <section>
        <h2>Template Strings</h2>
        <p>Los template strings (o plantillas de cadena) son una forma moderna de crear cadenas de texto en JavaScript. Se introdujeron en ES6 y permiten interpolación de variables y expresiones.</p>
        <Code>{`
          const nombre = "Emanuel";
          const saludo = \`Hola, mi nombre es \${nombre}\`;
          console.log(saludo); // "Hola, mi nombre es Emanuel"
        `}</Code>
      </section>
    </>
  )
}