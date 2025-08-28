import Code from "../../components/Code"

type Npm_Packages_NodeProps = {
  
}

export default function Npm_Packages_Node({}:Npm_Packages_NodeProps) {
  return (
    <>
      <h1>Paquetes de NPM</h1>
      <a href="https://www.npmjs.com/">NPM</a>
      <section>
        <h2>heroicons</h2>
        <a href="https://www.npmjs.com/package/heroicons">NPM</a>
        <a href="https://heroicons.com/">Heroicons</a>
        <a href="https://app.unpkg.com/@heroicons/react@2.2.0/files/24/outline">Heroicons icons name</a>
        <section>
          <h3>Qué es:</h3>
          <p>Paquete con íconos SVG como componentes React.</p>
        </section>
        <section>
          <h3>React</h3>
          <section>
            <h4>Instalación:</h4>
            <Code>{`
              npm install @heroicons/react
            `}</Code>
          </section>
          <section>
            <h4>Ejemplo completo:</h4>
            <Code>{`
              import React from 'react';
              import { BeakerIcon } from '@heroicons/react/24/solid';

              export default function HeroIconsExample() {
                return (
                  <div>
                    <h2>Ejemplo Heroicons</h2>
                    <BeakerIcon className="w-6 h-6 text-blue-500" />
                    <p>Este es un ícono Beaker.</p>
                  </div>
                );
              }
            `}</Code>   
          </section>
        </section>
      </section>
      <section>
        <h2>uuid</h2>
        <a href="https://www.npmjs.com/package/uuid">npm uuid</a>
        <section>
          <h3>Qué es:</h3>
          <p>Generar IDs únicas.</p>
        </section>
        <section>
          <h3>React</h3>
          <section>
            <h4>Instalación:</h4>
            <Code>{`
              npm install uuid
              npm i --save-dev @types/uuid
            `}</Code>
          </section>
          <section>
            <h4>ESM-syntax (must use named exports):</h4>
            <Code>{`
              import { v4 as uuidv4 } from 'uuid';
              uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
            `}</Code>
          </section>
          <section>
            <h4>CommonJS:</h4>
            <Code>{`
              const { v4: uuidv4 } = require('uuid');
              uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
            `}</Code>
          </section>
          <section>
            <h4>Ejemplo completo:</h4>
            <Code>{`
              import React from 'react';
              import { v4 as uuidv4 } from 'uuid';

              export default function UuidExample() {
                const id = uuidv4();
                
                return (
                  <div>
                    <h2>UUID generado:</h2>
                    <p>{id}</p>
                  </div>
                );
              }
            `}</Code>
          </section>
        </section>
      </section>
      <section>
        <h2>Tailwind CSS</h2>
        <section>
          <h3>¿Qué es Tailwind CSS?</h3>
          <p>Tailwind CSS es un framework de CSS de utilidad que te permite construir interfaces modernas y personalizadas directamente en tu HTML, sin tener que escribir CSS desde cero. A diferencia de otros frameworks como Bootstrap que te dan componentes prediseñados, Tailwind te ofrece clases de utilidad que puedes combinar para construir tus propios diseños.</p>
          <p>Tailwind CSS es:</p>
          <ul>
            <li>
              <p>Un framework CSS basado en utilidades.</p>
            </li>
            <li>
              <p>No incluye componentes visuales predefinidos como botones o tarjetas.</p>
            </li>
            <li>
              <p>Te da clases pequeñas y reutilizables como flex, pt-4, text-center, bg-red-500, etc.</p>
            </li>
            <li>
              <p>Fue creado por Adam Wathan y es de código abierto.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>¿Por qué usar Tailwind?</h3>
          <section>
            <h4>Ventajas:</h4>
            <ul>
              <li><p>Productividad alta: Puedes diseñar sin salir de tu archivo HTML o JSX.</p></li>
              <li><p>Personalización total: No estás limitado a estilos predeterminados.</p></li>
              <li><p>CSS más limpio: Menos necesidad de escribir reglas CSS personalizadas.</p></li>
              <li><p>Modo JIT (Just-In-Time): Compila solo las clases que usas, haciendo que el archivo final sea liviano.</p></li>
              <li><p>Excelente integración con frameworks modernos: React, Vue, Svelte, Next.js, Laravel, etc.</p></li>
            </ul>
          </section>
          <section>
            <h4>Desventajas:</h4>
            <ul>
              <li><p>Puede parecer caótico al principio (muchas clases en una línea).</p></li>
              <li><p>Requiere un poco de aprendizaje inicial.</p></li>
              <li><p>No es ideal para quien prefiera separar HTML y CSS.</p></li>
            </ul>
          </section>
        </section>
        <section>
          <h3>Instalación</h3>
          <section>
            <h4>Forma rápida (CDN) – Solo para pruebas:</h4>
            <Code>{`
              <link href="https://cdn.tailwindcss.com" rel="stylesheet">
            `}</Code>
          </section>
          <section>
            <h4>Instalación recomendada (vía Node.js):</h4>
            <Code>{`
              npm install -D tailwindcss
              npx tailwindcss init
            `}</Code>
            <p>Esto genera un archivo tailwind.config.js, donde puedes personalizar tu configuración.</p>
          </section>
        </section>
        <section>
          <h3>Estructura básica de un proyecto Tailwind</h3>
          <Code>{`
            📁 my-project/
            ├── index.html
            ├── tailwind.config.js
            ├── postcss.config.js
            ├── src/
            │   └── input.css
            └── dist/
                └── output.css
          `}</Code>
          <section>
            <h4>Contenido de input.css:</h4>
            <Code>{`
              @tailwind base;
              @tailwind components;
              @tailwind utilities;
            `}</Code>
            <p>Luego, compilas usando:</p>
            <Code>{`
              npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
            `}</Code>
          </section>
        </section>
        <section>
          <h3>Instalacion Nueva Vite</h3>
          <ul>
            <li>
              <p>Crear proyecto (Si no esta creado).</p>
              <Code>{`
                npm create vite@latest my-project
                cd my-project
              `}</Code>
            </li>
            <li>
              <p>Instalar Tailwind CSS</p>
              <Code>{`
                npm install -D tailwindcss @tailwindcss/vite autoprefixer postcss
              `}</Code>
            </li>
            <li>
              <p>Configurar Vite plugin</p>
              <Code>{`
                // vite.config.ts
                import { defineConfig } from 'vite'
                import tailwindcss from '@tailwindcss/vite'
                export default defineConfig({
                  plugins: [
                    tailwindcss(),
                  ],
                })
              `}</Code>
            </li>
            <li>
              <p>Crear style.css dentro de carpeta src. e importar tailwindcss</p>
              <Code>{`
                📁 my-project/
                ├── index.html
                ├── src/
                │   └── style.css
              `}</Code>
              <Code>{`
                // style.css
                @import "tailwindcss";
              `}</Code>
            </li>
            <li>
              <p>Cargar en tu index.html el archivo style.css.</p>
              <Code>{`
                <!doctype html>
                <html>
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <link href="/src/style.css" rel="stylesheet">
                </head>
                <body>
                </body>
                </html>
              `}</Code>
            </li>
            <li>
              <p>Agregar en archivos html, jsx o tsx clases propias de tailwind.</p>
              <Code>{`
                export default function App() {

                return (
                  <>
                    <p className=" font-black">Hola</p>
                  </>
                )
              `}</Code>
            </li>
            <li>
              <p>Por ultimo solo correr npm run dev en la consola.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Ejemplos de clases comunes</h3>
          <Code>{`
            <div class="bg-blue-500 text-white p-4 rounded shadow-md">
              Hola Tailwind
            </div>  
          `}</Code>
          <section>
            <h4>Algunas clases útiles:</h4>
            <ul>
              <li>
                <p>Espaciado: p-4, m-2, px-6, py-1</p>
              </li>
              <li>
                <p>Colores: bg-red-500, text-green-700</p>
              </li>
              <li>
                <p>Flexbox y Grid: flex, items-center, justify-between, grid, gap-4</p>
              </li>
              <li>
                <p>Tipografía: text-xl, font-bold, uppercase</p>
              </li>
              <li>
                <p>Responsive: md:text-lg, lg:flex, sm:hidden</p>
              </li>
              <li>
                <p>Estado: hover:bg-blue-600, focus:outline-none</p>
              </li>
            </ul>
          </section>
          <section>
            <h3>Personalización</h3>
            <p>En tailwind.config.js, puedes extender el tema:</p>
            <Code>{`
              module.exports = {
              theme: {
                extend: {
                  colors: {
                    brand: '#1DA1F2',
                  },
                  spacing: {
                    '72': '18rem',
                  },
                },
              },
            }
            `}</Code>
          </section>
        </section>
        <section>
          <h3>Plugins útiles</h3>
          <ul>
            <li>
              <p>@tailwindcss/forms: Estiliza formularios.</p>
            </li>
            <li>
              <p>@tailwindcss/typography: Mejor formato para texto largo (ideal para blogs).</p>
            </li>
            <li>
              <p>@tailwindcss/aspect-ratio: Controla proporciones de elementos como videos.</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Recursos</h3>
          <a href="https://tailwindcss.com/docs/installation/using-vite">Documentacion oficial</a>
          <a href="https://github.com/tailwindlabs/tailwindcss">GitHub</a>
        </section>
      </section>
      <section>
        <h2>react-date-picker</h2>
        <a href="https://www.npmjs.com/package/react-date-picker">NPM</a>
        <section>
          <h3>Qué es:</h3>
          <p>Selector de fechas para React.</p>
        </section>
        <section>
          <h3>React</h3>
          <section>
            <h4>Instalación:</h4>
            <Code>{`
              npm i react-date-picker
            `}</Code>
          </section>
          <section>
            <h4>Ejemplo completo:</h4>
            <Code>{`
              import React, { useState } from 'react';
              import DatePicker from 'react-date-picker';
              import 'react-date-picker/dist/DatePicker.css';
              import 'react-calendar/dist/Calendar.css';

              export default function DatePickerExample() {
                const [value, onChange] = useState(new Date());

                return (
                  <div>
                    <h2>Selecciona una fecha:</h2>
                    <DatePicker onChange={onChange} value={value} />
                    <p>Fecha seleccionada: {value ? value.toDateString() : 'Ninguna'}</p>
                  </div>
                );
              }
            `}</Code> 
          </section>
        </section>
      </section>
      <section>
        <h2>react-swipeable-list</h2>
        <a href="https://www.npmjs.com/package/react-swipeable-list">NPM</a>
        <section>
          <h3>Qué es:</h3>
          <p>Lista con soporte para acciones deslizables (swipe).</p>
        </section>
        <section>
          <h3>React</h3>
          <section>
            <h4>Instalación:</h4>
            <Code>{`
              npm i react-swipeable-list
              npm install prop-types
            `}</Code>
          </section>
          <section>
            <h4>Ejemplo completo:</h4>
            <Code>{`
              import React from 'react';
              import {
                LeadingActions,
                SwipeableList,
                SwipeableListItem,
                SwipeAction,
                TrailingActions,
              } from 'react-swipeable-list';
              import 'react-swipeable-list/dist/styles.css';

              export default function SwipeableListExample() {
                const leadingActions = () => (
                  <LeadingActions>
                    <SwipeAction onClick={() => alert('Acción izquierda activada')}>
                      Acción Izquierda
                    </SwipeAction>
                  </LeadingActions>
                );

                const trailingActions = () => (
                  <TrailingActions>
                    <SwipeAction destructive={true} onClick={() => alert('Eliminar')}>
                      Eliminar
                    </SwipeAction>
                  </TrailingActions>
                );

                return (
                  <SwipeableList>
                    <SwipeableListItem
                      leadingActions={leadingActions()}
                      trailingActions={trailingActions()}
                    >
                      <div style={{ padding: '20px', background: '#eee' }}>
                        Deslízame para acciones
                      </div>
                    </SwipeableListItem>
                  </SwipeableList>
                );
              }
            `}</Code>
          </section>
          <section>
            <h4>Estilos</h4>
            <Code>{`
              /*** SWIPE LIST OVERRIDES **/
              .swipeable-list-item__leading-actions, 
              .swipeable-list-item__trailing-actions {
                @apply text-white text-lg uppercase font-bold;
              }
              .swipeable-list-item__leading-actions{
                @apply bg-blue-600;
              }
              .swipeable-list-item__trailing-actions {
                @apply bg-pink-600;
              }
              .swipeable-list .swipe-action {
                @apply flex justify-center items-center
              }
            `}</Code>
          </section>
        </section>
      </section>
      <section>
        <h2>react-circular-progressbar</h2>
        <a href="https://www.npmjs.com/package/react-circular-progressbar">NPM</a>
        <section>
          <h3>Qué es:</h3>
          <p>Barra de progreso circular.</p>
        </section>
        <section>
          <h3>React</h3>
          <section>
            <h4>Instalación:</h4>
            <Code>{`
              npm install --save react-circular-progressbar
            `}</Code>
          </section>
          <section>
            <h4>Ejemplo completo:</h4>
            <Code>{`
              import React from 'react';
              import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
              import 'react-circular-progressbar/dist/styles.css';

              export default function CircularProgressbarExample() {
                return (
                  <div style={{ width: 100, height: 100 }}>
                    <CircularProgressbar
                      value={75}
                      text={\`75%\`}
                      styles={buildStyles({
                        pathColor: 'blue',
                        textColor: 'black',
                      })}
                    />
                  </div>
                );
              }

            `}</Code>
          </section>
        </section>
      </section>
      <section>
        <h2>react-hook-form</h2>
        <a href="https://www.npmjs.com/package/react-hook-form?activeTab=readme">NPM</a>
        <a href="https://react-hook-form.com/get-started">react-hook-form</a>
        <section>
          <h3>Qué es:</h3>
          <p>Manejo sencillo de formularios en React.</p>
        </section>
        <section>
          <h3>React</h3>
          <section>
            <h4>Instalación:</h4>
            <Code>{`
              npm install react-hook-form
            `}</Code>
          </section>
          <section>
            <h4>Ejemplo completo:</h4>
            <Code>{`
              import { useForm } from "react-hook-form"
              import { toast } from 'react-toastify';
              import Error from "./Error"
              import type { DraftPatient } from "../types"
              import { usePatientStore } from "../store/store"
              import { useEffect } from "react"

              export default function PatientForm() {
                
                const { patients, activeId, addPatient, updatePatient } = usePatientStore()
                // const addPatient = usePatientStore(state => state.addPatient)

                const { register, handleSubmit, setValue, formState: {errors}, reset } = useForm<DraftPatient>()

                useEffect(()=>{
                  if (activeId) {
                    const activePatient = patients.filter( p => p.id === activeId)[0]
                    setValue("name", activePatient.name)
                    setValue("caretaker", activePatient.caretaker)
                    setValue("email", activePatient.email)
                    setValue("date", activePatient.date)
                    setValue("symptoms", activePatient.symptoms)
                  }
                },[activeId])

                function registerPatient(data: DraftPatient) {
                  if (activeId) {
                    updatePatient(data)
                    toast("Paciente Editado Correctamente", {
                      type: "success",
                      autoClose: 2000
                    })
                  }else{
                    addPatient(data)
                    toast("Paciente Registrado Correctamente", {
                      type: "success",
                      autoClose: 2000
                    })
                  }
                  reset()
                }

                return (
                  <div className="md:w-1/2 lg:w-2/5 mx-5">
                      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

                      <p className="text-lg mt-5 text-center mb-10">
                          Añade Pacientes y {''}
                          <span className="text-indigo-600 font-bold">Administralos</span>
                      </p>

                      <form 
                          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                          noValidate
                          onSubmit={handleSubmit(registerPatient)}
                      >
                            <div className="mb-5">
                              <label htmlFor="name" className="text-sm uppercase font-bold">
                                Paciente 
                              </label>
                              <input  
                                id="name"
                                className="w-full p-3  border border-gray-100"  
                                type="text" 
                                placeholder="Nombre del Paciente"
                                {...register("name", { 
                                  required: "El nombre del paciente es obligatorio.",
                                  maxLength: {
                                    value: 8,
                                    message: "Maximo 15 caracteres."
                                  }
                                })}
                              />
                              {errors.name && (<Error>{errors.name?.message}</Error>)}
                            </div>

                            <div className="mb-5">
                              <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                                  Propietario 
                              </label>
                              <input  
                                id="caretaker"
                                className="w-full p-3  border border-gray-100"  
                                type="text" 
                                placeholder="Nombre del Propietario" 
                                {...register("caretaker", { 
                                  required: "El nombre del propietario es obligatorio.",
                                })}
                                />
                              {errors.caretaker && (<Error>{errors.caretaker?.message}</Error>)}
                            </div>

                          <div className="mb-5">
                            <label htmlFor="email" className="text-sm uppercase font-bold">
                                Email 
                            </label>
                            <input  
                                id="email"
                                className="w-full p-3  border border-gray-100"  
                                type="email" 
                                placeholder="Email de Registro"
                                {...register("email", {
                                  required: "El Email es Obligatorio",
                                  pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Email No Válido'
                                  }
                                })} 
                                />
                              {errors.email && (<Error>{errors.email?.message}</Error>)}
                          </div>

                          <div className="mb-5">
                              <label htmlFor="date" className="text-sm uppercase font-bold">
                                  Fecha Alta 
                              </label>
                              <input  
                                  id="date"
                                  className="w-full p-3  border border-gray-100"  
                                  type="date" 
                                  {...register("date", { 
                                  required: "La fecha es obligatoria.",
                                  })}
                              />
                              {errors.date && (<Error>{errors.date?.message}</Error>)}
                          </div>
                          
                          <div className="mb-5">
                              <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                              Síntomas 
                              </label>
                              <textarea  
                                  id="symptoms"
                                  className="w-full p-3  border border-gray-100"  
                                  placeholder="Síntomas del paciente"
                                  {...register("symptoms", { 
                                  required: "Los sintomas son obligatorios.",
                                  })}
                              ></textarea>
                              {errors.symptoms && (<Error>{errors.symptoms?.message}</Error>)}
                          </div>

                          <input
                              type="submit"
                              className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                              value='Guardar Paciente'
                          />
                      </form> 
                  </div>
                )
              }
            `}</Code>
          </section>
        </section>
      </section>
      <section>
        <h2>zustand</h2>
        <a href="https://www.npmjs.com/package/zustand">NPM</a>
        <section>
          <h3>Qué es:</h3>
          <p>Notificaciones tipo toast para React.</p>
        </section>
        <section>
          <h3>React</h3>
          <section>
            <h4>Instalación:</h4>
            <Code>{`
              npm i zustand
            `}</Code>
          </section>
          <section>
            <h3>Instalar Redux DevTools Chrome Extension</h3>
          </section>
          <section>
            <h4>Ejemplo completo:</h4>
            <Code>{`
              import { create } from "zustand"
              import { createJSONStorage, devtools, persist } from 'zustand/middleware'
              import type { DraftPatient, Patient } from "../types"
              import { v4 as uuidv4 } from 'uuid';

              type PatientState = {
                patients: Patient[]
                activeId: Patient["id"]
                addPatient: (data: DraftPatient) => void
                deletePatient: (id: Patient["id"]) => void
                getPatientById: (id: Patient["id"]) => void
                updatePatient: (data: DraftPatient) => void
              }

              function createPatient(patient: DraftPatient) : Patient {
                return {...patient, id: uuidv4()}
              }

              export const usePatientStore = create<PatientState>()(
                devtools(
                  persist<PatientState>(
                    (set) => ({
                      patients: [],
                      activeId: "",
                      addPatient: (data) => {
                        const newPatient = createPatient(data)
                        set((state) => ({
                          patients: [...state.patients, newPatient]
                        }))
                      },
                      deletePatient: (id) => {
                        set((state) => ({
                          patients: state.patients.filter(p => p.id !== id),
                          activeId: ""
                        }))
                      },
                      getPatientById(id) {
                        set(() => ({
                          activeId: id
                        }))
                      },
                      updatePatient(data) {
                        set((state) => ({
                          patients: state.patients.map(p => 
                            p.id === state.activeId ? { id: state.activeId, ...data } : p
                          ),
                          activeId: ""
                        }))
                      },
                    }),
                    {
                      name: "patient-storage",
                      // storage: createJSONStorage(()=>sessionStorage),
                      storage: createJSONStorage(()=>localStorage),
                    }
                  )
                )
              )
            `}</Code>
          </section>
        </section>
      </section>
      <section>
        <h2>react-toastify</h2>
        <a href="https://www.npmjs.com/package/react-toastify">NPM</a>
        <a href="https://fkhadra.github.io/react-toastify/introduction/">Documentacion</a>
        <section>
          <h3>Qué es:</h3>
          <p>Notificaciones tipo toast para React.</p>
        </section>
        <section>
          <h3>React</h3>
          <section>
            <h4>Instalacion:</h4>
            <Code>{`
              npm install --save react-toastify
            `}</Code>
          </section>
          <section>
            <h4>Ejemplo completo:</h4>
            <Code>{`
              import React from 'react';
              import { ToastContainer, toast } from 'react-toastify';
              import 'react-toastify/dist/ReactToastify.css';

              export default function ToastifyExample() {
                const notify = () => toast("¡Notificación sencilla!");

                return (
                  <div>
                    <button onClick={notify}>Mostrar notificación</button>
                    <ToastContainer />
                  </div>
                );
              }
            `}</Code>
          </section>
        </section>
      </section>
      <section>
        <h2>currency-codes / currency-symbol-map</h2>
        <a href="https://www.npmjs.com/package/currency-codes">NPM</a>
        <section>
          <h3>Qué es:</h3>
          <p>Un módulo de node.js para enumerar y trabajar con códigos de moneda basados en el estándar ISO 4217.</p>
        </section>
        <section>
          <h3>React</h3>
          <section>
            <h4>Instalacion:</h4>
            <Code>{`
              npm install currency-codes
              npm install currency-symbol-map 
            `}</Code>
          </section>
          <section>
            <h4>Ejemplo completo:</h4>
            <Code>{`
              import currencyCode from "currency-codes";

              iso4217Data: typeof currencyCode = currencyCode
            `}</Code>
            <Code>{`
              import getSymbolFromCurrency from "currency-symbol-map";
              import { useEffect } from "react"
              import { useStore } from "../store/useStore";

              export default function Home() {

                const { iso4217Data, options, setOptions } = useStore()

                const iso4217DataSorted = iso4217Data.data.sort((a,b) => a.currency.localeCompare(b.currency))

                useEffect(()=>{
                  console.log( iso4217DataSorted)
                },[])

                return (
                  <>
                    <section className="content_home">
                      <h2>Home</h2>
                      <section>
                        <h3>Options:</h3>
                        <section>
                          <label htmlFor="option_currency" >Choose your currency:</label>
                          <select
                            id="option_currency"
                            value={options.currency}
                            onChange={(e)=>{
                              setOptions("currency", e.target.value);
                              const [, code] = e.target.value.split('|');
                              setOptions("currencySymbol", getSymbolFromCurrency(code) || "");
                            }}
                          >
                            <option value="">---</option>
                            { iso4217DataSorted.map( (data,i) => (
                              <option
                                key={i}
                                value={\`\${data.currency}|\${data.code}\`}
                              >
                                {\`\${data.code} --- \${data.currency} --- \${getSymbolFromCurrency(data.code)}\`}
                              </option>
                            ))}
                          </select>
                        </section>
                      </section>
                    </section>
                  </>
                )
              }
            `}</Code>
          </section>
        </section>
      </section>
      <section>
        <h2>zod</h2>
        <a href="https://www.npmjs.com/package/zod">NPM</a>
        <a href="https://zod.dev/">Documentación oficial</a>
        <section>
          <h3>Qué es:</h3>
          <p> Librería de validación y tipado de datos para TypeScript/JavaScript.</p>
          <p>Permite definir esquemas y validar objetos de forma sencilla.</p>
        </section>
        <section>
          <h3>React</h3>
          <section>
            <h4>Instalación:</h4>
            <Code>{`
              npm install zod
            `}</Code>
          </section>
          <section>
            <h4>Ejemplo completo:</h4>
            <Code>{`
              import React, { useState } from 'react';
              import { z } from 'zod';

              // Definimos un esquema de validación
              const userSchema = z.object({
                name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
                age: z.number().min(18, "Debe ser mayor de edad"),
              });

              export default function ZodExample() {
                const [input, setInput] = useState({ name: "", age: 0 });
                const [error, setError] = useState<string | null>(null);

                const validate = () => {
                  const result = userSchema.safeParse(input);
                  if (!result.success) {
                    setError(result.error.errors[0].message);
                  } else {
                    setError(null);
                    alert("Datos válidos ✅");
                  }
                };

                return (
                  <div>
                    <h2>Ejemplo Zod</h2>
                    <input
                      placeholder="Nombre"
                      value={input.name}
                      onChange={(e) => setInput({ ...input, name: e.target.value })}
                    />
                    <input
                      type="number"
                      placeholder="Edad"
                      value={input.age}
                      onChange={(e) => setInput({ ...input, age: Number(e.target.value) })}
                    />
                    <button onClick={validate}>Validar</button>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                  </div>
                );
              }
            `}</Code>
          </section>
        </section>
      </section>
      <section>
        <h2>valibot</h2>
        <a href="https://www.npmjs.com/package/valibot">NPM</a>
        <a href="https://valibot.dev/">Documentación oficial</a>
        <section>
          <h3>Qué es:</h3>
          <p>Librería de validación de datos ligera y rápida, similar a Zod, pero más enfocada en rendimiento y esquemas simples para TypeScript/JavaScript.</p>
        </section>
        <section>
          <h3>React</h3>
          <section>
            <h4>Instalación:</h4>
            <Code>{`
              npm install valibot
            `}</Code>
          </section>
          <section>
            <h4>Ejemplo completo:</h4>
            <Code>{`
              import { object, string, number, parse } from "valibot"
              import type { InferOutput } from "valibot"

              const WeatherSchema = object({
                name: string(),
                main: object({
                  temp: number(),
                  temp_max: number(),
                  temp_min: number(),
                })
              })
              type Weather = InferOutput<typeof WeatherSchema>

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

                        Valibot
                        fetch(currentWeatherUrl)
                        .then(res => res.json())
                        .then(data => {
                          const result = parse(WeatherSchema, data)
                            if(!result) throw new Error("El tipo definido no concuerda con la informacion recibida.")
                            console.log(result.name + " " + result.main.temp_max + " " + result.main.temp_min)
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
        </section>
      </section>
      <section>
        <h2>react-router-dom</h2>
        <a href="https://www.npmjs.com/package/react-router-dom">NPM</a>
        <a href="https://reactrouter.com/en/main">Documentación oficial</a>
        <section>
          <h3>Qué es:</h3>
          <p>Librería para gestionar la navegación en aplicaciones React mediante enrutamiento declarativo.</p>
        </section>
        <section>
          <h3>React</h3>
          <section>
            <h4>Instalación:</h4>
            <Code>{`
              npm install react-router-dom
            `}</Code>
          </section>
          <section>
            <h4>Elementos principales:</h4>
            <section>
              <h5>BrowserRouter</h5>
              <p>Es el contenedor principal que habilita el enrutamiento en tu aplicación. Usa la API de historial del navegador para sincronizar la URL con la UI.</p>
              <Code>{`
                import { BrowserRouter } from "react-router-dom";

                export default function App() {
                  return (
                    <BrowserRouter>
                      {/* Aquí van tus rutas */}
                    </BrowserRouter>
                  )
                }
              `}</Code>
            </section>
            <section>
              <h5>Routes</h5>
              <p>
                Es un contenedor que agrupa todas las <code>Route</code>. Evalúa la URL
                actual y renderiza la primera ruta que coincide.
              </p>
              <Code>{`
                import { Routes, Route } from "react-router-dom";

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              `}</Code>
            </section>
            <section>
              <h5>Route</h5>
              <p>
                Define una ruta específica de la aplicación: recibe un <code>path</code> y
                el <code>element</code> que debe renderizarse si coincide con la URL.
              </p>
              <Code>{`
                <Route path="/contact" element={<Contact />} />
              `}</Code>
              <h5>Link</h5>
              <p>Se usa para navegar entre rutas sin recargar la página. Renderiza una etiqueta <code>&lt;a&gt;</code> pero controlada por React Router.</p>
              <Code>{`
                import { Link } from "react-router-dom";

                function Navbar() {
                  return (
                    <nav>
                      <Link to="/">Inicio</Link>
                      <Link to="/about">Acerca de</Link>
                    </nav>
                  )
                }
              `}</Code>
            </section>
            <section>
              <h5>NavLink</h5>
              <p>Igual que <code>Link</code>, pero permite aplicar estilos automáticamente cuando la ruta está activa. Útil para menús de navegación.
              </p>
              <Code>{`
                import { NavLink } from "react-router-dom";

                function Navbar() {
                  return (
                    <nav>
                      <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "active-link" : ""}
                      >
                        Inicio
                      </NavLink>
                      <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? "active-link" : ""}
                      >
                        Acerca de
                      </NavLink>
                    </nav>
                  )
                }
              `}</Code>
            </section>
          </section>
          <section>
            <h4>Hooks principales</h4>
            <section>
              <h5>useNavigate</h5>
              <p>Qué hace: permite navegar de forma programática (sin hacer clic en un {`<Link>`}).</p>
              <p>Uso típico: redirecciones después de una acción (login, guardar datos, etc.).</p>
              <Code>{`
                import { useNavigate } from "react-router-dom";

                function LoginButton() {
                  const navigate = useNavigate();

                  const handleLogin = () => {
                    // lógica de autenticación...
                    navigate("/dashboard"); // redirige a /dashboard
                  };

                  return <button onClick={handleLogin}>Iniciar sesión</button>;
                }
              `}</Code>
            </section>
            <section>
              <h5>useParams</h5>
              <p>Qué hace: obtiene los parámetros dinámicos de la URL.</p>
              <p>Uso típico: mostrar detalles de un recurso (ej: /user/:id).</p>
              <Code>{`
                import { useParams } from "react-router-dom";

                function UserProfile() {
                  const { id } = useParams(); // { id: "123" }
                  return <h2>Perfil del usuario con ID: {id}</h2>;
                }
              `}</Code>
            </section>
            <section>
              <h5>useLocation</h5>
              <p>Qué hace: devuelve información sobre la URL actual (pathname, search, hash).</p>
              <p>Uso típico: leer query strings o mostrar en qué página estás.</p>
              <Code>{`
                import { useLocation } from "react-router-dom";

                function LocationExample() {
                  const location = useLocation();
                  return (
                    <div>
                      <p>Ruta actual: {location.pathname}</p>
                      <p>Query string: {location.search}</p>
                    </div>
                  );
                }
              `}</Code>
            </section>
            <section>
              <h5>useMatch</h5>
              <p>Qué hace: compara la URL actual con un patrón de ruta.</p>
              <p>Uso típico: saber si la URL coincide con un path específico.</p>
              <Code>{`
                import { useMatch } from "react-router-dom";

                function CustomHighlight() {
                  const match = useMatch("/about");
                  return <p>{match ? "Estás en About ✅" : "No estás en About ❌"}</p>;
                }
              `}</Code>
            </section>
            <section>
              <h5>useRoutes</h5>
              <p>Qué hace: permite definir rutas como un objeto JS en lugar de usar {`<Routes>`}.</p>
              <p>Uso típico: cuando quieres una configuración de rutas centralizada.</p>
              <Code>{`
                import { useRoutes } from "react-router-dom";

                function AppRoutes() {
                  const routes = useRoutes([
                    { path: "/", element: <Home /> },
                    { path: "/about", element: <About /> },
                    { path: "/user/:id", element: <UserProfile /> },
                  ]);

                  return routes;
                }
              `}</Code>
            </section>
            <section>
              <h5>useNavigationType</h5>
              <p>Qué hace: indica cómo se llegó a la página actual (ej: POP, PUSH, REPLACE).</p>
              <p>Uso típico: analytics o debugging de navegación.</p>
              <Code>{`
                import { useNavigationType } from "react-router-dom";

                function NavigationLogger() {
                  const navType = useNavigationType();
                  return <p>Modo de navegación: {navType}</p>;
                }
              `}</Code>
            </section>
            <section>
              <h5>useOutlet</h5>
              <p>Qué hace: permite renderizar un componente hijo en una ruta anidada.</p>
              <p>Uso típico: layouts compartidos con contenido dinámico.</p>
              <Code>{`
                import { Outlet } from "react-router-dom";

                function DashboardLayout() {
                  return (
                    <div>
                      <h2>Panel</h2>
                      <Outlet /> {/* Aquí se renderiza la sub-ruta */}
                    </div>
                  );
                }
              `}</Code>
            </section>
            <section>
              <h5>useSearchParams</h5>
              <p>Qué hace: te da acceso a los parámetros de la query string (?key=value).</p>
              <p>Uso típico: filtros, paginación, búsquedas.</p>
              <Code>{`
                import { useSearchParams } from "react-router-dom";

                function SearchPage() {
                  const [searchParams, setSearchParams] = useSearchParams();
                  const query = searchParams.get("q");

                  return (
                    <div>
                      <p>Búsqueda: {query}</p>
                      <button onClick={() => setSearchParams({ q: "React" })}>
                        Buscar React
                      </button>
                    </div>
                  );
                }
              `}</Code>
            </section>
          </section>
          <section>
            <h4>Ejemplo completo:</h4>
            <Code>{`
              import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

              function Home() {
                return <h2>Home Page</h2>;
              }

              function About() {
                return <h2>About Page</h2>;
              }

              function Contact() {
                return <h2>Contact Page</h2>;
              }

              export default function App() {
                return (
                  <BrowserRouter>
                    <header>
                      <h1>Mi Aplicación</h1>
                      <nav>
                        <Link to="/">[Link] Home</Link>
                        <Link to="/about">[Link] About</Link>
                        <NavLink
                          to="/contact"
                          className={({ isActive }) => isActive ? "active" : ""}
                        >
                          [NavLink] Contact
                        </NavLink>
                      </nav>
                    </header>

                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                    </Routes>
                  </BrowserRouter>
                )
              }
            `}</Code>
          </section>
        </section>
      </section>
      <section>
        <h2>Headless UI</h2>
        <a href="https://www.npmjs.com/package/@headlessui/react">NPM</a>
        <a href="https://headlessui.com/">Headless UI Docs</a>
        <section>
          <h3>Qué es:</h3>
          <p>Librería de componentes sin estilos, creados por los autores de Tailwind CSS.  Proporciona la lógica y accesibilidad, pero tú decides los estilos (ideal con Tailwind).</p>
        </section>
        <section>
          <h3>React</h3>
          <section>
            <h4>Instalación:</h4>
            <Code>{`
              npm install @headlessui/react
            `}</Code>
          </section>
          <section>
            <h4>Ejemplo completo: Menu</h4>
            <Code>{`
              import { Menu } from '@headlessui/react';

              export default function ExampleMenu() {
                return (
                  <Menu>
                    <Menu.Button className="px-4 py-2 bg-blue-500 text-white rounded">
                      Opciones
                    </Menu.Button>
                    <Menu.Items className="mt-2 w-40 bg-white shadow-lg rounded">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={\`block w-full text-left px-4 py-2 \${active ? 'bg-blue-100' : ''}\`}
                          >
                            Perfil
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={\`block w-full text-left px-4 py-2 \${active ? 'bg-blue-100' : ''}\`}
                          >
                            Configuración
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                );
              }
            `}</Code>
          </section>
          <section>
            <h4>Ejemplo completo: Dialog (Modal)</h4>
            <Code>{`
              import { Dialog } from '@headlessui/react';
              import { useState } from 'react';

              export default function ExampleDialog() {
                const [isOpen, setIsOpen] = useState(false);

                return (
                  <>
                    <button 
                      onClick={() => setIsOpen(true)} 
                      className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                      Abrir Modal
                    </button>

                    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                      <div className="fixed inset-0 bg-black/30" />
                      <div className="fixed inset-0 flex items-center justify-center">
                        <Dialog.Panel className="bg-white p-6 rounded shadow-lg">
                          <Dialog.Title className="text-lg font-bold">
                            Título del Modal
                          </Dialog.Title>
                          <Dialog.Description>
                            Este es el contenido del modal.
                          </Dialog.Description>
                          <button 
                            onClick={() => setIsOpen(false)} 
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                          >
                            Cerrar
                          </button>
                        </Dialog.Panel>
                      </div>
                    </Dialog>
                  </>
                );
              }
            `}</Code>
          </section>
        </section>
        <section>
          <h3>Ventajas</h3>
          <ul>
            <li>Accesibilidad incorporada (roles ARIA y manejo de foco).</li>
            <li>Totalmente personalizable con Tailwind u otro CSS.</li>
            <li>Componentes listos para interacciones complejas (menús, modales, tabs, acordeones, etc.).</li>
          </ul>
        </section>
        <section>
          <h3>Desventajas</h3>
          <ul>
            <li>No trae estilos: requiere dar formato manualmente.</li>
            <li>Poca utilidad si buscas componentes listos como en Bootstrap o MUI.</li>
          </ul>
        </section>
      </section>
    </>
  )
}