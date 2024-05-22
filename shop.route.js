// GET /
router.get('/', (req, res)=>{
    // Mostrando productos en memoria
    console.log(products);
    console.log("📢 Sirviendo la ruta '/'");
    res.render('shop', {shop: 'active'});
  });
  