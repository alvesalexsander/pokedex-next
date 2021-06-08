import style from './Display.module.css';

export default function Display({pokemonName, pokemonTypes, pokemonImage}) {

    const bgStyle = {   
        backgroundImage: `url('${pokemonImage}')`
    }
    
    return (
        <div className={style.display}>
            <div className={style.display_pokemon_name}>{pokemonName}</div>
            <div className={style.display_pokemon_type}>
                <div className={style.display_pokemon_type1}>{pokemonTypes[0]}</div>
                <div className={style.display_pokemon_type2}>{pokemonTypes[1]}</div>
            </div>
            <div style={bgStyle} className={style.display_pokemon_image}></div>
        </div>
    )

}