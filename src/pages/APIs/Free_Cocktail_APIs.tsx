import Code from "../../components/Code"

type Free_Cocktail_APIsProps = {
  
}

export default function Free_Cocktail_APIs({}:Free_Cocktail_APIsProps) {
  return (
    <>
      <h1>Free Cocktail API (TheCocktailDB)</h1>
      <section>
        <h2>TheCocktailDB API</h2>
        <a href="https://www.thecocktaildb.com/api.php">Documentación oficial</a>
        <a href="https://www.thecocktaildb.com/">Portal TheCocktailDB</a>

        <section>
          <h3>Qué es:</h3>
          <p>API pública y gratuita que provee información sobre cócteles, ingredientes y recetas. Permite buscar por nombre de bebida, filtrar por ingrediente o categoría, y obtener instrucciones de preparación con imágenes.</p>
        </section>
        <section>
          <h3>Uso en React</h3>
          <section>
            <h4>Requisitos:</h4>
            <p>No es necesario registrarse ni usar API Key para las consultas básicas (aunque existe una versión de pago con más funciones).</p>
          </section>
          <section>
            <h4>Ejemplo con fetch (buscar cóctel por nombre):</h4>
            <Code>{`
              import React, { useEffect, useState } from "react";

              export default function CocktailExample() {
                const [cocktails, setCocktails] = useState(null);
                const QUERY = "margarita";

                useEffect(() => {
                  fetch(\`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=\${QUERY}\`)
                    .then((res) => res.json())
                    .then((data) => setCocktails(data.drinks));
                }, []);

                if (!cocktails) return <p>Buscando cócteles...</p>;

                return (
                  <div>
                    <h2>Resultados para "{QUERY}"</h2>
                    {cocktails.slice(0, 3).map((drink) => (
                      <div key={drink.idDrink}>
                        <h3>{drink.strDrink}</h3>
                        <img src={drink.strDrinkThumb} alt={drink.strDrink} width="150" />
                        <p><strong>Categoría:</strong> {drink.strCategory}</p>
                        <p><strong>Instrucciones:</strong> {drink.strInstructions}</p>
                      </div>
                    ))}
                  </div>
                );
              }
            `}</Code>
          </section>
          <section>
            <h4>Ejemplo de respuesta JSON (simplificado):</h4>
            <Code>{`
              {
                "drinks": [
                  {
                    "idDrink": "11007",
                    "strDrink": "Margarita",
                    "strCategory": "Ordinary Drink",
                    "strAlcoholic": "Alcoholic",
                    "strGlass": "Cocktail glass",
                    "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick. Shake the other ingredients with ice, then carefully pour into the glass.",
                    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
                    "strIngredient1": "Tequila",
                    "strIngredient2": "Triple sec",
                    "strIngredient3": "Lime juice",
                    "strIngredient4": "Salt"
                  }
                ]
              }
            `}</Code>
          </section>
        </section>
        <section>
          <h3>Ventajas</h3>
          <ul>
            <li>Gratis y sin API Key para la mayoría de las consultas.</li>
            <li>Incluye imágenes e instrucciones de preparación.</li>
            <li>Permite filtrar por nombre, ingrediente, categoría o tipo de vaso.</li>
          </ul>
        </section>
        <section>
          <h3>Desventajas</h3>
          <ul>
            <li>Base de datos limitada (no cubre todas las bebidas del mundo).</li>
            <li>Algunas bebidas tienen información incompleta (ingredientes opcionales).</li>
            <li>No soporta autenticación avanzada ni seguridad para proyectos grandes.</li>
          </ul>
        </section>
      </section> 
    </>
  )
}