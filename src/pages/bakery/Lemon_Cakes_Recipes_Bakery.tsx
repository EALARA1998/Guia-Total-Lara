import { Link } from "react-router-dom"
export default function Lemon_Cakes_Recipes_Bakery() {
  return (
    <>
      <h1>Recetas de Tortas de Limon</h1>
      <section>
        <h2>Torta de Limón Esponjosa y Suave (con Harina Golden Cake)</h2>
        <p>Para molde redondo de 22–24 cm</p>
        <section>
          <h3>Ingredientes:</h3>
          <table>
            <thead>
              <tr>
                <th>Ingrediente</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Harina Golden Cake</td>
                <td>1 taza (120 g)</td>
              </tr>
              <tr>
                <td>Maicena</td>
                <td>2 cucharadas (20 g)</td>
              </tr>
              <tr>
                <td>Azúcar blanca</td>
                <td>3/4 taza (150 g)</td>
              </tr>
              <tr>
                <td>Huevos grandes</td>
                <td>4 (a temperatura ambiente)</td>
              </tr>
              <tr>
                <td>Aceite vegetal suave</td>
                <td>1/3 taza (80 ml)</td>
              </tr>
              <tr>
                <td>Leche entera</td>
                <td>1/2 taza (120 ml)</td>
              </tr>
              <tr>
                <td>Jugo de limón fresco</td>
                <td>3 cucharadas (45 ml)</td>
              </tr>
              <tr>
                <td>Ralladura de limón</td>
                <td>1 cucharada (solo la parte verde)</td>
              </tr>
              <tr>
                <td>Polvo de hornear extra</td>
                <td>1 cucharadita (opcional)</td>
              </tr>
              <tr>
                <td>Extracto de vainilla</td>
                <td>1 cucharadita</td>
              </tr>
              <tr>
                <td>Sal</td>
                <td>1 pizca</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Preparacion:</h3>
          <ol>
            <li>
              <h4>Precalentar horno</h4>
              <ul>
                <li>
                  <p>Horno a 175 °C (350 °F).</p>
                </li>
                <li>
                  <p>Engrasa y enharina el molde o coloca papel manteca.</p>
                </li>
              </ul>
            </li>
            <li>
              <h4>Tamizar los ingredientes secos</h4>
              <ul>
                <li>
                  <p>Tamiza: harina Golden Cake + maicena + polvo de hornear + sal.</p>
                </li>
                <li>
                  <p>Esto aporta ligereza y evita grumos.</p>
                </li>
              </ul>
            </li>
            <li>
              <h4>Separar claras y yemas</h4>
              <ul>
                <li>
                  <p>Separa los huevos. Coloca las claras en un bol limpio y seco.</p>
                </li>
              </ul>
            </li>
            <li>
              <h4>Batir claras a punto de nieve</h4>
              <ul>
                <li>
                  <p>Bate las claras hasta que estén espumosas.</p>
                </li>
                <li>
                  <p>Agrega poco a poco la mitad del azúcar y bate hasta obtener picos firmes.</p>
                </li>
              </ul>
            </li>
            <li>
              <h4>Batir yemas + líquidos</h4>
              <ul>
                <li>
                  <p>En otro bol, bate las yemas con el resto del azúcar hasta que estén cremosas.</p>
                </li>
                <li>
                  <p>Agrega el aceite, la vainilla, el jugo y ralladura de limón.</p>
                </li>
                <li>
                  <p>Añade la leche poco a poco, batiendo suavemente.</p>
                </li>
              </ul>
            </li>
            <li>
              <h4>Incorporar ingredientes secos</h4>
              <ul>
                <li>
                  <p>Añade los ingredientes secos en 2-3 partes, mezclando suavemente.</p>
                </li>
                <li>
                  <p>No sobre mezcles.</p>
                </li>
              </ul>
            </li>
            <li>
              <h4>Incorporar claras batidas</h4>
              <ul>
                <li>
                  <p>Añade 1/3 de las claras para aligerar.</p>
                </li>
                <li>
                  <p>Luego el resto, en movimientos envolventes con espátula.</p>
                </li>
              </ul>
            </li>
            <li>
              <h4>Hornear</h4>
              <ul>
                <li>
                  <p>Vierte en el molde.</p>
                </li>
                <li>
                  <p>Hornea de 30 a 40 minutos o hasta que al insertar un palillo salga seco.</p>
                </li>
                <li>
                  <p>Enfriar 10 minutos en el molde, luego desmoldar y enfriar sobre rejilla.</p>
                </li>
              </ul>
            </li>
          </ol>
        </section>
        <p>Como jaleas se pueden usar: <Link to="/bakery/jellies-recipes">Jellies Recipes</Link></p>
      </section>
    </>
  )
}