const nav = document.querySelector("#nav")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click", () =>{
    nav.classList.add("visible");
})
cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
})


const image = document.querySelectorAll('.image');

for (let [i, imageSelected] of image.entries()) {
    imageSelected.addEventListener('click', function focus(){
        resetFocus();
        imageSelected.classList.toggle('active')
    })
}

function resetFocus() {
    image.forEach(i => i.classList.remove('active'))
}