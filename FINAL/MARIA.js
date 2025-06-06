document.addEventListener('DOMContentLoaded', () => {

    // 1. Datos de las categorías (antes estaban en categorias.json)
    const categoriasGimnasia = [
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
            "edades": "16+ años"
        }
    ];

    // 2. Cargar datos de Categorías en la tabla
    const tablaCategoriasBody = document.querySelector('#tabla-categorias tbody');

    if (tablaCategoriasBody) { // Asegurarse de que la tabla existe en el HTML
        categoriasGimnasia.forEach((categoria, index) => {
            const row = tablaCategoriasBody.insertRow();
            row.insertCell().textContent = index + 1; // Número de fila
            row.insertCell().textContent = categoria.nombre;
            row.insertCell().textContent = categoria.edades;
        });
    } else {
        console.error("No se encontró el elemento con ID 'tabla-categorias' o su tbody en el DOM.");
    }

    // === Código para efectos de Aparatos si fuera necesario con JS (actualmente en CSS) ===
    // Tu boceto sugiere que el efecto de mostrar el nombre al pasar el ratón sobre las imágenes
    // se puede hacer con CSS, lo cual es más sencillo y eficiente.
    // Si hubieras querido hacerlo con JavaScript, el código iría aquí.
    // Por ejemplo:
    /*
    const aparatos = document.querySelectorAll('.aparato');
    aparatos.forEach(aparato => {
        aparato.addEventListener('mouseover', () => {
            const nombreAparato = aparato.querySelector('.nombre-aparato');
            if (nombreAparato) {
                nombreAparato.style.transform = 'translateY(0)';
            }
        });
        aparato.addEventListener('mouseout', () => {
            const nombreAparato = aparato.querySelector('.nombre-aparato');
            if (nombreAparato) {
                nombreAparato.style.transform = 'translateY(100%)';
            }
        });
    });
    */

    // === Código para la pirámide si se hiciera dinámicamente con JS (tu boceto sugiere CSS) ===
    // Tu boceto sugiere investigar CSS para la pirámide, lo cual es ideal para una estructura estática.
    // Si tuvieras datos de niveles desde un JSON y quisieras construir la pirámide con JS,
    // el código para generar los divs y su contenido iría aquí.
});