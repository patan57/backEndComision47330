const fs = require('fs');

function readFile() {
    const pathFile = './texto.txt';
    const content = fs.readFileSync(pathFile, 'utf-8');
    
    console.log('contenido', content);    
}

// readFile();

function writeFile() {
    const pathFile = './texto-de-salida.txt';
    const content = 'todo bien ¿y vos?.\n';
    fs.writeFileSync(pathFile, content, 'utf-8');
}

// writeFile();

function appendFile() {
    const pathFile = './texto-de-salida.txt';
    const content = 'muchas gracias por saludarme.\n';
    fs.appendFileSync(pathFile, content, 'utf-8');
}

// appendFile();

function unlinkFile() {
    console.log('[Sync] Borrado de archivos');
    console.log('Intentando borrar el archivo...');
    const pathFile= './texto-de-salida.txt';
    fs.unlinkSync(pathFile);
    console.log('Finalizó el borrado del archivo');
}

// unlinkFile();

function handlerError() {
    console.log('[Sync] Manejo de errores al manipular archivos.');
    try {
        console.log('Intentando leer el contenido de un archivo...');
        const data = fs.readFileSync('./texto-de-salida.txt')
        console.log('Finalizó la lectura');
        console.log('Aca el contenido:\n', data);
    } catch (error) {
        console.log('Ha ocurrido un error:', error.message);
    }
}

handlerError();