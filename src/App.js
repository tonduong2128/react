import React  from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import NavbarHeader from './components/Navbar'
import MyCard from './components/MyCard'

import ListPage from './pages/ListPage';
import Products from './pages/Products'
import CouterPage from './pages/CounterPage'


import NumberProvider from './contexts/NumberProvider';
import NumberContext from './contexts/NumberContext';


import {CardProvider} from './contexts/Card';

const Home=()=><h2>Home</h2>

class  App extends React.Component{
  render (){return (
    <Router>
       <NumberProvider>
        <CardProvider>
          <div className="App">
            <div className="container">
              <NavbarHeader> </NavbarHeader>  
            </div>  
              {/* <NumberContext.Consumer>
                  {(value) => (
                      <div>
                          <h2>{value.number}</h2>
                          <button onClick={value.updateNumber}>Thêm vào</button>
                      </div>
                  )}
              </NumberContext.Consumer> */}
          </div>
            <Switch>
              <Route path="/products">
                <Products></Products>
              </Route>
              <Route path="/list">
                <ListPage></ListPage>
              </Route>
              <Route path="/counter">
                <CouterPage></CouterPage>
              </Route>
              <Route path="/myCard">
                <MyCard></MyCard>
              </Route>
              <Route path="/">
                <Home></Home>
              </Route>
            </Switch>
        </CardProvider>
      </NumberProvider>
    </Router>
  );
  }
}

export default App;
