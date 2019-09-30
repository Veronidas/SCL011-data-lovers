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