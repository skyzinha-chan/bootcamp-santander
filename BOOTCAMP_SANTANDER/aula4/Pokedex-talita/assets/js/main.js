const pokemonsList = document.getElementsById('pokemonsList')

function ConverterPokemonTypes(pokemonsTypes) {
    return pokemonsTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)

}


function ConverterPokemonList(pokemons) {
    return `
        <li class="pokemons">
            <span class="numero">#${pokemon.number}</span>
            <span class="nome">${pokemon.name}</span>

            <div class="detalhes">
                <ol class="types">
                    ${ConverterPokemonTypes(pokemons.types).join('')}
                </ol>

                <img src="${pokemon.photo}" 
                alt="${pokemon.name}">
            </div>                               
        </li>

`
}



PokeApi.getPokemons().then((pokemons = []) => {
    const newHTML = pokemons.map(ConverterPokemonList).join(``) 
    pokemonsList.innerHTML = newHTML
})
