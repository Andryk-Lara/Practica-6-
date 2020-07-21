let a = parseFloat(prompt('Ingrese un primer numero para A'));
let b = parseFloat(prompt('Ingrese un segundo numero para B'));

function max(a, b){
    if (a > b){
        return ('A es mayor que B');
    }else if (a == b){
        return ('Ambos numeros son iguales');
    }else{
        return ('B es mayor que A');
    }
}

let resultado = max(a, b);
console.log(resultado);