document.addEventListener('DOMContentLoaded', function(){
   let saudacao = document.querySelector('.titulo-header')
   let mensagem = document.querySelector('.mensagem')
   let imagem = document.querySelector('#img')
   let horas = new Date().getHours()
   let minutos = new Date().getMinutes()

   mensagem.innerHTML = `Agora são ${horas} horas e ${minutos} minutos`

   if(horas > 0 && horas < 12){
      saudacao.innerHTML = 'Bom dia!'
      imagem.src = 'img/manha.jpg'
      imagem.alt = 'foto manhã'
      document.body.style.backgroundColor = '#e2cd9f'
   } else if(horas >= 12 && horas < 18){
      saudacao.innerHTML = 'Boa tarde!'
      imagem.src = 'img/tarde.jpg'
      imagem.alt = 'foto tarde'
      document.body.style.backgroundColor = '#b9846f'
   } else {
      saudacao.innerHTML = 'Boa noite'
      imagem.src = 'img/noite.jpg'
      imagem.alt = 'foto noite'
      document.body.style.backgroundColor = '#04283e'
   }
})
