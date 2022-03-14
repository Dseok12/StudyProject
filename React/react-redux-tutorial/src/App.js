import React from "react";
import CounterContainer from "./containers/CounterContainer";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <CounterContainer number={0} />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
