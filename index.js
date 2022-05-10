let total = 0;

class Producto {
    constructor(id,nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}
const productos = []

productos.push(new Producto(1,'Placa de video RTX 3070',175000));
productos.push(new Producto(2,'Procesador Ryzen 5600', 57000));
productos.push(new Producto(3,'Kit x2 memorias Ram Corsair 3600MHz',36000));
productos.push(new Producto(4,'Motherboard X570 MSI', 40000));
productos.push(new Producto(5,'Fuente de poder 750W 80Plus GOLD',28000));


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

function displayPrecio(eleccion){
    alert("El precio de "+ productos[eleccion-1].nombre + " es $"+ productos[eleccion-1].precio)
    total = total + productos[eleccion-1].precio;
}


function elegir(eleccion){
    switch(eleccion){
        case 1:
             displayPrecio(eleccion);
            break;
        case 2:
            displayPrecio(eleccion);
            break;
        case 3:
            displayPrecio(eleccion);
            break;
        case 4:
            displayPrecio(eleccion);
            break;
        case 5:
            displayPrecio(eleccion);
            break;
        default:
            opcionCorrecta();
    }
}

function elegirBien(){
    while (agregarProds != 'si' || agregarProds != 'no'){
        agregarProds = prompt('Querés comprar algo más? \n Respondé con Si o No, porfavor.').toLowerCase();
    
        if(agregarProds === 'si' || agregarProds === 'no'){break;}
    }
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

let cardDeck = document.getElementById("card-deck")

  for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.className = "card bg-dark mb-3 text-center"
    contenedor.innerHTML = `
                    <div class="card-header">
                        ${producto.nombre}
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item list-group-item-action list-group-item-dark">ID: ${producto.id}</li>
                        <li class="list-group-item list-group-item-action list-group-item-dark">Precio: $${producto.precio}</li>
                    </ul>`;
    cardDeck.append(contenedor);}

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
                            terminar();
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
                    terminar();
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

let totalMostrado = document.createElement("div");
totalMostrado.innerHTML = `
<div class="card-header">
                        Total
                    </div>
<li class="list-group-item list-group-item-action list-group-item-dark">$${total}</li>
`
document.body.append(totalMostrado)
