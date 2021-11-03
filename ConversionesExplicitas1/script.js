let a = true;
let b = false;
let c = 3.1415927
let d = prompt("No ingrese nada ; click en Cancel")

alert("Los valores de a y b son: " + a + " y " + b + ".")
alert("Los valores de c y d son: " + c + " y " + d + ".")

alert("Los tipos de datos de a y b son : " + typeof(a) + " y " + typeof(b) + ".")
alert("Los tipos de datos de c y b son : " + typeof(c)+ " y " + typeof(d) + ".")
a = String(a)
b = String(b)
c = String(c)
d = String(d)
alert('Datos de convertidos a String')
alert('Los valores de a y b son: ' + a +' y '+ b + '.')
alert('Los valores de c y d son: ' + c +' y '+ d + '.')
alert(a + b + c + d)
