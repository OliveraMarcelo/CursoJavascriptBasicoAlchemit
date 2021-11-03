let anio = prompt('Ingrese un año : ', 1961);
let bisiesto;
if(anio % 4 != 0){
    bisiesto = false;  
}
else if(anio % 100 != 0){
    bisiesto = true;
}
else if (anio % 400 == 0) {
    bisiesto = true;
}
else {
    bisiesto = false;
}
if(bisiesto){
    alert('El año: ' + anio + ' es bisiesto')
}
else{
    alert('El año: ' + anio + ' no es bisiesto')
}