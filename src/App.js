import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home/Home"
import Review from './Pages/Review/Review';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/reviews/:review_id">
          <Review></Review>
        </Route>
        {/* <Route exact path="/categories">

        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
