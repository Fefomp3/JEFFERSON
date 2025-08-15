const botaoExibir = document.querySelector("#carlos"); 

botaoExibir.addEventListener("click", mary); 

function mary() { 
    alert("extraindo..."); 
const text = document.querySelector("#joana").value;

const campoResultado = document.querySelector("#maria");

const termosChave = proctext(text);

campoResultado.textContent = termosChave.join(", ");


}
function proctext(text) {
  let termo = text.split(/\P{L}+/u);

  return termo;
}
