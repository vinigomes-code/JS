let num = [5, 8, 2, 9, 3]
// INDEX:  0  1  2  3  4
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)

// fruits.indexOf("Apple", 3); procurar o valor "Apple" apartir do index 3

if(pos == -1){
    console.log("O valor não foi encontrado")
}else {
    console.log(`O valor está na posição ${pos}`)
}



/*let num = [] : declarar vetor
num[3] = 6 : adicionar valor ao um index do vetor
num.push(7) : adicionar valor ao ultimo lugar no vetor
num.length : descobrir o tamanho do vetor 
num.sort() : colocar em ordem crescente*/

