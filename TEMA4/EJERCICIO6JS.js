/*ESPERAMOS HASTA QUE EL DOCUMENTO ESTE CARGADO Y LISTO PARA SER PROCESADO
POR NUESTRO PROGRAMA*/
let obj_documento = $(document())
/*cuando este cargado ejecutaremo la funcion cuyo nombre parezca aqui*/
obj_documento.ready(inicio())
//*erros gravisismo*/
//obj_documento.ready(inicio())

function inicio(){
    let boton_izquierda = $("#botonizquierda")
    obj_izquierda.click(aparece)
    let boton_derecha = $("#botonderrecha")
    obj_derecha.click(desaparece) 
}

function aparece(){
    let obj_div = $("#texto")
    obj_div.fadeOut()
}

function desaparece(){
    let obj_div = $("#texto")
    obj_div.fadein()
}   