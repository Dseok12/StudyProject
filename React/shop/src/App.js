/* eslint-disable */
import React, {useState} from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';
import Data from './data';
import Detail from './Detail';
import { Link, Route, Switch } from 'react-router-dom'

function App() {

  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand><Link to="/">Shop</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      

      <Switch>

        <Route exact path="/">
          <div class="jumbotron">
            <h1 class="display-4">20% Season Off</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </div>
          <div className="container">
            <div className="row">
              {
                shoes.map((a, i)=> {
                  return <Card shoes작명 = {shoes[i]} i작명={i} key={i}></Card>
                })
              }
            </div>
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes명={shoes}></Detail>
        </Route>

        {/* <Route path="/:id">
          <div>
            아무거나 적었을 때 이거 보여주셈
          </div>
        </Route> */}

      </Switch>



      {/* <Route path="/어쩌구" component={Modal}></Route> */}
      
    </div>
  );
}



function Card (props) {
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i작명 + 1) +'.jpg'} alt="" width="100%" />
      <h4>{ props.shoes작명.title }</h4>
      <p>{ props.shoes작명.content } & { props.shoes작명.price }</p>
    </div>
  )
}

export default App;
