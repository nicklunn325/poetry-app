import './App.css';
import Signup from './components/Signup'
import {useState, useEffect} from 'react'

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [errors, setErrors] = useState([]);

  return (
    <div className="App">
      <Signup errors={errors} setErrors={setErrors} setCurrentUser={setCurrentUser} />
    </div>
  );
}

export default App;
