import React from 'react';




function CreateUser ({ username, email, onChange, onCreate }) {
    return(
        <div>
            <input 
                type="text"
                name="username"
                placeholder="계졍명"
                onChange={onChange}
                value={username}
            />
            <input 
                type="email"
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}


export default CreateUser;