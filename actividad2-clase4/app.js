const fs = require ('fs');

const biteSize = str => Buffer.from(str).length;

const activity = async () => {
    try {
        const pathFile = './package.json';
        const contentFile = await fs.promises.readFile(pathFile, 'utf-8');
        const info = {
            str: contentFile,
            obj: JSON.parse(contentFile),
            size: biteSize(contentFile),
        }

        console.log('Esta es la información que tenemos:', info);

        const contentNewFile = JSON.stringify(info, null, 2);
        const pathNewFile = './info.json';
        await fs.promises.writeFile(pathNewFile, contentNewFile, 'utf-8');
        console.log('Todo listo!');

    } catch (error) {
        console.log('Ha ocurrido un error', error.message);
    }
}

activity();