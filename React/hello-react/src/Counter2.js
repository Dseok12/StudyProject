import React, {useState} from "react";


const Counter2 = () => {

  const [value, setValue] = useState(0);

  return (
    <>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </>
  )


}


export default Counter2;