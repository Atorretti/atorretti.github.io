define(['views/poke-view', 'services/pokemon-service'], function (
    pokeView,
    pokeService
) {
    var externals = {};
    var internals = {};
    var pokemonCount = 151;


    externals.start = async function () {
        internals.bindEventHandlers();

       
       

        for (var i = 1; i <= pokemonCount; i++) {
            await new Promise(function (resolve, reject) {
                pokeService.getPokemons(i, function (pokemonData) {
                    resolve();
                });
            });
        }
         var div1Content = pokeService.pokedex[1]; // You can change the index according to your requirements
        pokeView.renderPokemon(div1Content);

     

        for (var i = 1; i <= pokemonCount; i++) {
            (function (pokemonNumber) {

                var pokemon = document.createElement('div');
                pokemon.id = 'pokemon-' + pokemonNumber;
                pokemon.innerText = + pokemonNumber.toString() + '. ' + pokeService.pokedex[pokemonNumber].name.toUpperCase();
                pokemon.classList.add('pokemon-name');
                document.getElementById('pokemon-list').appendChild(pokemon);



                pokemon.addEventListener('click', function () {
                    pokeService.getPokemons(pokemonNumber, function (pokemonData) {
                        pokeView.renderPokemon(pokemonData);
             
                    });



                })
            })
                (i);
        }

    };

    internals.bindEventHandlers = function () {
        // Add event handling logic if needed
    };

    return externals;
});
