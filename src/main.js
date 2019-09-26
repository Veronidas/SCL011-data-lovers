/* Manejo del DOM */
const allPokemon = window.POKEMON.pokemon;
let data = Object.values(allPokemon);

document.getElementById("root").innerHTML = `<div class="fila">
<div class="col">Imagenes</div>
<div class="col">Nombre</div>
<div class="col">#</div>
<divclass="col">Tipo</div>
</div>`
data.forEach(element => {
    document.getElementById("root").innerHTML += `<div class="fila">
    <div class="col"><img src="${element.img}"</div>
    <div class="col">${element.num}</div>
    <div class="col">${element.type}</div>
    </div>
    `
});


