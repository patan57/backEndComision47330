//setTimeOut
const rememberMe = (message, sec) => {
    const wait = sec * 200;
    console.log(`Estableciendo recordatorio para los proximos ${sec} segundos.`);
    setTimeout(() => {
    console.log(`Recordatorio: ${message}.`);
    }, wait);
    console.log(`Recordatorio establecido con éxito.`);
};

const message = `Debo repasar la clase anterior.`;

rememberMe(message,20);

//setInterval
const cuentaRegresiva = (seconds) => {
    let counter = seconds;
    console.log('Iniciamos la cuenta regresiva para el lanzamiento'); 
    const idInterval = setInterval(() => {
        console.log(`${counter}`);
        if(counter <= 0){
            console.log('Lanzamiento')
            clearInterval(idInterval);
        } else {
            counter--;
        }

    },1000)
};

cuentaRegresiva(10);