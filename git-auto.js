import { execSync } from 'child_process';
import readline from 'readline';

// Crear interfaz de lectura para el input del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para ejecutar comandos y mostrar salida sincronizada
function runCommand(command) {
  try {
    const output = execSync(command, { stdio: 'inherit' });
    return output;
  } catch (error) {
    console.error(`❌ Error ejecutando: ${command}`);
    process.exit(1);
  }
}

// Preguntar por la URL del repositorio remoto y mensaje de commit
rl.question('🔗 Ingresa la URL del repositorio de GitHub (o deja vacío para mantener el actual): ', (url) => {
  if (url) {
    runCommand(`git remote set-url origin ${url}`);
    console.log(`✅ Remoto actualizado: ${url}`);
  }

  rl.question('📝 Escribe el mensaje del commit: ', (commitMessage) => {
    console.log('\n🚀 Ejecutando comandos Git...\n');

    runCommand('git pull origin master'); // Asegúrate de que tu rama se llama "master"
    runCommand('git add .');
    runCommand(`git commit -m "${commitMessage}"`);
    runCommand('git push origin master');

    console.log('\n✅ ¡Cambios enviados a GitHub con éxito!');
    rl.close();
  });
});
