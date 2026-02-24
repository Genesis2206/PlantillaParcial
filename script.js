
class ResultadoIMC extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `<div id="resultado">Ingrese sus datos para calcular el IMC.</div>`;
  }

  mostrarResultado(texto) {
    this.shadowRoot.querySelector('#resultado').textContent = texto;
  }
}

customElements.define('resultado-imc', ResultadoIMC);


const form = document.getElementById('formIMC');
const componenteResultado = document.querySelector('resultado-imc');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const unidad = document.getElementById('unidad').value;

  
  if (!peso || !altura || peso <= 0 || altura <= 0) {
    componenteResultado.mostrarResultado("⚠️ Datos inválidos. Ingrese valores correctos.");
    return;
  }

  let imc;
  if (unidad === "metric") {
    imc = peso / (altura * altura);
  } else {
   
    const pesoKg = peso * 0.453592;
    const alturaM = altura * 0.0254;
    imc = pesoKg / (alturaM * alturaM);
  }


  componenteResultado.mostrarResultado(`Su IMC es: ${imc.toFixed(2)}`);
});
