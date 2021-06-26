import React from 'react';
import {useState} from 'react';


function InputSample(){

    const [ text, setText ] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onRest = () => {
        setText('');
    };

    return(
        <div>
            <input
                onChange={onChange}
                value={text}
            />
            <button onClick={onRest}>초기화</button>
            <b>값: {text}</b>

        </div>
    );
}

export default InputSample;



