function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12){
    //bom dia
    img.src = 'circular_image_2.png'
    document.body.style.backgroundColor = '#FEFEFE'
}else if(hora >= 12 && hora < 18){
    //boa tarde
    img.src = 'circular_image_1.png'
    document.body.style.backgroundColor = '#FF9902'
    
}else{
    //boa noite
    img.src = 'circular_image_3.png'
    document.body.style.backgroundColor = '#001B39'
    
}
}