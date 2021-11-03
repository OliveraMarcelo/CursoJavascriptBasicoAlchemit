let num = prompt('ingrese un numero' , 1)

let esPar = (num % 2 ==0) ? true  : false

if(esPar){
    alert('El numero '+ num +' es par.')
}
else{
    alert('El numero '+ num +' es impar.')
}
