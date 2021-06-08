import { useState } from 'react';
import { PokemonData } from '../../models/pokemon/PokemonData.model';
import styles from './Frame.module.css';

import FrameLeft from './FrameLeft/FrameLeft';
import FrameRight from './FrameRight/FrameRight';

export function Frame() {

    const baseURLPath = 'https://pokeapi.co/api/v2/';

    let [pokemonData, setPokemonData] = useState(new PokemonData());

    return (
        <div className={styles.pokedex__frame}>
            <FrameLeft pokemonData={pokemonData} />
            <FrameRight searchRequest={value => getSearchRequest(value)} />
        </div>
    )

    async function getSearchRequest(searchValue) {
        let chuncks = [];
        const pokemonResponse = await fetch(baseURLPath + `pokemon/${searchValue}`);
        const reader = pokemonResponse.body.getReader();
        reader.read().then(function handleResponse({ done, value }) {
            if (done) {
                setPokemonData(new PokemonData(chuncks[0]));
                return;
            }
            else {
                var str = "";
                for (var i = 0; i < value.length; i++) {
                    str += String.fromCharCode(parseInt(value[i]));
                }
                chuncks.push(JSON.parse(str));
                reader.read().then(handleResponse);
            }
        });
    }
};