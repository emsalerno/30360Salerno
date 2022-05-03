let total = 0;

const productos = [
    {nombre: "Placa de video RTX 3070", precio: 175000},
    {nombre: "Procesador Ryzen 5600", precio: 57000},
    {nombre: "Kit x2 memorias RAM Corsair 3600MHz", precio: 36000},
    {nombre: "Motherboard X570 MSI", precio:40000}]

productos.push({nombre:"Fuente de poder 750W 80Plus GOLD", precio:28000})

let menu = "Qué deseas comprar?\n"+
"1 - "+productos[0].nombre+"\n"+
"2 - "+productos[1].nombre+"\n"+
"3 - "+productos[2].nombre+"\n"+
"4 - "+ productos[3].nombre+"\n"+
"5 - "+ productos[4].nombre;



function opcionCorrecta(eleccion){
    while(eleccion < 1 || eleccion > 5 || isNaN(eleccion)){
        eleccion = parseInt(prompt('Ingresá una opción correcta \n' + menu));
    }
}

function elegir(eleccion){
    switch(eleccion){
        case 1:
             alert("El precio de la placa de video es $"+ productos[0].precio);
             total = total + productos[0].precio;
            break;
        case 2:
            alert("El precio del procesador es $"+productos[1].precio);
            total = total + productos[1].precio;
            break;
        case 3:
            alert("El precio de las memorias es $"+productos[2].precio);
            total = total + productos[2].precio;
            break;
        case 4:
            alert("El precio del motherboard es $"+productos[3].precio);
            total = total + productos[3].precio;
            break;
        case 5:
            alert("El precio de la fuente de poder es $"+productos[4].precio);
            total = total + productos[4].precio;
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



