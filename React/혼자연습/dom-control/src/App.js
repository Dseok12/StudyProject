import React from "react";
import './reset.min.css';
import Header from './components/Header/Header'

const App = () => {
  
  const onClick = () => {
    console.log('클릭됨')
  }

  return(
    <div>
      <Header />
      <button onClick={onClick}>클릭</button>
    </div>
  )
}

export default App;
