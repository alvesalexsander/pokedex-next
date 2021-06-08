import { useState } from 'react';
import style from './SearchBar.module.css';

export default function SearchBar({receiveNumpadKey, clearNumpadKeys, submitAction}) {

    let [inputText, setInputText] = useState('');

    const inputField = <input className={style.search_form_input} 
    type="text" placeholder="Quem é esse pokémon?" 
    value={receiveNumpadKey || inputText} onChange={e => onValueChange(e)}/>;

    return (
        <div className={style.search}>
            <form className={style.search_form} onSubmit={e => onsubmit(e)}>
                {inputField}
                <input className={style.search_form_submit} type="submit" value="GO" />
            </form>
        </div>
    )

    function onsubmit(event) {
        event.preventDefault();
        submitAction(inputField.props.value);
        clearNumpadKeys();
        setInputText('');
    }

    function onValueChange(event) {
        clearNumpadKeys();
        const newInput = event.nativeEvent.data ? event.nativeEvent.data : '';
        if (event.nativeEvent.inputType === 'deleteContentBackward' && inputText.length) {
            setInputText(inputText.substring(0, inputText.length-1));
            return;
        }
        setInputText(inputText + newInput);
    }

}