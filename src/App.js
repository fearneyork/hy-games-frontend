import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Error from './components/ErrorPage/Error';
import { useState } from 'react';
import { UserContext } from './contexts/User';
import Header from './components/Header/Header';
import AllReviews from './components/AllReviews/AllReviews';
import ReviewById from './components/ReviewById/ReviewById';
import CategoryReviews from './components/CategoryReviews/CategoryReviews';


function App() {
const [user, setUser] = useState('mallionaire')
const [userAvatar, setUserAvatar] = useState('https://cdn.kapwing.com/thumbnail_5f1860a18f64e80015819b7b_192004.jpg')


return (
  <UserContext.Provider value={{ user, setUser, userAvatar }}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <AllReviews />
          </Route>
          <Route exact path="/reviews/:review_id">
            <ReviewById />
          </Route>
          <Route exact path="/reviews/categories/:category" >
            <CategoryReviews />
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
