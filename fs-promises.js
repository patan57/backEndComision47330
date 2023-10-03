const {promises: fs, writeFile} = require('fs');

async function readFile () {
    const pathFile = './texto.txt';
    const content = await fs.readFile(pathFile, 'utf-8');
    console.log('content', content);
    
}

readFile();

async function writeFile () {
    const pathFile = './texto-de-salida.txt';
    const content = 'todo bien y vos?.\n';
    await fs.writeFile(pathFile, content, 'utf-8');
    console.log('content', content);
    
}

writeFile();

//appendFile usa la misma lógica, solo que edita sobre lo existente
//con promises evitamos el callback hell