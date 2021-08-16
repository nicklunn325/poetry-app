
import {useState} from 'react'
import Errors from './Errors'
const NewPoemForm = ({ handleNewPoem, categories, errors}) => {

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

        // fetch('http://localhost:3000/users', config)
        fetch('/poems', config)   // need to set up proxy
        .then(res => res.json())
        .then(data => handleNewPoem(data))
        // .catch(error => console.log(error, 'error'))
    }

    const renderCategoryOptions = () => {
        return categories.map(category => <option value={category.id}>{category.title}</option>)
    }

    return (
        <div>
            <Errors errors={errors}/>
            <form onSubmit={onSubmit}>
                <label>Title:</label>
                <input onChange={onChange} name="title" type="text"/>
                <br/>
                <label>Poem Content:</label>
                <input onChange={onChange} name="content" type="textfield"/>
                <br/>
                <label for="category_id">Choose a Category:</label>
                <select onChange={onChange} name="category_id" id="category_id">
                    <option disabled selected value> -- select an option -- </option>
                    {renderCategoryOptions()}
                </select>
                <input type="submit" value="Create Poem"/>
            </form>
        </div>
    )
}

export default NewPoemForm;