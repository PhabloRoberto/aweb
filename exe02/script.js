
function verificar () {
    var agora = new Date()
    let ano = agora.getFullYear()
    let nascimento = document.getElementById('nascAno')
    let res = document.getElementById('res')
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')


    if (nascimento.value.length == 0 || nascimento.value > ano){
        alert('Dados incorreto, preencha os dados corretamente.')

    } else {
        let fsex = document.getElementsByName('redsex')
        let idade = ano - Number(nascimento.value)
        let genero = ''
        

        if (fsex[0].checked) {
            //homem
            genero = 'homem'
            if (idade > 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'crianca-m.png')
                img.style.height = '200px'
            } else if (idade > 10 && idade < 18) {
                //adolencente
                img.setAttribute('src', 'adolencente-m.png')
                img.style.height = '200px'
            } else if (idade >= 18 && idade < 60) {
                //adulto
                img.setAttribute('src', 'adulto-m.png')
                img.style.height = '200px'
            } else {
                //idoso
                img.setAttribute('src', 'idoso-m.png')
                img.style.height = '200px'
            }
            
        } else if (fsex[1].checked) {
            //mulher
            gereno = 'mulher'
            if (idade > 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'crianca-f.png')
                img.style.height = '200px'
            } else if (idade > 10 && idade < 18) {
                //adolencente
                img.setAttribute('src', 'adolencente-f.png')
                img.style.height = '200px'
            } else if (idade >= 18 && idade < 60) {
                //adulto
                img.setAttribute('src', 'adulto-f.png')
                img.style.height = '200px'
            } else {
                //idoso
                img.setAttribute('src', 'idosa-f.png')
                img.style.height = '200px'
            }
        }
        res.innerHTML = `O gênero ${genero} a idade ${idade}`
        res.appendChild(img)
    }
}