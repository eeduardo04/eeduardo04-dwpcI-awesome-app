
// Importando productos
import { products } from './admin.route.js';

// GET /admin/add-product
export const getAddProduct = function (req, res, next) {
  // Servimos el formulario
  console.log("📢 Sirviendo formulario...");
  res.render('add-product', {
    addProduct: `active`, 
    viewStyle: '/css/add-product.css',
    docTitle:"Add Product"});
  
  // GET /admin/add-product
router.get('/add-product', (req, res, next) => {
  // Servimos el formulario
  console.log("📢 Sirviendo formulario...");
  res.render('add-product', {
    addProduct: `active`, 
    viewStyle: '/css/product.css',
    docTitle:"Add Product"});
});

// GET /admin/add-product
router.get('/add-product', (req, res, next) => {
  // Servimos el formulario
  console.log("📢 Sirviendo formulario...");
  res.render('add-product', {
    addProduct: `active`, 
    viewStyle: '/css/add-product.css',
    docTitle:"Add Product"});
});

// Importando el enrutador de express
import { Router } from 'express';
// Importando funciones del controlador
import { getAddProduct, postAddProduct } from '../controllers/products.controller.js'



// POST /admin/add-product
  Router.post('/add-product', postAddProduct);
export default Router;
