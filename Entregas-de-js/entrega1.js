class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProduct(product) {
    if (this.products.some((p) => p.code === product.code)) {
      throw new Error("El código del producto ya existe");
    }

    const newProduct = {
      id: this.generateProductId(),
      ...product,
    };

    this.products.push(newProduct);

    return newProduct.id;
  }

  generateProductId() {}
}

const productManager = new ProductManager();

productManager.addProduct({
  title: "Manzana",
  description: "Es una manzana roja",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
});

const products = productManager.getProducts();

console.log(products);
