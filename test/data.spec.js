global.window = global;
global.assert = require('chai').assert;
require('../src/data.js');
require('../src/data/pokemon/pokemon.js')
require('./data.spec.js');
describe('data', () => {
  const sample = [{
    "num": "001",
    "name": "Bulbasaur",
    "type": ["Grass", "Poison"],
    "egg": "2 km"
  },
  {
    "num": "002",
    "name": "Ivysaur",
    "type": ["Grass", "Poison"],
    "egg": "Not in Eggs"
  },
  {
    "num": "023",
    "name": "Ekans",
    "type": ["Poison"],
    "egg": "5 km"
  },
  {
    "num": "095",
    "name": "Onix",
    "type": ["Rock", "Ground"],
    "egg": "10 km",
  }]

  describe('data.filter.egg', () => {
    it('debería retornar "2 km"', () => {
      const resultado = [{
        "num": "001",
        "name": "Bulbasaur",
        "type": ["Grass", "Poison"],
        "egg": "2 km"
      }]
      assert.deepEqual(window.filter.egg(sample, '2 km'), resultado);
    })
  });

describe('data.sort.order', () => {
  it('deberia ordenar la lista de pokemons ascendentemente', () => {
    const resultado = [{
      "num": "001",
      "name": "Bulbasaur",
      "type": ["Grass", "Poison"],
      "egg": "2 km"
    },
    {
      "num": "023",
      "name": "Ekans",
      "type": ["Poison"],
      "egg": "5 km"
    },
    {
      "num": "002",
      "name": "Ivysaur",
      "type": ["Grass", "Poison"],
      "egg": "Not in Eggs"
    },
    {
      "num": "095",
      "name": "Onix",
      "type": ["Rock", "Ground"],
      "egg": "10 km",
    }]

    assert.deepEqual(window.sort.order(sample, 'az'), resultado)

  })
  it('deberia ordenar una lista de campeones descendentemente', () => {
    const resultado = [
      {
        "num": "095",
        "name": "Onix",
        "type": ["Rock", "Ground"],
        "egg": "10 km",
      },
      {
        "num": "002",
        "name": "Ivysaur",
        "type": ["Grass", "Poison"],
        "egg": "Not in Eggs"
      },
      {
        "num": "023",
        "name": "Ekans",
        "type": ["Poison"],
        "egg": "5 km"
      },
      {
        "num": "001",
        "name": "Bulbasaur",
        "type": ["Grass", "Poison"],
        "egg": "2 km"
      }]
    assert.deepEqual(window.sort.order(sample, "za"), resultado)
  })
})

describe('data.calc.egg', () => {
  it('debería retornar 25', () => {
    const resultado = 25
    assert.equal(window.calc.egg(sample, "2 km"), resultado);
  })
})
});