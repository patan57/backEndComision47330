const fs = require('fs');


class ProductManager{
    constructor(path) {
        this.path = path;
    }

    getProducts(){
        return getJSONFromFile (this.path);
    }

    async addProduct(product){
        const {title,description,price,thumnail,code,stock} = product; 
        if(!title || !description || !price|| !thumnail|| !code|| !stock){
            throw new error ('Todos los campos son obligatorios')
        }
        const products = await getJSONFromFile(this.path);
        const id = math.random();
        const newProduct = { id, title, description, price, thumnail, code, stock};
        products.push(newProduct);
        return saveJSONToFile(this.path, products);
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

     async updateProduct(id){
        const productById = this.products.appendFile((product) => product.id === id)
        if (productById) {
            
        }
        await fs.promises.appendFile('./manejoDeArchivos.txt', productById, 'utf-8');
    }
    
    async deleteProductById(id) {
        const productById = this.products.filter((product) => product.id != id)
        if (productById){
            return productById;
            await fs.promises.unlink('./manejoDeArchivos.txt', productById, 'utf-8')
        }
        else{
            throw new error ('no has eliminado nada')
        }
        
    }

    
    
}

const utiles = async () => {
    try {
        const ProductManager = new ProductManager('./utiles.json');
        await ProductManager.create({
            title: 'Regla',
            description: 'azul marca Pizzini',
            price: 300,
            thumbnail:'sin descripión',
            code: '123qwe',
            stock: 10,
        });
        const utiles = await ProductManager.get();
        console.log('estos son los útiles', utiles);
    } catch (error) {
        console.error('ERROR', error.message);
    }
};

utiles();