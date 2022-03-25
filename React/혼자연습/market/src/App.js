import MainPageComponent from "./main";
import {Switch, Route} from 'react-router-dom';
import UploadPage from './upload';
import ProductPage from "./product";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path={'/'}>
          <MainPageComponent />
        </Route>
        <Route exact={true} path={"/product/:id"}>
          <ProductPage />
        </Route>
        <Route exact={true} path={"/upload"}>
          <UploadPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
