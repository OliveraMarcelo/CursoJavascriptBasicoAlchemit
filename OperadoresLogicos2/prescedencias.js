let u = 7;// true
let v = 0;// false 
let w = 5;// true

let z =(u || v && w); // (7 || 0 && 5) -> (7 || 0) -> 7 
alert(z); // por mensaje 7 

let j = ((u || v)&& w) // ((7 || 0) && 5) ->  7 && 5 -> 5
alert(j) // muestra 5 por consola