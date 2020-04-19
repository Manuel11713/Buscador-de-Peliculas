import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import {Provider} from 'react-redux';


import store from './store';
import 'bootswatch/dist/solar/bootstrap.min.css';
//Views
import Home from './Views/Home/Home.jsx';
import Ver from './Views/Ver/Ver.jsx';

const App=()=> {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route exact path="/ver/:idPelicula" render={props=>{
            return(<Ver idPelicula={props.match.params.idPelicula}/>);
          }}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;



//a0ba119
//http://www.omdbapi.com/
//http://www.omdbapi.com/?i=tt3896198&apikey=a0ba119
