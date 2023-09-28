/*Funções em Javascript */

/* Existem 2 tipos de funções: 
- Reservadas pela linguagem
alert()
prompt()
console.log()

- Personalizadas
criadas pelo usuário, é necessário que sejam construídas utilizando a estrutura
function nomeDaFuncao(){

}

e em seguidas chamadas para serem executadas.

Em cada função há a presença dos parenteses() que podem estar vazios ou não.
o parenteses recebe um argumento. Quando este argumento é uma variavel, dizemos que ele
recebe um parametro.

argumento - qualuqer coisa dentro do parenteses
parametro - qualuqer coisa dentro do parenteses sendo uma variavel.

todo parametro é um argumento, até que se prove que ele é uma variavel.

*/


//função personalizada com PARAMETRO, pois se trata  de uma variavel
// Previamente declarada e que será utilizada no bloco de codigo

function saudacao(){
    console.log("Olá mundo");
} 

saudacao();

var nome;
function despedida(nome){
    console.log("Tchau, " + nome);
}

despedida("joao");

function soma(a,b){
    return a + b;
}

var resultado = soma(5,3);
console.log(resultado);

saudacao();