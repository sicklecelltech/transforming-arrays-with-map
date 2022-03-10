function pokemonStrings(pokemon){
    return pokemon.name +" is a "+pokemon.type+" pokemon.";
}

function pokemonTypes(pokemons){
    let pokemonString=pokemons.map(pokemonStrings);
    return pokemonString;
}

console.log(pokemonTypes([{ name: 'Bulbasaur', type: 'Grass' }, { name: 'Charmander', type: 'Fire' }, { name: 'Squirtle', type: 'Water' }]), "[Bulbasaur is a grass type Pokémon., Charmander is a fire type Pokémon., Squirtle is a water type Pokémon.]" );