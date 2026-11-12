// Simulación de envío de formularios (Entrega 1: sin backend).
// Cada formulario con data-simulado muestra un mensaje de confirmación accesible.
document.querySelectorAll('form[data-simulado]').forEach((form) => {
  const estado = form.querySelector('[data-estado]');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    estado.textContent = form.dataset.exito;
    estado.hidden = false;

    // Vaciamos los campos sensibles o ya enviados
    form.querySelectorAll('input[type="password"], textarea').forEach((campo) => {
      campo.value = '';
    });
    if (form.dataset.limpiar === 'todo') form.reset();
  });
});
