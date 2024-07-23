function tablademultiplicar(numero){
    resultado =""
for(let i=1; i<=10; i++){
    resultado += `${numero} x ${i} = ${numero*i}<br>` 
}
return  resultado
}
const numero = prompt("Ingrese un número para ver su tabla de multiplicar:");
const tabla = tablademultiplicar(numero);
document.write(tabla);