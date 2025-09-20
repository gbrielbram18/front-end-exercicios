let peso = 0;

for (let count = 0; count <10; count+=1){
    peso = prompt(`nsira o peso da da pessoa ${count}`)
    pessoTotal = pessoaTotal + Number(peso);
    console.log(pessoTotal); 

}

let media = pessoTotal / 10;
console.log()