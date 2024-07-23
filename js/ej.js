const meses=["enero","frebero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviemre","diciembre"]
console.log(meses)
document.write(`<h2>cantidad de meses del año ${meses.length}</h2>`)
document.write(`<ul>`)
    for(let i=0; i<  meses.length; i++    ){
    document.write(` <li> ${meses[i]} </li>`)}
    document.write(`</ul>`)