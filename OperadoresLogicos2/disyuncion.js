// Casos especiales con operador de disyuncion OR ||
// Devuelve el primer valor que se true
let u = ""; //false
let v = "a" //true
let w = "b" //true


// el operador || devuelve el primer valor true
alert(u || v || w);  
// muestra por alerta w ,
// porque primero realiza la disyuncion entre u y v devuelve true osea 7  
// porque devuelve el primer valor true

let a = "" // false
let b = "" // false
let c = "b" // true


// ("" || "" || "b" ) -> (false || false || true)
alert(a || b || c); // muestra b


let e = 0
let d = ""
let f = "b"

// -> (false || false || true)
alert(e || d || f) // muestra b



let g = null;
let h = "";
let i = "z";

 // -> (false || false || true)
alert(g || h || i) // muestra z



let j = null // false
let k = "" // false
let l = null // false

alert( j || k || l) //muestra el ultimo valor que se evalua ,el cual es l = null
