// Intento de interacciones con los div de descuento

document.getElementById('cuadro80').addEventListener("mouseover",divColor1)
document.getElementById('cuadro80').addEventListener("mouseout",divColorBlanco)


document.getElementById('cuadro50').addEventListener("mouseover",divColor2)
document.getElementById('cuadro80').addEventListener("mouseout",divColorBlanco)

document.getElementById('cuadro15').addEventListener("mouseover",divColor3)
document.getElementById('cuadro80').addEventListener("mouseout",divColorBlanco)


function divColorBlanco(){

document.getElementById('cuadro80').style.backgroundColor = null
document.getElementById('cuadro50').style.backgroundColor = null
document.getElementById('cuadro15').style.backgroundColor = null
}

function divColor1(){

//document.getElementById('cuadro80')
//let valorCuadro80 = document.getElementById('cuadro80').value
document.getElementById('cuadro80').style.backgroundColor = "#85C1E9"

}

function divColor2(){
    
//let valorCuadro50 = document.getElementById('cuadro50').value
document.getElementById('cuadro50').style.backgroundColor = "#82E0AA"
        
}

function divColor3(){
    
//let valorCuadro15 = document.getElementById('cuadro15').value
document.getElementById('cuadro15').style.backgroundColor = "#F0B27A"

}

//////////////////////-----------------------------------------///////////////////////
//let estudiante = document.getElementById('estudiante').textContent.value
//let trainee = document.getElementById('trainee').textContent.value
//let junior = document.getElementById('junior').textContent.value



//console.log(cantEntrada);

// let ticket = 200

//console.log(valorCategoria)

// let totalCalculado = "";

// switch (total) {
//     case total1:
//     cantidadEntrada*estudiante = total    

//         break;

//     case total2:
//     cantidadEntrada*trainee = total

//         break;

//     case total3:
//     cantidadEntrada*junior = total

//         break;
// }

// let descuento80 = ticket * 0.80
// let descuento50 = ticket * 0.50
// let descuento15 = ticket * 0.15

// console.log(cantEntrada);
// console.log(valorCategoria);
// console.log(ticket);




function calcularTotal(){

    let ticket = 200
    console.log("El valor del ticket sin descuento es de: $" + ticket + ".-")
    let cantEntrada = document.getElementById('cantidadEntrada').value;
    cantEntrada = parseInt(cantEntrada);

    let valorCategoria = document.getElementById('categoria').value;
    valorCategoria = parseFloat(valorCategoria);
    //console.log(valorCategoria)
    //var totalCalculado = "";
    //totalCalculado = parseInt(totalCalculado);
    
    let subTotal = ticket * valorCategoria;
    console.log("El valor del ticket (por unidad) con la categoría seleccionada es de: $" + subTotal + ".-");
    let total = subTotal * cantEntrada

    console.log("El total por " + cantEntrada + " personas sería: $" + total + ".-");
    document.getElementById('totalCompra').textContent = "Total a Pagar: $" + total
    
    // if (valorCategoria==0.80) {
    //     //case "0.80":
            
    //     totalCalculado = subTotal * (ticket*0.80)

    //     //totalCalculado = parseInt(totalCalculado)
        
    //     console.log(totalCalculado)
    //     document.getElementById('totalCompra').textContent = "Total a Pagar: $" + totalCalculado

    // }

    // if (valorCategoria==0.50){

    //     totalCalculado = subTotal * (ticket*0.50)

    //     //totalCalculado = parseInt(totalCalculado)

    //     console.log(totalCalculado)
    //     document.getElementById('totalCompra').textContent = "Total a Pagar: $" + totalCalculado

    // }

    // if (valorCategoria==0.15){

    //     totalCalculado = subTotal*(ticket*0.15)

    //     //totalCalculado = parseInt(totalCalculado)
        
    //     console.log(totalCalculado)
    //     document.getElementById('totalCompra').textContent = "Total a Pagar: $" + totalCalculado

    // }
    // let totalCalculado = cantEntrada*(ticket*valorCategoria)

    // totalCalculado = parseInt(totalCalculado)

    // console.log(totalCalculado)
    // document.getElementById('totalCompra').textContent = `Total a Pagar: \$${totalCalculado}`

    
    //     switch (valorCategoria) {

    //     case estudiante:
        
    //     document.getElementById('totalCompra').textContent.value = total;
    //     console.log(total)

    //         break;
    
    //     case trainee:
    //     document.getElementById('totalCompra').textContent = total
    //     console.log(total)
    
    //         break;
    
    //     case junior:
    //     document.getElementById('totalCompra').textContent = total
    //     console.log(total)
    
    //         break;
    // }
    
}