import React from 'react';
import {useState, useRef} from 'react';


function InputSample02(){

    const [inputs, setInputs] = useState({
        name:'',
        nickname:'',
    });
    const nameInput = useRef();
    const { name, nickname } = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;
        // console.log(e.target.name);
        // console.log(e.target.value);
        setInputs({
            ...inputs,
            [name]: value,
        })
    };
    const onReset = () => {
        setInputs({
            name:'',
            nickname:'',
        });
        nameInput.current.focus();
    };





    return(
        <div>
            <input
                name="name"
                value={name}
                placeholder="이름"
                onChange={onChange}
                ref={nameInput}
            />
            <input
                name="nickname"
                value={nickname}
                placeholder="닉네임"
                onChange={onChange}
            />
            <b>값: {name} ({nickname})</b>
            <button onClick={onReset}>초기화</button>
        </div>
    );
}








export default InputSample02;