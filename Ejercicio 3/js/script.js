let num = parseInt(prompt('Ingrese un numero'));

function esPrimo(num){
    if (num <= 1){
        return (false);
    } else if (num % 2 == 0) {
        if (num == 2){
            return (true);
        }else{
            return (false);
        }    
    } else if (num % 3 == 0) {
        if (num == 3){
            return (true);
        }else{
            return (false);
        }    
    } else if (num % 5 == 0) {
        if (num == 5){
            return (true);
        }else{
            return (false);
        }    
    } else if (num % 7 == 0) {
        if (num == 7){
            return (true);
        }else{
            return (false);
        }    
    } else {
        return (true);
    }
}
let resultado = esPrimo(num);

console.log(resultado);
