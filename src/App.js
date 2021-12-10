import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddService from './Pages/AddService/AddService';
import Booking from './Pages/Booking/Booking/Booking';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import ManageServices from './Pages/ManageServices/ManageServices';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/booking/:serviceId'>
            <Booking></Booking>
          </Route>
          <Route path='/addServices'>
            <AddService></AddService>
          </Route>
          <Route path='/manageServices'>
            <ManageServices></ManageServices>
          </Route>
          
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
