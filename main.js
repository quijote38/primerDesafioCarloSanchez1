class ProductManager {
    constructor() {
      this.products = [];
    }
  
    static id = 0;
  
    addProduct(title, description, price, thumbnail, code, stock) {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].code === code) {
          console.log(`El código ${code} se repite`);
          break;
        }
      }
  
      const newProduct = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      if (!Object.values(newProduct).includes(undefined)) {
        ProductManager.id++;
        this.products.push({
          ...newProduct,
  
          id: ProductManager.id,
        });
      }else{
         console.log("Debe de llenar todos los campos") 
      }
    }
  
    getProduct() {
      return this.products;
    }
  
    siExiste(id) {
      return this.products.find((producto) => producto.id === id);
    }
  
    getProductById(id) {
      !this.siExiste(id)
        ? console.log("Not Found")
        : console.log(this.siExiste(id));
    }
  }
  
  const productos = new ProductManager();
  console.log(productos.getProduct());
  
  productos.addProduct(
    "Mochila Doite",
    "De alta montaña",
    120000,
    "imagenMochila",
    "ABC",
    20
  );
  productos.addProduct(
    "Carpa Montagne",
    "De alta montaña",
    200000,
    "imagenCarpa",
    "ABCD",
    20
  );
  productos.addProduct(
    "Saco de dormir Acadia",
    "De alta montaña",
    60000,
    "imagenMochila",
    "ABCDE",
    
  );
  
  console.log(productos.getProduct());
  
  
  productos.addProduct(
      "Saco de dormir Acadia",
      "De alta montaña",
      60000,
      "imagenMochila",
      "ABCD",
      20
    );
  
  console.log(productos.getProduct());
  
  productos.getProductById(1);
  productos.getProductById(8);