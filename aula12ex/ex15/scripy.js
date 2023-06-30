function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //criar elemento html
        img.setAttribute('id', 'foto') // Atribuir um parametro e um valor dele
        if(fsex[0].checked){// checked: marcado
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/bebe_m.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/jovem_m.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/adulto_m.png')
            }else{
                //Idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/bebe_f.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/jovem_f.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/adulto_f.png')
            }else{
                //Idoso
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // adicionar elemento
    }
}