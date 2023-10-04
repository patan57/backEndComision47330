const fs = require('fs');


class productManager{
    constructor(path) {
        this.path = path;
    }

    async addProduct(product){
        const {title,description,price,thumnail,code,stock} = product; 
        if(!title || !description || !price|| !thumnail|| !code|| !stock){
            throw new error ('Todos los campos son obligatorios')
        }
        const products = await getJSONFromFile(this.path);
        const id = products.length + 1;
        const newProduct = { id, title, description, price, thumnail, code, stock};
        products.push(newProduct);
        return saveJSONToFile(this.path, products);
    }

    getProducts(){
        return getJSONFromFile (this.path);
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

const existFile = async (path) => {
    try {
        await fs.promises.access(path);
        return true;
    } catch (error) {
        return false;
    }
};

const getJSONFromFile = async (path)=>{
if(!await existFile(path)) {
    return[];
}

let content;

try {
    content = await fs.promises.readFile(path, 'utf-8');
} catch (error) {
    throw new Error (`El archivo ${path} no tiene un formato JSON válido.`);
}
};

const saveJSONToFile = async (path, data) => {
    const content = JSON.stringify(data, null, '\t');
    try {
        await fs.promises.writeFile(path, content, 'utf-8'); 
    } catch (error) {
        throw new Error (`Èl archivo ${path} no pudo ser leido.`);
    }
};


const utiles = async () => {
    try {
        const productManager = new productManager('./utiles.json');
        await productManager.addProduct({
            title: 'Lápiz',
            description: 'gris',
            price: 150,
            thumbnail:'sin descripión',
            code: '123qwe',
            stock: 11,
        });
        await productManager.updateProduct();
        await productManager.unlink();
        const utiles = await productManager.get();
        console.log('estos son los útiles', utiles);
    } catch (error) {
        console.error('ERROR', error.message);
    }
};

utiles();