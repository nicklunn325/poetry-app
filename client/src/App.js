import './App.css';
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Logout from './components/Logout'
// import Bananas from './components/Bananas'
import {useState, useEffect} from 'react'
import {Switch, Route, useHistory} from 'react-router-dom'

const App = () => {

  const history = useHistory()
  const [currentUser, setCurrentUser] = useState(null);
  const [errors, setErrors] = useState([]);
  
  // const handleCreateUser = (data) => {
  //   data.errors ? setErrors(data.errors) : setCurrentUser(data.user)
  //   if(!data.errors){
  //     history.push('/')
  //   }
  // }

  const handleUserLoginAndSignup = (data) => {
    data.errors ? setErrors(data.errors) : setCurrentUser(data.user)
    if(!data.errors){
      history.push('/')
      setErrors([])
    }
  }

  const checkSessionId = () => {
  // function checkSessionId(){
    fetch('/me')
    .then(res => res.json())
    .then(data => setCurrentUser(data.user))
  }
    
  useEffect(checkSessionId, []);
  // useEffect( () => {
  //   fetch('/me')
  // }, )

  return (
    <div className="App">
      <Navbar/>
      { currentUser ? `${currentUser.username} is currently logged in.` : null}
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        {/* <Route path='/bananas'>
          <Bananas/>
        </Route> */}
        <Route path='/signup'>
          <Signup errors={errors} handleUserLoginAndSignup={handleUserLoginAndSignup} />  
        </Route>
        <Route path='/login'>
          <Login errors={errors} handleUserLoginAndSignup={handleUserLoginAndSignup} />
        </Route>
        <Route path='/logout'>
          <Logout setCurrentUser={setCurrentUser}/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
