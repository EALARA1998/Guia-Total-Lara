import Code from "../../components/Code"
type Commands_VSCProps = {
  
}

export default function Commands_VSC({}:Commands_VSCProps) {
  return (
    <>
      <h1>Comandos de Visual Studio Code</h1>
      <section>
        <h2>Editor Commands</h2>
        <section>
          <h3>Transform to Uppercase</h3>
          <p>Transformar texto del editor a mayusculas.</p>
          <Code>{`
            Ctrl + Shift + P ... Then ... Transform to Uppercase.
            `}</Code>
        </section>
        <section>
          <h3>Transform to Lowercase</h3>
          <p>Transformar texto del editor a minusculas.</p>
          <Code>{`
            Ctrl + Shift + P ... Then ... Transform to Lowercase.
          `}</Code>
        </section>
      </section>
    </>
  )
}