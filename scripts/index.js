// Falta terminar mais já consegui implementar bastante coisa.

//variaveis e elementos criados
const noteContainer = document.querySelector('.noteContainer');
const paginas = document.querySelector('.paginas')
const note = document.querySelector('.note');
const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');
let x = 0;
let index = 0;
let interval;
let currentCaracter = 0;
let p = document.createElement('p')
let alternativas = document.createElement('ol')
p.style.position = "absolute"
p.style.top = "20px"
p.style.left = "20px"
p.textContent = ""
p = noteContainer.appendChild(p);
alternativas = noteContainer.appendChild(alternativas)
const perguntas = [
  "No anime, quantas vezes Misa Amane fez um acordo para obter os olhos de Shinigami?"
  ,"Após a morte de L, qual o nome dos personagens que o sucederam na investigação?", 
  "Quantas pessoas criaram a obra original?",
  "Quantos Kiras existiram no anime?", 
  "Qual o nome do prisioneiro que o L usa como dublê no anime?",
  "Qual a nacionalidade do L?",
  "Quem matou o L?",
  "Em que episódio o pai de Kira morreu?",
]
const value = pertguntas.indexOf(1); //validação
//eventos de click
btn.addEventListener('click',abrirLivro)
btn2.addEventListener('click',mudarPagina)


//funções
function abrirLivro(){
  note.style.animation = "mudarPagina 1s forwards"
  interval = setInterval(()=>{escrever(perguntas[x])},50);
  btn2.disabled = false
  btn.disabled = true;
}

function mudarPagina(){
  realizaEscrita()
  paginas.style.background = "white"
  if(x<perguntas.length){
  var proxPag = paginas.cloneNode(true);
  paginas.style.animation = "mudarPagina 1s forwards"
  paginas.style.zIndex = "100"
  
  noteContainer.appendChild(proxPag)
  proxPag.style.animation = "mudarPagina 1s"
   setTimeout(()=>{
    noteContainer.removeChild(proxPag)
    paginas.style.background = "#e5e5e5"
  },1000
  )
}
if(x == perguntas.length -1) {
  paginas.style.background = "#c4c4c4"
  btn2.disabled = true;
}
}

const escrever = (frase)=>{
  let currentCaracter = frase.slice(0,index++)
  p.textContent = currentCaracter
}

function realizaEscrita(){
  clearInterval(interval)
  index = 0;
  x++
  interval = setInterval(()=>{escrever(perguntas[x])},50);
}
