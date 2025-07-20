import Code from "../../components/Code";

export default function Operators_TS() {
  return (
    <>
      <h1>Operadores en TypeScript</h1>
      <section>
        <h2>Operador de aserción de no nulabilidad (non-null assertion operator).</h2>
        <section>
          <h3>¿Qué hace?</h3>
          <p>Le dice al compilador de TypeScript: “Confía en mí, esta variable no es null ni undefined”.</p>
        </section>
        <section>
          <h3>¿Para qué se usa?</h3>
          <p>Se usa cuando tú como desarrollador estás seguro de que una variable no es null o undefined, aunque TypeScript piense que podría serlo. Es una forma de suprimir errores de tipo relacionados con posibles valores nulos.</p>
        </section>
        <Code>{`
          let nombre: string | null = obtenerNombre();

          // Sin el !
          console.log(nombre.length); // Error: 'nombre' puede ser null

          // Con el !
          console.log(nombre!.length); // OK: le aseguramos al compilador que no es null
        `}</Code>
        <section>
          <h3>¿Es seguro?</h3>
          <p>Solo si realmente estás seguro de que el valor no será null o undefined. Si te equivocas, puedes tener errores en tiempo de ejecución.</p>
        </section>
      </section>
    </>
  )
}