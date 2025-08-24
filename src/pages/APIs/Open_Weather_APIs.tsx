import Code from "../../components/Code"

type Open_Weather_APIsProps = {
  
}

export default function Open_Weather_APIs({}:Open_Weather_APIsProps) {
  
  return (
    <>
      <h1>Open Weather</h1>
      <a href="https://openweathermap.org/api">Todas las APIs de OpenWeather</a>
      <section>
        <h2>Current Weather API</h2>
        <a href="https://openweathermap.org/current">Documentación oficial</a>
        <section>
          <h3>Qué es:</h3>
          <p>API que devuelve información meteorológica actual (temperatura, humedad, velocidad del viento, condiciones del cielo, etc.) para una ciudad, coordenadas geográficas o ID de ciudad.</p>
        </section>
        <section>
          <h3>Uso en React</h3>
          <section>
            <h4>Requisitos:</h4>
            <p>Debes registrarte en <a href="https://home.openweathermap.org/users/sign_up">OpenWeather</a>  para obtener una <strong>API Key</strong>.</p>
          </section>
          <section>
            <h4>Ejemplo con fetch:</h4>
            <Code>{`
              import { useMemo, useState } from "react";
              import type { SearchType } from "../types"
              import { z } from "zod"; // No es modular es decir se importa todo el contenido de una.

              // Zod
              const WeatherSchema = z.object({
                name: z.string(),
                main: z.object({
                  temp: z.number(),
                  temp_max: z.number(),
                  temp_min: z.number(),
                })
              })
              export type Weather = z.infer<typeof WeatherSchema>

              const initialWeather = {
                name: "",
                main: {
                  temp: 0,
                  temp_max: 0,
                  temp_min: 0,
                }
              }

              export default function useWeather() {
                
                const [weather, setWeather] = useState<Weather>(initialWeather)
                const [loading, setLoading] = useState(false)
                const [notFound, setNotFound] = useState(false)

                const hasWeatherData = useMemo(()=>weather.name,[weather])

                const fetchWeather = async (search: SearchType) => {
                  const API_KEY = import.meta.env.VITE_API_KEY
                  setLoading(true)
                  setWeather(initialWeather)
                  setNotFound(false)
                  try {
                    const geoUrl = \`https://api.openweathermap.org/geo/1.0/direct?q=\${search.city},\${search.country}&appid=\${API_KEY}\`
                    await fetch(geoUrl)
                      .then(res => {
                        if (!res.ok) throw new Error("HTTP error: " + res.status)
                        return res.json()
                    })
                      .then(data => {
                        if (!data[0]) {
                          console.log("Clima no encontrado.")
                          setNotFound(true)
                          return
                        }

                        const lat = data[0].lat
                        const lon = data[0].lon
                        const currentWeatherUrl =\`https://api.openweathermap.org/data/2.5/weather?lat=\${lat}&lon=\${lon}&appid=\${API_KEY}\`

                        //Zod
                        fetch(currentWeatherUrl)
                          .then(res => res.json())
                          .then(data => {
                            const result = WeatherSchema.safeParse(data)
                            if(!result.success) throw new Error("El tipo definido no concuerda con la informacion recibida.")
                            setWeather(result.data)
                          })
                      })
                  } catch (error) {
                    console.log(error)
                  } finally {
                    setLoading(false)
                  }
                }

                return {
                  fetchWeather,
                  weather,
                  loading,
                  notFound,
                  hasWeatherData
                }
              }
            `}</Code>
          </section>
          <section>
            <h4>Ejemplo de respuesta JSON:</h4>
            <Code>{`
              {
                "coord": { "lon": -3.7026, "lat": 40.4165 },
                "weather": [{ "description": "cielo claro", "icon": "01d" }],
                "main": { "temp": 29.5, "humidity": 40 },
                "wind": { "speed": 3.6 },
                "name": "Madrid"
              }
            `}</Code>
          </section>
        </section>
      </section>
    </>
  )
}