let u = confirm("¿Todo esta bien?") 
let v = confirm("¿Pero estas seguro?")
// Cada variable guarda un tipo de dato
alert("La primera respuesta fue " + u + " y la segunda fue " + v)
// En este alert muestra los tipos booleanos que resultan a
// responder ok y cancel. ok sera true y cancel sera false
let z = prompt("Ingrese un color")
let w = prompt("Ingrese un color")
alert(z)
//En este caso devuelve el mismo valor que guarda la variable z
alert(w)
// si no ingresamos ningun valor devolvera null (nulo , nada)
alert("En el primer caso tenemos " + typeof(z) + " y en el segundo " + typeof(w) )
// Los tipos de valores que devuelve sera string y object ya que a nulo se le considera como un objeto