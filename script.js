// A

const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    
const findSpiderMan = superheroes.find((item) => {
    return item.name === 'Spiderman';
});

console.log(findSpiderMan) 

// B

let doubleArrayValues = [1, 2, 3];
const doubleArray = doubleArrayValues.map(function(value){
        return value *2;
});

console.log(doubleArray);


const doubleArray2 = function(array){
    return array.map(function(value){
        return value *2;
     })
}

console.log(doubleArray2([1, 2, 3]));

// C

const containsNumberBiggerThan10 = function(array){
    return array.some(value => {
        return value > 10; 
    })
}

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
console.log(containsNumberBiggerThan10([1,2,1,2,1,2]));

// D

const isItalyInTheGreat7 = function(array){
    return array.includes("Italy");
}

console.log(isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']))

// E

const tenfold = function(values) {
    values.forEach(value => {
        return value *10;
    });
    return values;
}

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))

// F

const isBelow100 = function(array){
    return array.every(value => {
        return value < 100; 
    })
}

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))

// G

const bigSum = function(array) {
    let result = array.reduce((total, item) => {
        return total + item;
    }, 0)
    return result;
}

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))

// Other approach

let bigSum2 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
let result = bigSum2.reduce((total, item) => {
    return total + item;
}, 0)

console.log(result);