function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'meninocrianca.webp')
            }else if(idade < 18){
                //jovem
                img.setAttribute('src', 'meninojovem.webp')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'meninoadulto.webp')
            }else{
                //idoso
                img.setAttribute('src', 'meninoidoso.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'meninaciranca.webp')
            }else if(idade < 18){
                //jovem
                img.setAttribute('src', 'meninajovem.webp')
            }else if(idade < 50){
                //adulta
                img.setAttribute('src', 'meninaadulta.webp')
            }else{
                //idosa
                img.setAttribute('src', 'meninaidosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}