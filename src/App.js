import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ReviewsByCategory from './Pages/ReviewsByCategory/ReviewsByCategory';
import Home from "./Pages/Home/Home"
import Review from './Pages/Review/Review';
import Error from './Pages/Error/Error';
import { useState } from 'react';
import { UserContext } from './contexts/User';

function App() {
const [user, setUser] = useState('mallionaire')

return (
  <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/reviews/:review_id">
            <Review></Review>
          </Route>
          <Route exact path="/reviews/categories/:category" >
            <ReviewsByCategory />
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
