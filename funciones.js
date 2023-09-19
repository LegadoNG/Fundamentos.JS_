//Funciones en Javascript
/*
funcion nombre(params){
    body function
}
const nombre = function (params){
    body function
}
*/
// Funciones sin parametros y sin retrnos 
function saludo(){
    console.log('Heloooo!');
}
saludo();

//Funciones con parametro
const saludaA = function(name){
    console.log('Hola' + name);
}
saludaA('Clark Kent');

// Funciones con parametros y con retorno 
const fact =  function (num) {
    if (num == 0 ) return 1;
    return fact(num -1) * num;
}
const result = fact(5);
console.log(result);


//Arrow Functions o funciones de flecha
//sin parametros y sin retornos
const saludaEnChino = () => {
    console.log('Ni Hao');
}
saludaEnChino();

//con un parametro sin retorno 
const mayuscula = (word) => {
    console.log(word.toUpperCase());
}
mayuscula('Hola');

const minuscula = word => {
    console.log(word.toLowerCase());
}
minuscula('HELO');


// Dos o mas parametros y con retorno 
const fullName = (firstName, lastName) => {
    return firstName + ' ' + lastName;
}
const nombreCompleto = fullName('Bruce', 'Wayne');
console.log(nombreCompleto);

// Sin el return es la unica linea se puede simplificar
const duplica = num => num * 2;
const doble = duplica(36);
console.log (doble);

/*function duplica(num){
    return num * 2;}
*/
//Funciones con parametros opcionales 
const welcomeToMexico = (user = 'Invitado') => {
    console.log(`Bienvenido a Mexico ${ user }`)
}

welcomeToMexico();
welcomeToMexico("Batman");

//parametros con nombre 
const welcomeToUtt = ( user = 'Invitado',
                       city = 'Mexico') => {
    console.log('Bienvenido ${ user} de ${ city }')
}

welcomeToUtt();
welcomeToUtt('Bruce Wayne', 'Gotham');
welcomeToUtt(city = 'Metropolis', user = 'Superman');