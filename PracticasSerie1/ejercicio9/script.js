let limite = 3000
function numerosParesStrings(limite) {
    let numeropar;
    let transformacion;
    for(let i = 0; i <= limite ; i++)
    {
        if(i % 2 == 0){
            numeropar =  i
            transformacion = String(numeropar)  
                    console.log(transformacion)

        }
    }
    return transformacion
}
let NumerosStrings = numerosParesStrings(limite)



console.log(numerosParesStrings(limite))



