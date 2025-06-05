document.addEventListener('DOMContentLoaded', () => {
    const inscriptionForm = document.getElementById('inscriptionForm');

    // Función para manejar el "que salga el nombre cuando me ponga encima"
    const imageWrappers = document.querySelectorAll('.image-wrapper');
    imageWrappers.forEach(wrapper => {
        const imageName = wrapper.querySelector('.image-name');
        wrapper.addEventListener('mouseover', () => {
            imageName.style.opacity = '1'; // Mostrar el nombre
        });
        wrapper.addEventListener('mouseout', () => {
            imageName.style.opacity = '0'; // Ocultar el nombre
        });
    });

    if (inscriptionForm) {
        inscriptionForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita el envío por defecto del formulario

            // Recopilar datos del formulario
            const formData = {
                salutation: document.getElementById('salutation').value,
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                gender: document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '',
                email: document.getElementById('email').value,
                dob: document.getElementById('dob').value,
                address: document.getElementById('address').value
            };

            // Convertir el objeto JavaScript a una cadena JSON
            const formDataJSON = JSON.stringify(formData, null, 2); // 'null, 2' para un formato legible

            console.log("Datos del formulario en formato JSON:");
            console.log(formDataJSON);

            // Aquí puedes hacer algo con los datos JSON, por ejemplo:
            // 1. Enviarlos a un servidor (usando fetch o XMLHttpRequest)
            // 2. Guardarlos en el almacenamiento local (localStorage)
            // 3. Mostrarlos en la página (para demostración)

            alert('Formulario enviado! Revisa la consola para ver los datos JSON.');

            // Ejemplo de cómo mostrar los datos en la página (solo para demostración)
            const resultDiv = document.createElement('div');
            resultDiv.innerHTML = `<h3>Datos de Inscripción Recopilados (JSON):</h3><pre>${formDataJSON}</pre>`;
            inscriptionForm.parentNode.insertBefore(resultDiv, inscriptionForm.nextSibling);

            // Opcional: limpiar el formulario
            // inscriptionForm.reset();
        });
    }
});