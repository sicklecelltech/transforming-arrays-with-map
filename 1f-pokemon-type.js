function pokemonTypes(pokemons){
    let pokemonString=[];
    for (let pokemon of pokemons){
        let str = pokemon.name +" is a "+pokemon.type+" pokemon.";
        pokemonString.push(str);
    }
    return pokemonString;
}

console.log(pokemonTypes([{ name: 'Bulbasaur', type: 'Grass' }, { name: 'Charmander', type: 'Fire' }, { name: 'Squirtle', type: 'Water' }]), "[Bulbasaur is a grass type Pokémon., Charmander is a fire type Pokémon., Squirtle is a water type Pokémon.]" );