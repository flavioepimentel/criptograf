let output = document.getElementById("output");
let textarea = document.getElementById("textarea");

document.getElementById('criptografar').addEventListener('click', criptografer(textarea.value))
document.getElementById('descriptografer').addEventeListiner('click',descriptografer(textarea.value))

let img = document.querySelector('.imagem-texto')

// document.getElementById('descriptografer').onclick 
const matrizCript = [
  ["a", "ai"],
  ["e", "enter"],
  ["i", "imes"],
  ["o", "obey"],
  ["u", "ufat"],
];

function criptografer(texto) {
    const frase = texto.toLowerCase()
    let string = ''
    for (let i = 0; i < matrizCript.length; i++){
        if(frase.includes(matrizCript[i][0])){
            string =  frase.split(matrizCript[i][0]).join(matrizCript[i][1])
        }
    }
    console.log(string);
}

function descriptografer(texto) {
    const frase = texto.toLowerCase()
    let string = ''
    for (let i = 0; i < matrizCript.length; i++){
        if(frase.includes(matrizCript[i][0])){
            string =  frase.split(matrizCript[i][1]).join(matrizCript[i][0])
        }
    }
    console.log(string);
}

function controlC() {
    /* Capturando o campo do texto */
    var copyText = document.getElementById("output");
  
    /* Selecionando o texto */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copiando o texto */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alerta informando que o texto foi copiado */
    alert("Copied the text: " + copyText.value);
  }
