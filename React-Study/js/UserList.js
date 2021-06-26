import React from 'react';
// import { useEffect } from 'react';


function User ({ user, onRemove, onToggle }){
    const { username, email, id, active } = user;



    /*✨
        useEffect 기본 골격
        컴포넌트가 나타날 때, 사라질 때, 업데이트 될 때, 중간에 어떤 작업을 사용하고 싶을 때 사용하면 된다.
        useEffect(() => {
            // 내용
            return() => {
                // 컴포넌트가 사라질때 내용
            }
        }, []);
    */

    /*
        useEffect(() => {
            console.log('컴포넌트가 화면에 나타남.');
            // props로 받을 값을 props의 state로 설정하는거
            // REST API
            // 라이브러리 사용할 때도
            // setInterval, setTimeout
            // 위와 같은 명령을 할 때 이곳에서 실행
            return () => {
                // clearIntercal, clearTimeout 할 때 이곳에서 실행
                // 라이브러리를 제거할 때 이곳에서 실행
                console.log('컴포넌트가 화면에서 사라짐.');
            }
        }, []);
    */



    /* 
        // 밑에거는 특정값이 업데이트 되고난 직후에 실행이 된다 
        useEffect (() => {
            console.log('user 값이 설정됨.');
            console.log(user);
            return() =>{
                console.log('user 값이 바뀌기 전');
                console.log(user);
            }
        }, [user]);
    */
    
    
    
    



    return(
        <div>
            <b style={
                        {
                            color: active ? 'green' : 'balck',
                            cursor: 'pointer'
                        }
                    }
                    onClick={ () => onToggle(id) }
            >
                {username}
             :</b>
             &nbsp;
             <span>({email})</span>
            <button onClick={() => {onRemove(id)}}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove, onToggle }){
    

    return(
        <div>
            {/* <User user={ users[0] }/>
            <User user={ users[1] }/>
            <User user={ users[2] }/> */}
            {
                users.map(
                    // 고유의 값 id가 있을때
                    // user => (<User user={user} key={user.id}/>)

                    // 고유의 값 id가 없을때 -> 웬만하면 피해줘야한다.
                    (user, index) => (
                        <User
                            user={user}
                            key={index}
                            onRemove={onRemove}
                            onToggle={onToggle}
                        />
                    )
                )
            }
        </div>
    );
}

export default UserList;