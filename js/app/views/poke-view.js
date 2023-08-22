define(function () {
    var internals = {
        elements: {},
       
    };
var externals = {};

    internals.renderPokemon = function (pokemon) {
        if (internals.elements.pokemonCard) {
          
            internals.elements.pokemonCard.empty();
            internals.elements.pokemonCard.remove();
        }

        internals.elements.pokemonCard = $(internals.createPokemonCard(pokemon));
        internals.elements.app.append(internals.elements.pokemonCard);
    };



    internals.createPokemonCard = function (pokemon) {
        var capitalizedPokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        let types = pokemon.type.map(type => `<span class="type-box ${type}">${type}</span>`).join('   ');
        console.log(pokemon);
        return (
            '<div id="div1">' +
            '<div class ="text-center" id="divPoke"  >' +
            `<img src="${pokemon.img}" alt="${pokemon.name}">` +
            '</div>' +
            `<h2 id="pokeName" class="text-center">${capitalizedPokemonName}</h2>` +
            '<br>' +
            `<div id="divtype" class="text-center">${types}</div>` +
            '<br>' +
            `<div id="divDesc" >${pokemon.Desc}</div>` +
            '</div>'


        );
    };

    externals.renderPokemon = function (pokemon) {
        internals.elements.app = $('#container-box');
        internals.renderPokemon(pokemon);
    };
    // want to render the div1

    return externals;
});
