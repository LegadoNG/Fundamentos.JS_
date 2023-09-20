// Funciones de Orden Superior
// High Order Functions
// Funciones que reciben como parametros
// màs funciones

const myFunctionWhithBigName = () =>{
    console.log('Funcion Inicial');
}

console.log(myFunctionWhithBigName);
myFunctionWhithBigName();

const myFun =  myFunctionWhithBigName;
myFun();

const funOne = () => {
    console.log('Ejecuta Función Uno');
}

const funTwo = (nombre) =>{
    console.log("hi " + nombre);
    console.log("Ejecuta Función Dos");
}

funOne();
funTwo('Lau');

const funThree = (otherFunction) =>{
    console.log('Inicia Función tres');
    otherFunction();
    console.log('Termina Función Tres');
}

funThree(funOne);
funThree(() => console.log('Función de Flecha'));