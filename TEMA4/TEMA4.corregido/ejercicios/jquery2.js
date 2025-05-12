//Esperaremos hasta que el documento esté cargado y listo para ser procesado por nuestro programa*/
let obj_documento = $(document)
/* Cuando esté cargado ejecutaremos La función cuyo nombre aparezca aqui*/
obj_documento.ready(inicio)
// • Error gravísimo*/
//obj_documento. ready( inicio() )

function inicio(){
    let obj_op=$("#botonOP")
    obj_op.click (fn_click_op)
    let obj_oi=$("#botonOI")
    obj_oi.click (fn_click_oi)
    let obj_mp=$("#botonMP")
    obj_mp.click (fn_click_mp)
    let obj_mi=$("#botonMI")
    obj_mi.click (fn_click_mi)
}

function fn_click_op(){
    let obj_p=$ (".par")
    obj_p.fadeOut()
    }

function fn_click_mp(){
    let obj_p=$(".par")
    obj_p.fadeIn()
}

function fn_click_oi(){
    let obj_p=$(".impar")
    obj_p.fadeOut()
}

function fn_click_mi(){
    let obj_p=$(".impar")
    obj_p.fadeIn()
}
