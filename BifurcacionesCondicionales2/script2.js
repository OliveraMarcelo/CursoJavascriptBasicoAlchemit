let anio = prompt('Ingrese un año' , 1)

let bisiesto = (anio % 4 != 0) ? false  : 
    (anio % 100 != 0) ?true :
    (anio % 400 == 0) ? true : false 


if(bisiesto){
    alert('El año '+ num +' es bisiesto.')
}
else{
    alert('El año '+ num +' no es bisiesto.')
}
