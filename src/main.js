/* Manejo del DOM */
//llamamos a la data, quedandonos un array de objetos
const allPokemon = window.POKEMON.pokemon;
// verificar nuestra data
//console.log(allPokemon);

// creamos nuestra funcion para crear cada caja contenedora de pokemons
function cardCreation(allPokemon) {
    //recorremos esa data para cada elemento en una funcion
    allPokemon.forEach(element => {
        //creamos el elemento div que contendra la tarjeta de cada pokemon
        let pokeCards = document.createElement("div");
        let padreCards = document.getElementById("root");
        padreCards.appendChild(pokeCards);
        pokeCards.innerHTML += `<div><img src="${element.img}"</div>
        <div>${element.name}</div>
        <div>${element.num}</div>
        <div>${element.type}</div>
        <div>${element.egg}</div>`
    })
} 
//le asignamos el boton showData a una constante
const showData = document.getElementById("showData");

//le asignamos un evento a esa constante, ergo a el boton
showData.addEventListener("click", ()=> {
    //al tocar ese boton se vacia el espacion que lo contenia
    document.getElementById("root").innerHTML = "";
    //y llamamos a la data que queremos que aparezca
    cardCreation(allPokemon);
})

//creamos una constante y funcion para cada boton, llamando el id de cada boton
const showFilter2km = document.getElementById("2km");
//le agregamos el evento click al boton
    showFilter2km.addEventListener("click", ()=> {
        //establecemos la condicion
        let condition = "2 km"
        //aplicamos el filtro y lo almacenamos en una variable resultado
        let resultFilter = window.filter.egg(allPokemon, condition);
        //limpiamos la pantalla
        document.getElementById("root").innerHTML = "";
        //aplicamos el filtro a nuestra funcion de recorrido y muestra de data
        cardCreation(resultFilter);
    })

    const showFilter5km = document.getElementById("5km");
    showFilter5km.addEventListener("click", ()=> {
        document.getElementById("root").innerHTML = "";
        let condition = "5 km"
        let resultFilter = window.filter.egg(allPokemon, condition);
        cardCreation(resultFilter);
    })

    const showFilter10km = document.getElementById("10km");
    showFilter10km.addEventListener("click", ()=> {
        document.getElementById("root").innerHTML = "";
        let condition = "10 km"
        let resultFilter = window.filter.egg(allPokemon, condition);
        cardCreation(resultFilter);
    })

    const showFilterNokm = document.getElementById("nokm");
    showFilterNokm.addEventListener("click", ()=> {
        document.getElementById("root").innerHTML = "";
        let condition = "Not in Eggs"
        let resultFilter = window.filter.egg(allPokemon, condition);
        cardCreation(resultFilter);
    })

    // ORDEN A-Z
    const aZ = document.getElementById("az");
    aZ.addEventListener("click", ()=> {
    document.getElementById("root").innerHTML = "";
    let sortOrder ="az"
    let resultOrderAZ = window.sort.order(allPokemon, sortOrder);
    cardCreation(resultOrderAZ)
    })

    //ORDEN Z-A
    const zA = document.getElementById("za");
    zA.addEventListener("click", ()=> {
    document.getElementById("root").innerHTML = "";
    let sortOrder ="za"
    let resultOrderZA = window.sort.order(allPokemon, sortOrder);
    cardCreation(resultOrderZA)
    })
    
    // CALCULOS
//calculo % 2km
    showFilter2km.addEventListener("click", ()=> {
        let calc2km =  document.createElement("h1");
        let padreCards = document.getElementById("root");
        padreCards.appendChild(calc2km);
        let condition = "2 km"
        let resultOrder = window.calc.egg(allPokemon, condition);
        calc2km.innerHTML += "¿Sabías que solo " +  Math.round(resultOrder) +"% de los pokemon aparecen en los huevos de 2km?";
    });
//calculo %5km
    showFilter5km.addEventListener("click", ()=> {
        let calc5km =  document.createElement("h1");
        let padreCards = document.getElementById("root");
        padreCards.appendChild(calc5km);
        let condition = "5 km"
        let resultOrder = window.calc.egg(allPokemon, condition);
        calc5km.innerHTML += "¿Sabías que solo " +  Math.round(resultOrder) +"% de los pokemon aparecen en los huevos de 5km?";
    });
    //calculo %10km
    showFilter10km.addEventListener("click", ()=> {
        let calc10km =  document.createElement("h1");
        let padreCards = document.getElementById("root");
        padreCards.appendChild(calc10km);
        let condition = "10 km"
        let resultOrder = window.calc.egg(allPokemon, condition);
        calc10km.innerHTML += "¿Sabías que solo " +  Math.round(resultOrder) +"% de los pokemon aparecen en los huevos de 10km?";
    });
    //calculo %nokm
    showFilterNokm.addEventListener("click", ()=> {
        let calcnokm =  document.createElement("h1");
        let padreCards = document.getElementById("root");
        padreCards.appendChild(calcnokm);
        let condition = "Not in Eggs"
        let resultOrder = window.calc.egg(allPokemon, condition);
        calcnokm.innerHTML += "¿Sabías que el " + Math.round(resultOrder) +"% de los pokemon NO aparecen en huevos?";
    });