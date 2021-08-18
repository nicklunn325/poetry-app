import Poem from './Poem'

const Poems = ({ poems }) => {

    const renderPoems = () => {
        return poems.map( poem => <Poem key={poem.id} poem={poem}/>) 
    }
    
    return (
        <div>
            { renderPoems() }
        </div>
    )
}

export default Poems;