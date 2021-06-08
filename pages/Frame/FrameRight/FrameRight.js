import { useState } from 'react';
import style from './FrameRight.module.css';

import Numpad from './Numpad/Numpad';
import SearchBar from './SearchBar/SearchBar';

export default function FrameRight({searchRequest}) {

    let [numpadEvent, setNumpadEvent] = useState('');

    return (
        <div className={style['frame-right']}>
            <SearchBar 
            receiveNumpadKey={numpadEvent} 
            clearNumpadKeys={clearKeys}
            submitAction={value => onSearchSubmit(value)}></SearchBar>
            <Numpad sendKeyEvent={setKey}></Numpad>
        </div>
    )

    function setKey(event){
        if (numpadEvent) {
            setNumpadEvent(numpadEvent + event.data.key);
        } else {
            setNumpadEvent(event.data.key);
        }
    }

    function clearKeys() {
        setNumpadEvent('');
    }

    function onSearchSubmit(value) {
        if (value && value.trim()) {
            searchRequest(value.toLowerCase());
        }
    }

}