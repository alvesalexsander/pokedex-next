import style from './Numpad.module.css';

import { NumpadKeyEvent } from '../../../../models/events';

const numpadModel = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [0]
]

export default function Numpad({ sendKeyEvent }) {

  return (
    <div className={style.numpad}>
      {numpadModel.map((row) => {
        const numpadRow = <div key={Math.random()} className={style.numpad_row}>
          {row.map((key) => <div onClick={emitKey} key={key} className={style['numpad_row_key']}>{key}</div>)}
        </div>;
        return numpadRow;
      })}
    </div>
  )

  function emitKey(event) {
    sendKeyEvent(new NumpadKeyEvent({
      key: event.target.innerHTML
    }));
  }

};
