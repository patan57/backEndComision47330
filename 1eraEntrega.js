class ProductManager{
    constructor() {
        this.products = [];
    }

    getProducts(){
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock){
        this.products.push({
            id: this.products.length + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        });
        console.log('Product added');
    }

    getProductById(){
        let Product = this.products.find (product => product.id === id);
        if (!id) {
            console.log('Product not found');
        }
        else {
            console.log('Product already exists');
        }
    }
    
}

let Products = new ProductManager();

products.addProduct('cartuchera', 'util escolar', 2000, 'no picture', 'a1b2c3', 15 );
products.addProduct('cuaderno', 'util escolar', 800, 'no picture', 'a1b2c3d4', 13 );

console.log(products.getProducts());
console.log(getProductById);