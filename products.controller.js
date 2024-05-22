// Datos en memoria volatil
export const products = [];


// POST /admin/add-product
export const postAddProduct = (req, res) => {
  // Realizaremos la desestructuracion de
  // "name" de la petición
  const { title } = req.body;
  // Agregamos el dato en la base de datos
  products.push(title);
  // Redireccionando
  return res.redirect('/');
}
