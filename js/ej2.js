function solicitarciudades(){
    let ciudades =[]
    let ciudade
    while(true){
        ciudad = prompt("Ingrese el nombre de una ciudad (o presione cancelar para finalizar):");
        if(ciudad=== null){
            break}
            ciudades.push(ciudad);  }
      
    return ciudades
}


let ciudades= solicitarciudades()
ciudades[2] = "barcelona"
ciudades.push("paris")
document.write(`arreglo de ciudades ${ciudades}`)
document.write(`<h2>"Longitud del arreglo:", ${ciudades.length}</h2>`)
document.write(`<ul>`)
for(let i=0; i<  ciudades.length; i++    ){
document.write(` <li> ${ciudades[i]} </li>`)}
document.write(`</ul>`)
