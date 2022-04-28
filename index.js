let gpu = {precio: 175000};
let cpu = {precio: 57000};
let memorias = {precio: 36000};
let total = 0;
let menu = "Qué deseas comprar?\n"+
"1 - Una placa de video RTX 2070\n"+
"2 - Un procesador Ryzen 5600\n"+
"3 - Un kit de 2 memorias RAM Corsair de 3600MHz"


function opcionCorrecta(eleccion){
    while(eleccion < 1 || eleccion > 3 || isNaN(eleccion)){
        eleccion = parseInt(prompt('Ingresá una opción correcta \n' + menu));
    }
}

function elegir(eleccion){
    switch(eleccion){
        case 1:
             alert("El precio de la placa de video es $"+ gpu.precio);
             total = total + gpu.precio;
            break;
        case 2:
            alert("El precio del procesador es $"+cpu.precio);
            total = total + cpu.precio;
            break;
        case 3:
            alert("El precio de las memorias es $"+memorias.precio);
            total = total +memorias.precio;
            break;
        default:
            opcionCorrecta();
    }
    return eleccion,total;
}

function elegirBien(){
    while (agregarProds != 'si' || agregarProds != 'no'){
        agregarProds = prompt('Querés comprar algo más? \n Respondé con Si o No, porfavor.').toLowerCase();
    
        if(agregarProds === 'si' || agregarProds === 'no'){break;}
    }
    return agregarProds;
}

function terminar(){
    alert('El total es de $' + total)

let cuotas = parseInt(prompt('En cuantas cuotas lo querés hacer? tiene un interés del 12%'))

while(cuotas > 24 || isNaN(cuotas)){
    cuotas = parseInt(prompt("Solo se puede hasta 24 cuotas \n Reingresá la cantidad de cuotas"))
}

let precioFinal = (total*1.12)/cuotas

alert("En total serían "+ cuotas+ " cuotas de $" + Math.round(precioFinal));

alert('¡Hasta la próxima!')
}


alert('Bienvenido!');

let eleccion = parseInt(prompt(menu));


elegir(eleccion);

let agregarProds = prompt('Querés comprar algo más?').toLowerCase();

if (agregarProds === 'si'){
    while(agregarProds ==='si'){
        let eleccion = parseInt(prompt(menu))

        elegir(eleccion)

        agregarProds = prompt('Querés algo más?').toLowerCase();

        if(agregarProds === 'si'){
            let eleccion = parseInt(prompt(menu))

            elegir(eleccion);
        

            agregarProds = prompt('Se te ofrece algo más?').toLowerCase()

            if (agregarProds === 'si'){
            let eleccion = parseInt(prompt(menu))

            elegir(eleccion);
            terminar();
            agregarProds = false;
            if (!agregarProds){
            }
            } else if(agregarProds === 'no'){
                terminar();
            } else {
                elegirBien();
            }

        }else if(agregarProds === 'no') {
            terminar();
        }else {
            elegirBien();
            if(agregarProds === 'si'){
                let eleccion = parseInt(prompt(menu))
                
                 elegir(eleccion);
                        
                
                agregarProds = prompt('Se te ofrece algo más?').toLowerCase()
                
                    if (agregarProds === 'si'){
                        let eleccion = parseInt(prompt(menu))
                
                        elegir(eleccion);
                        terminar();
                        agregarProds = false;
                        if (!agregarProds){
                    }
                    } else if(agregarProds === 'no'){
                        terminar();
                    } else {
                        elegirBien();
                        if (agregarProds === 'si'){
                            let eleccion = parseInt(prompt(menu))
                    
                            elegir(eleccion);
                        } else if(agregarProds === 'no'){
                            terminar();
                        }
                    }
                
                }else if(agregarProds === 'no') {
                            terminar();
                }
        }
    }
} else if(agregarProds === 'no'){

terminar();

} else {
    elegirBien();

    if(agregarProds === 'si'){
        let eleccion = parseInt(prompt(menu))
        
         elegir(eleccion);
                
        
        agregarProds = prompt('Se te ofrece algo más?').toLowerCase()
        
            if (agregarProds === 'si'){
                let eleccion = parseInt(prompt(menu))
        
                elegir(eleccion);
                terminar();
                agregarProds = false;
                if (!agregarProds){
            }
            } else if(agregarProds === 'no'){
                terminar();
            } else {
                elegirBien();
                if (agregarProds === 'si'){
                    let eleccion = parseInt(prompt(menu))
            
                    elegir(eleccion);
                } else if(agregarProds === 'no'){
                    terminar();
                }
            }
        
        }else if(agregarProds === 'no') {
                    terminar();
        }
}



