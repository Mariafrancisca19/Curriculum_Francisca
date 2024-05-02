let megusta=document.getElementById("megusta")
let nomegusta=document.getElementById("nomegusta")
let Vistas=document.getElementById("Vistas")
let nuevo= parseInt(Vistas.textContent)

megusta.addEventListener("click",function () {
    nuevo=nuevo+1
    Vistas.innerHTML=nuevo

    return nuevo
})

nomegusta.addEventListener("click",function() {
nuevo=nuevo-1
Vistas.innerHTML=nuevo

return nuevo
    
})

let enviar=document.getElementById("enviar")
enviar.addEventListener("click",function () {
if (enviar.textContent!=" No enviar") {
    enviar.textContent!="No enviar"
} else {
    enviar.textContent="Enviar"
}

})
