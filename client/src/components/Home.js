import Poems from './Poems'

const Home = ({ poems }) => {
    return(
    <div>
        <h1> WELCOME HOME!</h1>
        <Poems poems={poems}/>
    </div>
    )
}

export default Home;