/* eslint-disable */
import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '우동 맛집', '돈까스 맛집']);

  let [따봉, 따봉변경] = useState(0);

  let [modal, modal변경] = useState(false);

  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState('');

  // let posts = '강남 고기 맛집';

  function 반복된UI(){
    var 어레이 = [];
    for(var i = 0; i < 3; i++ ){
      어레이.push(<div>안녕</div>)
    }
    return 어레이
  }
  반복된UI()

  

  function 제목바꾸기() {
    const newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }




  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      
      {/* <div className="list">
        <h3>{ 글제목[0] } <span onClick={ () => { 따봉변경(따봉 + 1) } }>🎈</span> {따봉} </h3>
        <p>2월 17일 발행</p>
        <button type="button" onClick={제목바꾸기}>버튼</button>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[2] }</h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div> */}

      {/* {
        반복된UI()
      } */}

      {
        글제목.map(function(글, i) {
          return (
          <div className="list" key={i}>
            <h3 onClick={ () => { 누른제목변경(i) } }>{ 글 } <span onClick={ () => { 따봉변경(따봉 + 1) } }>🎈</span> {따봉} </h3>
            <p>2월 18일 발행</p>
            <hr/>
          </div>
        )
        })
      }

      {/* <button type="button" onClick={ () => { 누른제목변경(0) } }>버튼1</button>
      <button type="button" onClick={ () => { 누른제목변경(1) } }>버튼2</button>
      <button type="button" onClick={ () => { 누른제목변경(2) } }>버튼3</button> */}

      {/* {입력값}
      <input onChange={ (e) => { 입력값변경(e.target.value) } } /> */}

      <div className="publish">
        <input onChange={ (e) => { 입력값변경(e.target.value) } } />
        <button onClick={ () => {
          var arrayCopy = [...글제목];
          arrayCopy.unshift(입력값);
          글제목변경(arrayCopy);
        } }>저장</button>
      </div>

      <button type="button" onClick={ () => {modal변경(!modal)} }>모달여닫기</button>
      {
        modal === true
        ? <Modal 글제목작명 = {글제목} 누른제목작명 = {누른제목}></Modal>
        : null
      }

      {/* <Profile></Profile> */}
    </div>
  );
}

function Modal (props) {
  return (
    <div className="modal">
      <h2>{ props.글제목작명[props.누른제목작명] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

// class Profile extends React.Component{
//   constructor(){
//     super();
//     this.state = {name:'Kim', age: 30}
//   }

//   changName = () =>{
//     this.setState( {name:'Park'} )
//   }

//   render(){
//     return (
//       <div>
//         <h3>프로필입니다.</h3>
//         <p>저는 { this.state.name } 입니다.</p>
//         <button onClick={this.changName()}>버튼</button>
//       </div>
//     )
//   }
// }

export default App;
