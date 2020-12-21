import { Component } from 'react';
import CrearAlbum from './Components/CrearAlbum'
import CrearCanciones from './Components/CrearCanciones'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {

    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={CrearAlbum} />
            <Route path="/canciones" component={CrearCanciones} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
