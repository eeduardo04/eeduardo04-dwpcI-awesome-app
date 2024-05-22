// GET /
router.get('/', (req, res)=>{
    // Mostrando productos en memoria
    console.log(products);
    console.log("📢 Sirviendo la ruta '/'");
    res.render('shop', {shop: 'active'});
  });
  
  // GET /
router.get('/', (req, res)=>{
  // Mostrando productos en memoria
  console.log(products);
  console.log("📢 Sirviendo la ruta '/'");
  res.render('shop', {shop: 'active', docTitle:"Shop"});
});

// GET /
export const getProducts = (req, res)=>{
  // Mostrando productos en memoria
  console.log("📢 Sirviendo la ruta '/'");
  res.render('shop', { 
    shop: 'active', 
    docTitle:"Shop",
    viewStyle: '/css/product.css',
    isProductsListEmpty: products.length === 0,
    products
  });
}
