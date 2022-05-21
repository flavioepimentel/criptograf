let output = document.getElementById("output");
let textarea = document.getElementById("textarea");

const matrizCript = [
  ["a", "ai"],
  ["e", "enter"],
  ["i", "imes"],
  ["o", "obey"],
  ["u", "ufat"],
];

function criptograferFunction() {
  let texto = textarea.value;
  const frase = texto.toLowerCase();
  let string = "";

  for (let i = 0; i < matrizCript.length; i++) {
    if (frase.includes(matrizCript[i][0])) {
      string = frase.split(matrizCript[i][0]).join(matrizCript[i][1]);
    }
  }

  document.getElementById("imagem-texto").style.visibility = "hidden";
  document.getElementById("copy").style.visibility = "visible";
  document.getElementById("output").innerHTML = string;
}

function descriptograferFunction() {
  let texto = textarea.value;
  const frase = texto.toLowerCase();
  let string = "";

  for (let i = 0; i < matrizCript.length; i++) {
    if (frase.includes(matrizCript[i][0])) {
      string = frase.split(matrizCript[i][1]).join(matrizCript[i][0]);
    }
  }

  document.getElementById("imagem-texto").style.visibility = "hidden";
  document.getElementById("copy").style.visibility = "visible";
  document.getElementById("output").innerHTML = string;
}

function controlC() {
  /* Capturando o campo do texto */
  let copyText = document.getElementById("output");

  /* Copiando o texto */
  navigator.clipboard.writeText(copyText.value);

  /* Alerta informando que o texto foi copiado */
  alert("Text copied");
}
