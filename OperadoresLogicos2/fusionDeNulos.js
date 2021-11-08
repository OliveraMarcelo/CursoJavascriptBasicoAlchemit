// Casos especiales con operador de fusion de nulos ??
// devuelve el primer valor que no sea null ni undefined
let a;
let b ="b"
let w = 77;

alert( a ?? b ??c ) // devuelve "b"

let d = null
let e;
let f = null

alert( d ?? e ?? f) // devuelve null ya que es el ultimo valor que mapea

let g = null
let h = 0;
let i = null

alert( g ?? h ?? i) // devuelve 0 