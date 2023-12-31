class ProductManager{
    constructor() {
        this.products = [];
    }

    getProducts(){
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock){
        for(let i = 0 ;i < this.products.length; i++){
            if(this.products[i].code === code) { 
                throw new Error ('el producto ya existe')
            // console.log(`${code} está repetido`);
            // break;>>
            }
        }

        const newProduct = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        if(!Object.values(newProduct).includes(undefined)){
            this.products.push({...newProduct,
                id: this.products.length + 1               
            });
        }else{
            console.log('Revisa los campos obligatorios');
        }

        //alternativa
        // if (!stock || !code || ...) throw new Error("Faltan campos")
        return newProduct;

    }

    getProductById(id){
        const productById = this.products.find((product) => product.id === id)
        if (productById)  {
            return productById
            // console.log('Product not found');
        }
        else {
            throw new Error ('not found')
        }
    }
    
}

const utiles = new ProductManager();
utiles.addProduct('cartuchera','roja de dos pisos', 3500, 'sin imagen', 'a1b2c3', 15)
utiles.addProduct('birome','azul con tapa', 300, 'sin imagen', 'a2b2c3', 100)

console.log(utiles.getProducts());

utiles.addProduct('lapiz','estandar', 100, 'sin imagen', 'a2b2c3')

utiles.getProductById(3);
