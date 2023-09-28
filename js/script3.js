var numero = prompt("Digite a tabuada que deseja: ")

for (contador = 0; contador <= 100; contador = contador + 1){
    var resultado = numero * contador;
    alert(numero + " x " + contador + " = " + resultado);
}