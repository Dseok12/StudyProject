import './App.css';
import { useState, useRef, useMemo, useCallback } from 'react';
import InputSample from './InputSample';
import InputSample02 from './InputSample02';
import UserList from './UserList';
import CreateUser from './CreateUser';



function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).lenght;
}


/*
  useCallback 사용법
  - 함수를 재사용할 때 사용
  useCallback (e => {
    // 재사용될 함수 내용
  }, [참조하는 내용]);
*/



function App() {

  const [ inputs, setInputs ] = useState(
    {
      username: '',
      email: '',
    }
  );


  const { username, email } = inputs;


  const onChange = useCallback (e => {
    const { name, value } = e.target;
    setInputs(
      {
        ...inputs,
        [name]: value
      }
    );
  }, [inputs]);


  const [ users, setUsers ] = useState([
      {
          id: 1,
          username:'asdf',
          email: 'asdf@naver.com',
          active: false,
      },
      {
          id: 2,
          username:'qwer',
          email: 'qwer@naver.com',
          active: false,
      },
      {
          id: 3,
          username:'zxcv',
          email: 'zxcv@naver.com',
          active: false,
      }
  ]);

  const nextId = useRef(4);


  const onCreate = useCallback (() => {
    const user = {
      id: nextId.current,
      // ...inputs <- 이렇게 써도 상관없다.
      username,
      email,
    };
    // 배열에 어떤 것을 추가할 때 ... 이나 concat함수를 사용
    // setUsers([...users, user]);
    setUsers(users.concat(user));
    setInputs(
      {
        username: '',
        email: '',
      }
    );

    // console.log(nextId.current);
    nextId.current += 1;
  }, [username, email, users]);


  // 제거를 할 때 filter 함수
  const onRemove = useCallback (id => {
    setUsers(users.filter(user => user.id !== id));
  }, [users]);


  // 측정값을 업데이트 할 때 map함수
  const onToggle = useCallback(id => {
    setUsers(users.map(
      user => user.id === id
        ? {...user, active: !user.active}
        : user
    ));
  }, [users]);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div className="App">
      <>
      <InputSample />
      <InputSample02 />
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
      />
      <div>활성 사용자 수: {count}</div>
      </>
    </div>
  );
}

export default App;
