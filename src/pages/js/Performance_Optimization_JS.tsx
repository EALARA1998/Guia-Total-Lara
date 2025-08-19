import Code from "../../components/Code";

export default function Performance_Optimization_JS() {
  return (
    <>
      <h1>JavaScript — Performance y Optimización</h1>
      <p>Optimizar JavaScript implica mejorar la velocidad de ejecución, reducir consumo de memoria y evitar cuellos de botella. Para lograrlo es importante entender el motor de JS, el recolector de basura, el Event Loop y patrones de código eficientes. Esto incluye optimización de arrays, objetos, closures, memory leaks, hot paths y técnicas modernas de profiling.</p>

      <section>
        <h2>Motor de JavaScript y JIT</h2>
        <p>Los motores modernos (V8, SpiderMonkey, JavaScriptCore) usan compilación Just-In-Time (JIT) para convertir JS en código máquina rápido. Analizan tipos de datos, inline caching y optimizan funciones que se llaman frecuentemente (“hot functions”). La forma en que escribes código puede afectar la optimización.</p>
        <Code>{`
          function sum(a,b){ return a+b; }
          // JIT puede inlinear y optimizar esta función si se usa muchas veces
        `}</Code>
      </section>

      <section>
        <h2>Memory leaks y gestión de memoria</h2>
        <p>JS tiene recolector de basura (GC) que libera memoria de objetos no referenciados. Sin embargo, referencias persistentes, closures o listeners mal manejados pueden causar leaks.</p>
        <Code>{`
          // Leak por closure
          function createLeaker(){
            const hugeArray = new Array(1000000).fill('x');
            return function(){ console.log(hugeArray.length); }
          }
          const leak = createLeaker(); // hugeArray nunca se libera
        `}</Code>
        <p>Patrones comunes que provocan leaks: referencias globales, timers no limpiados, elementos DOM retenidos, listeners no removidos, caches sin límites.</p>
      </section>

      <section>
        <h2>Optimización de arrays</h2>
        <p>Los arrays pueden ser optimizados usando métodos nativos y evitando loops innecesarios.</p>
        <Code>{`
          const arr = [1,2,3,4,5];
          // Evitar:
          let sum = 0;
          for(let i in arr) sum += arr[i]; // for..in lento y enumerativo
          // Mejor:
          let total = 0;
          for(let i=0;i<arr.length;i++) total += arr[i];
          // O métodos funcionales nativos:
          const total2 = arr.reduce((acc,v)=>acc+v,0);
        `}</Code>
        <p>Evitar modificar arrays durante iteración, preferir métodos inmutables, y usar Typed Arrays para grandes volúmenes numéricos.</p>
      </section>

      <section>
        <h2>Optimización de objetos</h2>
        <p>JS engines optimizan objetos con formas ocultas (“hidden classes”). Evita cambiar dinámicamente la estructura del objeto después de creación.</p>
        <Code>{`
          // Optimizado
          const obj = { x:1, y:2 };
          obj.z = 3; // añadir después puede de-optimize

          // Mejor definir todas las propiedades al inicio
          const obj2 = { x:1, y:2, z:3 };
        `}</Code>
        <p>Evitar borrado frecuente de propiedades (<code>delete obj.prop</code>), usar null o undefined en su lugar.</p>
      </section>

      <section>
        <h2>Closures y contexto</h2>
        <p>Los closures retienen variables en memoria. Úsalos conscientemente y libera referencias si es posible.</p>
        <Code>{`
          function makeCounter(){
            let count = 0;
            return function(){ return ++count; }
          }
          const c = makeCounter(); // count vive mientras c exista
        `}</Code>
      </section>

      <section>
        <h2>Hot paths y micro-optimización</h2>
        <p>Identificar funciones críticas (hot paths) y optimizarlas puede mejorar mucho rendimiento. Algunas prácticas:</p>
        <ul>
          <li>Evitar operaciones complejas dentro de loops grandes.</li>
          <li>Evitar conversiones de tipo frecuentes.</li>
          <li>Minimizar creación de objetos temporales.</li>
          <li>Preferir operadores nativos rápidos sobre funciones genéricas.</li>
        </ul>
        <Code>{`
          // Mejor usar bucle simple que map+filter+reduce encadenados en loops muy grandes
        `}</Code>
      </section>

      <section>
        <h2>Timers y requestAnimationFrame</h2>
        <p>Para animaciones y tareas periódicas, preferir <code>requestAnimationFrame</code> sobre <code>setInterval</code> para sincronizar con repaint y ahorrar CPU. Limitar timers y limpiar con <code>clearTimeout</code>/<code>clearInterval</code> para evitar leaks.</p>
        <Code>{`
          function animate(){
            // código de animación
            requestAnimationFrame(animate);
          }
          animate();
        `}</Code>
      </section>

      <section>
        <h2>Debouncing y throttling</h2>
        <p>Eventos frecuentes (scroll, resize, input) pueden saturar la ejecución. Usar <strong>debounce</strong> y <strong>throttle</strong> para limitar llamadas.</p>
        <Code>{`
          // Debounce
          function debounce(fn, delay){
            let timer;
            return function(...args){
              clearTimeout(timer);
              timer = setTimeout(()=>fn.apply(this,args), delay);
            }
          }

          // Throttle
          function throttle(fn, limit){
            let lastCall = 0;
            return function(...args){
              const now = Date.now();
              if(now - lastCall >= limit){
                lastCall = now;
                fn.apply(this,args);
              }
            }
          }
        `}</Code>
      </section>

      <section>
        <h2>Profiling y herramientas</h2>
        <p>Usar DevTools (Chrome/Edge/Firefox) para:</p>
        <ul>
          <li>Performance tab: grabar perfiles de ejecución.</li>
          <li>Memory tab: detectar leaks, snapshots, retained objects.</li>
          <li>Coverage: identificar código no usado.</li>
          <li>Console.time / timeEnd para medir bloques de código.</li>
        </ul>
      </section>

      <section>
        <h2>Optimización de eventos y DOM</h2>
        <p>Reducir reflows y repaints, minimizar acceso a DOM en loops, usar fragmentos o innerHTML en bloque, delegar eventos y evitar listeners múltiples innecesarios.</p>
        <Code>{`
          // Delegación de eventos
          document.querySelector('#lista').addEventListener('click', e=>{
            if(e.target.tagName === 'LI') console.log(e.target.textContent);
          });
        `}</Code>
      </section>

      <section>
        <h2>Web Workers</h2>
        <p>Para operaciones pesadas, usar Web Workers para mover ejecución a hilo separado y no bloquear UI. Comunicación mediante postMessage y onmessage.</p>
        <Code>{`
          // worker.js
          self.onmessage = e => { self.postMessage(e.data*2); }

          // main.js
          const worker = new Worker('worker.js');
          worker.onmessage = e => console.log(e.data);
          worker.postMessage(10); // recibe 20
        `}</Code>
      </section>

      <section>
        <h2>Memory management patterns</h2>
        <ul>
          <li>Evitar globales innecesarias.</li>
          <li>Limpiar listeners y timers.</li>
          <li>Usar WeakMap/WeakSet para referencias que no deben impedir GC.</li>
          <li>Evitar closures reteniendo grandes estructuras de datos.</li>
        </ul>
      </section>

      <section>
        <h2>Optimización de loops y iteraciones</h2>
        <ul>
          <li>Prefiere <code>for</code> clásico sobre <code>for...in</code> para arrays.</li>
          <li>Evitar <code>forEach</code> si performance crítica; reduce overhead de callback.</li>
          <li>Minimizar operaciones dentro de loops, precalcular valores fuera.</li>
          <li>Usar <code>map/filter/reduce</code> solo si legibilidad y tamaño lo justifican.</li>
        </ul>
      </section>

      <section>
        <h2>Conclusión</h2>
        <p>La optimización en JS combina buenas prácticas de código, uso eficiente de arrays y objetos, gestión correcta de memoria, cuidado con closures y timers, profiling y patrones de ejecución eficientes. Entender cómo el motor interpreta y optimiza tu código permite escribir aplicaciones más rápidas, robustas y escalables.</p>
      </section>
    </>
  )
}