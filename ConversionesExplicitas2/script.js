//Conversiones a Tipos de datos numerico
//   let a = true;
//   let b = false;
//   let c = '                111             ';
//   let d = '                11 1             ';
//   let indef;
//   let nil = null;
let numCero = 0;
let numNoCero = -3;
let strVacio = "";
let strNoVacio = '0';
let indef;
let nil = null;


alert("Los valores convertidos de  \' numCero \'  y \'numNoCero \' son : " + Boolean(numCero) + " y "+ Boolean(numNoCero) +".");
alert("Los valores convertidos de  \'strVacio\' y \'strNoVacio\' son : " + Boolean(strVacio) + " y "+ Boolean(strNoVacio) +".");
//Porque NaN?Porque el espacio que hay entre los numeros hace que este cambie y devuelva NaN
alert("Los valores convertidos de indef y nil son : " + Boolean(indef) + " y "+ Boolean(nil) +".");

alert(numCero == strNoVacio)
alert(Boolean(numCero) == Boolean(strNoVacio))
//esto se debe  a que cualquier strirng no vacio se convierte en true,aun asi el simbolo 0, pero el numero 0 se convierte en false