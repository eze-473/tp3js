function analizarfrase(frase){
    if(frase === frase.toUpperCase()){
        return " la frase esta formada solo por mayusculas"
    }else if( frase === frase.toLowerCase()){
        return"la frase esta formada solo por minusculas"
    } else {
        return "La cadena está formada por una mezcla de mayúsculas y minúsculas.";
    }
}
const frase = prompt("ingrese una frase")
const resultado= analizarfrase(frase)
document.write(`${resultado}`)