// fetch
fetch('https://54adefc1-63e9-465d-af22-b5abd8d8dacc.mock.pstmn.io/list')
  .then((response) => {response.json()})
  .then((json) => {console.log(json)})