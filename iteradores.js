// Iteradores de Arrays
const fruits = ['apple', 'melon', 'orange', 'cherry'];

// forEach
// Itera arrays
fruits.forEach(
    function(fruit){
        console.log(`Fruta ${ fruit }`)
    }
);
console.log('Arrow Function')
fruits.forEach(
    (fruit) => {
        console.log(`Fruta ${ fruit }`)
    }
);
console.log('Arrow Function Simplified')
fruits.forEach(fruit => console.log(`Fruta ${ fruit }`));

//map()
// regresa un arrary nuevo apartir del original
const fruitsMayus = fruits.map(
    fruit => {
        return fruit.toUpperCase();
    }
);
console.log('*'.repeat(20));
console.log(fruits);
console.log(fruitsMayus);

const numbers = [1,2,3,4,5]
const squares = numbers.map(num => num * num);
console.log(numbers);
console.log(squares);

// filter()
// crear unarray nuevo a partir de una condición
console.log('* '.repeat(15) + 'Filter')
const startsWithA = fruits.filter(fruit => fruit.endsWith('e'));
console.log(fruits);
console.log(startsWithA)

const pares = numbers.filter(num => num % 2 !== 0)
console.log(numbers);
console.log(pares);

// reduce()
// Retorna un único valor apartir del array original
const sumatoria = numbers.reduce((a, b) => a + b );
console.log(numbers);
console.log(sumatoria);

const factorial = numbers.reduce((a, b) => a * b);
console.log(numbers);
console.log(factorial);

// some()
// evakua cada elemento retona true si al menos
// una cumple una condición
console.log(numbers.some(num => num >= 5));
console.log(numbers.some(num => num > 6));

// every()
// regres trye si todos cumples
console.log(numbers.every(num => num > 0));
console.log(numbers.every(num => num > 4));

console.log(fruits);
console.log(fruits.join(' - '));