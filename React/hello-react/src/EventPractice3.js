import React, { useState } from "react";

const EventPractice3 = () => {
  const [username, setUsername] = useState('');
  const [ message, setMessage ] = useState('');
  const onChangeUsername = e => setUsername(e.target.value)
  const onChangeMessage = e => setMessage(e.target.value)

  const onclick = () => {
    alert(username + ':' + message);
    setUsername('')
    setMessage('')
  }
}

export default EventPractice3;