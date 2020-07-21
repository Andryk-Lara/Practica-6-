let a = parseInt(prompt('Ingrese un numero entero para A'));
let b = parseInt(prompt('Ingrese un numero entero para B'));

function divisible(a, b){
    if (a % b == 0){
        return (true);
    }else{
        return (false);
    }
}
let resultado = divisible(a, b);

console.log(resultado);