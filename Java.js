const form = document.getElementById('form-control');
const numControlInput = document.getElementById('num-control');
const errorMessage = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const numControl = numControlInput.value.trim();
  if (!validarNumeroControl(numControl)) {
    errorMessage.innerHTML = '<span id="error">Número de control inválido</span>';
  } else {
    errorMessage.innerHTML = '<span id="correcto">SÍ ES CORRECTO EL NÚMERO DE CONTROL 1. T. de Huejutla.</span>';
  }
  // Enviar formulario (si es necesario)
});

function validarNumeroControl(numControl) {
  // La expresión regular busca un número con el formato adecuado
  const regex = /^\d{2}(84)\d{4}$/;
  return regex.test(numControl); // Si el número coincide con el formato, regresa true
}








