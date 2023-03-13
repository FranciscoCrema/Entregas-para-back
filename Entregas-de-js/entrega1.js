class ProductManager {
  constructor() {
    this.products = [];
    this.id = 1;
  }

  getProducts() {
    return this.products;
  }

  addProduct(product) {
    if (this.products.some((p) => p.code === product.code)) {
      throw new Error("El código del producto ya existe");
    }

    const newProduct = {
      id: this.id,
      ...product,
    };

    this.products.push(newProduct);
    this.id++;

    return newProduct.id;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);

    if (!product) {
      throw new Error(`No se encontró ningún producto con el id ${id}`);
    }

    return product;
  }
}

const productManager = new ProductManager();

const productId = productManager.addProduct({
  title: "Manzana",
  description: "Es una manzana roja",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
});

const productId2 = productManager.addProduct({
  title: "Banana",
  description: "Es una manzana roja",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc124",
  stock: 25,
});

const product = productManager.getProductById(productId);

const product2 = productManager.getProductById(productId2);

console.log(product, product2);
