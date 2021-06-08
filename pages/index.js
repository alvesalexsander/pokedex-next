import { Frame } from './Frame/Frame';
import styles from './Pokedex.module.css';
import globalStyle from "./globalStyle";

export default function Pokedex() {

    return (
        <div className={styles.pokedex}>
            <style jsx global>
                {globalStyle}
            </style>
            <Frame />
        </div>
    )

}




