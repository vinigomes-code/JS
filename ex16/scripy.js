var valor = document.getElementById('txtn')
var lista = document.getElementById('list')
var res = document.getElementById('res')
var list_num = []

function validar(num){
    if(num >= 1 && num <= 100 ){
        return true
    }else{
        false
    }
}

function verificar(num, list_num){
    var buscar = list_num.indexOf(num)
    if(buscar == -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    res.innerHTML = ''
    if(valor.value.length == 0){
        alert("Adicione um valor à caixa!")
    }else{
        if(validar(valor.value) && verificar(valor.value, list_num)){
            list_num.push(valor.value)
            var opt = document.createElement('option')
            opt.text = `Valor ${valor.value} adicionado`
            lista.appendChild(opt)
        }else{
            alert("Valor inválido ou já encontrado na lista.")
        }
    }
}

function finalizar(){
    var total = list_num.length
    if(valor.value.length == 0){
        alert("Adicione um valor à lista")
    }else{
        var Maior = list_num[0]
        var Menor = list_num[0]
        var soma = 0

        for(let pos in list_num){
            soma += Number(list_num[pos])
            if(Number(list_num[pos]) > Maior){
                Maior = list_num[pos]
            }
            if(Number(list_num[pos]) < Menor){
                Menor = list_num[pos]
            }
        }

        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${Maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${Menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${soma / total}</p>`
        
    }
}
