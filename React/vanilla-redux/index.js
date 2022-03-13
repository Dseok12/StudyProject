import { createStore } from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

/*
  액션의 이름은 문자열 형태로,
  주로 대문자로 작성하며 액션 이름은 고유해야함.
*/
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

/*
  액션 객체는 type 값을 반드시 갖고 있어야 하며,
  그 외에 추후 상태를 업데이트할 때 참고하고 싶은 값은 내 마음대로 넣을 수 있음.
*/ 
const toggleSwich = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초기값 설정 -> 초깃값의 형태는 자유
const initialState = {
  toggle: false,
  counter: 0
}

/*
  리듀서는 변화를 일으키는 함수.
  함수의 파라미터로는 state와 action 값을 받아옴.
*/
function reducer(state = initialState, action) {
  // action.type에 따라 다른 작업을 처리함.
  switch(action.type){
    case TOGGLE_SWITCH:
      return {
        ...state, // 불변성을 유지 해 주어야함.
        toggle: !state.toggle
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const render = () => {
  const state = store.getState();

  if(state.toggle){
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }

  counter.innerText = state.counter
}

render();
store.subscribe(render);

divToggle.onclick = () => {
  store.dispatch(toggleSwich());
}

btnIncrease.onclick = () => {
  store.dispatch(increase(1));
}

btnDecrease.onclick = () => {
  store.dispatch(decrease());
}




