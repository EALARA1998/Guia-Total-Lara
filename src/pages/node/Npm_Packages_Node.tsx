import Code from "../../components/Code"

type Npm_Packages_NodeProps = {
  
}

export default function Npm_Packages_Node({}:Npm_Packages_NodeProps) {
  return (
    <>
      <h1>Paquetes de npm</h1>
      <a href="https://www.npmjs.com/">npm</a>
      <section>
        <h2>heroicons</h2>
        <a href="https://www.npmjs.com/package/heroicons">npm heroicons</a>
        <a href="https://heroicons.com/">HeroIcons</a>
        <a href="https://app.unpkg.com/@heroicons/react@2.2.0/files/24/outline">Heroicons Icons Name</a>
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
            <h4></h4>
            <Code>{`
              npm install --save react-toastify
            `}</Code>
          </section>
          <section>
            <h4></h4>
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
    </>
  )
}