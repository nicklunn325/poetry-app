import {useState} from 'react'
import Errors from './Errors'
const Signup = ({setCurrentUser, setErrors, errors}) => {

    const [state, setState] = useState({})


    const onChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(state)
        }

        // fetch('/users', config)   // need to set up proxy
        fetch('http://localhost:3000/users', config)
        .then(res => res.json())
        .then(data => handleCreateUser(data))
        // .catch(error => console.log(error, 'error'))
    }

    const handleCreateUser = (data) => {
        data.errors ? setErrors(data.errors) : setCurrentUser(data.user) //&& setErrors([])
    }

    return (
        <div>
            <Errors errors={errors}/>
            <form onSubmit={onSubmit}>
                <label>Username:</label>
                <input onChange={onChange} name="username" type="text"/>
                <br/>
                <label>Password:</label>
                <input onChange={onChange} name="password" type="password"/>
                <br/>
                <label>Password Confirmation:</label>
                <input onChange={onChange} name="password_confirmation" type="password"/>
                <br/>
                <input type="submit" value="Signup"/>
            </form>
        </div>
    )
}

export default Signup;