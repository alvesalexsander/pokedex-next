class PokemonData {

    number = '';
    name = '';
    types = [];
    image = '';

    constructor(data) {
        if (data) {
            const { id, name, types, sprites } = data;
            this.number = id;
            this.name = name;
            this.types = types ? types.map(entry => entry.type.name) : [];
            this.image = sprites ? sprites.front_default : '';
        }
    }
}

export { PokemonData };
