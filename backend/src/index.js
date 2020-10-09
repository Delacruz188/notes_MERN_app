// Este modulo nos permite acceder a las variables de entorno que tenemos establecidas por medio del metodo .config de ese modulo
require('dotenv').config();
const app = require('./app');
require('./database');

const PORT = process.env.PORT;
// usemos una funcion main para iniciar el programa
// Node tiene acceso a nuestro sistema operativo pero por medio del objeto process y es como el objeto global del navegador y tiene acceso a tu sistema y lo hacemos de la siguiente manera process.env.VariableDelArchivoEnv
async function main() {
  // cuando pase esto
  await app.listen(5000);
  // luego pasara esto
  // pero los procesos del servidor no seran interrumpidos
  console.log(`Server on port ${PORT}`);
}

main();
