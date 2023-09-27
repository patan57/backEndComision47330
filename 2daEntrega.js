const fs = require('fs');

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
            console.log(`${code} está repetido`);
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
        }

        if(!Object.values(newProduct).includes(undefined)){
            this.products.push({...newProduct,
                id: this.products.length + 1               
            });
        }else{
            console.log('Revisa los campos obligatorios');
        }

    }

    getProductById(id){
        if (!this.products.find((product) => product.id === id))  {
            console.log('Product not found');
        }
        else {
            console.log('Product already exists');
        }
    }
    
}

const utiles = new ProductManager();
utiles.addProduct('cartuchera','roja de dos pisos', 3500, 'sin imagen', 'a1b2c3', 15)
utiles.addProduct('birome','azul con tapa', 300, 'sin imagen', 'a2b2c3', 100)

console.log(utiles.getProducts());

utiles.addProduct('lapiz','estandar', 100, 'sin imagen', 'a2b2c3')

utiles.getProductById(3);
