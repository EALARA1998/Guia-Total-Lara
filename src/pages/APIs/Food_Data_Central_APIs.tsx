import Code from "../../components/Code"

type Food_Data_Central_APIsProps = {
  
}

export default function Food_Data_Central_APIs({}:Food_Data_Central_APIsProps) {
  return (
    <>
      <h1>USDA FoodData Central</h1>
      <section>
        <h2>USDA FoodData Central API</h2>
        <a href="https://fdc.nal.usda.gov/api-guide.html">Documentación oficial</a>
        <a href="https://fdc.nal.usda.gov/">Portal FoodData Central</a>
        <section>
          <h3>Qué es:</h3>
          <p>API oficial del Departamento de Agricultura de EE.UU. (USDA) que provee información nutricional detallada sobre miles de alimentos: calorías, macronutrientes, vitaminas, minerales, y más.</p>
        </section>
        <section>
          <h3>Uso en React</h3>
          <section>
            <h4>Requisitos:</h4>
            <p>Necesitas registrarte en <a href="https://api.data.gov/signup/">data.gov</a> para obtener una <strong>API Key</strong>.</p>
          </section>
          <section>
            <h4>Ejemplo con fetch (buscar alimento):</h4>
            <Code>{`
              import React, { useEffect, useState } from "react";

              export default function FoodExample() {
                const [food, setFood] = useState(null);
                const API_KEY = "TU_API_KEY"; // 👈 coloca aquí tu API key
                const QUERY = "apple";

                useEffect(() => {
                  fetch(
                    \`https://api.nal.usda.gov/fdc/v1/foods/search?query=\${QUERY}&api_key=\${API_KEY}\`
                  )
                    .then((res) => res.json())
                    .then((data) => setFood(data));
                }, []);

                if (!food) return <p>Buscando información nutricional...</p>;

                return (
                  <div>
                    <h2>Resultados para "{QUERY}"</h2>
                    {food.foods.slice(0, 3).map((item) => (
                      <div key={item.fdcId}>
                        <h3>{item.description}</h3>
                        <p>Marca: {item.brandOwner ?? "N/A"}</p>
                        <p>Calorías: {item.foodNutrients?.find(n => n.nutrientName === "Energy")?.value ?? "N/A"} kcal</p>
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
                "foods": [
                  {
                    "fdcId": 1102647,
                    "description": "Apple, raw",
                    "foodNutrients": [
                      { "nutrientName": "Energy", "value": 52 },
                      { "nutrientName": "Protein", "value": 0.26 },
                      { "nutrientName": "Total lipid (fat)", "value": 0.17 }
                    ]
                  }
                ]
              }
            `}</Code>
          </section>
        </section>
      </section>
    </>
  )
}