const fs = require('fs');

function readFile() {
    const pathFile = './texto.txt';
    fs.readFile(pathFile, 'utf-8', (error, content) => {
        if (error) {
            console.log('Ocurrió un error durante la lectura:', error.message);
        } else {
            console.log('Acá el contenido:\n', content);
        }
    });
    
}

// readFile();

function writeFile() {
    const pathFile = './texto-de-salida.txt';
    const content = 'todo bien ¿y vos?.\n';
    fs.writeFile(pathFile, content, 'utf-8', (error) => {
        if (error) {
            console.log('Ocurrió un error durante la lectura', error.message);
        } else {
            console.log('Fue un éxito');
        }
    });
}

// writeFile();

function appendFile() {
    const pathFile = './texto-de-salida.txt';
    const content = 'muchas gracias por saludarme.\n';
    fs.appendFile(pathFile, content, 'utf-8', (error) => {
        if (error) {
            console.log('Ocurrió un error durante la actualización:', error.message);
        } else {
            console.log('fue un éxito');
        }
    });
}

// appendFile();

function unlinkFile() {
    console.log('[Sync] Borrado de archivos');
    console.log('Intentando borrar el archivo...');
    const pathFile= './texto-de-salida.txt';
    fs.unlink(pathFile, (error) => {
        if (error) {
            console.log('Ocurrió un error durante el borrado:', error.message);
        } else {
            console.log('Fue un éxito');
        }
    });
}

unlinkFile();