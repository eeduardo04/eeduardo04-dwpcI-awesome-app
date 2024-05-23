// Importando el modulo HTTP
import HTTP from HTTP;
// Importando express js
import express from express

// Creando una instancia de express
const app = express();

// Registrando el primer middleware
app.use((req, res, next)=>{
    console.log("📢 Middleware #1");
  });
// Creando servidor HTTP
const server = http.createServer(app);

//Establecer configuraciones del server
const PORT = 3000;
const IP = "0.0.0.0"

// Poniendo a trabajar el servidor
server.listem(PORT, IP, (err)->{
    // Verificamos si hay error 
    if(err) console.log("❌ Error al arrancar el server 😔");
    //
    console.log("🎉 Servidor escuchando en http://localhost:${PORT} 🎉"),
});

JavaScript: app.js


import shopRouter from './routes/shop.route.js';

// Importando el directorio raiz
import { ROOT_DIR } from './helpers/paths.js'



// Se registra el middleware del body-parser
app.use(express.urlencoded({ extended: true }));

// Se registra el middleware para el servidor
// de archivos estaticos
app.use(express.static(path.join(ROOT_DIR, 'public')));

// Se agrega ruta de administrador
app.use('/admin', adminRouter);
