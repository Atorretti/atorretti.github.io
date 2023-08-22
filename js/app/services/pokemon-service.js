define(function() {
    var internals = {}; // internal state
    var externals = {}; // external api


    var pokedex = [];
    externals.pokedex = pokedex;
   

    externals.getPokemons = function(num, callback) {
        var url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();
        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(pokemon) {
                var pokemonName = pokemon.name;
                var pokemonType = pokemon.types.map(function(type) {
                    return type.type.name;
                });
                var pokemonImg = pokemon.sprites.front_default;

                fetch(pokemon.species.url)

               .then(function(response)  {
                return response.json();
               })
               .then(function(pokemon) {
                var pokeDesc = pokemon.flavor_text_entries[6].flavor_text;  
               
                console.log(pokemon);
                
                pokedex[num] = { name: pokemonName, type: pokemonType, img: pokemonImg, Desc: pokeDesc };
                pokedex.name = pokemonName

                console.log(pokedex[num].name);
            

                callback(pokedex[num]); // Pass the fetched data to the callback function
            })
            .catch(function(err) {
                console.log(err);
            });
    })};
  
   

    return externals;
});