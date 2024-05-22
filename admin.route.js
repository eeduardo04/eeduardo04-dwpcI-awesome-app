
// Importando productos
import { products } from './admin.route.js';

// GET /admin/add-product
router.get('/add-product', (req, res, next) => {
    // Servimos el formulario
    console.log("📢 Sirviendo formulario...");
    res.render('add-product', {addProduct: `active`});
  });
  