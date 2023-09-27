const {writeFile, readFile} = require ('fs');

const filePath = './fecha.txt';

const today = new Date(); 

const content = `${today.toLocaleDateString()}${today.toLocaleTimeString()}`;

writeFile(filePath, content, 'utf-8', (error) => {
    if (error) {
        console.log('Ocurrio un error durante la escritura:' , error.message);
        return;
    }
    console.log('Finalizó la escritura.');

    readFile(filePath, 'utf-8', (error, contentFile) => {
        if (error) {
            console.log('Ocurrió un error durante la lectura:', error.message);
        } else {
            console.log('Acá se puede leer el contenido:\n', contentFile);
        }
    })
});