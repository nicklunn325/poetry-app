

const Poem = ({ poem }) => {
    return(
        <div>
            <h3>{poem.title}</h3>
            <p>{poem.content}</p>
        </div>
    )
}

export default Poem;