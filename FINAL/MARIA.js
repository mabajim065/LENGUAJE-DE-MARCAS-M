
document.addEventListener('DOMContentLoaded', () => {

    // 1. Datos de las categorías que son objetos con nombre y edades
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
});
