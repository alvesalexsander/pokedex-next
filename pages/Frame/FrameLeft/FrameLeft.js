import styles from './FrameLeft.module.css';

import Display from './Display/Display';

export default function FrameLeft({pokemonData}) {

    const name = pokemonData.name;
    const types = pokemonData.types;
    const image = pokemonData.image;
    
    return (
        <div className={styles['frame-left']}>
            <Display
            pokemonName={name}
            pokemonTypes={types}
            pokemonImage={image}></Display>
        </div>
    )
}