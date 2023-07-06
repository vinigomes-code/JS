let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posicação ${pos} tem o valor ${valores[pos]}`)
}


for(let pos in valores) { // forma reduzida que serve só para vetor
    console.log(`A posicação ${pos} tem o valor ${valores[pos]}`)
}


//num.indexOf(7) : método retorna o índice (posição) de um valor especificado