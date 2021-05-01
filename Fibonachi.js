function fibonachi(num){
    let numeros=[0,1];
    if (num == 0){
        var no_number=[0]
        return no_number
    }
    for (let i = 2; i < num; i++) {
        numeros[i] = numeros[i - 2] + numeros[i - 1];
    }
    return numeros;
}



const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('program calculate secuence fibonachi, insert a number', number => {
    console.log(`Hey there ${number}!`);
    var lista=fibonachi(number)
    console.log(lista[lista.length-1]);
    readline.close();
  });