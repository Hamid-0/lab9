import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Explore from './Explore';
import RecipeDetails from './RecipeDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/recipes/:id">
              <RecipeDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
