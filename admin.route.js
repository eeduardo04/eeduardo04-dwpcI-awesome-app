// Creando una instancia del enrutador de express
const router = Router();
// Creando datos en la memorian volatil
export const products = [];

// Creando una instancia del enrutador de express
const router = Router();

// Importando productos
import { products } from './admin.route.js';

// GET /admin/add-product
router.get('/add-product', (req, res, next) => {
    // Servimos el formulario
    console.log("📢 Sirviendo formulario...");
    res.render('add-product', {addProduct: `active`});
  });
  