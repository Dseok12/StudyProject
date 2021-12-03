import './App.css';
import logo from './logo.svg';

function App() {

  let posts = '강남 고기 맛집';

  function 함수 (){
    return 100;
  }

  let _css = {color: 'white', fontSize: '24px'}

  return (
    <div className="App">
      <div className="black-nav">
        <div style={_css}>개발 blog</div>
      </div>
      <h4>{posts}</h4>
      <h4>{함수()}</h4>
    </div>
  );
}

export default App;
