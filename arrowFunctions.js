/* let sumar = (num1, num2) => num1+num2;

console.log(sumar(2,2));

let lista = [1,2,3,4,5];

lista.forEach(function(element){
    return console.log(element)
}) */

let ar2 = "Barcelona".split("");
let vocals = ["a","e","i","o","u"];

let ar4 = ar2.filter(lletra => vocals.includes(lletra)); //includes retorna true i quan el filter rep true, fica l'element parametric a l'array 
console.log(ar4)