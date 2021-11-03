let nota = prompt('Ingrese una nota' , 0 )

let num = (nota == 10) ? alert('Sobresaliente') : 
                (nota >= 7) ? alert('Distinguido') :
                    (nota >= 5) ? alert('Bueno') :
                        (nota == 4) ? alert('Suficiente'): alert('Insufiente');