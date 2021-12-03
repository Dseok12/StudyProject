import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '우동 맛집', '돈까스 맛집']);

  let posts = '강남 고기 맛집';



  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h3>{ 글제목[0] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[2] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
