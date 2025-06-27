import Code from "../../components/Code";

export default function Arrays_JS() {
  return (
    <>
      <h1>Arrays</h1>
      <section>
        <h2>¿Qué es el spread operator (...)?</h2>
        <p>El spread operator se usa para expandir elementos de arrays u objetos en otro contexto.</p>
        <section>
          <h3>Copiar arrays</h3>
          <Code>{`
            const original = [1, 2, 3];
            const copia = [...original];
          `}</Code>
        </section>
        <section>
          <h3>Combinar arrays</h3>
          <Code>{`
            const a = [1, 2];
            const b = [3, 4];
            const combinados = [...a, ...b]; // [1, 2, 3, 4]
          `}</Code>
        </section>
        <section>
          <h3>Copiar objetos</h3>
          <Code>{`
            const persona = { nombre: "Ana", edad: 30 };
            const copia = { ...persona };
          `}</Code>
        </section>
        <section>
          <h3>Combinar objetos</h3>
          <Code>{`
            const base = { nombre: "Ana" };
            const extra = { edad: 30 };
            const combinado = { ...base, ...extra }; // { nombre: "Ana", edad: 30 }
          `}</Code>
          <p>⚠️ Si hay propiedades repetidas, la última sobreescribe.</p>
        </section>
      </section>
      <section>
        <h2>¿Qué es el rest operator (...)?</h2>
        <p>Aunque se ve igual (...), el rest operator recolecta múltiples elementos en una sola variable.</p>
        <section>
          <h3>En parámetros de funciones</h3>
          <Code>{`
            function sumar(...numeros) {
              return numeros.reduce((total, n) => total + n, 0);
            }

            sumar(1, 2, 3); // 6
          `}</Code>
        </section>
        <section>
          <h3>En destructuración</h3>
          <section>
            <h4>Arrays</h4>
            <Code>{`
              const [primero, ...resto] = [1, 2, 3, 4];
              // primero = 1
              // resto = [2, 3, 4]
            `}</Code>
          </section>
          <section>
            <h4>Objetos</h4>
            <Code>{`
              const { nombre, ...otros } = { nombre: "Ana", edad: 30, pais: "HN" };
              // nombre = "Ana"
              // otros = { edad: 30, pais: "HN" }
            `}</Code> 
          </section>
        </section>
      </section>
    </>
  )
}