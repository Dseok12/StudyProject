import React, { Component } from "react";
// import InterationSample from './InterationSample'
import Counter2 from './Counter2'


class App extends Component{

  render(){
    return(
    <div>
      {/* 
        <ScrollBox ref={(ref) => this.ScrollBox=ref} />
        <button
          onClick={() => this.ScrollBox.scrollToBottom()}
        >
          맨 밑으로
        </button>
      */}
      {/* <InterationSample /> */}
      <Counter2 />
    </div>
    );
  }
}

export default App;
