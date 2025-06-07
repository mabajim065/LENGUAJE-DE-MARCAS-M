document.addEventListener('DOMContentLoaded', () => {

    // 1. Datos de las categorías (antes estaban en categorias.json)
    const categoriasGimnasia = [
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
    const tablacategorias = document.querySelector('#tabla-categorias tbody');

    if (tablacategorias) { // Asegurarse de que la tabla existe en el HTML
        categoriasGimnasia.forEach((categoria, index) => {
            const row = tablacategorias.insertRow();
            row.insertCell().textContent = index + 1; // Número de fila
            row.insertCell().textContent = categoria.nombre;
            row.insertCell().textContent = categoria.edades;
        });
    } else {
        console.error("No se encontró el elemento con ID 'tabla-categorias' o su tbody en el DOM.");
    }
});