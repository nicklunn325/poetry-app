import './App.css';
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Logout from './components/Logout'
import NewPoemForm from './components/NewPoemForm'
import {useState, useEffect} from 'react'
import {Switch, Route, useHistory} from 'react-router-dom'

const App = () => {

  const history = useHistory()
  const [currentUser, setCurrentUser] = useState(null);
  const [errors, setErrors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [poems, setPoems] = useState([])

  const handleUserLoginAndSignup = (data) => {
    data.errors ? setErrors(data.errors) : setCurrentUser(data.user)
    if(!data.errors){
      history.push('/')
      setErrors([])
    }
  }

  const handleNewPoem = (data) => {
    // debugger;
    data.errors ? setErrors(data.errors) : setPoems([...poems, data.poem])
    if(!data.errors){
      history.push('/')
      setErrors([])
    }
  }

  const stateInitializer = () => {
    fetchCategories()
    checkSessionId()
    fetchPoems() // should we do this? is it necessary?
  }

  const fetchPoems = () => {
    fetch('/api/poems')
    .then(res => res.json())
    .then(data => setPoems(data.poems))
  }

  const fetchCategories = () => {
    fetch('/api/categories')
    .then(res => res.json())
    .then(data => setCategories(data.categories))
  }

  const checkSessionId = () => {
    fetch('/api/me')
    .then(res => res.json())
    .then(data => setCurrentUser(data.user))
  }
    
  useEffect(stateInitializer, []);

  return (
    <div className="App">
      <Navbar/>
      { currentUser ? `${currentUser.username} is currently logged in.` : null}
      <Switch>
        <Route exact path='/'>
          <Home poems={poems}/>
        </Route>
        <Route path='/poems/new'>
          <NewPoemForm handleNewPoem={handleNewPoem} categories={categories} errors={errors}/>
        </Route>
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
