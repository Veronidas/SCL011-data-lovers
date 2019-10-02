/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

window.filter = {
  egg: (allPokemon, condition) => {
  const values = allPokemon;
  return values.filter(value =>{
  return value.egg.includes(condition)
  })
}
}
window.sort = {
  //establecemos la funcion con los parametros asignados
  order: (allPokemon,sortOrder) =>{
    //establecemos la condicion
    const arrayValues = allPokemon
    if (sortOrder==="az"){
      // la constante sortChamp llama a la data 
      const sortPokeA = arrayValues.sort((a,b)=>{
        return a.name.localeCompare(b.name);
      })
      return sortPokeA;
    }
    else if (sortOrder==="za"){
      const sortPokeZ = arrayValues.sort((a,b)=>{
        return b.name.localeCompare(a.name);
      })
      return sortPokeZ;        
    }
  } 
  }
  
  window.calc = {
    egg: (allPokemon, egg ) => {
      const valueData = parseFloat(allPokemon.length);
      const pokemonByType = window.filter.egg(allPokemon, egg).length;
      const resultado = parseFloat((pokemonByType * 100) / valueData);
      return resultado; 
    }
  }
  