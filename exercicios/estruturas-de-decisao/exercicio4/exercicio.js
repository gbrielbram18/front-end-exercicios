/*


4. Para uma pessoa realizar um consórcio em um banco,
 é necessário que ela tenha 18 anos ou mais e possua renda mensal
  de 2 (dois) salários mínimos. Faça um script em JavaScript que
 solicite a idade e a renda mensal do usuário e exiba a
 mensagem se ele está apto ou não realizar um consórcio


*/



let pessoa = prompt();



if(pessoa >=18){
    alert("voce pode continuar o consorcio")
}else {
    alert("VOCE NAO TEM IDADE O SUFICIENTE")
}



let valor = prompt();

if( valor >= 3000){
    alert("voce tem dinheiro para o consorcio")
}else{
    alert("voce nao possui dinheiro suficiente")
}