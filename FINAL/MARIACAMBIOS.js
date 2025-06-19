document.addEventListener('DOMContentLoaded', () => {

    // 1. Datos de las categorías que son objetos con nombre y edades
    const categoriasGimnasia = [
        {
            "nombre": "baby",
            "edades": "1-2 años"
        },
        {
            "nombre": "premini",
            "edades": "3-5 años"
        },
        {
            "nombre": "Prebenjamín",
            "edades": "6-7 años"
        },
        {
            "nombre": "Benjamín",
            "edades": "8-9 años"
        },
        {
            "nombre": "Alevín",
            "edades": "10-11 años"
        },
        {
            "nombre": "Infantil",
            "edades": "12-13 años"
        },
        {
            "nombre": "Junior",
            "edades": "14-15 años"
        },
        {
            "nombre": "Senior",
            "edades": "16 años o mas "
        }
    ];

    // 2. Cargar datos de Categorías en la tabla
    // Seleccionamos el tbody de la tabla donde se añadirán las filas
    const tablacategorias = document.querySelector('#tabla-categorias tbody');

    // Comprobamos si la tabla existe antes de continuar
    if (tablacategorias) {
        // Recorro to el array y lo va poniendo en filas y celdas
        categoriasGimnasia.forEach((categoria, index) => {
            const row = tablacategorias.insertRow(); // Crea una nueva fila
            row.insertCell().textContent = index + 1;
            row.insertCell().textContent = categoria.nombre;
            row.insertCell().textContent = categoria.edades;
        });
    } else {
        // Si no encuentra la tabla
        console.error("no se ha encontrado el elemento.");
    }

    // Nuevo: Funcionalidad del formulario de contacto
    const formularioContacto = document.querySelector('#formulario-contacto');
    const emailContacto = document.querySelector('#email-contacto');
    const telefonoContacto = document.querySelector('#telefono-contacto');
    const emailError = document.querySelector('#email-error');
    const telefonoError = document.querySelector('#telefono-error');
    const mensajeEnvio = document.querySelector('#mensaje-envio');

    if (formularioContacto) {
        formularioContacto.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

            let isValid = true;

            // Validar correo electrónico
            if (!emailContacto.value.includes('@')) {
                emailError.style.display = 'block';
                isValid = false;
            } else {
                emailError.style.display = 'none';
            }

            // Validar número de teléfono (9 cifras)
            // Usa una expresión regular para asegurar que sean exactamente 9 dígitos numéricos.
            if (!/^\d{9}$/.test(telefonoContacto.value)) {
                telefonoError.style.display = 'block';
                isValid = false;
            } else {
                telefonoError.style.display = 'none';
            }

            // Si todas las validaciones pasan, muestra el mensaje de éxito
            if (isValid) {
                formularioContacto.reset(); // Limpia el formulario
                mensajeEnvio.style.display = 'block'; // Muestra el mensaje
                // Opcional: Ocultar el mensaje después de unos segundos
                setTimeout(() => {
                    mensajeEnvio.style.display = 'none';
                }, 5000); // 5 segundos
            }
        });
    } else {
        console.error("No se ha encontrado el formulario de contacto.");
    }
});