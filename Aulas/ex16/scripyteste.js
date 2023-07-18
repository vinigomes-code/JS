var list_num = []

function adicionar(){
    var num = document.getElementById('txtn')
    var lista = document.getElementById('list')
    var res = document.getElementById('res')
    res.innerHTML = ""


    if(num.value.length == 0){
        alert("Adicione um valor à caixa!")
    }else if(num.value > 100 || num.value < 1){
        alert("Não pode valor maior que 100 ou menor que 1!")
    }else {
        var buscar = list_num.indexOf(num.value)
        if(buscar == -1){
            list_num.push(num.value)
            var item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado`
            lista.appendChild(item)  
        }else{
            alert("Não pode valor repetido!")
        }
        }
    }


function finalizar(){
    var total = list_num.length
    var res = document.getElementById('res')

    var text = document.createElement('p')
    text.innerHTML = `Ao todo, temos ${total} números cadastrados`
    res.appendChild(text)

    var Maior_valor = Math.max(...list_num);
    var Menor_valor = Math.min(...list_num);
    var text2 = document.createElement('p')
    var text3 = document.createElement('p')

    text2.innerHTML = `O maior valor informado foi ${Maior_valor}`
    text3.innerHTML = `O menor valor informado foi ${Menor_valor}`
    res.appendChild(text2)
    res.appendChild(text3)

    var soma = 0
    for(pos in list_num){
        soma = soma + Number(list_num[pos])
    }

    var text4 = document.createElement('p')
    text4.innerHTML = `Somando todos os valores, temos ${soma}`
    res.appendChild(text4)

    var text5 = document.createElement('p')
    text5.innerHTML = `A média dos valores digitados é ${soma / total}`
    res.appendChild(text5)
}




