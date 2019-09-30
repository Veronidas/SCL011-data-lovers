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
})