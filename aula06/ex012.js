var idade = 20
console.log(`sua idade é ${idade} anos.`)
if(idade < 16){
    console.log('Não vota')
}else if(idade < 18 || idade > 65){
    console.log('Vota por opção')
}else{
    console.log('Voto obrigatório')
}